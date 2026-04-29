import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.35);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  if (hasError) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
        setExpanded(true);
      } catch {}
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <audio
        ref={audioRef}
        src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Volatile%20Reaction.mp3"
        loop
        onTimeUpdate={() => {
          const a = audioRef.current;
          if (a?.duration) setProgress((a.currentTime / a.duration) * 100);
        }}
        onError={() => setHasError(true)}
      />

      {/* Play / pause button */}
      <button
        onClick={toggle}
        title={playing ? 'Müziği durdur' : 'Ambient müzik çal'}
        className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          playing
            ? 'bg-indigo-600 text-white shadow-indigo-500/30 hover:bg-indigo-700'
            : 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700'
        }`}
      >
        {playing && (
          <span className="absolute inset-0 rounded-full bg-indigo-400 opacity-25 animate-ping" />
        )}
        <Icon
          icon={playing ? 'solar:pause-bold' : 'solar:music-note-2-bold'}
          className="text-base relative z-10"
        />
      </button>

      {/* Expanded panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, x: -12, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -12, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-2xl px-3 py-2.5 shadow-xl shadow-zinc-200/30 dark:shadow-zinc-900/50"
          >
            {/* Equalizer bars */}
            <div className="flex items-end gap-0.5 h-4 shrink-0">
              {[0.55, 1, 0.75, 0.45].map((factor, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] rounded-full bg-indigo-500"
                  animate={
                    playing
                      ? { height: [`${5 * factor}px`, `${14 * factor}px`, `${5 * factor}px`] }
                      : { height: '3px' }
                  }
                  transition={{
                    duration: 0.55 + i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.09,
                  }}
                />
              ))}
            </div>

            {/* Track info */}
            <div style={{ minWidth: 88 }}>
              <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200 leading-none mb-1.5">
                Volatile Reaction
              </p>
              <div className="h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-1 shrink-0">
              <Icon icon="solar:volume-small-linear" className="text-zinc-400 text-xs" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-14 accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Close */}
            <button
              onClick={() => {
                setExpanded(false);
                audioRef.current?.pause();
                setPlaying(false);
              }}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors shrink-0"
            >
              <Icon icon="solar:close-circle-linear" className="text-base" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
