'use client';

import { useEffect } from 'react';

// Must match the media query that makes `.sheet` sticky in globals.css.
const STACKED = '(min-width: 64rem) and (min-height: 50rem)';

/** Wires up the scroll behaviours. Renders nothing.

    1. Reveal: anything marked `data-reveal` gets `.is-in` when it enters the
       viewport; the CSS does the rest.
    2. Sheet stack: on screens where the featured sheets stick under the
       header, the sheet being covered recedes slightly as the next one
       slides over it. GSAP is loaded only when that layout is active.
    3. Keyboard: a control focused inside a stacked sheet may sit under the
       sheet covering it, so focus scrolls its sheet to the docked position. */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

    const header = document.querySelector<HTMLElement>('.site-header');
    const sheets = Array.from(document.querySelectorAll<HTMLElement>('[data-sheet]'));
    const layout = window.matchMedia(STACKED);

    const onFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      const sheet = target.closest<HTMLElement>('[data-sheet]');
      if (!sheet || !layout.matches || !target.matches(':focus-visible')) return;
      // Where the sheet would sit if it were not sticky.
      let top = (sheet.parentElement?.getBoundingClientRect().top ?? 0) + window.scrollY;
      for (const before of sheets.slice(0, sheets.indexOf(sheet))) {
        top += before.offsetHeight + parseFloat(getComputedStyle(before).marginBottom);
      }
      requestAnimationFrame(() => window.scrollTo({ top: top - (header?.offsetHeight ?? 0), behavior: 'instant' }));
    };
    document.addEventListener('focusin', onFocus);

    let revert: (() => void) | undefined;
    let cancelled = false;
    const stack = window.matchMedia(`${STACKED} and (prefers-reduced-motion: no-preference)`);

    const setup = async () => {
      revert?.();
      revert = undefined;
      if (!stack.matches) return;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (cancelled || !stack.matches) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        sheets.forEach((sheet, i) => {
          const next = sheets[i + 1];
          if (!next) return;
          gsap.to(sheet.querySelector('.sheet__inner'), {
            scale: 0.95,
            opacity: 0.3,
            ease: 'none',
            scrollTrigger: {
              trigger: next,
              start: 'top bottom',
              // done when the next sheet has docked under the header
              end: () => `top ${header?.offsetHeight ?? 0}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
      revert = () => ctx.revert();
    };

    setup();
    stack.addEventListener('change', setup);

    return () => {
      cancelled = true;
      observer.disconnect();
      document.removeEventListener('focusin', onFocus);
      stack.removeEventListener('change', setup);
      revert?.();
    };
  }, []);

  return null;
}
