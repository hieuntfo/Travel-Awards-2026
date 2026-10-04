import React, { useState } from 'react';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { AppScreen } from '../../types';

interface VotingModalsPageProps {
  onNavigate: (screen: AppScreen) => void;
  showNotes: boolean;
}

export const VotingModalsPage: React.FC<VotingModalsPageProps> = ({
  onNavigate,
  showNotes,
}) => {
  const [activeModal, setActiveModal] = useState<
    'success' | 'already_voted' | 'not_open' | 'closed' | 'otp_error' | null
  >('success');

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 font-sans text-zinc-900 pb-16">
      {/* Reviewer Note */}
      <BusinessRuleNote
        isVisible={showNotes}
        title="Các lớp trang thông báo khi bình chọn - Lớp trang số 8"
        rules={[
          'Tập hợp đầy đủ 5 kịch bản phản hồi giao diện khi người dùng tương tác với cổng bình chọn.',
          'Nguyên tắc Poka-Yoke: Thông báo rõ ràng lý do, thời điểm mở lại và hướng dẫn tiếp theo.',
          'Reviewer có thể bấm vào từng nút bên dưới để xem trực tiếp giao diện popup/modal của từng trạng thái.',
        ]}
      />

      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-5">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">LỚP TRANG SỐ 8</span>
        <h1 className="text-xl md:text-2xl font-black font-mono uppercase text-black">
          CÁC LỚP TRANG THÔNG BÁO KHI BÌNH CHỌN
        </h1>
        <p className="text-xs text-zinc-600 mt-1 font-sans">
          Bấm chọn kịch bản để xem wireframe modal phản hồi tương ứng
        </p>
      </div>

      {/* Switcher Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6 font-mono text-xs">
        {[
          { id: 'success', label: '1. Thành công' },
          { id: 'already_voted', label: '2. Đã vote hôm nay' },
          { id: 'not_open', label: '3. Chưa mở cổng' },
          { id: 'closed', label: '4. Đã đóng cổng' },
          { id: 'otp_error', label: '5. Lỗi OTP' },
        ].map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActiveModal(m.id as any)}
            className={`p-2 border text-center font-bold transition-all ${
              activeModal === m.id
                ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-zinc-100 text-zinc-700 border-zinc-400 hover:bg-zinc-200'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* MODAL DISPLAY AREA */}
      <div className="border-2 border-black bg-zinc-200 p-4 md:p-8 flex items-center justify-center min-h-[380px]">
        {/* CASE 1: BÌNH CHỌN THÀNH CÔNG */}
        {activeModal === 'success' && (
          <div className="border-2 border-black bg-white p-5 md:p-6 max-w-md w-full font-mono text-center space-y-3 shadow-2xl">
            <div className="w-12 h-12 border-2 border-black bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-xl font-black text-emerald-800">
              ✓
            </div>
            <div className="text-xs text-zinc-500 uppercase font-bold">TRAVEL AWARDS 2026</div>
            <h2 className="text-lg font-black uppercase text-black">BÌNH CHỌN THÀNH CÔNG!</h2>
            <p className="text-xs text-zinc-700 font-sans leading-relaxed">
              Lượt bình chọn của bạn dành cho <strong>Sunrise Ecolodge & Spa Phú Quốc</strong> đã được hệ thống ghi nhận.
            </p>

            <div className="border border-zinc-400 bg-zinc-100 p-2 text-xs">
              Mã giao dịch vote: <strong>#VOTE-8842</strong>
            </div>

            <div className="text-[11px] text-zinc-600 font-sans border-t border-zinc-200 pt-2">
              💡 <strong>Lưu ý:</strong> Bạn có thể quay lại bình chọn tiếp cho ứng viên này vào ngày mai (sau 00:00).
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                className="flex-1 py-2 border border-black bg-zinc-100 text-xs font-bold hover:bg-zinc-200"
              >
                Chia sẻ lên Facebook
              </button>
              <button
                type="button"
                onClick={() => onNavigate('voting_list')}
                className="flex-1 py-2 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800"
              >
                Tiếp tục bình chọn
              </button>
            </div>
          </div>
        )}

        {/* CASE 2: ĐÃ BÌNH CHỌN HÔM NAY */}
        {activeModal === 'already_voted' && (
          <div className="border-2 border-black bg-white p-5 md:p-6 max-w-md w-full font-mono text-center space-y-3 shadow-2xl">
            <div className="w-12 h-12 border-2 border-black bg-amber-100 rounded-full flex items-center justify-center mx-auto text-xl font-black text-amber-800">
              ⚠️
            </div>
            <h2 className="text-base md:text-lg font-black uppercase text-black">
              BẠN ĐÃ BÌNH CHỌN HÔM NAY
            </h2>
            <p className="text-xs text-zinc-700 font-sans leading-relaxed">
              Theo quy chế giải thưởng, mỗi độc giả chỉ được bình chọn <strong>1 lần mỗi ngày</strong> cho mỗi hạng mục.
              Tài khoản của bạn đã thực hiện bình chọn lúc <strong>09:15 hôm nay</strong>.
            </p>

            <div className="border border-zinc-400 bg-zinc-100 p-2.5 text-xs text-zinc-800">
              Cổng bình chọn cho lượt tiếp theo sẽ mở lại sau: <strong>04 GIỜ : 45 PHÚT</strong> (Lúc 00:00)
            </div>

            <button
              type="button"
              onClick={() => onNavigate('voting_list')}
              className="w-full py-2.5 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800"
            >
              Bình chọn cho hạng mục khác →
            </button>
          </div>
        )}

        {/* CASE 3: CHƯA MỞ CỔNG BÌNH CHỌN */}
        {activeModal === 'not_open' && (
          <div className="border-2 border-black bg-white p-5 md:p-6 max-w-md w-full font-mono text-center space-y-3 shadow-2xl">
            <div className="w-12 h-12 border-2 border-black bg-zinc-100 rounded-full flex items-center justify-center mx-auto text-xl font-black text-zinc-700">
              ⏳
            </div>
            <h2 className="text-base md:text-lg font-black uppercase text-black">
              CỔNG BÌNH CHỌN CHƯA MỞ
            </h2>
            <p className="text-xs text-zinc-700 font-sans leading-relaxed">
              Giai đoạn sơ tuyển hồ sơ của Hội đồng chuyên môn đang diễn ra (16/11 – 22/11).
              Cổng bình chọn chính thức của độc giả sẽ được mở từ <strong>09:00 ngày 24/11/2026</strong>.
            </p>

            <div className="border border-zinc-400 bg-zinc-100 p-2 text-xs">
              Thời gian bình chọn: <strong>24/11/2026 — 10/12/2026</strong>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('rules')}
              className="w-full py-2.5 border-2 border-black bg-zinc-900 text-white text-xs font-bold hover:bg-black"
            >
              Xem Thể lệ & Lộ trình giải thưởng
            </button>
          </div>
        )}

        {/* CASE 4: ĐÃ ĐÓNG CỔNG BÌNH CHỌN */}
        {activeModal === 'closed' && (
          <div className="border-2 border-black bg-white p-5 md:p-6 max-w-md w-full font-mono text-center space-y-3 shadow-2xl">
            <div className="w-12 h-12 border-2 border-black bg-zinc-200 rounded-full flex items-center justify-center mx-auto text-xl font-black text-zinc-800">
              🔒
            </div>
            <h2 className="text-base md:text-lg font-black uppercase text-black">
              CỔNG BÌNH CHỌN ĐÃ KHÓA
            </h2>
            <p className="text-xs text-zinc-700 font-sans leading-relaxed">
              Vòng bình chọn độc giả đã chính thức khép lại vào lúc <strong>23:59 ngày 10/12/2026</strong>.
              Ban tổ chức và Tổ thư ký đang tổng hợp kết quả cùng Hội đồng chuyên môn.
            </p>

            <div className="border border-zinc-400 bg-zinc-100 p-2.5 text-xs text-zinc-800">
              🎉 Kết quả chung cuộc sẽ được vinh danh tại <strong>Gala Trao giải Travel Awards 2026</strong>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('news_list')}
              className="w-full py-2.5 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800"
            >
              Xem tin tức chuẩn bị Gala →
            </button>
          </div>
        )}

        {/* CASE 5: LỖI OTP */}
        {activeModal === 'otp_error' && (
          <div className="border-2 border-black bg-white p-5 md:p-6 max-w-md w-full font-mono text-center space-y-3 shadow-2xl">
            <div className="w-12 h-12 border-2 border-red-600 bg-red-100 rounded-full flex items-center justify-center mx-auto text-xl font-black text-red-700">
              ❌
            </div>
            <h2 className="text-base md:text-lg font-black uppercase text-red-900">
              XÁC THỰC OTP KHÔNG THÀNH CÔNG
            </h2>
            <p className="text-xs text-zinc-700 font-sans leading-relaxed">
              Mã xác thực bạn vừa nhập không chính xác hoặc đã hết thời hạn hiệu lực (quá 60 giây).
            </p>

            <div className="border border-red-300 bg-red-50 p-2 text-xs text-red-800">
              Vui lòng bấm nút <strong>Gửi lại mã OTP</strong> trên màn hình và thử lại.
            </div>

            <button
              type="button"
              onClick={() => onNavigate('voting_detail')}
              className="w-full py-2.5 border-2 border-black bg-amber-400 text-black text-xs font-bold hover:bg-amber-300"
            >
              ← Quay lại màn hình xác thực
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
