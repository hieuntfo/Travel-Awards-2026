import React from 'react';

interface UnfinalizedProps {
  code: string; // e.g., 'B1', 'B2', 'B3', 'B4', 'B5', 'Điểm khác biệt'
  title?: string;
  description?: string;
  children?: React.ReactNode;
  inline?: boolean;
}

export const UnfinalizedBadge: React.FC<{ code: string; label?: string }> = ({ code, label }) => {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-dashed border-amber-600 bg-amber-50 text-amber-900 font-mono text-[11px] font-semibold tracking-wide">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
      CHƯA CHỐT – [{code}] {label ? `· ${label}` : ''}
    </span>
  );
};

export const UnfinalizedContainer: React.FC<UnfinalizedProps> = ({
  code,
  title,
  description,
  children,
  inline = false,
}) => {
  if (inline) {
    return (
      <div className="border border-dashed border-amber-600 bg-amber-50/70 p-2 my-2 text-xs text-amber-900">
        <div className="flex items-center gap-1.5 font-mono font-bold text-amber-800 mb-1">
          <UnfinalizedBadge code={code} />
          {title && <span>{title}</span>}
        </div>
        {description && <p className="text-amber-800/90 text-[11px] mb-1.5 leading-relaxed">{description}</p>}
        {children}
      </div>
    );
  }

  return (
    <div className="relative border-2 border-dashed border-amber-600 bg-amber-50/40 p-3.5 my-3 rounded-none">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-amber-300 pb-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="bg-amber-600 text-white font-mono text-xs px-2 py-0.5 font-bold tracking-wider">
            CHƯA CHỐT – [{code}]
          </span>
          {title && <span className="font-semibold text-xs text-amber-950 font-mono">{title}</span>}
        </div>
        <span className="text-[10px] text-amber-700 font-mono font-medium">Cần PO/Ban Du lịch chốt trước 06/10</span>
      </div>

      {description && (
        <div className="text-xs text-amber-900/90 mb-3 bg-amber-100/60 p-2 border border-amber-300 font-sans leading-relaxed">
          <strong>Lưu ý nghiệp vụ:</strong> {description}
        </div>
      )}

      <div>{children}</div>
    </div>
  );
};
