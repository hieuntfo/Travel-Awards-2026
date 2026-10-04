import React from 'react';
import { MastheadAd } from './WireframeAds';

interface DesktopGridOverlayProps {
  show12ColGrid: boolean;
  showRulerGuides: boolean;
  showMasthead?: boolean;
}

export const DesktopGridOverlay: React.FC<DesktopGridOverlayProps> = ({
  show12ColGrid,
  showRulerGuides,
  showMasthead = true,
}) => {
  return (
    <>
      {/* 1. TOP DIMENSION RULER (1920px Canvas / 1280px Safe Area) */}
      {showRulerGuides && (
        <div className="w-[1920px] bg-zinc-900 text-white font-mono text-[11px] border-b-2 border-black sticky top-0 z-40 select-none shadow-md">
          {/* Main Dimension Indicator */}
          <div className="flex items-center h-8">
            {/* Left Margin (320px) */}
            <div className="w-[320px] shrink-0 h-full bg-zinc-800 border-r-2 border-amber-400 flex items-center justify-between px-3 text-zinc-300">
              <span className="text-[10px] font-bold">0px</span>
              <span className="font-bold text-[10px] text-zinc-300">BIÊN TRÁI (320px · Tạm ẩn QC)</span>
              <span className="text-[10px] font-bold">320px</span>
            </div>

            {/* Central Safe Area (1280px) */}
            <div className="w-[1280px] shrink-0 h-full bg-amber-400 text-black flex items-center justify-between px-4 font-black tracking-wide border-r-2 border-amber-400">
              <div className="flex items-center gap-2">
                <span className="bg-black text-amber-400 px-1.5 py-0.5 text-[9px] uppercase">VÙNG BẮT BUỘC</span>
                <span>🎯 KHUNG AN TOÀN NỘI DUNG CHÍNH (SAFE AREA: 1280px)</span>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span>LƯỚI 12 CỘT (CONTENT GRID)</span>
                <span className="bg-black text-white px-2 py-0.5">320px ➔ 1600px</span>
              </div>
            </div>

            {/* Right Margin (320px) */}
            <div className="w-[320px] shrink-0 h-full bg-zinc-800 flex items-center justify-between px-3 text-zinc-300">
              <span className="text-[10px] font-bold">1600px</span>
              <span className="font-bold text-[10px] text-zinc-300">BIÊN PHẢI (320px · Tạm ẩn QC)</span>
              <span className="text-[10px] font-bold">1920px</span>
            </div>
          </div>

          {/* Sub-ruler Tick Marks Bar */}
          <div className="flex items-center h-4 bg-zinc-950 text-[9px] text-zinc-500 border-t border-zinc-800">
            <div className="w-[320px] shrink-0 px-2 flex justify-between border-r border-amber-500/50">
              <span>| 0</span>
              <span>| 100</span>
              <span>| 200</span>
              <span>| 300</span>
            </div>
            <div className="w-[1280px] shrink-0 px-2 flex justify-between border-r border-amber-500/50 text-amber-400 font-bold">
              <span>| 400</span>
              <span>| 600</span>
              <span>| 800</span>
              <span>| 960 (Tâm)</span>
              <span>| 1200</span>
              <span>| 1400</span>
              <span>| 1600</span>
            </div>
            <div className="w-[320px] shrink-0 px-2 flex justify-between">
              <span>| 1700</span>
              <span>| 1800</span>
              <span>| 1920</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. MASTHEAD AD 1920x250 */}
      {showMasthead && <MastheadAd />}

      {/* 3. 12-COLUMN OVERLAY (SAFE AREA 1280px) */}
      {show12ColGrid && (
        <div className="pointer-events-none fixed inset-0 z-30 flex justify-center overflow-hidden">
          <div className="w-[1920px] h-full flex">
            {/* Left 320px */}
            <div className="w-[320px] shrink-0 bg-amber-500/5 border-r border-dashed border-amber-500/30"></div>

            {/* 1280px 12-Column Grid */}
            <div className="w-[1280px] shrink-0 h-full px-4 grid grid-cols-12 gap-4 bg-transparent border-x-2 border-amber-500/40">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full bg-amber-500/10 border-x border-amber-500/20 flex flex-col justify-start pt-14 text-center"
                >
                  <span className="text-[10px] font-mono font-bold text-amber-800/70 bg-amber-100/90 py-0.5 border border-amber-300">
                    C{i + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Right 320px */}
            <div className="w-[320px] shrink-0 bg-amber-500/5 border-l border-dashed border-amber-500/30"></div>
          </div>
        </div>
      )}
    </>
  );
};

export const DesktopSideGutters: React.FC<{
  children: React.ReactNode;
  showSideAds?: boolean;
}> = ({ children, showSideAds = false }) => {
  return (
    <div className="w-[1920px] flex mx-auto bg-zinc-200 min-h-screen">
      {/* LEFT GUTTER: 320px - TẠM THỜI ẨN QC 2 BÊN (LỀ TRẮNG/TRẦM THUẦN TÚY) */}
      <div
        aria-hidden="true"
        className="w-[320px] shrink-0 bg-zinc-100/50 select-none border-r border-zinc-300 flex flex-col items-center pt-8"
      >
        {showSideAds && (
          <div className="sticky top-20 w-[160px] h-[600px] border-2 border-dashed border-zinc-400 bg-white flex flex-col items-center justify-center p-2 text-center text-zinc-500 font-mono text-[10px] shadow-sm">
            <span className="font-bold text-black mb-1">QC BÊN TRÁI</span>
            <span>160 × 600 px</span>
            <span className="text-[9px] text-amber-700 bg-amber-100 px-1 py-0.5 mt-2 border border-amber-300">
              (Thử nghiệm bật lại)
            </span>
          </div>
        )}
      </div>

      {/* CENTER: 1280px SAFE AREA CONTENT CONTAINER */}
      <div className="w-[1280px] shrink-0 bg-white border-x-2 border-black shadow-xl min-h-screen flex flex-col">
        {children}
      </div>

      {/* RIGHT GUTTER: 320px - TẠM THỜI ẨN QC 2 BÊN (LỀ TRẮNG/TRẦM THUẦN TÚY) */}
      <div
        aria-hidden="true"
        className="w-[320px] shrink-0 bg-zinc-100/50 select-none border-l border-zinc-300 flex flex-col items-center pt-8"
      >
        {showSideAds && (
          <div className="sticky top-20 w-[160px] h-[600px] border-2 border-dashed border-zinc-400 bg-white flex flex-col items-center justify-center p-2 text-center text-zinc-500 font-mono text-[10px] shadow-sm">
            <span className="font-bold text-black mb-1">QC BÊN PHẢI</span>
            <span>160 × 600 px</span>
            <span className="text-[9px] text-amber-700 bg-amber-100 px-1 py-0.5 mt-2 border border-amber-300">
              (Thử nghiệm bật lại)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
