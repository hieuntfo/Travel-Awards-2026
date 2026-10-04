import React, { useState } from 'react';
import { NominationData } from '../../types';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { CATEGORIES } from '../../data/categories';

interface StepM9Props {
  data: NominationData;
  onNominateAnother: () => void;
  onViewEmail: () => void;
  onGoHome: () => void;
  showNotes: boolean;
}

export const StepM9: React.FC<StepM9Props> = ({
  data,
  onNominateAnother,
  onViewEmail,
  onGoHome,
  showNotes,
}) => {
  const [copied, setCopied] = useState(false);
  const currentCat = CATEGORIES.find((c) => c.id === data.categoryId);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(data.submissionCode || 'TA26-8942');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M9 – Màn hình gửi thành công (Confirmation Screen)"
        rules={[
          'Cấp mã hồ sơ chuẩn định dạng TA26-XXXX để tra cứu trong suốt mùa giải.',
          'Nêu rõ mốc thời gian sơ tuyển (16–22/11) để người nộp an tâm chờ đợi mà không sốt ruột.',
          'Nút "Nộp cho hạng mục khác": Tính năng Nice-to-have tự động sao chép Mục I & II giúp đơn vị lớn nộp nhiều hạng mục thuận tiện.',
          'Cung cấp nút chuyển nhanh sang M10 để PO/Tech review giao diện email xác nhận.',
        ]}
      />

      <div className="border-2 border-black bg-white p-5 md:p-8 space-y-5 text-center font-mono">
        {/* Success Icon */}
        <div className="w-16 h-16 border-2 border-black bg-emerald-100 text-black text-2xl font-black rounded-full flex items-center justify-center mx-auto shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          ✓
        </div>

        <div className="space-y-1">
          <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
            TRAVEL AWARDS 2026 · HỒ SƠ ĐÃ GHI NHẬN
          </div>
          <h1 className="text-xl md:text-2xl font-black text-black uppercase">
            NỘP HỒ SƠ ĐỀ CỬ THÀNH CÔNG!
          </h1>
          <p className="text-xs text-zinc-600 font-sans max-w-md mx-auto">
            Hồ sơ của bạn đã được tiếp nhận an toàn vào hệ thống quản lý của Ban tổ chức Báo VnExpress & FPT Online.
          </p>
        </div>

        {/* Dossier Code Card */}
        <div className="border-2 border-black bg-zinc-100 p-4 max-w-md mx-auto space-y-2">
          <span className="text-[11px] text-zinc-500 uppercase block">MÃ TRA CỨU HỒ SƠ CHÍNH THỨC:</span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-black text-black tracking-widest bg-white px-3 py-1 border border-black">
              {data.submissionCode || 'TA26-8942'}
            </span>
            <button
              type="button"
              onClick={handleCopyCode}
              className="px-2.5 py-1.5 border border-black bg-zinc-200 hover:bg-zinc-300 text-xs font-bold"
            >
              {copied ? '✓ Đã chép' : 'Sao chép'}
            </button>
          </div>
          <p className="text-[10px] text-zinc-500 font-sans">
            Mã này dùng để đối chiếu khi cần bổ sung minh chứng và nhận thông báo kết quả.
          </p>
        </div>

        {/* Summary Info */}
        <div className="border border-zinc-300 bg-zinc-50 p-3.5 max-w-md mx-auto text-left text-xs space-y-1">
          <div>• <strong>Hạng mục:</strong> {currentCat?.name}</div>
          <div>• <strong>Tên đề cử:</strong> {data.nomineeTitle || 'Sunrise Resort & Spa'}</div>
          <div>• <strong>Đơn vị nộp:</strong> {data.orgName || 'Công ty CP Du lịch Biển Xanh'}</div>
          <div>• <strong>Email nhận thông báo:</strong> {data.email || 'marketing@resort.vn'}</div>
        </div>

        {/* Timeline Next Steps */}
        <div className="border border-zinc-400 bg-white p-3.5 max-w-md mx-auto text-left space-y-2 text-xs">
          <div className="font-bold text-black border-b border-zinc-300 pb-1">
            CÁC MỐC THỜI GIAN TIẾP THEO:
          </div>
          <ul className="space-y-1 text-zinc-700 text-[11px] font-sans">
            <li>
              <strong>16/11 – 22/11/2026:</strong> Hội đồng sơ tuyển kiểm tra tính hợp lệ và đối chiếu số liệu.
            </li>
            <li>
              <strong>23/11/2026:</strong> Thông báo danh sách đề cử vào vòng bình chọn chính thức qua email.
            </li>
            <li>
              <strong>24/11 – 10/12/2026:</strong> Mở cổng bình chọn độc giả (40%) và Hội đồng chấm điểm (60%).
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center max-w-md mx-auto text-xs">
          <button
            type="button"
            onClick={onNominateAnother}
            className="flex-1 py-3 px-3 border-2 border-black bg-amber-400 text-black font-bold hover:bg-amber-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            ➕ Nộp cho hạng mục khác
            <span className="block text-[9px] font-normal text-zinc-800 font-sans mt-0.5">
              (Giữ sẵn thông tin Mục I & II)
            </span>
          </button>

          <button
            type="button"
            onClick={onViewEmail}
            className="flex-1 py-3 px-3 border-2 border-black bg-zinc-900 text-white font-bold hover:bg-black"
          >
            ✉️ Xem mô phỏng Email gửi tới người nộp (M10)
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={onGoHome}
            className="text-xs text-zinc-600 hover:text-black underline font-mono"
          >
            ← Quay về Trang chủ Travel Awards 2026
          </button>
        </div>
      </div>
    </div>
  );
};

interface StepM10Props {
  data: NominationData;
  onBackToM9: () => void;
  showNotes: boolean;
}

export const StepM10: React.FC<StepM10Props> = ({
  data,
  onBackToM9,
  showNotes,
}) => {
  const [emailTab, setEmailTab] = useState<'confirm' | 'reminder'>('confirm');
  const currentCat = CATEGORIES.find((c) => c.id === data.categoryId);

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M10 – Mô phỏng Email gửi tới người nộp (Email Simulator Frame)"
        rules={[
          'Mô phỏng 2 loại email trọng yếu: (1) Email xác nhận tiếp nhận hồ sơ thành công; (2) Email nhắc hồ sơ nháp trước hạn 3 ngày.',
          'Email xác nhận đính kèm bản PDF tóm tắt toàn bộ dữ liệu đã khai để người nộp lưu trữ làm việc nội bộ.',
          'Email nhắc nháp tích hợp Magic Link tự động mở lại phiên làm việc mà không cần nhập lại OTP.',
        ]}
      />

      <div className="border-2 border-black bg-zinc-200 p-2 sm:p-4 space-y-3 font-mono">
        {/* Email Client Browser Bar */}
        <div className="bg-zinc-800 text-white p-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            <span className="font-bold ml-2">KHUNG MÔ PHỎNG EMAIL CLIENT</span>
          </div>

          <button
            type="button"
            onClick={onBackToM9}
            className="bg-zinc-700 hover:bg-zinc-600 text-zinc-200 px-2 py-0.5 text-[10px] border border-zinc-500"
          >
            ← Quay lại M9
          </button>
        </div>

        {/* Tab switch between Email 1 and Email 2 */}
        <div className="flex gap-1 text-xs">
          <button
            type="button"
            onClick={() => setEmailTab('confirm')}
            className={`flex-1 py-2 px-3 border transition-all text-center ${
              emailTab === 'confirm'
                ? 'bg-white text-black font-bold border-black'
                : 'bg-zinc-300 text-zinc-700 border-zinc-400 hover:bg-zinc-100'
            }`}
          >
            ✉️ Email 1: Xác nhận nộp thành công
          </button>
          <button
            type="button"
            onClick={() => setEmailTab('reminder')}
            className={`flex-1 py-2 px-3 border transition-all text-center ${
              emailTab === 'reminder'
                ? 'bg-white text-black font-bold border-black'
                : 'bg-zinc-300 text-zinc-700 border-zinc-400 hover:bg-zinc-100'
            }`}
          >
            ⏰ Email 2: Nhắc hồ sơ nháp trước hạn 3 ngày
          </button>
        </div>

        {/* EMAIL BODY CONTENT (WHITE SHEET) */}
        <div className="border-2 border-black bg-white p-5 md:p-6 space-y-4 text-xs">
          {/* Header Metadata */}
          <div className="border-b border-zinc-300 pb-3 space-y-1 text-zinc-600">
            <div>
              <strong>Người gửi:</strong> Ban tổ chức Travel Awards 2026 &lt;travelawards@vnexpress.net&gt;
            </div>
            <div>
              <strong>Người nhận:</strong> {data.email || 'marketing@resort.vn'}
            </div>
            <div>
              <strong>Thời gian:</strong> 03/10/2026 18:25 (GMT+7)
            </div>
            <div className="text-black font-bold text-sm pt-1">
              {emailTab === 'confirm'
                ? `[VnExpress Travel Awards 2026] Xác nhận tiếp nhận hồ sơ đề cử #${data.submissionCode || 'TA26-8942'}`
                : `[Nhắc hạn] Hồ sơ đề cử Travel Awards 2026 của bạn đang lưu nháp — Còn 3 ngày!`}
            </div>
          </div>

          {/* EMAIL TAB 1: CONFIRMATION */}
          {emailTab === 'confirm' ? (
            <div className="space-y-3 font-sans text-xs text-zinc-800 leading-relaxed">
              <p>Kính gửi <strong>{data.repName || 'Quý Đơn vị / Anh (Chị)'}</strong>,</p>
              <p>
                Ban tổ chức Giải thưởng Du lịch Thường niên <strong>Travel Awards 2026</strong> (Báo VnExpress & FPT Online)
                xin trân trọng xác nhận đã tiếp nhận thành công hồ sơ đăng ký đề cử của Quý đơn vị.
              </p>

              {/* Box Info */}
              <div className="border border-zinc-400 bg-zinc-50 p-3 font-mono text-[11px] space-y-1">
                <div>• <strong>Mã hồ sơ:</strong> <span className="font-bold text-black">{data.submissionCode || 'TA26-8942'}</span></div>
                <div>• <strong>Hạng mục:</strong> {currentCat?.name} ({currentCat?.code})</div>
                <div>• <strong>Đơn vị đề cử:</strong> {data.orgName || 'Khu nghỉ dưỡng Sunrise Ecolodge'}</div>
                <div>• <strong>Thời gian nộp:</strong> 03/10/2026, 18:25</div>
                <div>• <strong>Trạng thái hiện tại:</strong> Đã nộp → Đang chờ sơ tuyển (16–22/11/2026)</div>
              </div>

              <p>
                Đính kèm email này là <strong>Bản PDF tóm tắt hồ sơ đề cử</strong> để Quý đơn vị lưu trữ nội bộ.
                Kết quả vòng sơ tuyển và danh sách bước vào vòng bình chọn độc giả sẽ được thông báo tới email này
                vào ngày <strong>23/11/2026</strong>.
              </p>

              <div className="border-t border-zinc-200 pt-3 flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span>📎 Tệp đính kèm:</span>
                  <span className="border border-zinc-400 px-2 py-0.5 bg-zinc-100 font-bold">
                    Ho_so_TA26-8942_Tom_tat.pdf (1.4 MB)
                  </span>
                </div>
                <button type="button" className="text-black underline font-bold">
                  [Tải về]
                </button>
              </div>
            </div>
          ) : (
            /* EMAIL TAB 2: REMINDER DRAFT */
            <div className="space-y-3 font-sans text-xs text-zinc-800 leading-relaxed">
              <p>Kính gửi <strong>{data.repName || 'Quý Đơn vị / Anh (Chị)'}</strong>,</p>
              <p>
                Hệ thống ghi nhận hồ sơ đăng ký đề cử giải thưởng <strong>Travel Awards 2026</strong> của bạn cho hạng mục
                <strong> {currentCat?.name}</strong> hiện đang được lưu nháp tại <strong>Bước 5/8 (Thông tin đề cử)</strong>.
              </p>

              <div className="border-2 border-dashed border-amber-600 bg-amber-50 p-3 font-mono text-xs text-amber-950 space-y-1">
                <div className="font-bold">⏰ HẠN CHÓT NỘP HỒ SƠ CHỈ CÒN 3 NGÀY:</div>
                <div>Cổng nộp trực tuyến sẽ chính thức đóng vào đúng <strong>23:59 ngày 16/11/2026</strong>.</div>
                <p className="text-[10px] text-amber-900 pt-0.5">
                  Sau thời hạn trên, các hồ sơ ở trạng thái lưu nháp sẽ bị khóa và không được chuyển vào vòng sơ tuyển của Hội đồng.
                </p>
              </div>

              <p>
                Để tiếp tục hoàn thiện hồ sơ từ điểm bạn đã dừng lại mà không cần đăng nhập lại, vui lòng bấm vào nút Magic Link bảo mật dưới đây:
              </p>

              <div className="text-center py-2">
                <button
                  type="button"
                  onClick={onBackToM9}
                  className="px-6 py-2.5 border-2 border-black bg-black text-white font-mono font-bold text-xs hover:bg-zinc-800"
                >
                  🔗 TIẾP TỤC HOÀN THIỆN HỒ SƠ NHÁP (MAGIC LINK) →
                </button>
              </div>

              <div className="text-[10px] text-zinc-500 font-mono pt-2 border-t border-zinc-200">
                Đường link này có hiệu lực đến hết ngày 16/11/2026 và chỉ dành riêng cho chủ tài khoản email {data.email}.
              </div>
            </div>
          )}

          {/* Footer of simulated email */}
          <div className="pt-4 border-t border-zinc-200 text-[10px] text-zinc-400 font-mono">
            Ban tổ chức Travel Awards 2026 · Tòa soạn Báo điện tử VnExpress · Tầng 10, Tòa nhà FPT Cầu Giấy, Hà Nội.
          </div>
        </div>
      </div>
    </div>
  );
};
