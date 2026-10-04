import React from 'react';
import { NominationData, SimulationState } from '../../types';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge } from '../UnfinalizedBadge';

interface StepM5Props {
  data: NominationData;
  onChange: (updates: Partial<NominationData>) => void;
  onNext: () => void;
  onBack: () => void;
  simState: SimulationState;
  showNotes: boolean;
}

export const StepM5: React.FC<StepM5Props> = ({
  data,
  onChange,
  onNext,
  onBack,
  simState,
  showNotes,
}) => {
  // Helper to count words
  const countWords = (text: string) => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const introWords = countWords(data.overviewIntro);
  const achieveWords = countWords(data.keyAchievements);
  const diffWords = countWords(data.keyDifferentiation);

  const isIntroValid = introWords >= 300 && introWords <= 500;
  const isAchieveValid = achieveWords >= 300 && achieveWords <= 500;
  const isDiffValid = diffWords >= 100 && diffWords <= 300;

  // Auto-fill realistic sample text matching word counts
  const handleFillSample = () => {
    const sampleIntro = Array(70)
      .fill('Khu nghỉ dưỡng đạt chuẩn quốc tế hàng đầu tại Việt Nam với không gian sinh thái bền vững')
      .join(' ')
      .slice(0, 2200); // ~340 words

    const sampleAchieve = Array(70)
      .fill('Tăng trưởng doanh thu 35% trong kỳ xét giải và đón nhận hơn 150.000 lượt khách du lịch')
      .join(' ')
      .slice(0, 2150); // ~330 words

    const sampleDiff = Array(35)
      .fill('Tiên phong ứng dụng mô hình kinh tế tuần hoàn và 100% điện mặt trời áp mái tự cung ứng')
      .join(' ')
      .slice(0, 1100); // ~170 words

    onChange({
      nomineeTitle: data.nomineeTitle || 'Khu nghỉ dưỡng Sunrise Ecolodge Phú Quốc',
      overviewIntro: sampleIntro,
      keyAchievements: sampleAchieve,
      keyDifferentiation: sampleDiff,
    });
  };

  const isDuplicateWarn = simState === 'duplicate_warning';

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M5 – Bước 5: Thông tin đề cử (Mục II)"
        rules={[
          'Bộ đếm từ realtime cho 3 trường văn bản dài: Giới thiệu (300-500 từ), Thành tích (300-500 từ), Điểm khác biệt (100-300 từ) [CHƯA CHỐT].',
          'Đổi màu cảnh báo nếu chưa đủ số từ tối thiểu hoặc vượt quá số từ tối đa.',
          'Cảnh báo trùng hồ sơ Poka-Yoke: Cảnh báo nhưng KHÔNG CHẶN người dùng tiếp tục, BTC sẽ phân định ở vòng sơ tuyển.',
          'Có nút "Điền thử mẫu hợp lệ" để reviewer kiểm tra nhanh luồng.',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-5">
        <div className="border-b-2 border-black pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 5/8 · MỤC II</span>
            <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
              THÔNG TIN CHI TIẾT ĐỀ CỬ
            </h2>
          </div>
          <button
            type="button"
            onClick={handleFillSample}
            className="text-xs font-mono bg-zinc-100 hover:bg-zinc-200 border border-zinc-500 px-2 py-1 text-black font-semibold"
          >
            ⚡ Điền nhanh bài mẫu chuẩn từ
          </button>
        </div>

        {/* DUPLICATE WARNING BANNER */}
        {isDuplicateWarn && (
          <div className="border-2 border-dashed border-amber-600 bg-amber-50 p-3.5 font-mono text-xs text-amber-950 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <span className="text-base">⚠️</span>
              <span>CẢNH BÁO TRÙNG HỒ SƠ ĐỀ CỬ:</span>
            </div>
            <p className="text-[11px] text-amber-900/90 leading-relaxed font-sans">
              Hệ thống ghi nhận đã có <strong>1 hồ sơ khác</strong> đăng ký cùng tên đề cử này trong cùng hạng mục.
              Theo quy chế, hệ thống <strong>không chặn bạn tiếp tục</strong>, Ban tổ chức và Tổ thư ký sẽ trực tiếp đối chiếu
              tư cách đại diện hợp pháp ở vòng sơ tuyển (16–22/11).
            </p>
          </div>
        )}

        <div className="space-y-4 font-mono text-xs">
          {/* Tên đề cử */}
          <div className="space-y-1">
            <label className="block font-bold text-zinc-900">
              Tên đơn vị / Điểm đến / Thương hiệu / Trải nghiệm được đề cử: <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              maxLength={200}
              value={data.nomineeTitle}
              onChange={(e) => onChange({ nomineeTitle: e.target.value })}
              placeholder="VD: Khu nghỉ dưỡng Sunrise Ecolodge & Spa Phú Quốc"
              className="w-full p-2.5 border-2 border-black bg-white focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-zinc-500">
              <span>Tên sẽ hiển thị trên chuyên trang bình chọn của độc giả</span>
              <span>{data.nomineeTitle.length}/200 ký tự</span>
            </div>
          </div>

          {/* Ô 1: Giới thiệu tổng quan (300-500 từ) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-zinc-900">
                1. Giới thiệu tổng quan: <span className="text-red-600">*</span>
              </label>
              <div
                className={`text-[11px] font-bold px-2 py-0.5 border ${
                  isIntroValid
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                    : 'border-zinc-400 bg-zinc-100 text-zinc-700'
                }`}
              >
                {introWords} / 300–500 từ {isIntroValid ? '✓ Hợp lệ' : introWords < 300 ? `(Còn thiếu ${300 - introWords} từ)` : `(Vượt quá ${introWords - 500} từ)`}
              </div>
            </div>
            <textarea
              rows={5}
              value={data.overviewIntro}
              onChange={(e) => onChange({ overviewIntro: e.target.value })}
              placeholder="Nêu rõ quá trình hình thành, vị trí địa lý, quy mô hoạt động, phân khúc khách hàng mục tiêu và triết lý phục vụ..."
              className="w-full p-2.5 border-2 border-black bg-white focus:outline-none font-sans text-xs leading-relaxed"
            />
            <p className="text-[10px] text-zinc-500">
              Yêu cầu từ 300 đến tối đa 500 từ. Được dùng làm nội dung giới thiệu chính trên trang bình chọn.
            </p>
          </div>

          {/* Ô 2: Thành tích nổi bật (300-500 từ) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-zinc-900">
                2. Thành tích nổi bật trong kỳ xét giải: <span className="text-red-600">*</span>
              </label>
              <div
                className={`text-[11px] font-bold px-2 py-0.5 border ${
                  isAchieveValid
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                    : 'border-zinc-400 bg-zinc-100 text-zinc-700'
                }`}
              >
                {achieveWords} / 300–500 từ {isAchieveValid ? '✓ Hợp lệ' : achieveWords < 300 ? `(Còn thiếu ${300 - achieveWords} từ)` : `(Vượt quá ${achieveWords - 500} từ)`}
              </div>
            </div>
            <textarea
              rows={5}
              value={data.keyAchievements}
              onChange={(e) => onChange({ keyAchievements: e.target.value })}
              placeholder="Nêu các kết quả kinh doanh, giải thưởng đã đạt được, sự kiện quy mô lớn đã tổ chức, đóng góp cho ngành du lịch..."
              className="w-full p-2.5 border-2 border-black bg-white focus:outline-none font-sans text-xs leading-relaxed"
            />
            <p className="text-[10px] text-zinc-500">
              Căn cứ đối chiếu quan trọng của Hội đồng chuyên môn trong kỳ xét giải 01/10/2025 – 30/09/2026.
            </p>
          </div>

          {/* Ô 3: Điểm khác biệt (100-300 từ) - CHƯA CHỐT */}
          <div className="border border-dashed border-amber-600 bg-amber-50/50 p-3 space-y-1.5">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center gap-1.5">
                <label className="font-bold text-amber-950">
                  3. Điểm khác biệt / Giá trị cốt lõi: <span className="text-red-600">*</span>
                </label>
                <UnfinalizedBadge code="Điểm khác biệt" label="Đề xuất 100-300 từ" />
              </div>
              <div
                className={`text-[11px] font-bold px-2 py-0.5 border ${
                  isDiffValid
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                    : 'border-amber-400 bg-white text-amber-900'
                }`}
              >
                {diffWords} / 100–300 từ {isDiffValid ? '✓ Hợp lệ' : diffWords < 100 ? `(Thiếu ${100 - diffWords} từ)` : `(Thừa ${diffWords - 300} từ)`}
              </div>
            </div>
            <textarea
              rows={3}
              value={data.keyDifferentiation}
              onChange={(e) => onChange({ keyDifferentiation: e.target.value })}
              placeholder="Yếu tố tạo nên sự khác biệt độc bản so với các đối thủ cùng phân khúc..."
              className="w-full p-2.5 border border-zinc-700 bg-white focus:outline-none font-sans text-xs leading-relaxed"
            />
            <p className="text-[10px] text-amber-900">
              Demo ban đầu chưa đặt giới hạn; đề xuất từ 100 – 300 từ để chuẩn hóa cấu trúc bài chấm.
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
            ← Quay lại Mục I
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Tiếp tục sang Số liệu hoạt động →
          </button>
        </div>
      </div>
    </div>
  );
};
