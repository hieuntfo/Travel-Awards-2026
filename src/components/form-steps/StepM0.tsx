import React from 'react';
import { SimulationState } from '../../types';
import { BusinessRuleNote } from '../BusinessRuleNote';

interface StepM0Props {
  onStart: () => void;
  simState: SimulationState;
  showNotes: boolean;
}

export const StepM0: React.FC<StepM0Props> = ({
  onStart,
  simState,
  showNotes,
}) => {
  const isNotOpened = simState === 'not_opened';
  const isClosed = simState === 'portal_closed';

  return (
    <div className="max-w-2xl mx-auto space-y-5 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M0 – Trang mở đầu (Landing của Form đề cử)"
        rules={[
          'Thể lệ tóm tắt 3-4 dòng giúp người nộp nắm rõ quy chế trước khi bấm bắt đầu.',
          'Nút tải checklist giấy tờ và mẫu offline giúp gom số liệu từ kế toán, vận hành, pháp chế trước.',
          'Nhấn mạnh cơ chế lưu nháp để giảm bớt tâm lý ngần ngại bỏ dở form.',
          'Trạng thái "Chưa mở form": Khóa nút bắt đầu và hiển thị đồng hồ đếm ngược đến 16/10/2026.',
          'Trạng thái "Đã đóng cổng": Khóa nút và thông báo hạn chót 23:59 16/11/2026 đã kết thúc.',
        ]}
      />

      {/* STATE NOTIFICATION BANNERS */}
      {isNotOpened && (
        <div className="border-2 border-black bg-zinc-200 p-4 font-mono text-center space-y-2">
          <div className="bg-black text-white px-2 py-0.5 text-xs font-bold inline-block">
            TRẠNG THÁI: CỔNG CHƯA MỞ
          </div>
          <div className="text-base font-bold">Cổng nhận đề cử mở lúc 00:00 ngày 16/10/2026</div>
          <div className="text-xl font-black text-zinc-900 border border-black p-2 bg-white inline-block">
            ĐẾM NGƯỢC: 12 NGÀY : 05 GIỜ : 40 PHÚT
          </div>
          <p className="text-xs text-zinc-600">
            Bạn có thể tải trước tài liệu checklist và mẫu hồ sơ offline để chuẩn bị số liệu.
          </p>
        </div>
      )}

      {isClosed && (
        <div className="border-2 border-black bg-zinc-300 p-4 font-mono text-center space-y-2">
          <div className="bg-black text-white px-2 py-0.5 text-xs font-bold inline-block">
            TRẠNG THÁI: CỔNG ĐÃ ĐÓNG
          </div>
          <div className="text-base font-bold">
            Thời hạn nhận hồ sơ đã kết thúc lúc 23:59 ngày 16/11/2026
          </div>
          <p className="text-xs text-zinc-700">
            Hệ thống đang chuyển sang vòng sơ tuyển (16/11 – 22/11). Các hồ sơ đã gửi sẽ nhận thông báo qua email.
          </p>
        </div>
      )}

      {/* Form Intro Box */}
      <div className="border-2 border-black bg-white p-5 md:p-6 space-y-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <div className="border-b-2 border-black pb-3">
          <div className="text-xs font-mono text-zinc-600 uppercase font-semibold">
            Báo VnExpress & FPT Online · Travel Awards 2026
          </div>
          <h1 className="text-xl md:text-2xl font-black font-mono uppercase text-black mt-1">
            ĐĂNG KÝ ĐỀ CỬ GIẢI THƯỞNG
          </h1>
        </div>

        {/* 3-4 Line Summary of Rules */}
        <div className="space-y-2 text-sm text-zinc-700 leading-relaxed font-sans bg-zinc-50 p-3.5 border border-zinc-300">
          <p className="font-semibold text-black">Thể lệ tóm tắt chương trình:</p>
          <ul className="list-disc list-inside space-y-1 text-xs text-zinc-800">
            <li>Cổng nhận hồ sơ mở từ <strong>16/10/2026</strong> đến <strong>23:59 ngày 16/11/2026</strong>.</li>
            <li>Hồ sơ gồm 8 bước trực tuyến, tự động lưu nháp an toàn sau mỗi bước hoàn thành.</li>
            <li>Đánh giá kết hợp 60% từ Hội đồng chuyên môn độc lập và 40% từ độc giả bình chọn trực tuyến.</li>
            <li>Số liệu kinh doanh được bảo mật tuyệt đối, chỉ phục vụ công tác đối chiếu của Hội đồng.</li>
          </ul>
        </div>

        {/* Key Time Estimates */}
        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div className="border border-zinc-400 bg-zinc-100 p-2.5 text-center">
            <span className="text-[10px] text-zinc-500 uppercase block">Thời gian hoàn thành ước tính</span>
            <span className="text-sm font-bold text-black">⏱️ 20 – 30 PHÚT</span>
          </div>
          <div className="border border-zinc-400 bg-zinc-100 p-2.5 text-center">
            <span className="text-[10px] text-zinc-500 uppercase block">Hạn chót gửi hồ sơ</span>
            <span className="text-sm font-bold text-black">📅 23:59 16/11/2026</span>
          </div>
        </div>

        {/* Offline Prep Download CTAs */}
        <div className="border-2 border-dashed border-zinc-400 p-3.5 bg-zinc-50 space-y-2 font-mono text-xs">
          <div className="font-bold text-black">CHUẨN BỊ TRƯỚC SỐ LIỆU & TÀI LIỆU:</div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              className="flex-1 py-2 px-3 border border-zinc-700 bg-white hover:bg-zinc-100 text-left flex items-center justify-between"
            >
              <span>📥 Tải checklist giấy tờ theo hạng mục (PDF)</span>
              <span className="text-[10px] text-zinc-500">2.4 MB</span>
            </button>
            <button
              type="button"
              className="flex-1 py-2 px-3 border border-zinc-700 bg-white hover:bg-zinc-100 text-left flex items-center justify-between"
            >
              <span>📥 Tải mẫu hồ sơ offline (DOCX)</span>
              <span className="text-[10px] text-zinc-500">1.1 MB</span>
            </button>
          </div>
        </div>

        {/* Draft Notice */}
        <div className="text-xs font-mono text-zinc-600 bg-zinc-100 p-3 border border-zinc-300 flex items-start gap-2">
          <span className="text-base">💡</span>
          <span>
            <strong>Ghi chú an tâm:</strong> Hồ sơ của bạn sẽ được lưu nháp tự động. Bạn có thể tạm dừng và tiếp tục
            chỉnh sửa bất kỳ lúc nào thông qua đường link bảo mật (Magic Link) được gửi tới email xác thực của bạn.
          </span>
        </div>

        {/* Start Button */}
        <div className="pt-2">
          <button
            type="button"
            disabled={isNotOpened || isClosed}
            onClick={onStart}
            className={`w-full py-3.5 px-4 font-mono font-bold text-base border-2 border-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isNotOpened || isClosed
                ? 'bg-zinc-300 text-zinc-500 border-zinc-400 cursor-not-allowed'
                : 'bg-black text-white hover:bg-zinc-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <span>BẮT ĐẦU ĐĂNG KÝ ĐỀ CỬ</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
