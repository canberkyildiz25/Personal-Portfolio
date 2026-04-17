import { useEffect, useState } from 'react';

type MousePosition = { x: number; y: number };

export function useMousePosition(throttleMs = 16): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: -500, y: -500 });

  useEffect(() => {
    let throttled = false;

    const update = (x: number, y: number) => {
      if (throttled) return;
      setPos({ x, y });
      throttled = true;
      setTimeout(() => { throttled = false; }, throttleMs);
    };

    const move = (e: MouseEvent) => update(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => {
      if (e.touches[0]) update(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', touch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', touch);
    };
  }, [throttleMs]);

  return pos;
}

/** Normalized position relative to viewport center: range [-1, 1] */
export function useNormalizedMousePosition(throttleMs = 16): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    let throttled = false;

    const update = (x: number, y: number) => {
      if (throttled) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({ x: (x - cx) / cx, y: (y - cy) / cy });
      throttled = true;
      setTimeout(() => { throttled = false; }, throttleMs);
    };

    const move = (e: MouseEvent) => update(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => {
      if (e.touches[0]) update(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', touch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', touch);
    };
  }, [throttleMs]);

  return pos;
}
