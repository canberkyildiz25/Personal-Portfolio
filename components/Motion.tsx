'use client';

import { useEffect } from 'react';

/** Wires up the scroll behaviours. Renders nothing.

    1. Stage light: whichever toned block (the stage heading or a scene)
       holds the middle line of the screen gives its tone to the stage, which
       fades every block on it to that colour, and its name to the cue in the
       header chip.
    2. Reveal: anything marked `data-reveal` gets `.is-in` the first time it
       enters the screen; the CSS does the rest.
    3. Reel: the hero's rails stop while the hero is off screen, and the
       header's email chip only shows then. */
export function Motion() {
  useEffect(() => {
    const stage = document.querySelector<HTMLElement>('.stage');
    const cue = document.querySelector<HTMLElement>('[data-cue]');
    const cueName = document.querySelector<HTMLElement>('[data-cue-name]');
    const toned = Array.from(document.querySelectorAll<HTMLElement>('.stage [data-tone]'));

    const light = (block: HTMLElement) => {
      if (stage) stage.dataset.tone = block.dataset.tone;
      if (cue) cue.dataset.tone = block.dataset.tone;
      if (cueName && block.dataset.name) cueName.textContent = block.dataset.name;
    };
    if (toned[0]) light(toned[0]);

    // A zero-height band across the middle of the screen.
    const middle = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) light(entry.target as HTMLElement);
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    toned.forEach((el) => middle.observe(el));

    // The cue only shows while the stage itself fills the screen.
    const onStage = new IntersectionObserver(
      ([entry]) => {
        if (cue) cue.dataset.on = String(entry.isIntersecting);
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    if (stage) onStage.observe(stage);

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            reveal.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

    // Keyboard focus can land in a block before it has been scrolled to.
    const onFocus = (event: FocusEvent) => {
      (event.target as HTMLElement).closest('[data-reveal]')?.classList.add('is-in');
    };
    document.addEventListener('focusin', onFocus);

    // Off screen, the hero's rails stop and the header offers the email
    // that the hero itself was showing.
    const hero = document.querySelector<HTMLElement>('[data-reel]');
    const bar = document.querySelector<HTMLElement>('.bar');
    const reel = new IntersectionObserver(([entry]) => {
      hero?.classList.toggle('is-away', !entry.isIntersecting);
      if (bar) bar.dataset.past = String(!entry.isIntersecting);
    });
    if (hero) reel.observe(hero);

    return () => {
      middle.disconnect();
      onStage.disconnect();
      reveal.disconnect();
      reel.disconnect();
      document.removeEventListener('focusin', onFocus);
    };
  }, []);

  return null;
}
