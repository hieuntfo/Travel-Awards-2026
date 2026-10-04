import React from 'react';
import { FormStep } from '../../types';

interface StepHeaderProps {
  currentStep: FormStep;
  savedTime: string;
  onStepClick?: (step: FormStep) => void;
}

export const StepHeader: React.FC<StepHeaderProps> = ({
  currentStep,
  savedTime,
  onStepClick,
}) => {
  const steps: { id: FormStep; num: number; label: string }[] = [
    { id: 'M1', num: 1, label: 'Nhóm giải' },
    { id: 'M2', num: 2, label: 'Hạng mục' },
    { id: 'M3', num: 3, label: 'Xác thực OTP' },
    { id: 'M4', num: 4, label: 'Đơn vị / Cá nhân' },
    { id: 'M5', num: 5, label: 'Thông tin đề cử' },
    { id: 'M6', num: 6, label: 'Số liệu hoạt động' },
    { id: 'M7', num: 7, label: 'Minh chứng' },
    { id: 'M8', num: 8, label: 'Xem lại & Gửi' },
  ];

  if (currentStep === 'M0' || currentStep === 'M9' || currentStep === 'M10') {
    return null;
  }

  const currentIdx = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="border-2 border-black bg-zinc-100 p-3 mb-5 font-mono">
      {/* Top status line: Draft saved time and Deadline */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-zinc-300 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-zinc-800">
            Đã lưu nháp tự động lúc: <span className="underline">{savedTime || '18:24'}</span>
          </span>
        </div>
        <div className="text-[11px] bg-white border border-zinc-400 px-2 py-0.5 text-zinc-700">
          ⏳ Hạn chót: <strong>23:59 ngày 16/11/2026</strong> (Còn 44 ngày)
        </div>
      </div>

      {/* 8-Step Progress Bar */}
      <div className="mt-3">
        <div className="flex items-center justify-between text-[11px] font-bold text-zinc-700 mb-1.5">
          <span>TIẾN ĐỘ HỒ SƠ: BƯỚC {currentIdx + 1}/8 — {steps[currentIdx]?.label}</span>
          <span className="text-zinc-500">{Math.round(((currentIdx + 1) / 8) * 100)}%</span>
        </div>

        {/* Desktop Step Pills */}
        <div className="hidden sm:grid grid-cols-8 gap-1 text-center text-[10px]">
          {steps.map((st, idx) => {
            const isCompleted = idx < currentIdx;
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => onStepClick && onStepClick(st.id)}
                className={`py-1 px-1 border transition-all truncate ${
                  isCurrent
                    ? 'bg-black text-white font-bold border-black'
                    : isCompleted
                    ? 'bg-zinc-300 text-zinc-900 border-zinc-400'
                    : 'bg-white text-zinc-400 border-zinc-300'
                }`}
              >
                {st.num}. {st.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Minimal Bar */}
        <div className="sm:hidden w-full bg-zinc-300 h-2 border border-zinc-500 mt-1">
          <div
            className="bg-black h-full transition-all"
            style={{ width: `${((currentIdx + 1) / 8) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
