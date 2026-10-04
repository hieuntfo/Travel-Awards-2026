import React, { useState } from 'react';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge } from '../UnfinalizedBadge';
import { BreakpageAd, LargeRectangleAd } from '../WireframeAds';
import { AppScreen } from '../../types';

interface RulesPageProps {
  onNavigate: (screen: AppScreen) => void;
  onStartNomination: () => void;
  showNotes: boolean;
}

export const RulesPage: React.FC<RulesPageProps> = ({
  onNavigate,
  onStartNomination,
  showNotes,
}) => {
  const [activeSection, setActiveSection] = useState('all');

  const sections = [
    { id: 'sec1', title: 'I. Mục đích & Ý nghĩa' },
    { id: 'sec2', title: 'II. Đối tượng tham gia' },
    { id: 'sec3', title: 'III. Cơ cấu 15 Hạng mục' },
    { id: 'sec4', title: 'IV. Thang điểm & Tiêu chí (60/40)' },
    { id: 'sec5', title: 'V. Kỳ xét giải & Số liệu' },
    { id: 'sec6', title: 'VI. Quy trình sơ tuyển & Bảo mật' },
  ];

  return (
    <div className="max-w-[1240px] w-full mx-auto p-4 md:p-6 font-sans text-zinc-900 pb-16">
      {/* Reviewer Note */}
      <BusinessRuleNote
        isVisible={showNotes}
        title="Trang Thể lệ (Rules Page) - Lớp trang số 4"
        rules={[
          'Thể chế hóa các nguyên tắc từ PRD v2.1: cơ chế 60% HĐCM + 40% Độc giả bình chọn.',
          'Nêu rõ kỳ xét giải 12 tháng (01/10/2025 - 30/09/2026) [CHƯA CHỐT - B3].',
          'Cam kết bảo mật số liệu kinh doanh: Tuyệt đối không công bố số liệu doanh thu/công suất ra ngoài.',
          'Tích hợp vị trí Quảng cáo Large (300 × 600 px) ở sidebar và Breakpage (970 × 250 px) giữa các điều khoản.',
        ]}
      />

      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-mono text-zinc-500 uppercase">Văn bản quy chế chính thức</div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-mono uppercase text-black">
            THỂ LỆ & QUY CHẾ TRAVEL AWARDS 2026
          </h1>
          <p className="text-xs text-zinc-600 mt-1">
            Ban hành kèm Quyết định số 26/QĐ-BTC của Báo VnExpress & FPT Online
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3 py-1.5 border border-zinc-400 bg-zinc-100 text-xs font-mono hover:bg-zinc-200"
          >
            📥 Tải file PDF Thể lệ
          </button>
          <button
            type="button"
            onClick={onStartNomination}
            className="px-3.5 py-1.5 border-2 border-black bg-amber-400 text-black font-mono font-bold text-xs hover:bg-amber-300"
          >
            📝 Đăng ký đề cử
          </button>
        </div>
      </div>

      {/* 2-Column Layout: Rules Articles (Left) + Sidebar with Large Ad 300x600 (Right) */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Rules Articles Content */}
        <div className="flex-1 min-w-0 space-y-6 text-sm text-zinc-800 leading-relaxed font-sans">
          {/* Quick Jump TOC */}
          <div className="border border-zinc-300 bg-zinc-50 p-3 font-mono text-xs">
            <div className="font-bold text-zinc-700 mb-2 uppercase text-[11px]">Mục lục thể lệ:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-zinc-800 hover:underline hover:text-black"
                >
                  • {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section id="sec1" className="border border-zinc-300 bg-white p-4 space-y-2">
            <h2 className="text-base font-bold font-mono uppercase text-black border-b border-zinc-200 pb-1.5">
              I. MỤC ĐÍCH & Ý NGHĨA
            </h2>
            <p>
              1.1. Giải thưởng Du lịch Thường niên — <strong>Travel Awards 2026</strong> do Báo điện tử VnExpress và Công ty
              Cổ phần Dịch vụ Trực tuyến FPT (FPT Online) đồng tổ chức nhằm tôn vinh những nỗ lực phục hồi, đổi mới sáng tạo
              và phát triển bền vững của ngành du lịch Việt Nam.
            </p>
            <p>
              1.2. Tạo sân chơi khách quan, minh bạch và có cơ chế kiểm chứng dữ liệu thực chất để ghi nhận những đóng góp
              của địa phương, doanh nghiệp lữ hành, cơ sở lưu trú và các cá nhân tiêu biểu.
            </p>
          </section>

          {/* Section 2 */}
          <section id="sec2" className="border border-zinc-300 bg-white p-4 space-y-2">
            <h2 className="text-base font-bold font-mono uppercase text-black border-b border-zinc-200 pb-1.5">
              II. ĐỐI TƯỢNG THAM GIA
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong>Nhóm Tổ chức:</strong> Các cơ quan quản lý nhà nước (Sở VHTTDL/Sở Du lịch/UBND), doanh nghiệp lữ hành,
                khách sạn, khu nghỉ dưỡng, hãng hàng không, ban quản lý di sản được thành lập và hoạt động hợp pháp tại Việt Nam.
              </li>
              <li>
                <strong>Riêng hạng mục Điểm đến cấp tỉnh:</strong> Chỉ duy nhất cơ quan quản lý nhà nước có thẩm quyền (Sở Du
                lịch, Sở VHTTDL hoặc UBND tỉnh/thành phố) được nộp hồ sơ, kèm văn bản cử đại diện chính thức.
              </li>
              <li>
                <strong>Nhóm Cá nhân:</strong> Các công dân Việt Nam hoặc người nước ngoài đang làm việc hợp pháp tại Việt Nam,
                có đóng góp nổi bật cho du lịch (có thể tự đề cử hoặc do tổ chức/cá nhân khác đề cử).
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="sec3" className="border border-zinc-300 bg-white p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-1.5">
              <h2 className="text-base font-bold font-mono uppercase text-black">
                III. CƠ CẤU 15 HẠNG MỤC GIẢI THƯỞNG
              </h2>
              <UnfinalizedBadge code="B1" label="Chờ chốt thống nhất 3 nguồn" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="border border-zinc-300 p-2.5 bg-zinc-50">
                <div className="font-bold text-black border-b border-zinc-200 pb-1 mb-1.5">
                  Nhóm Trụ Cột (6 Hạng mục):
                </div>
                <ol className="list-decimal list-inside space-y-1 text-zinc-700">
                  <li>Điểm đến du lịch của năm (cấp tỉnh/thành)</li>
                  <li>Doanh nghiệp lữ hành</li>
                  <li>Khách sạn</li>
                  <li>Khu nghỉ dưỡng (Resort)</li>
                  <li>Hãng hàng không du lịch</li>
                  <li>Trải nghiệm du lịch</li>
                </ol>
              </div>

              <div className="border border-zinc-300 p-2.5 bg-zinc-50">
                <div className="font-bold text-black border-b border-zinc-200 pb-1 mb-1.5">
                  Nhóm Tiên Phong (9 Hạng mục):
                </div>
                <ol className="list-decimal list-inside space-y-1 text-zinc-700">
                  <li>Nhân vật du lịch (cá nhân)</li>
                  <li>Sáng kiến du lịch bền vững</li>
                  <li>Điểm đến du lịch xanh</li>
                  <li>Sản phẩm du lịch sáng tạo</li>
                  <li>Chuyển đổi số xuất sắc</li>
                  <li>Làng du lịch cộng đồng tiêu biểu</li>
                  <li>Trải nghiệm ẩm thực du lịch</li>
                  <li>Gương mặt truyền thông du lịch (Đại sứ)</li>
                  <li>Chiến dịch quảng bá du lịch</li>
                </ol>
              </div>
            </div>
          </section>

          {/* 2/ VỊ TRÍ QUẢNG CÁO BREAKPAGE (970x250) */}
          <div className="w-full flex justify-center py-2 bg-zinc-50 border-y border-zinc-300 my-4">
            <BreakpageAd label="BREAKPAGE TRANG THỂ LỆ (970 × 250 px)" />
          </div>

          {/* Section 4 */}
          <section id="sec4" className="border border-zinc-300 bg-white p-4 space-y-3">
            <h2 className="text-base font-bold font-mono uppercase text-black border-b border-zinc-200 pb-1.5">
              IV. CƠ CHẾ CHẤM ĐIỂM & THANG ĐIỂM (60% / 40%)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
              <div className="border-2 border-black bg-zinc-100 p-3 text-center space-y-1">
                <span className="text-zinc-500 uppercase text-[10px]">HỘI ĐỒNG CHUYÊN MÔN</span>
                <div className="text-2xl font-black text-black">60% TỔNG ĐIỂM</div>
                <p className="text-[11px] text-zinc-600 font-sans text-left">
                  Đánh giá độc lập dựa trên hồ sơ số liệu kiểm chứng, tính pháp lý, chỉ số tăng trưởng và khảo sát thực tế.
                </p>
              </div>

              <div className="border-2 border-black bg-zinc-100 p-3 text-center space-y-1">
                <span className="text-zinc-500 uppercase text-[10px]">ĐỘC GIẢ BÌNH CHỌN</span>
                <div className="text-2xl font-black text-black">40% TỔNG ĐIỂM</div>
                <p className="text-[11px] text-zinc-600 font-sans text-left">
                  Bình chọn trực tuyến có xác thực OTP (1 vote/ngày/người). Áp dụng thuật toán chống gian lận và bot vote.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec5" className="border border-zinc-300 bg-white p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-1.5">
              <h2 className="text-base font-bold font-mono uppercase text-black">
                V. KỲ XÉT GIẢI & YÊU CẦU SỐ LIỆU
              </h2>
              <UnfinalizedBadge code="B3" label="Định nghĩa kỳ xét giải" />
            </div>

            <div className="border border-dashed border-amber-600 bg-amber-50 p-3 font-mono text-xs text-amber-950 space-y-1">
              <div className="font-bold">Quy định mốc thời gian số liệu (12 tháng):</div>
              <div>• Kỳ xét giải hiện tại: <strong>01/10/2025 – 30/09/2026</strong></div>
              <div>• Kỳ liền trước để so sánh: <strong>01/10/2024 – 30/09/2025</strong></div>
              <div className="text-[11px] text-amber-800 pt-1 font-sans">
                (Lý do: Form mở 16/10/2026 nên số liệu cả năm 2026 chưa có, cần mốc 12 tháng trọn vẹn để thống nhất)
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec6" className="border border-zinc-300 bg-white p-4 space-y-2">
            <h2 className="text-base font-bold font-mono uppercase text-black border-b border-zinc-200 pb-1.5">
              VI. QUY TRÌNH TIẾP NHẬN & CAM KẾT BẢO MẬT
            </h2>
            <p>
              6.1. <strong>Thời hạn nhận hồ sơ:</strong> Từ ngày 16/10/2026 đến đúng 23:59 ngày 16/11/2026. Sau thời hạn này,
              hệ thống tự động khóa cổng và hồ sơ ở trạng thái nháp sẽ không còn hợp lệ.
            </p>
            <p>
              6.2. <strong>Cam kết bảo mật số liệu kinh doanh:</strong> Mọi số liệu doanh thu, công suất phòng, số lượng khách
              và hợp đồng kinh doanh chỉ phục vụ việc đối chiếu của Hội đồng chuyên môn và Tổ thư ký, cam kết tuyệt đối
              không công bố ra bên ngoài.
            </p>
            <p>
              6.3. <strong>Tuân thủ pháp luật:</strong> Quy trình thu thập dữ liệu cá nhân tuân thủ nghiêm ngặt Luật An toàn
              thông tin mạng và Luật Bảo vệ dữ liệu cá nhân (Luật 91/2025/QH15).
            </p>
          </section>
        </div>

        {/* Right Sidebar: 3/ QUẢNG CÁO LARGE (300x600) */}
        <aside
          aria-label="Cột bên phải trang thể lệ"
          className="w-full lg:w-[300px] shrink-0 space-y-4 flex flex-col items-center"
        >
          <div className="sticky top-16 space-y-4">
            <LargeRectangleAd label="QUẢNG CÁO LARGE (300 × 600 px)" />

            <div className="border border-zinc-300 p-3 bg-zinc-50 font-mono text-xs space-y-2">
              <div className="font-bold text-black uppercase">TÀI LIỆU QUY CHẾ:</div>
              <p className="text-[11px] text-zinc-600 font-sans">
                Tải văn bản thể lệ định dạng PDF có dấu đỏ của Ban tổ chức.
              </p>
              <button
                type="button"
                className="w-full p-2 bg-white border border-black font-bold text-center text-xs hover:bg-zinc-100"
              >
                📥 Tải toàn văn thể lệ (PDF)
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer CTA */}
      <div className="mt-8 border-2 border-black bg-zinc-100 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono">
        <div>
          <div className="font-bold text-sm text-black">SẴN SÀNG NỘP HỒ SƠ ĐỀ CỬ?</div>
          <div className="text-xs text-zinc-600">Quy trình gồm 8 bước rõ ràng, có lưu nháp tự động.</div>
        </div>
        <button
          type="button"
          onClick={onStartNomination}
          className="px-5 py-2.5 border-2 border-black bg-black text-white font-bold text-xs hover:bg-zinc-800"
        >
          📝 Bắt đầu Đăng ký đề cử →
        </button>
      </div>
    </div>
  );
};
