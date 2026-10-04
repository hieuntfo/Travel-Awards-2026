import React, { useState } from 'react';
import { AppScreen } from '../types';

interface WireframeHeaderProps {
  currentScreen: AppScreen;
  onScreenChange: (screen: AppScreen) => void;
  onStartNomination?: () => void;
}

export const WireframeHeader: React.FC<WireframeHeaderProps> = ({
  currentScreen,
  onScreenChange,
  onStartNomination,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppScreen; label: string; badge?: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'news_list', label: 'Tin tức' },
    { id: 'rules', label: 'Thể lệ' },
    { id: 'voting_list', label: 'Bình chọn', badge: 'Sắp mở' },
  ];

  return (
    <header className="border-b-2 border-black bg-white select-none">
      {/* Top Bar: Publisher Co-Branding (Wireframe Placeholders) */}
      <div className="border-b border-zinc-300 bg-zinc-100 py-1.5 text-xs font-mono text-zinc-700">
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="border border-zinc-400 bg-white px-2 py-0.5 font-bold text-[11px] tracking-tight">
              [LOGO VnExpress.net]
            </div>
            <span className="text-zinc-400">×</span>
            <div className="border border-zinc-400 bg-white px-2 py-0.5 font-bold text-[11px] tracking-tight">
              [FPT Online]
            </div>
          </div>
          <div className="text-[10px] text-zinc-500 hidden sm:block">
            Giải thưởng Du lịch Thường niên 2026 · Khung an toàn: 1280px · Lưới PC 1920
          </div>
        </div>
      </div>

      {/* Main Nav Header */}
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between">
        {/* Logo Text / Event Title */}
        <div
          onClick={() => onScreenChange('home')}
          className="cursor-pointer flex items-center gap-2"
        >
          <div className="border-2 border-black bg-black text-white px-2.5 py-1 font-bold text-sm tracking-wider font-mono">
            TRAVEL AWARDS
          </div>
          <div className="border-2 border-black bg-zinc-200 px-2 py-1 font-black text-sm font-mono">
            2026
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onScreenChange(item.id)}
              className={`px-3 py-1.5 border transition-all ${
                currentScreen === item.id
                  ? 'border-black bg-black text-white font-bold'
                  : 'border-transparent text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100'
              }`}
            >
              {item.label}
              {item.badge && (
                <span className="ml-1 text-[9px] bg-zinc-200 text-zinc-800 px-1 py-0.2 border border-zinc-400">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          {/* Primary CTA: Form Đăng ký đề cử */}
          <button
            type="button"
            onClick={() => {
              if (onStartNomination) onStartNomination();
              else onScreenChange('nomination_form');
            }}
            className={`ml-2 px-3.5 py-1.5 border-2 border-black font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
              currentScreen === 'nomination_form'
                ? 'bg-amber-400 text-black border-black'
                : 'bg-zinc-900 text-white hover:bg-black'
            }`}
          >
            <span>📝 ĐĂNG KÝ ĐỀ CỬ</span>
            <span className="text-[10px] bg-white text-black px-1 font-mono">16/10–16/11</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (onStartNomination) onStartNomination();
              else onScreenChange('nomination_form');
            }}
            className="px-2.5 py-1 text-[11px] font-bold border border-black bg-black text-white"
          >
            Đăng ký đề cử
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="border-2 border-black p-1.5 font-mono text-xs bg-zinc-100"
          >
            {mobileMenuOpen ? '[ Đóng × ]' : '[ Menu ☰ ]'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black bg-zinc-50 p-3 space-y-1.5 font-mono text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onScreenChange(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 border ${
                currentScreen === item.id
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-white text-zinc-800 border-zinc-300'
              }`}
            >
              {item.label}
              {item.badge && <span className="ml-2 text-[10px] text-zinc-500">({item.badge})</span>}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              onScreenChange('nomination_form');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 bg-amber-400 border-2 border-black font-bold text-black"
          >
            📝 Form Đăng ký đề cử (M0 - M10)
          </button>
        </div>
      )}
    </header>
  );
};
