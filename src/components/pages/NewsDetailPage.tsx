import React from 'react';
import { WireframePlaceholder } from '../WireframePlaceholder';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { BreakpageAd, LargeRectangleAd } from '../WireframeAds';
import { AppScreen } from '../../types';

interface NewsDetailPageProps {
  onNavigate: (screen: AppScreen) => void;
  onStartNomination: () => void;
  showNotes: boolean;
  showSideAds?: boolean;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({
  onNavigate,
  onStartNomination,
  showNotes,
  showSideAds = false,
}) => {
  return (
    <div className="max-w-[1240px] w-full mx-auto p-4 md:p-6 font-sans text-zinc-900 pb-16">
      {/* Reviewer Note */}
      <BusinessRuleNote
        isVisible={showNotes}
        title="Trang Tin tức chi tiết (News Detail) - Lớp trang số 3"
        rules={[
          'Thiết kế chuẩn cấu trúc bài báo trên VnExpress (tiêu đề, tác giả, sapo, ảnh kèm caption, các đoạn văn, box CTA).',
          'Tích hợp vị trí Quảng cáo Large (300 × 600 px) tại sidebar bên phải của bài viết.',
          'Tích hợp vị trí Quảng cáo Breakpage (970 × 250 px) ở cuối bài viết trước khối đề xuất liên quan.',
        ]}
      />

      {/* Breadcrumb */}
      <div className="text-xs font-mono text-zinc-500 mb-4 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="hover:underline text-zinc-700"
        >
          Trang chủ
        </button>
        <span>/</span>
        <button
          type="button"
          onClick={() => onNavigate('news_list')}
          className="hover:underline text-zinc-700"
        >
          Tin tức
        </button>
        <span>/</span>
        <span className="text-black font-bold">Thông cáo báo chí</span>
      </div>

      {/* Article Header */}
      <header className="space-y-3 border-b-2 border-black pb-4 mb-5">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-600">
          <span className="border border-black bg-zinc-100 px-2 py-0.5 font-bold">THÔNG CÁO BÁO CHÍ</span>
          <span>·</span>
          <span>04/10/2026, 09:30 (GMT+7)</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold font-mono text-black leading-tight">
          Chính thức khởi động giải thưởng Travel Awards 2026 với 15 hạng mục đột phá
        </h1>

        <div className="flex items-center justify-between text-xs font-mono text-zinc-600 pt-2 border-t border-zinc-200">
          <span>Tác giả: <strong>Ban Du lịch — Báo điện tử VnExpress</strong></span>
          <span>Thời gian đọc: 4 phút</span>
        </div>
      </header>

      {/* Main 2-Column Layout: Article Body (left) + Sidebar with Large Ad 300x600 (right) */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Article Main Body */}
        <div className="flex-1 min-w-0">
          <article className="space-y-4 text-sm md:text-base leading-relaxed text-zinc-800">
            {/* Sapo */}
            <p className="font-bold text-base md:text-lg text-black font-serif italic border-l-4 border-black pl-3 bg-zinc-50 py-2">
              Giải thưởng du lịch thường niên Travel Awards 2026 do Báo điện tử VnExpress và FPT Online đồng tổ chức
              chính thức công bố thể lệ và bộ tiêu chí đánh giá, mở cổng tiếp nhận hồ sơ đề cử trực tuyến từ ngày 16/10
              đến 23:59 ngày 16/11/2026.
            </p>

            <p>
              Trải qua nhiều mùa giải thành công, Travel Awards 2026 trở lại với diện mạo mới mẻ và cơ cấu giải thưởng
              được tái thiết kế khoa học. Năm nay, chương trình chia làm hai nhóm giải thưởng trọng tâm:
              <strong> Nhóm giải thưởng Trụ cột</strong> (tập trung vào điểm đến cấp tỉnh, doanh nghiệp lữ hành, khách sạn,
              resort, hãng hàng không, trải nghiệm du lịch) và <strong> Nhóm giải thưởng Tiên phong</strong> (tôn vinh sáng kiến
              bền vững, du lịch xanh, chuyển đổi số, cộng đồng bản địa và các cá nhân truyền cảm hứng).
            </p>

            {/* Wireframe Article Image */}
            <div className="my-5 space-y-1.5">
              <WireframePlaceholder
                label="[ Ảnh Minh Họa 1: Họp báo công bố Travel Awards 2026 ]"
                sublabel="Đại diện Báo VnExpress, FPT Online và Hội đồng chuyên môn trả lời báo chí"
                aspectRatio="16/9"
              />
              <div className="text-[11px] font-mono text-zinc-500 text-center italic">
                Hình ảnh: Ban tổ chức Travel Awards 2026 tại buổi gặp gỡ các cơ quan thông tấn báo chí.
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold font-mono text-black pt-2">
              Cơ chế đánh giá kết hợp 60% Hội đồng và 40% Độc giả
            </h2>

            <p>
              Điểm nhấn cốt lõi của Travel Awards 2026 là sự minh bạch và có cơ chế kiểm chứng dữ liệu thực tế.
              Hồ sơ sau khi nộp trực tuyến sẽ trải qua vòng sơ tuyển từ ngày 16/11 đến 22/11 để sàng lọc các đơn vị đáp ứng
              đầy đủ điều kiện pháp lý và xác minh số liệu tăng trưởng kinh doanh trong kỳ xét giải.
            </p>

            <p>
              Tiếp đó, các ứng viên lọt vào vòng chung kết sẽ tham gia vòng bình chọn trực tuyến của độc giả (chiếm 40%
              tổng điểm) kết hợp với điểm thẩm định chuyên sâu từ Hội đồng chuyên môn (chiếm 60% tổng điểm).
            </p>

            {/* CTA Callout Inside Article */}
            <div className="border-2 border-black bg-zinc-100 p-4 my-6 font-mono space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-black px-1.5 py-0.2 font-bold text-xs">THÔNG BÁO QUAN TRỌNG</span>
                <span className="font-bold text-xs">CỔNG TIẾP NHẬN HỒ SƠ</span>
              </div>
              <p className="text-xs text-zinc-700 font-sans">
                Cổng nộp hồ sơ đề cử trực tuyến hoạt động trong 31 ngày (16/10 – 16/11/2026). Các cơ quan quản lý, doanh
                nghiệp và cá nhân có thể tải trước checklist giấy tờ để chuẩn bị.
              </p>
              <div className="pt-1 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={onStartNomination}
                  className="bg-black text-white px-4 py-2 text-xs font-bold hover:bg-zinc-800"
                >
                  📝 Vào Form Đăng ký đề cử ngay →
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('rules')}
                  className="bg-white text-black border border-black px-3 py-2 text-xs hover:bg-zinc-100"
                >
                  Xem Thể lệ chi tiết
                </button>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold font-mono text-black pt-2">
              Hệ thống nộp hồ sơ động và lưu nháp thông minh
            </h2>

            <p>
              Thấu hiểu khó khăn của các phòng ban Marketing/PR khi phải gom số liệu từ kế toán, vận hành và pháp chế,
              hệ thống form trực tuyến của Travel Awards 2026 được xây dựng với cơ chế tự động lưu nháp sau mỗi bước.
              Người nộp chỉ cần xác thực email qua OTP một lần là có thể truy cập lại bất cứ lúc nào qua magic link
              cho đến 23:59 ngày 16/11/2026.
            </p>
          </article>
        </div>

        {/* Right Sidebar: 3/ QUẢNG CÁO LARGE (300x600) - Ẩn khi showSideAds = false */}
        {showSideAds && (
          <aside
            aria-label="Cột bên phải bài viết chi tiết"
            className="w-full lg:w-[300px] shrink-0 space-y-4 flex flex-col items-center"
          >
            <div className="sticky top-16 space-y-4">
              <LargeRectangleAd label="QUẢNG CÁO LARGE (300 × 600 px)" />

              <div className="border border-zinc-300 p-3 bg-zinc-50 font-mono text-xs space-y-2">
                <div className="font-bold text-black uppercase">TẢI TÀI LIỆU HỒ SƠ:</div>
                <button
                  type="button"
                  className="w-full p-2 bg-white border border-zinc-400 text-left text-[11px] hover:bg-zinc-100"
                >
                  📥 Checklist giấy tờ (PDF)
                </button>
                <button
                  type="button"
                  className="w-full p-2 bg-white border border-zinc-400 text-left text-[11px] hover:bg-zinc-100"
                >
                  📥 Mẫu hồ sơ offline (DOCX)
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* 2/ VỊ TRÍ QUẢNG CÁO BREAKPAGE (970x250) */}
      <div className="w-full flex justify-center py-4 border-t border-zinc-200 mt-8">
        <BreakpageAd label="BREAKPAGE CUỐI BÀI VIẾT (970 × 250 px)" />
      </div>

      {/* Article Footer & Related Articles */}
      <footer className="mt-8 pt-4 border-t-2 border-black space-y-4">
        <div className="flex items-center justify-between text-xs font-mono">
          <button
            type="button"
            onClick={() => onNavigate('news_list')}
            className="font-bold underline text-black hover:text-zinc-600"
          >
            ← Quay lại danh sách tin tức
          </button>
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500">Chia sẻ:</span>
            <span className="border border-zinc-400 px-1.5 py-0.5 bg-zinc-100">[Facebook]</span>
            <span className="border border-zinc-400 px-1.5 py-0.5 bg-zinc-100">[Zalo]</span>
            <span className="border border-zinc-400 px-1.5 py-0.5 bg-zinc-100">[Sao chép link]</span>
          </div>
        </div>

        {/* Related News Wireframe */}
        <div className="border border-zinc-300 p-4 bg-zinc-50 font-mono text-xs space-y-2">
          <div className="font-bold text-black uppercase">BÀI VIẾT LIÊN QUAN:</div>
          <ul className="space-y-1.5 text-zinc-700 list-disc list-inside">
            <li className="cursor-pointer hover:underline">
              Checklist 6 nhóm giấy tờ và số liệu doanh nghiệp cần chuẩn bị trước khi nộp hồ sơ
            </li>
            <li className="cursor-pointer hover:underline">
              Vì sao Travel Awards 2026 yêu cầu xác thực OTP email ngay tại Bước 3?
            </li>
            <li className="cursor-pointer hover:underline">
              Công bố Hội đồng chuyên môn mùa giải 2026: Đảm bảo tính khách quan và minh bạch
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
