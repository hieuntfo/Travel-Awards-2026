import React, { useState } from 'react';

interface BusinessRuleNoteProps {
  id?: string;
  title: string;
  rules: (string | React.ReactNode)[];
  isVisible?: boolean; // Controlled by reviewer toggle
  className?: string;
  defaultExpanded?: boolean;
}

export const BusinessRuleNote: React.FC<BusinessRuleNoteProps> = ({
  id,
  title,
  rules,
  isVisible = true,
  className = '',
  defaultExpanded = true,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (!isVisible) return null;

  return (
    <div
      className={`border-2 border-zinc-700 bg-zinc-100 text-zinc-900 p-3 my-3 font-mono text-xs shadow-xs ${className}`}
    >
      <div
        className="flex items-center justify-between cursor-pointer select-none pb-1.5 border-b border-zinc-300"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2 font-bold text-zinc-900">
          <span className="inline-block bg-zinc-800 text-white px-1.5 py-0.2 text-[10px] uppercase tracking-wide">
            Ghi chú PO / Nghiệp vụ
          </span>
          {id && <span className="text-zinc-600">[{id}]</span>}
          <span className="font-semibold text-xs">{title}</span>
        </div>
        <button
          type="button"
          className="text-zinc-600 hover:text-black font-mono text-[11px] underline ml-2"
        >
          {expanded ? '[Thu gọn ▲]' : '[Mở rộng ▼]'}
        </button>
      </div>

      {expanded && (
        <ul className="mt-2.5 space-y-1.5 text-zinc-800 text-[11px] list-disc list-inside leading-relaxed">
          {rules.map((rule, idx) => (
            <li key={idx} className="pl-1">
              {rule}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
