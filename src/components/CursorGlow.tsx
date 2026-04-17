import { useMousePosition } from '../hooks/useMousePosition';

export default function CursorGlow() {
  const pos = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {/* Large soft glow */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out, background 0.3s ease-out',
        }}
      />
      {/* Small sharp core */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full blur-2xl"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            'radial-gradient(circle, rgba(129,140,248,0.25) 0%, transparent 70%)',
          transition: 'left 0.05s ease-out, top 0.05s ease-out',
        }}
      />
    </div>
  );
}
