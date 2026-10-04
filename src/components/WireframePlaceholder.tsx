import React from 'react';

interface WireframePlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'banner' | 'avatar' | 'auto';
  className?: string;
  height?: string;
}

export const WireframePlaceholder: React.FC<WireframePlaceholderProps> = ({
  label = '[ Ảnh minh họa - Wireframe ]',
  sublabel,
  aspectRatio = '16/9',
  className = '',
  height,
}) => {
  let aspectStyle = 'aspect-video';
  if (aspectRatio === '4/3') aspectStyle = 'aspect-[4/3]';
  if (aspectRatio === '1/1') aspectStyle = 'aspect-square';
  if (aspectRatio === 'banner') aspectStyle = 'h-40 md:h-56 w-full';
  if (aspectRatio === 'avatar') aspectStyle = 'w-16 h-16 rounded-full';
  if (aspectRatio === 'auto') aspectStyle = height ? '' : 'h-32';

  return (
    <div
      style={height ? { height } : undefined}
      className={`relative border-2 border-zinc-400 bg-zinc-100 flex flex-col items-center justify-center p-3 text-center overflow-hidden select-none ${aspectStyle} ${className}`}
    >
      {/* SVG Crossed Lines for traditional Wireframe placeholder */}
      <svg
        className="absolute inset-0 w-full h-full stroke-zinc-300 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1.5" />
      </svg>

      {/* Label and Sublabel */}
      <div className="relative z-10 bg-white/90 px-2.5 py-1 border border-zinc-400 text-xs font-mono text-zinc-700 shadow-xs max-w-[90%]">
        <span className="font-semibold">{label}</span>
        {sublabel && <span className="block text-[10px] text-zinc-500 mt-0.5">{sublabel}</span>}
      </div>
    </div>
  );
};
