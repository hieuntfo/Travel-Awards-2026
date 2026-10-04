import React from 'react';

// 1. MASTHEAD (1920 x 250 px)
export const MastheadAd: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`w-full max-w-[1920px] h-[250px] bg-zinc-100 border-b-2 border-black flex flex-col items-center justify-center relative overflow-hidden select-none ${className}`}
    >
      {/* SVG Crossed Lines for Wireframe */}
      <svg
        className="absolute inset-0 w-full h-full stroke-zinc-300 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1.5" />
      </svg>

      {/* Guide lines for 1280 Safe Area inside the 1920 Masthead */}
      <div className="absolute inset-y-0 w-[1280px] border-x-2 border-dashed border-amber-500/60 pointer-events-none flex justify-between px-2 items-start pt-1">
        <span className="text-[9px] font-mono text-amber-700 bg-amber-100/90 px-1 border border-amber-400">
          ◀ Biên an toàn 1280px
        </span>
        <span className="text-[9px] font-mono text-amber-700 bg-amber-100/90 px-1 border border-amber-400">
          Biên an toàn 1280px ▶
        </span>
      </div>

      {/* Center Tag / Label */}
      <div className="relative z-10 bg-white/95 border-2 border-black p-3.5 text-center font-mono max-w-[500px] shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="bg-black text-white text-[10px] font-bold px-1.5 py-0.2 uppercase">
            QUẢNG CÁO
          </span>
          <span className="font-bold text-xs text-black uppercase">
            1/ VỊ TRÍ MASTHEAD
          </span>
        </div>
        <div className="text-sm font-black text-black">
          KÍCH THƯỚC: 1920 × 250 px
        </div>
        <p className="text-[10px] text-zinc-600 font-sans mt-1">
          Toàn chiều rộng màn hình PC (1920px) · Thông điệp & Key visual chính nằm trong Khung an toàn 1280px
        </p>
      </div>
    </div>
  );
};

// 2. BREAKPAGE AD (970 x 250 px)
export const BreakpageAd: React.FC<{ label?: string; className?: string }> = ({
  label = 'QUẢNG CÁO BREAKPAGE (BILLBOARD)',
  className = '',
}) => {
  return (
    <div className={`w-full py-4 flex flex-col items-center justify-center select-none ${className}`}>
      <div className="w-[970px] h-[250px] border-2 border-black bg-zinc-100 flex flex-col items-center justify-center relative shadow-xs overflow-hidden">
        {/* SVG Crossed Lines */}
        <svg
          className="absolute inset-0 w-full h-full stroke-zinc-300 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1.5" />
        </svg>

        <div className="relative z-10 bg-white/95 border-2 border-black p-3 text-center font-mono max-w-[420px]">
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <span className="bg-black text-white text-[9px] font-bold px-1.5 py-0.2 uppercase">
              QUẢNG CÁO
            </span>
            <span className="font-bold text-xs text-black uppercase">{label}</span>
          </div>
          <div className="text-sm font-black text-black">
            KÍCH THƯỚC: 970 × 250 px
          </div>
          <p className="text-[10px] text-zinc-600 font-sans mt-0.5">
            Căn giữa trong Khung an toàn 1280px · Vị trí ngắt trang giữa các khối nội dung lớn
          </p>
        </div>
      </div>
    </div>
  );
};

// 3. LARGE RECTANGLE AD (300 x 600 px - HALF PAGE)
export const LargeRectangleAd: React.FC<{ label?: string; className?: string }> = ({
  label = 'QUẢNG CÁO LARGE (HALF PAGE)',
  className = '',
}) => {
  return (
    <div
      className={`w-[300px] h-[600px] border-2 border-black bg-zinc-100 flex flex-col items-center justify-center relative p-3 text-center select-none shadow-xs shrink-0 overflow-hidden ${className}`}
    >
      {/* SVG Crossed Lines */}
      <svg
        className="absolute inset-0 w-full h-full stroke-zinc-300 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 bg-white/95 border-2 border-black p-3 font-mono max-w-[260px]">
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <span className="bg-black text-white text-[9px] font-bold px-1.5 py-0.2 uppercase">
            QUẢNG CÁO
          </span>
        </div>
        <div className="font-bold text-xs text-black uppercase leading-tight mb-1">
          {label}
        </div>
        <div className="text-sm font-black text-black">
          300 × 600 px
        </div>
        <p className="text-[10px] text-zinc-600 font-sans mt-1.5 leading-snug">
          Vị trí cột phụ / Sidebar trong bài tin tức, danh sách bình chọn và thể lệ
        </p>
      </div>
    </div>
  );
};
