import React, { useState } from 'react';
import {
  ViewportMode,
  AppScreen,
  FormStep,
  SimulationState,
  DesktopGridOptions,
} from '../types';

interface ReviewerToolbarProps {
  viewport: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  gridOptions: DesktopGridOptions;
  onGridOptionsChange: (options: Partial<DesktopGridOptions>) => void;
  currentScreen: AppScreen;
  onScreenChange: (screen: AppScreen) => void;
  formStep: FormStep;
  onFormStepChange: (step: FormStep) => void;
  simState: SimulationState;
  onSimStateChange: (state: SimulationState) => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  onResetData: () => void;
  onFillSampleData: () => void;
}

export const ReviewerToolbar: React.FC<ReviewerToolbarProps> = ({
  viewport,
  onViewportChange,
  gridOptions,
  onGridOptionsChange,
  currentScreen,
  onScreenChange,
  formStep,
  onFormStepChange,
  simState,
  onSimStateChange,
  showNotes,
  onToggleNotes,
  onResetData,
  onFillSampleData,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      aria-label="Thanh điều khiển review wireframe"
      className="fixed bottom-3 right-3 z-50 max-w-[calc(100vw-24px)] md:max-w-2xl font-mono text-xs shadow-2xl transition-all"
    >
      <div className="bg-zinc-900 border-2 border-black text-white p-2.5">
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-zinc-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-bold tracking-wider text-[11px] text-zinc-100 uppercase">
              Thanh điều khiển review (PO / Tech / UX)
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-2 py-0.5 text-[10px] border border-zinc-600 cursor-pointer"
            >
              {collapsed ? 'MỞ THANH ĐIỀU KHIỂN ▲' : 'THU GỌN ▼'}
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!collapsed && (
          <div className="mt-2.5 space-y-2.5 text-[11px]">
            {/* ROW 1: (1) Viewport Mode & (4) Toggle Reviewer Notes */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-zinc-800 p-1.5 border border-zinc-700">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-zinc-400 font-semibold text-[10px]">KHUNG XEM:</span>
                <button
                  type="button"
                  onClick={() => onViewportChange('mobile')}
                  className={`px-2 py-1 text-xs font-bold border ${
                    viewport === 'mobile'
                      ? 'bg-white text-black border-white'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-600 hover:bg-zinc-700'
                  }`}
                >
                  📱 Mobile 375px
                </button>
                <button
                  type="button"
                  onClick={() => onViewportChange('desktop')}
                  className={`px-2 py-1 text-xs font-bold border ${
                    viewport === 'desktop'
                      ? 'bg-amber-400 text-black border-amber-300 font-black'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-600 hover:bg-zinc-700'
                  }`}
                >
                  🖥️ PC 1920 (Khung 1280)
                </button>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={onToggleNotes}
                  className={`px-2 py-1 text-[10px] font-semibold border ${
                    showNotes
                      ? 'bg-amber-400 text-black border-amber-500'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-white'
                  }`}
                >
                  {showNotes ? '💡 Ghi chú PO: [BẬT]' : '💡 Ghi chú PO: [TẮT]'}
                </button>
              </div>
            </div>

            {/* ROW 1B: PC Grid & Safe Area Toggles (Visible when desktop mode active) */}
            {viewport === 'desktop' && (
              <div className="bg-zinc-950 p-2 border border-amber-500/40 space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-amber-400 font-bold">LƯỚI PC 1920 & KHUNG AN TOÀN 1280:</span>
                  <span className="text-zinc-400">Safe Area: 320px ➔ 1600px</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <button
                    type="button"
                    onClick={() => onGridOptionsChange({ showMasthead: !gridOptions.showMasthead })}
                    className={`px-2 py-0.5 border ${
                      gridOptions.showMasthead
                        ? 'bg-amber-400 text-black font-bold border-amber-300'
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700'
                    }`}
                  >
                    {gridOptions.showMasthead ? '📢 Masthead 1920x250 [BẬT]' : '📢 Masthead [TẮT]'}
                  </button>

                  <button
                    type="button"
                    onClick={() => onGridOptionsChange({ show12ColGrid: !gridOptions.show12ColGrid })}
                    className={`px-2 py-0.5 border ${
                      gridOptions.show12ColGrid
                        ? 'bg-amber-400 text-black font-bold border-amber-300'
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700'
                    }`}
                  >
                    {gridOptions.show12ColGrid ? '📐 Lưới 12 Cột [BẬT]' : '📐 Lưới 12 Cột [TẮT]'}
                  </button>

                  <button
                    type="button"
                    onClick={() => onGridOptionsChange({ showSideAds: !gridOptions.showSideAds })}
                    className={`px-2 py-0.5 border ${
                      gridOptions.showSideAds
                        ? 'bg-amber-400 text-black font-bold border-amber-300'
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                    }`}
                    title="Yêu cầu: Tạm thời ẩn QC 2 bên"
                  >
                    {gridOptions.showSideAds ? '🪧 QC 2 Bên [BẬT]' : '🪧 QC 2 Bên [ĐÃ ẨN]'}
                  </button>

                  <button
                    type="button"
                    onClick={() => onGridOptionsChange({ showRulerGuides: !gridOptions.showRulerGuides })}
                    className={`px-2 py-0.5 border ${
                      gridOptions.showRulerGuides
                        ? 'bg-amber-400 text-black font-bold border-amber-300'
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700'
                    }`}
                  >
                    {gridOptions.showRulerGuides ? '📏 Thước đo 1920/1280 [BẬT]' : '📏 Thước đo [TẮT]'}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onGridOptionsChange({
                        scaleMode: gridOptions.scaleMode === 'fit' ? 'full' : 'fit',
                      })
                    }
                    className={`px-2 py-0.5 border ${
                      gridOptions.scaleMode === 'fit'
                        ? 'bg-zinc-100 text-black font-bold border-white'
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700'
                    }`}
                  >
                    {gridOptions.scaleMode === 'fit' ? '🔍 Vừa màn hình (Scale)' : '🔍 Chuẩn 100% (Cuộn ngang)'}
                  </button>
                </div>
              </div>
            )}

            {/* ROW 2: (2) Quick Screen Jumper */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                <span className="font-semibold text-zinc-300">NHẢY NHANH TỚI MÀN HÌNH (8 LỚP TRANG):</span>
                <span className="text-zinc-500">Bấm để xem trực tiếp</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[
                  { id: 'home', label: '1. Home' },
                  { id: 'news_list', label: '2. Tin tức' },
                  { id: 'news_detail', label: '3. Tin chi tiết' },
                  { id: 'rules', label: '4. Thể lệ' },
                  { id: 'nomination_form', label: '5. Đăng ký đề cử' },
                  { id: 'voting_list', label: '6. Bình chọn' },
                  { id: 'voting_detail', label: '7. Chi tiết vote' },
                  { id: 'voting_modals', label: '8. TB bình chọn' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      onScreenChange(s.id as AppScreen);
                    }}
                    className={`px-1.5 py-1 text-[10px] text-center border truncate ${
                      currentScreen === s.id
                        ? 'bg-zinc-100 text-black font-bold border-white'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-700 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* If currently viewing Form (RegistrationFlow), show Form Steps M0 -> M10 */}
            {currentScreen === 'nomination_form' && (
              <div className="bg-zinc-950 p-2 border border-zinc-700 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-300 text-[10px]">
                  <span className="font-bold text-amber-400">LUỒNG FORM ĐỀ CỬ (M0 → M10):</span>
                  <span className="text-zinc-500">Đang ở: {formStep}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {[
                    { id: 'M0', label: 'M0 Mở đầu' },
                    { id: 'M1', label: 'M1 B1:Nhóm' },
                    { id: 'M2', label: 'M2 B2:Hạng mục' },
                    { id: 'M3', label: 'M3 B3:OTP' },
                    { id: 'M4', label: 'M4 B4:Mục I' },
                    { id: 'M5', label: 'M5 B5:Mục II' },
                    { id: 'M6', label: 'M6 B6:Mục III' },
                    { id: 'M7', label: 'M7 B7:Minh chứng' },
                    { id: 'M8', label: 'M8 B8:Xem lại' },
                    { id: 'M9', label: 'M9 Thành công' },
                    { id: 'M10', label: 'M10 Email' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => onFormStepChange(st.id as FormStep)}
                      className={`px-1.5 py-0.5 text-[10px] border ${
                        formStep === st.id
                          ? 'bg-amber-400 text-black font-bold border-amber-300'
                          : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ROW 3: (3) State Simulator */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                <span className="font-semibold text-zinc-300">TRẠNG THÁI MÔ PHỎNG (STATES):</span>
                <span className="text-amber-400 font-semibold">{simState}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                {[
                  { id: 'normal', label: '✓ Bình thường' },
                  { id: 'not_opened', label: '⏳ Chưa mở form' },
                  { id: 'input_error', label: '❌ Lỗi nhập liệu' },
                  { id: 'upload_error', label: '⚠️ Lỗi tải file' },
                  { id: 'session_timeout', label: '⌛ Hết phiên' },
                  { id: 'duplicate_warning', label: '⚡ Trùng hồ sơ' },
                  { id: 'portal_closed', label: '🔒 Đã đóng cổng' },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => {
                      onSimStateChange(st.id as SimulationState);
                      // Auto-route to the relevant screen if appropriate
                      if (st.id === 'input_error') {
                        onScreenChange('nomination_form');
                        onFormStepChange('M4');
                      } else if (st.id === 'upload_error') {
                        onScreenChange('nomination_form');
                        onFormStepChange('M7');
                      } else if (st.id === 'duplicate_warning') {
                        onScreenChange('nomination_form');
                        onFormStepChange('M5');
                      } else if (st.id === 'not_opened' || st.id === 'portal_closed') {
                        onScreenChange('nomination_form');
                        onFormStepChange('M0');
                      }
                    }}
                    className={`px-1.5 py-1 text-[10px] text-left truncate border ${
                      simState === st.id
                        ? 'bg-amber-500 text-black font-bold border-amber-400'
                        : 'bg-zinc-950 text-zinc-300 border-zinc-700 hover:bg-zinc-800'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="flex items-center justify-between pt-1.5 border-t border-zinc-700 text-[10px]">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onFillSampleData}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-2 py-0.5 border border-zinc-600 cursor-pointer"
                >
                  ⚡ Điền nhanh dữ liệu mẫu
                </button>
                <button
                  type="button"
                  onClick={onResetData}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white px-2 py-0.5 border border-zinc-600 cursor-pointer"
                >
                  ↺ Reset form
                </button>
              </div>
              <span className="text-zinc-500 text-[9px]">Travel Awards 2026 PRD v2.1</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
