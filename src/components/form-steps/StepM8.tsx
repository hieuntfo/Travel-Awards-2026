import React from 'react';
import { NominationData, FormStep } from '../../types';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { CATEGORIES } from '../../data/categories';

interface StepM8Props {
  data: NominationData;
  onChange: (updates: Partial<NominationData>) => void;
  onJumpToStep: (step: FormStep) => void;
  onSubmit: () => void;
  onBack: () => void;
  showNotes: boolean;
}

export const StepM8: React.FC<StepM8Props> = ({
  data,
  onChange,
  onJumpToStep,
  onSubmit,
  onBack,
  showNotes,
}) => {
  const currentCat = CATEGORIES.find((c) => c.id === data.categoryId);

  const canSubmit =
    data.agreedCompliance &&
    data.agreedPrivacy &&
    data.agreedMediaUse &&
    data.agreedRules &&
    data.captchaVerified;

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M8 – Bước 8: Xem lại & gửi hồ sơ (Review & Commitments)"
        rules={[
          'Tóm tắt lại toàn bộ hồ sơ; mỗi khối có nút "Sửa" nhảy thẳng về bước tương ứng mà không mất dữ liệu.',
          'Pháp chế (Luật 91/2025/QH15): Tách riêng 4 nhóm cam kết độc lập thay vì gộp chung.',
          'Nút Gửi hồ sơ bị vô hiệu hóa cho đến khi người dùng tick đủ cả 4 cam kết và xác nhận Captcha.',
          'Sau khi bấm gửi, hồ sơ chính thức được cấp mã định danh TA26-XXXX và chuyển sang màn M9.',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-5">
        <div className="border-b-2 border-black pb-2">
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 8/8 · HOÀN TẤT</span>
          <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
            XEM LẠI TOÀN BỘ HỒ SƠ & CAM KẾT
          </h2>
          <p className="text-xs text-zinc-600 mt-0.5 font-mono">
            Vui lòng kiểm tra kỹ lưỡng các thông tin trước khi nhấn nút nộp chính thức.
          </p>
        </div>

        {/* SUMMARY SECTION: HẠNG MỤC */}
        <div className="border border-zinc-400 p-3 bg-zinc-50 font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
            <span className="font-bold text-black">HẠNG MỤC ĐỀ CỬ:</span>
            <button
              type="button"
              onClick={() => onJumpToStep('M2')}
              className="text-zinc-600 hover:text-black underline font-bold"
            >
              [✏️ Sửa Bước 2]
            </button>
          </div>
          <div>
            <strong>{currentCat?.name || 'Chưa chọn'}</strong> ({currentCat?.code})
          </div>
          <div className="text-[11px] text-zinc-600">
            Thuộc nhóm: {data.pillar === 'pillar' ? 'Giải thưởng Trụ cột' : 'Giải thưởng Tiên phong'}
          </div>
        </div>

        {/* SUMMARY SECTION: MỤC I */}
        <div className="border border-zinc-400 p-3 bg-zinc-50 font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
            <span className="font-bold text-black">MỤC I: THÔNG TIN ĐƠN VỊ & NGƯỜI ĐẠI DIỆN</span>
            <button
              type="button"
              onClick={() => onJumpToStep('M4')}
              className="text-zinc-600 hover:text-black underline font-bold"
            >
              [✏️ Sửa Bước 4]
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div><strong>Tên đơn vị:</strong> {data.orgName || 'Sunrise Resort & Spa'}</div>
            <div><strong>MST:</strong> {data.taxCode || '0109887766'}</div>
            <div><strong>Địa phương:</strong> {data.province || 'Kiên Giang'}</div>
            <div><strong>Loại hình:</strong> {data.orgType || 'Cơ sở lưu trú'}</div>
            <div><strong>Người đại diện:</strong> {data.repName || 'Nguyễn Văn A'} ({data.repTitle || 'GĐ Điều hành'})</div>
            <div><strong>Email xác thực:</strong> {data.email || 'marketing@resort.vn'}</div>
          </div>
        </div>

        {/* SUMMARY SECTION: MỤC II */}
        <div className="border border-zinc-400 p-3 bg-zinc-50 font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
            <span className="font-bold text-black">MỤC II: THÔNG TIN CHI TIẾT ĐỀ CỬ</span>
            <button
              type="button"
              onClick={() => onJumpToStep('M5')}
              className="text-zinc-600 hover:text-black underline font-bold"
            >
              [✏️ Sửa Bước 5]
            </button>
          </div>
          <div className="text-[11px] space-y-1">
            <div><strong>Tên đề cử:</strong> {data.nomineeTitle || 'Khu nghỉ dưỡng Sunrise Ecolodge'}</div>
            <div>
              <strong>Giới thiệu:</strong>{' '}
              <span className="text-zinc-600 line-clamp-2">
                {data.overviewIntro || 'Khu nghỉ dưỡng đạt chuẩn quốc tế hàng đầu tại Việt Nam...'}
              </span>
            </div>
            <div>
              <strong>Thành tích nổi bật:</strong>{' '}
              <span className="text-zinc-600 line-clamp-2">
                {data.keyAchievements || 'Tăng trưởng doanh thu 35% trong kỳ xét giải...'}
              </span>
            </div>
          </div>
        </div>

        {/* SUMMARY SECTION: MỤC III & TỆP TIN */}
        <div className="border border-zinc-400 p-3 bg-zinc-50 font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
            <span className="font-bold text-black">MỤC III & TỆP TIN MINH CHỨNG:</span>
            <button
              type="button"
              onClick={() => onJumpToStep('M7')}
              className="text-zinc-600 hover:text-black underline font-bold"
            >
              [✏️ Sửa Bước 7]
            </button>
          </div>
          <div className="text-[11px] text-zinc-700">
            • Đã đính kèm 4 tệp tài liệu pháp lý & báo cáo số liệu kiểm toán (Tổng ~25.7 MB)
            <br />
            • Đã chọn 4 ảnh chất lượng cao 1600px cho truyền thông
            <br />
            • Số liệu kinh doanh đã đối chiếu với kỳ 01/10/2025 – 30/09/2026
          </div>
        </div>

        {/* 4 COMMITMENT CHECKBOX GROUPS (LEGAL COMPLIANCE) */}
        <div className="border-2 border-black bg-zinc-100 p-4 space-y-3 font-mono text-xs">
          <div className="font-bold text-black border-b border-zinc-300 pb-1">
            CAM KẾT PHÁP LÝ & ĐỒNG Ý XÁC NHẬN (BẮT BUỘC TICK CẢ 4 MỤC)
          </div>

          <div className="space-y-3 text-[11px]">
            {/* Checkbox A */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={data.agreedCompliance}
                onChange={(e) => onChange({ agreedCompliance: e.target.checked })}
                className="w-4 h-4 mt-0.5 accent-black shrink-0 cursor-pointer"
              />
              <span className="text-zinc-800 leading-snug">
                <strong>(a) Cam kết tuân thủ quy chuẩn & tính trung thực:</strong> Đơn vị/Cá nhân đủ tư cách pháp lý;
                giấy phép hoạt động còn hiệu lực; toàn bộ số liệu báo cáo là hoàn toàn chính xác và sẵn sàng cung cấp
                chứng từ gốc đối chiếu khi Hội đồng chuyên môn yêu cầu; không có sự cố an toàn du lịch hay vi phạm pháp
                luật chưa xử lý.
              </span>
            </label>

            {/* Checkbox B */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={data.agreedPrivacy}
                onChange={(e) => onChange({ agreedPrivacy: e.target.checked })}
                className="w-4 h-4 mt-0.5 accent-black shrink-0 cursor-pointer"
              />
              <span className="text-zinc-800 leading-snug">
                <strong>(b) Đồng ý xử lý dữ liệu cá nhân & thông tin hồ sơ:</strong> Cho phép Ban tổ chức Travel Awards 2026
                tiếp nhận, lưu trữ, thẩm tra và chuyển giao dữ liệu cho Hội đồng chuyên môn phục vụ mục đích đánh giá hồ sơ
                theo quy định của Luật Bảo vệ dữ liệu cá nhân (Luật 91/2025/QH15).
              </span>
            </label>

            {/* Checkbox C */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={data.agreedMediaUse}
                onChange={(e) => onChange({ agreedMediaUse: e.target.checked })}
                className="w-4 h-4 mt-0.5 accent-black shrink-0 cursor-pointer"
              />
              <span className="text-zinc-800 leading-snug">
                <strong>(c) Đồng ý sử dụng tư liệu truyền thông:</strong> Cho phép Báo VnExpress và Ban tổ chức sử dụng hình
                ảnh, video clip và bài viết giới thiệu để phục vụ truyền thông quảng bá giải thưởng trên các kênh báo chí và
                mạng xã hội.
              </span>
            </label>

            {/* Checkbox D */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={data.agreedRules}
                onChange={(e) => onChange({ agreedRules: e.target.checked })}
                className="w-4 h-4 mt-0.5 accent-black shrink-0 cursor-pointer"
              />
              <span className="text-zinc-800 leading-snug">
                <strong>(d) Chấp thuận Thể lệ giải thưởng:</strong> Đã đọc kỹ và đồng ý với toàn bộ các điều khoản trong
                Thể lệ & Quy chế chính thức của Travel Awards 2026.
              </span>
            </label>
          </div>

          {/* Captcha Placeholder */}
          <div className="pt-2 border-t border-zinc-300">
            <div className="border border-zinc-400 bg-white p-2.5 flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-xs">
                <input
                  type="checkbox"
                  checked={data.captchaVerified}
                  onChange={(e) => onChange({ captchaVerified: e.target.checked })}
                  className="w-5 h-5 accent-black cursor-pointer"
                />
                <span>Tôi không phải là người máy (reCAPTCHA / Turnstile Anti-spam)</span>
              </label>
              <span className="text-[10px] text-zinc-400 font-mono">[Bảo vệ bởi hệ thống]</span>
            </div>
          </div>
        </div>

        {/* Navigation & Submit Button */}
        <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto px-4 py-2.5 border border-zinc-400 bg-zinc-100 text-xs font-bold text-zinc-700 hover:bg-zinc-200"
          >
            ← Quay lại Tải minh chứng
          </button>
          <button
            type="button"
            disabled={!canSubmit}
            onClick={onSubmit}
            className={`w-full sm:w-auto px-8 py-3.5 border-2 text-sm font-bold tracking-wide transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
              canSubmit
                ? 'border-black bg-black text-white hover:bg-zinc-800 cursor-pointer'
                : 'border-zinc-300 bg-zinc-200 text-zinc-400 cursor-not-allowed'
            }`}
          >
            {canSubmit ? '🚀 GỬI HỒ SƠ ĐỀ CỬ CHÍNH THỨC' : 'Vui lòng tick đủ 4 cam kết & Captcha'}
          </button>
        </div>
      </div>
    </div>
  );
};
