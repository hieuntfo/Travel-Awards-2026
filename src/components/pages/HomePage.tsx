import React from 'react';
import { WireframePlaceholder } from '../WireframePlaceholder';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge } from '../UnfinalizedBadge';
import { BreakpageAd } from '../WireframeAds';
import { AppScreen } from '../../types';
import { CATEGORIES } from '../../data/categories';

interface HomePageProps {
  onNavigate: (screen: AppScreen) => void;
  onStartNomination: () => void;
  showNotes: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onStartNomination,
  showNotes,
}) => {
  const pillarCategories = CATEGORIES.filter((c) => c.pillar === 'pillar');
  const pioneerCategories = CATEGORIES.filter((c) => c.pillar === 'pioneer');

  return (
    <div className="font-sans text-zinc-900 pb-16">
      {/* Reviewer Note */}
      <BusinessRuleNote
        isVisible={showNotes}
        title="Trang chủ (Home Page) - Điểm chạm số 1 trong hành trình nộp hồ sơ"
        rules={[
          'Hero banner có đồng hồ đếm ngược đồng bộ với Phase 1 (Mở cổng 16/10/2026, đóng 23:59 ngày 16/11/2026).',
          'Nút CTA chính "ĐĂNG KÝ ĐỀ CỬ" dẫn trực tiếp vào trang mở đầu M0 của form đề cử.',
          'Khối 15 hạng mục hiển thị nhãn [CHƯA CHỐT - B1] do danh mục chưa thống nhất giữa 3 nguồn tài liệu gốc.',
          'Các tin tức tiêu điểm có link dẫn sang trang Tin tức chi tiết (Lớp 3) để test luồng đọc bài rồi bấm đề cử.',
        ]}
      />

      {/* HERO SECTION */}
      <section className="border-b-2 border-black bg-zinc-50 p-4 md:p-8">
        <div className="max-w-[1240px] w-full mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-600">
            <span className="border border-black bg-white px-2 py-0.5 font-bold">GIẢI THƯỞNG DU LỊCH THƯỜNG NIÊN</span>
            <span>·</span>
            <span>BÁO VNEXPRESS & FPT ONLINE ĐỒNG TỔ CHỨC</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight font-mono text-black">
            TRAVEL AWARDS 2026: TÔN VINH VỊ THẾ DU LỊCH VIỆT NAM
          </h1>

          <p className="text-sm md:text-base text-zinc-700 leading-relaxed font-sans max-w-3xl">
            Giải thưởng thường niên uy tín nhằm vinh danh các thương hiệu, điểm đến, cơ sở lưu trú và cá nhân có đóng góp
            đột phá cho diện mạo du lịch Việt Nam năm 2026. Cơ chế đánh giá kết hợp 60% từ Hội đồng chuyên môn và 40% từ
            độc giả bình chọn.
          </p>

          {/* Countdown & Key Dates Banner */}
          <div className="border-2 border-black bg-zinc-100 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono">
            <div className="space-y-1">
              <div className="text-xs font-bold text-zinc-800">CỔNG ĐĂNG KÝ ĐỀ CỬ CHÍNH THỨC:</div>
              <div className="text-xs text-zinc-600">
                Mở: <strong>16/10/2026</strong> — Đóng: <strong>23:59 ngày 16/11/2026</strong>
              </div>
            </div>
            <div className="border border-black bg-white px-3 py-1.5 text-center">
              <span className="text-[10px] text-zinc-500 block uppercase">Thời gian nhận hồ sơ</span>
              <span className="text-sm font-black text-black">31 NGÀY VÀNG</span>
            </div>
          </div>

          {/* Hero Wireframe Image Placeholder */}
          <WireframePlaceholder
            label="[ Banner Hero Chính: Travel Awards 2026 - Tỷ lệ 16:9 ]"
            sublabel="Hình ảnh đồ họa nhận diện giải thưởng thường niên VnExpress & FPT Online"
            aspectRatio="banner"
          />

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={onStartNomination}
              className="px-6 py-3 border-2 border-black bg-black text-white font-mono font-bold text-sm hover:bg-zinc-800 flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              <span>📝 ĐĂNG KÝ ĐỀ CỬ NGAY</span>
              <span className="text-xs bg-amber-400 text-black px-1.5 py-0.2">Form 8 Bước</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('rules')}
              className="px-5 py-3 border-2 border-black bg-white text-black font-mono font-bold text-sm hover:bg-zinc-100 cursor-pointer"
            >
              📖 Xem Thể Lệ & Tiêu Chí
            </button>

            <button
              type="button"
              onClick={() => onNavigate('voting_list')}
              className="px-4 py-3 border border-zinc-400 bg-zinc-200 text-zinc-800 font-mono text-xs hover:bg-zinc-300 cursor-pointer"
            >
              🗳️ Xem Cổng Bình Chọn (Dự kiến 24/11)
            </button>
          </div>
        </div>
      </section>

      {/* 2/ VỊ TRÍ QUẢNG CÁO BREAKPAGE 1 (970x250) */}
      <div className="w-full flex justify-center py-2 bg-zinc-50 border-b border-zinc-300">
        <BreakpageAd label="BREAKPAGE VỊ TRÍ 1 (DƯỚI HERO)" />
      </div>

      {/* SECTION: 2 NHÓM GIẢI THƯỞNG (15 HẠNG MỤC) */}
      <section className="max-w-[1240px] w-full mx-auto p-4 md:p-6 mt-6 space-y-6">
        <div className="border-b-2 border-black pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg md:text-xl font-bold font-mono text-black uppercase">
              CƠ CẤU 15 HẠNG MỤC GIẢI THƯỞNG
            </h2>
            <p className="text-xs text-zinc-600 font-sans">
              Phân bổ thành 2 nhóm giải thưởng chính theo mô hình v2.1
            </p>
          </div>
          <UnfinalizedBadge code="B1" label="Danh mục 15 hạng mục đang chờ PO & Ban Du lịch chốt" />
        </div>

        {/* 2 Cột nhóm giải */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nhóm Trụ Cột */}
          <div className="border-2 border-black bg-white p-4 space-y-3">
            <div className="border-b border-zinc-300 pb-2">
              <span className="bg-black text-white text-[10px] font-mono px-2 py-0.5 font-bold uppercase">
                NHÓM 1 (6 HẠNG MỤC)
              </span>
              <h3 className="font-bold text-base font-mono mt-1">GIẢI THƯỞNG TRỤ CỘT</h3>
              <p className="text-xs text-zinc-600 mt-0.5">
                Tôn vinh các thương hiệu lớn, hạ tầng, doanh nghiệp lữ hành và cơ sở lưu trú nền tảng.
              </p>
            </div>

            <div className="space-y-2">
              {pillarCategories.map((cat, i) => (
                <div
                  key={cat.id}
                  onClick={onStartNomination}
                  className="border border-zinc-300 p-2.5 bg-zinc-50 hover:bg-zinc-100 hover:border-black cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-900">
                      {i + 1}. {cat.name}
                    </span>
                    <span className="text-[10px] font-mono bg-zinc-200 px-1 border border-zinc-400">
                      {cat.code}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-600 line-clamp-1 mt-1">{cat.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nhóm Tiên Phong */}
          <div className="border-2 border-black bg-white p-4 space-y-3">
            <div className="border-b border-zinc-300 pb-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="bg-zinc-800 text-white text-[10px] font-mono px-2 py-0.5 font-bold uppercase">
                  NHÓM 2 (9 HẠNG MỤC)
                </span>
                <UnfinalizedBadge code="B2" label="Chưa có đặc tả số liệu Mục III" />
              </div>
              <h3 className="font-bold text-base font-mono mt-1">GIẢI THƯỞNG TIÊN PHONG</h3>
              <p className="text-xs text-zinc-600 mt-0.5">
                Tôn vinh cá nhân, sáng kiến xanh, sản phẩm đột phá và chuyển đổi số tiêu biểu.
              </p>
            </div>

            <div className="space-y-2">
              {pioneerCategories.map((cat, i) => (
                <div
                  key={cat.id}
                  onClick={onStartNomination}
                  className="border border-zinc-300 p-2 bg-zinc-50 hover:bg-zinc-100 hover:border-black cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-900">
                      {i + 1}. {cat.name}
                    </span>
                    <span className="text-[10px] font-mono bg-zinc-200 px-1 border border-zinc-400">
                      {cat.code}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-600 line-clamp-1 mt-0.5">{cat.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: LỘ TRÌNH MÙA GIẢI 2026 */}
      <section className="max-w-[1240px] w-full mx-auto p-4 md:p-6 mt-2">
        <div className="border-2 border-black bg-zinc-100 p-4 space-y-3">
          <h2 className="text-base font-bold font-mono uppercase text-black">
            LỘ TRÌNH TỔ CHỨC TRAVEL AWARDS 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            <div className="border-2 border-black bg-white p-3 space-y-1">
              <span className="bg-amber-400 text-black px-1.5 py-0.2 font-bold text-[10px] inline-block">
                GIAI ĐOẠN 1 (ĐANG DIỄN RA)
              </span>
              <div className="font-bold text-sm">Nhận hồ sơ đề cử</div>
              <div className="text-zinc-600 text-[11px]">16/10/2026 – 16/11/2026</div>
              <p className="text-[10px] text-zinc-500 font-sans pt-1">
                Thu thập hồ sơ trực tuyến qua form 8 bước. Lưu nháp liên tục.
              </p>
            </div>

            <div className="border border-zinc-400 bg-zinc-50 p-3 space-y-1">
              <span className="bg-zinc-300 text-zinc-800 px-1.5 py-0.2 font-bold text-[10px] inline-block">
                GIAI ĐOẠN 2
              </span>
              <div className="font-bold text-sm">Sơ tuyển hồ sơ</div>
              <div className="text-zinc-600 text-[11px]">16/11 – 22/11/2026</div>
              <p className="text-[10px] text-zinc-500 font-sans pt-1">
                BTC kiểm tra tính hợp lệ pháp lý, đối chiếu số liệu và xét duyệt vào vòng sau.
              </p>
            </div>

            <div className="border border-zinc-400 bg-zinc-50 p-3 space-y-1">
              <span className="bg-zinc-300 text-zinc-800 px-1.5 py-0.2 font-bold text-[10px] inline-block">
                GIAI ĐOẠN 3
              </span>
              <div className="font-bold text-sm">Bình chọn & Chấm điểm</div>
              <div className="text-zinc-600 text-[11px]">24/11 – 10/12/2026</div>
              <p className="text-[10px] text-zinc-500 font-sans pt-1">
                Độc giả bình chọn (40% điểm) + Hội đồng chuyên môn chấm điểm độc lập (60%).
              </p>
            </div>

            <div className="border border-zinc-400 bg-zinc-50 p-3 space-y-1">
              <span className="bg-zinc-300 text-zinc-800 px-1.5 py-0.2 font-bold text-[10px] inline-block">
                GIAI ĐOẠN 4
              </span>
              <div className="font-bold text-sm">Gala Vinh danh</div>
              <div className="text-zinc-600 text-[11px]">Tháng 12/2026</div>
              <p className="text-[10px] text-zinc-500 font-sans pt-1">
                Lễ trao giải trực tiếp phát sóng trên VnExpress và các nền tảng số.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2/ VỊ TRÍ QUẢNG CÁO BREAKPAGE 2 (970x250) */}
      <div className="w-full flex justify-center py-2 bg-zinc-50 border-y border-zinc-300">
        <BreakpageAd label="BREAKPAGE VỊ TRÍ 2 (GIỮA LỘ TRÌNH VÀ TIN TỨC)" />
      </div>

      {/* SECTION: TIN TỨC TIÊU ĐIỂM (LỚP 2 & 3 CONNECTION) */}
      <section className="max-w-[1240px] w-full mx-auto p-4 md:p-6 mt-4 space-y-4">
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
          <h2 className="text-lg font-bold font-mono uppercase text-black">
            TIN TỨC & HOẠT ĐỘNG GIẢI THƯỞNG
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('news_list')}
            className="text-xs font-mono font-bold underline hover:text-zinc-700"
          >
            Xem tất cả tin tức →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Chính thức khởi động giải thưởng Travel Awards 2026 với 15 hạng mục đột phá',
              date: '04/10/2026',
              category: 'Thông cáo báo chí',
              desc: 'VnExpress và FPT Online mở cổng tiếp nhận đề cử trực tuyến từ ngày 16/10 đến 16/11/2026...',
            },
            {
              title: 'Hướng dẫn chuẩn bị hồ sơ minh chứng đạt chuẩn theo yêu cầu Hội đồng',
              date: '02/10/2026',
              category: 'Cẩm nang hồ sơ',
              desc: 'Chi tiết danh mục giấy tờ pháp lý, số liệu kinh doanh và báo cáo kiểm toán cần cung cấp...',
            },
            {
              title: 'Công bố Hội đồng chuyên môn mùa giải 2026: Đảm bảo tính khách quan và minh bạch',
              date: '28/09/2026',
              category: 'Hoạt động giải',
              desc: 'Hội đồng quy tụ các chuyên gia đầu ngành trong lĩnh vực du lịch, khách sạn và truyền thông...',
            },
          ].map((news, i) => (
            <div
              key={i}
              onClick={() => onNavigate('news_detail')}
              className="border-2 border-zinc-400 bg-white p-3 space-y-2 hover:border-black cursor-pointer transition-all"
            >
              <WireframePlaceholder
                label={`[ Ảnh Tin tức #${i + 1} - 16:9 ]`}
                aspectRatio="16/9"
              />
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="bg-zinc-100 border border-zinc-300 px-1 text-zinc-700 font-semibold">
                  {news.category}
                </span>
                <span>{news.date}</span>
              </div>
              <h3 className="font-bold text-xs font-mono text-black leading-snug line-clamp-2">
                {news.title}
              </h3>
              <p className="text-zinc-600 text-[11px] font-sans line-clamp-2">
                {news.desc}
              </p>
              <div className="text-[10px] font-mono font-bold text-black underline pt-1">
                Đọc tiếp →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER WIREFRAME */}
      <footer className="border-t-2 border-black bg-zinc-900 text-zinc-300 p-6 mt-12 font-mono text-xs">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-700 pb-4">
            <div className="space-y-1">
              <div className="font-bold text-sm text-white">CHUYÊN TRANG TRAVEL AWARDS 2026</div>
              <div className="text-[11px] text-zinc-400">Cơ quan chủ quản: Báo điện tử VnExpress & FPT Online</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onStartNomination}
                className="bg-amber-400 text-black px-3 py-1.5 font-bold hover:bg-amber-300"
              >
                Nộp hồ sơ ngay
              </button>
              <button
                type="button"
                onClick={() => onNavigate('rules')}
                className="bg-zinc-800 text-white px-3 py-1.5 border border-zinc-600 hover:bg-zinc-700"
              >
                Xem quy chế
              </button>
            </div>
          </div>
          <div className="text-[10px] text-zinc-500 flex flex-wrap justify-between gap-2">
            <span>© 2026 Báo điện tử VnExpress. Toàn bộ quyền được bảo lưu.</span>
            <span>Hotline hỗ trợ hồ sơ: 1900 633 000 | Email: travelawards@vnexpress.net</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
