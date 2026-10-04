import React, { useState } from 'react';
import { WireframePlaceholder } from '../WireframePlaceholder';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge } from '../UnfinalizedBadge';
import { BreakpageAd } from '../WireframeAds';
import { AppScreen } from '../../types';
import { CATEGORIES } from '../../data/categories';

interface VotingListPageProps {
  onNavigate: (screen: AppScreen) => void;
  onSelectCandidate: (candidate: any) => void;
  showNotes: boolean;
}

export const VotingListPage: React.FC<VotingListPageProps> = ({
  onNavigate,
  onSelectCandidate,
  showNotes,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<'all' | 'pillar' | 'pioneer'>('all');
  const [selectedCatId, setSelectedCatId] = useState<string>('all');

  const sampleNominees = [
    {
      id: 'cand1',
      name: 'Sunrise Ecolodge & Spa Phú Quốc',
      category: 'Khu nghỉ dưỡng (Resort)',
      code: 'TC-04',
      province: 'Kiên Giang',
      votes: 14280,
      percentage: '34.2%',
      desc: 'Khu nghỉ dưỡng sinh thái chuẩn 5 sao tiên phong 100% sử dụng năng lượng mặt trời tại bờ Tây đảo ngọc.',
    },
    {
      id: 'cand2',
      name: 'Vinpearl Luxury Nha Trang',
      category: 'Khu nghỉ dưỡng (Resort)',
      code: 'TC-04',
      province: 'Khánh Hòa',
      votes: 12150,
      percentage: '29.1%',
      desc: 'Quần thể biệt thự nghỉ dưỡng biệt lập trên đảo Hòn Tre với dịch vụ chuẩn mực quốc tế.',
    },
    {
      id: 'cand3',
      name: 'Saigontourist Group',
      category: 'Doanh nghiệp lữ hành',
      code: 'TC-02',
      province: 'TP. Hồ Chí Minh',
      votes: 18920,
      percentage: '41.5%',
      desc: 'Tập đoàn lữ hành hàng đầu phục hồi dòng khách quốc tế và phát triển các sản phẩm tour liên vùng.',
    },
    {
      id: 'cand4',
      name: 'Điểm đến Du lịch Tỉnh Quảng Ninh',
      category: 'Điểm đến du lịch của năm (cấp tỉnh/thành)',
      code: 'TC-01',
      province: 'Quảng Ninh',
      votes: 22450,
      percentage: '38.0%',
      desc: 'Hạ tầng kết nối đồng bộ, vịnh di sản Hạ Long đón trên 8 triệu lượt khách du lịch trong kỳ xét giải.',
    },
    {
      id: 'cand5',
      name: 'Làng Du lịch Cộng đồng Sin Suối Hồ',
      category: 'Làng du lịch cộng đồng tiêu biểu',
      code: 'TP-06',
      province: 'Lai Châu',
      votes: 9840,
      percentage: '45.2%',
      desc: 'Bản làng người Mông kiểu mẫu, 100% người dân làm du lịch không rác thải nhựa.',
    },
    {
      id: 'cand6',
      name: 'Dự án Bảo tồn Rùa biển Côn Đảo',
      category: 'Sáng kiến du lịch bền vững',
      code: 'TP-02',
      province: 'Bà Rịa - Vũng Tàu',
      votes: 11200,
      percentage: '52.1%',
      desc: 'Sáng kiến gắn du khách với hành trình ấp nở và thả rùa con về biển, bảo tồn đa dạng sinh học.',
    },
  ];

  return (
    <div className="max-w-[1240px] w-full mx-auto p-4 md:p-6 font-sans text-zinc-900 pb-16">
      {/* Reviewer Note */}
      <BusinessRuleNote
        isVisible={showNotes}
        title="Trang Bình chọn (Voting List) - Lớp trang số 6"
        rules={[
          'Cổng bình chọn chỉ mở sau khi hoàn tất vòng sơ tuyển (dự kiến 24/11 - 10/12/2026).',
          'Độc giả bình chọn chiếm 40% tổng điểm giải thưởng (Hội đồng chuyên môn chấm 60%).',
          'Quy chế bình chọn: Mỗi độc giả chỉ được vote 1 lần/ngày cho mỗi hạng mục để ngăn chặn spam bot.',
          'Bấm vào ứng viên để mở Lớp 7 (Bình chọn chi tiết) hoặc bấm thử các trạng thái thông báo ở Lớp 8.',
        ]}
      />

      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-mono text-zinc-500 uppercase">Cổng bình chọn độc giả (40% điểm)</div>
          <h1 className="text-2xl font-black font-mono uppercase text-black">
            BÌNH CHỌN ỨNG VIÊN TRAVEL AWARDS 2026
          </h1>
          <p className="text-xs text-zinc-600 mt-1 font-sans">
            Bình chọn cho những điểm đến, thương hiệu và cá nhân truyền cảm hứng du lịch xuất sắc nhất
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('voting_modals')}
          className="border-2 border-black bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 font-mono text-xs font-bold text-black"
        >
          🔔 Xem các lớp TB khi bình chọn (Lớp 8) →
        </button>
      </div>

      {/* Rules Notice Banner */}
      <div className="border-2 border-black bg-zinc-100 p-3.5 mb-5 font-mono text-xs space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="bg-black text-white px-1.5 py-0.2 font-bold text-[10px]">QUY CHẾ BÌNH CHỌN</span>
          <span className="font-bold">Thời gian: 24/11/2026 – 23:59 ngày 10/12/2026</span>
        </div>
        <p className="text-xs text-zinc-700 font-sans">
          Mỗi tài khoản được bình chọn <strong>1 lần mỗi ngày cho mỗi hạng mục</strong>.
          Hệ thống yêu cầu xác thực OTP qua số điện thoại hoặc VnExpress ID để đảm bảo tính minh bạch.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-xs">
        <span className="font-bold text-zinc-700">LỌC NHÓM:</span>
        <button
          type="button"
          onClick={() => setSelectedPillar('all')}
          className={`px-3 py-1 border ${
            selectedPillar === 'all'
              ? 'bg-black text-white font-bold border-black'
              : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
          }`}
        >
          Tất cả (15 Hạng mục)
        </button>
        <button
          type="button"
          onClick={() => setSelectedPillar('pillar')}
          className={`px-3 py-1 border ${
            selectedPillar === 'pillar'
              ? 'bg-black text-white font-bold border-black'
              : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
          }`}
        >
          Nhóm Trụ cột (6)
        </button>
        <button
          type="button"
          onClick={() => setSelectedPillar('pioneer')}
          className={`px-3 py-1 border ${
            selectedPillar === 'pioneer'
              ? 'bg-black text-white font-bold border-black'
              : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
          }`}
        >
          Nhóm Tiên phong (9)
        </button>
      </div>

      {/* 2/ VỊ TRÍ QUẢNG CÁO BREAKPAGE (970x250) */}
      <div className="w-full flex justify-center py-2 mb-4 bg-zinc-50 border-y border-zinc-300">
        <BreakpageAd label="BREAKPAGE TRANG DANH SÁCH BÌNH CHỌN (970 × 250 px)" />
      </div>

      {/* Nominees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleNominees.map((cand) => (
          <div
            key={cand.id}
            className="border-2 border-black bg-white p-3.5 space-y-3 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
          >
            <div>
              <WireframePlaceholder
                label={`[ Ảnh đề cử: ${cand.name} ]`}
                aspectRatio="16/9"
              />

              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-2">
                <span className="border border-zinc-400 bg-zinc-100 px-1 font-semibold text-zinc-800">
                  {cand.category}
                </span>
                <span>{cand.province}</span>
              </div>

              <h2 className="font-bold text-base font-mono text-black mt-1 leading-snug">
                {cand.name}
              </h2>

              <p className="text-xs text-zinc-600 font-sans mt-1 line-clamp-2">
                {cand.desc}
              </p>
            </div>

            {/* Voting Bar & CTAs */}
            <div className="pt-2 border-t border-zinc-200 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-zinc-600 text-[11px]">Số vote hiện tại:</span>
                <span className="font-bold text-black text-sm">
                  {cand.votes.toLocaleString()} lượt ({cand.percentage})
                </span>
              </div>

              <div className="w-full bg-zinc-200 h-1.5 border border-zinc-400">
                <div
                  className="bg-black h-full"
                  style={{ width: cand.percentage }}
                ></div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    onSelectCandidate(cand);
                    onNavigate('voting_detail');
                  }}
                  className="flex-1 py-2 border-2 border-black bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 text-center cursor-pointer"
                >
                  🗳️ Bình chọn ngay
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCandidate(cand);
                    onNavigate('voting_detail');
                  }}
                  className="px-3 py-2 border border-zinc-400 bg-white text-zinc-800 text-xs hover:bg-zinc-100"
                >
                  Chi tiết hồ sơ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
