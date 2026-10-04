import React, { useState } from 'react';
import { WireframePlaceholder } from '../WireframePlaceholder';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { LargeRectangleAd } from '../WireframeAds';
import { AppScreen } from '../../types';

interface VotingDetailPageProps {
  candidate: any;
  onNavigate: (screen: AppScreen) => void;
  onOpenModal: (modalType: string) => void;
  showNotes: boolean;
}

export const VotingDetailPage: React.FC<VotingDetailPageProps> = ({
  candidate,
  onNavigate,
  onOpenModal,
  showNotes,
}) => {
  const [authMethod, setAuthMethod] = useState<'phone' | 'vnid' | 'vne'>('phone');
  const [phone, setPhone] = useState('0912345678');
  const [otp, setOtp] = useState('8899');
  const [voted, setVoted] = useState(false);

  const cand = candidate || {
    id: 'cand1',
    name: 'Sunrise Ecolodge & Spa Phú Quốc',
    category: 'Khu nghỉ dưỡng (Resort)',
    code: 'TC-04',
    province: 'Kiên Giang',
    votes: 14280,
    percentage: '34.2%',
    desc: 'Khu nghỉ dưỡng sinh thái chuẩn 5 sao tiên phong 100% sử dụng năng lượng mặt trời tại bờ Tây đảo ngọc Phú Quốc.',
  };

  const handleVoteSubmit = () => {
    setVoted(true);
    onOpenModal('success');
  };

  return (
    <div className="max-w-[1240px] w-full mx-auto p-4 md:p-6 font-sans text-zinc-900 pb-16">
      {/* Reviewer Note */}
      <BusinessRuleNote
        isVisible={showNotes}
        title="Trang Bình chọn chi tiết (Voting Detail) - Lớp trang số 7"
        rules={[
          'Trưng bày toàn bộ thông tin đề cử công khai của ứng viên đã được Ban Du lịch biên tập từ hồ sơ nộp.',
          'Khối xác thực bình chọn: Hỗ trợ 3 phương thức xác thực (SĐT nhận OTP, Định danh VnID, VnExpress ID) để chống gian lận.',
          'Tích hợp vị trí Quảng cáo Large (300 × 600 px) tại sidebar bên phải của trang bình chọn chi tiết.',
        ]}
      />

      {/* Breadcrumb */}
      <div className="text-xs font-mono text-zinc-500 mb-4 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onNavigate('voting_list')}
          className="hover:underline text-zinc-700"
        >
          ← Quay lại Danh sách bình chọn
        </button>
        <span>/</span>
        <span className="text-black font-bold">{cand.name}</span>
      </div>

      {/* 2-Column Layout: Main Details (Left) + Sidebar with Large Ad 300x600 (Right) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Main Candidate Details & Voting Box */}
        <div className="flex-1 min-w-0 border-2 border-black bg-white p-4 md:p-6 space-y-5">
          {/* Header Title */}
          <div className="border-b-2 border-black pb-3 space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="bg-black text-white px-2 py-0.5 font-bold">{cand.category}</span>
              <span className="text-zinc-500">Mã: {cand.code}</span>
              <span>·</span>
              <span className="text-zinc-600 font-bold">{cand.province}</span>
            </div>

            <h1 className="text-xl md:text-2xl font-black font-mono uppercase text-black">
              {cand.name}
            </h1>
          </div>

          {/* Gallery Placeholder */}
          <div className="space-y-2">
            <WireframePlaceholder
              label={`[ Ảnh đại diện chính: ${cand.name} - 16:9 ]`}
              aspectRatio="16/9"
            />
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <WireframePlaceholder
                  key={i}
                  label={`[Ảnh #${i}]`}
                  aspectRatio="4/3"
                />
              ))}
            </div>
          </div>

          {/* Details Content */}
          <div className="space-y-4 text-xs font-mono border-t border-zinc-200 pt-4">
            <div className="space-y-1">
              <div className="font-bold text-black uppercase text-xs">1. GIỚI THIỆU TỔNG QUAN</div>
              <p className="text-zinc-700 font-sans leading-relaxed">
                Sunrise Ecolodge & Spa Phú Quốc là khu nghỉ dưỡng sinh thái biệt lập gồm 320 phòng và biệt thự hướng biển.
                Được thiết kế dựa trên triết lý thuận tự nhiên, khu nghỉ dưỡng kết hợp giữa tiện nghi cao cấp và các giải pháp
                bảo tồn rừng nguyên sinh ven biển.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-black uppercase text-xs">2. THÀNH TÍCH NỔI BẬT TRONG KỲ XÉT GIẢI</div>
              <p className="text-zinc-700 font-sans leading-relaxed">
                Trong 12 tháng qua, khu nghỉ dưỡng ghi nhận tỷ lệ lấp đầy phòng bình quân đạt 78.5%, phục vụ hơn 85.000 đêm
                phòng cho du khách trong nước và quốc tế. Điểm đánh giá bình quân trên Booking.com đạt 9.2/10 và Agoda đạt 9.0/10.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-black uppercase text-xs">3. ĐIỂM KHÁC BIỆT ĐỘC BẢN</div>
              <p className="text-zinc-700 font-sans leading-relaxed">
                100% rác hữu cơ được xử lý thành phân bón vi sinh cho vườn dược liệu; toàn bộ hệ thống nước nóng vận hành
                bằng năng lượng mặt trời giúp giảm 350 tấn khí thải CO2 mỗi năm.
              </p>
            </div>
          </div>

          {/* INTERACTIVE VOTING BOX */}
          <div className="border-2 border-black bg-zinc-100 p-4 font-mono text-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-300 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-base">🗳️</span>
                <span className="font-bold text-black text-sm uppercase">BÌNH CHỌN CHO ĐỀ CỬ NÀY</span>
              </div>
              <div className="font-bold text-black">
                Hiện có: <span className="underline">{cand.votes.toLocaleString()} lượt vote</span> ({cand.percentage})
              </div>
            </div>

            {/* Authentication Options */}
            <div className="space-y-2">
              <label className="block text-zinc-700 font-bold">
                Chọn phương thức xác thực bình chọn (1 vote/ngày):
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setAuthMethod('phone')}
                  className={`px-3 py-1.5 border text-xs font-bold ${
                    authMethod === 'phone'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-200'
                  }`}
                >
                  📱 Số điện thoại OTP
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMethod('vnid')}
                  className={`px-3 py-1.5 border text-xs font-bold ${
                    authMethod === 'vnid'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-200'
                  }`}
                >
                  🪪 Định danh VnID
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMethod('vne')}
                  className={`px-3 py-1.5 border text-xs font-bold ${
                    authMethod === 'vne'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-200'
                  }`}
                >
                  📰 VnExpress ID
                </button>
              </div>
            </div>

            {/* Phone + OTP Form */}
            {authMethod === 'phone' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-zinc-600 text-[10px] block">Số điện thoại của bạn:</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-black bg-white"
                  />
                </div>
                <div>
                  <span className="text-zinc-600 text-[10px] block">Mã xác thực OTP (4 số):</span>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 border border-black bg-white font-black tracking-widest text-center"
                  />
                </div>
              </div>
            )}

            {/* Action Vote Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleVoteSubmit}
                className="w-full py-3 border-2 border-black bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                ✓ XÁC NHẬN BÌNH CHỌN CHO ỨNG VIÊN
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1">
              <span>Áp dụng quy chế 1 vote/ngày/hạng mục</span>
              <div className="flex gap-2">
                <span className="underline cursor-pointer">Chia sẻ Facebook</span>
                <span>·</span>
                <span className="underline cursor-pointer">Chia sẻ Zalo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: 3/ QUẢNG CÁO LARGE (300x600) */}
        <aside
          aria-label="Cột bên phải trang bình chọn chi tiết"
          className="w-full lg:w-[300px] shrink-0 space-y-4 flex flex-col items-center"
        >
          <div className="sticky top-16 space-y-4">
            <LargeRectangleAd label="QUẢNG CÁO LARGE (300 × 600 px)" />

            <div className="border border-zinc-300 p-3 bg-zinc-50 font-mono text-xs space-y-2">
              <div className="font-bold text-black uppercase">ĐỀ CỬ CÙNG HẠNG MỤC:</div>
              <ul className="space-y-1.5 text-zinc-700 text-[11px]">
                <li className="hover:underline cursor-pointer">• Vinpearl Luxury Nha Trang</li>
                <li className="hover:underline cursor-pointer">• InterContinental Danang Sun Peninsula</li>
                <li className="hover:underline cursor-pointer">• Six Senses Ninh Van Bay</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
