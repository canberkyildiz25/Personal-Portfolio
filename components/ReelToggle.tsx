'use client';

import { Pause, Play } from '@phosphor-icons/react';
import { useState } from 'react';

/** Stops and restarts the moving captures in the hero. Anything that moves
    on its own for more than five seconds needs a way to stop it (WCAG 2.2.2).
    The rails read the state from the hero's data attribute. */
export function ReelToggle({ pause, play }: { pause: string; play: string }) {
  const [paused, setPaused] = useState(false);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !paused;
    setPaused(next);
    const hero = event.currentTarget.closest<HTMLElement>('[data-reel]');
    if (hero) hero.dataset.reel = next ? 'paused' : '';
  };

  return (
    <button type="button" className="reel-toggle mono" onClick={toggle}>
      {paused ? <Play size={14} weight="fill" aria-hidden="true" /> : <Pause size={14} weight="fill" aria-hidden="true" />}
      {paused ? play : pause}
    </button>
  );
}
