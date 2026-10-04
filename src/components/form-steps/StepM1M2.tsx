import React, { useState } from 'react';
import { AwardPillar, CategoryItem } from '../../types';
import { CATEGORIES } from '../../data/categories';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge } from '../UnfinalizedBadge';

interface StepM1Props {
  selectedPillar: AwardPillar;
  onSelectPillar: (pillar: AwardPillar) => void;
  onNext: () => void;
  onBack: () => void;
  showNotes: boolean;
}

export const StepM1: React.FC<StepM1Props> = ({
  selectedPillar,
  onSelectPillar,
  onNext,
  onBack,
  showNotes,
}) => {
  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M1 – Bước 1: Chọn nhóm giải thưởng"
        rules={[
          'Phân luồng ban đầu giữa 2 nhóm giải để thu hẹp danh sách hạng mục ở Bước 2.',
          'Mỗi thẻ lớn có đúng 1 dòng mô tả cô đọng.',
          'Người dùng chọn 1 trong 2 thẻ, thẻ được chọn có viền đen đậm nổi bật.',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-4">
        <div className="border-b-2 border-black pb-2">
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 1/8</span>
          <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
            CHỌN NHÓM GIẢI THƯỞNG
          </h2>
          <p className="text-xs text-zinc-600 mt-1">
            Vui lòng chọn 1 nhóm giải thưởng phù hợp với mô hình của tổ chức hoặc cá nhân của bạn.
          </p>
        </div>

        {/* 2 Big Cards */}
        <div className="grid grid-cols-1 gap-3.5 pt-2">
          {/* Card 1: Trụ cột */}
          <div
            onClick={() => onSelectPillar('pillar')}
            className={`border-2 p-4 cursor-pointer transition-all ${
              selectedPillar === 'pillar'
                ? 'border-black bg-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                : 'border-zinc-300 bg-white hover:border-zinc-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold bg-black text-white px-2 py-0.5">
                NHÓM I (6 HẠNG MỤC)
              </span>
              <input
                type="radio"
                name="pillar"
                checked={selectedPillar === 'pillar'}
                onChange={() => onSelectPillar('pillar')}
                className="w-4 h-4 accent-black cursor-pointer"
              />
            </div>
            <h3 className="font-mono font-bold text-base md:text-lg text-black mt-2">
              Nhóm giải thưởng Trụ cột
            </h3>
            <p className="text-xs text-zinc-700 mt-1 font-sans">
              Tôn vinh các thương hiệu, cơ sở lưu trú, điểm đến và doanh nghiệp định hình ngành du lịch Việt Nam.
            </p>
          </div>

          {/* Card 2: Tiên phong */}
          <div
            onClick={() => onSelectPillar('pioneer')}
            className={`border-2 p-4 cursor-pointer transition-all ${
              selectedPillar === 'pioneer'
                ? 'border-black bg-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                : 'border-zinc-300 bg-white hover:border-zinc-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold bg-zinc-800 text-white px-2 py-0.5">
                NHÓM II (9 HẠNG MỤC)
              </span>
              <input
                type="radio"
                name="pillar"
                checked={selectedPillar === 'pioneer'}
                onChange={() => onSelectPillar('pioneer')}
                className="w-4 h-4 accent-black cursor-pointer"
              />
            </div>
            <h3 className="font-mono font-bold text-base md:text-lg text-black mt-2">
              Nhóm giải thưởng Tiên phong
            </h3>
            <p className="text-xs text-zinc-700 mt-1 font-sans">
              Tôn vinh các cá nhân, sáng kiến xanh, sản phẩm đột phá và chuyển đổi số tiêu biểu.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3 font-mono">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2.5 border border-zinc-400 bg-zinc-100 text-xs font-bold text-zinc-700 hover:bg-zinc-200"
          >
            ← Quay lại Mở đầu
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Tiếp tục sang Chọn Hạng mục →
          </button>
        </div>
      </div>
    </div>
  );
};

interface StepM2Props {
  selectedPillar: AwardPillar;
  selectedCategoryId: string;
  onSelectCategory: (catId: string) => void;
  onNext: () => void;
  onBack: () => void;
  showNotes: boolean;
}

export const StepM2: React.FC<StepM2Props> = ({
  selectedPillar,
  selectedCategoryId,
  onSelectCategory,
  onNext,
  onBack,
  showNotes,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(selectedCategoryId || null);

  const categories = CATEGORIES.filter((c) => c.pillar === selectedPillar);

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M2 – Bước 2: Chọn hạng mục đề cử"
        rules={[
          'Toàn bộ danh mục 15 hạng mục đều gắn nhãn [CHƯA CHỐT – B1] vì nguồn dữ liệu chưa thống nhất.',
          'Mỗi hồ sơ chỉ đăng ký đúng 1 hạng mục. Bấm 1 thẻ mở rộng xem mô tả, đối tượng tham gia và tiêu chí chấm.',
          'Cảnh báo Poka-Yoke: Nếu sau này đổi hạng mục, toàn bộ dữ liệu số liệu Mục III đã nhập sẽ phải nhập lại.',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-4">
        <div className="border-b-2 border-black pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 2/8</span>
            <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
              CHỌN 1 HẠNG MỤC ĐỀ CỬ
            </h2>
          </div>
          <UnfinalizedBadge code="B1" label="Danh mục 15 hạng mục" />
        </div>

        {/* Warning banner */}
        <div className="border border-zinc-400 bg-zinc-100 p-2.5 font-mono text-xs text-zinc-800 flex items-start gap-2">
          <span>⚠️</span>
          <span>
            <strong>Lưu ý quan trọng:</strong> Mỗi hồ sơ chỉ được đăng ký <strong>1 hạng mục</strong>.
            Bộ trường thông tin và minh chứng ở các bước sau sẽ tự động thay đổi theo hạng mục bạn chọn tại đây.
          </span>
        </div>

        {/* Category List */}
        <div className="space-y-2 pt-1">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategoryId === cat.id;
            const isExpanded = expandedId === cat.id;

            return (
              <div
                key={cat.id}
                className={`border-2 transition-all ${
                  isSelected
                    ? 'border-black bg-zinc-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'border-zinc-300 bg-white hover:border-zinc-600'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setExpandedId(cat.id);
                  }}
                  className="p-3 cursor-pointer flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="categorySelect"
                      checked={isSelected}
                      onChange={() => {
                        onSelectCategory(cat.id);
                        setExpandedId(cat.id);
                      }}
                      className="w-4 h-4 accent-black cursor-pointer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-black">
                          {idx + 1}. {cat.name}
                        </span>
                        <span className="text-[10px] font-mono bg-zinc-200 px-1 border border-zinc-400">
                          {cat.code}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 line-clamp-1 mt-0.5">{cat.shortDesc}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(isExpanded ? null : cat.id);
                    }}
                    className="text-xs font-mono text-zinc-600 hover:text-black underline ml-2 shrink-0"
                  >
                    {isExpanded ? '[Thu gọn ▲]' : '[Chi tiết ▼]'}
                  </button>
                </div>

                {/* Expanded Details Accordion */}
                {isExpanded && (
                  <div className="border-t border-zinc-200 bg-zinc-100 p-3 space-y-2 font-mono text-xs">
                    <div>
                      <span className="font-bold text-zinc-800">Mô tả đầy đủ: </span>
                      <span className="text-zinc-700 font-sans text-xs">{cat.shortDesc}</span>
                    </div>

                    <div>
                      <span className="font-bold text-zinc-800">Đối tượng tham gia: </span>
                      <span className="text-zinc-700 font-sans text-xs">{cat.targetAudience}</span>
                    </div>

                    <div className="border-t border-zinc-200 pt-1.5">
                      <span className="font-bold text-zinc-800">Tiêu chí chấm (dự kiến): </span>
                      <span className="text-zinc-600 italic font-mono text-[11px] block mt-0.5">
                        {cat.criteriaPlaceholder}
                      </span>
                    </div>

                    {cat.pillar === 'pioneer' && (
                      <div className="border border-dashed border-amber-600 bg-amber-50 p-2 text-amber-900 text-[11px]">
                        <UnfinalizedBadge code="B2" label="Hạng mục Tiên phong chưa có đặc tả số liệu Mục III" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3 font-mono">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2.5 border border-zinc-400 bg-zinc-100 text-xs font-bold text-zinc-700 hover:bg-zinc-200"
          >
            ← Quay lại Chọn nhóm
          </button>
          <button
            type="button"
            disabled={!selectedCategoryId}
            onClick={onNext}
            className={`px-6 py-2.5 border-2 text-xs font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
              selectedCategoryId
                ? 'border-black bg-black text-white hover:bg-zinc-800 cursor-pointer'
                : 'border-zinc-300 bg-zinc-200 text-zinc-400 cursor-not-allowed'
            }`}
          >
            Tiếp tục sang Xác thực OTP →
          </button>
        </div>
      </div>
    </div>
  );
};
