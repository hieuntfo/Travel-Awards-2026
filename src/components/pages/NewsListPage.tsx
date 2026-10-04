import React, { useState } from 'react';
import { WireframePlaceholder } from '../WireframePlaceholder';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { BreakpageAd, LargeRectangleAd } from '../WireframeAds';
import { AppScreen } from '../../types';

interface NewsListPageProps {
  onNavigate: (screen: AppScreen) => void;
  onStartNomination: () => void;
  showNotes: boolean;
  showSideAds?: boolean;
}

export const NewsListPage: React.FC<NewsListPageProps> = ({
  onNavigate,
  onStartNomination,
  showNotes,
  showSideAds = false,
}) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'press', label: 'Thông cáo báo chí' },
    { id: 'guidelines', label: 'Hướng dẫn hồ sơ' },
    { id: 'events', label: 'Hoạt động giải' },
    { id: 'stories', label: 'Câu chuyện doanh nghiệp' },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Chính thức khởi động giải thưởng Travel Awards 2026 với 15 hạng mục đột phá',
      date: '04/10/2026 09:30',
      category: 'Thông cáo báo chí',
      excerpt: 'Báo VnExpress và FPT Online công bố thể lệ và bộ tiêu chí giải thưởng thường niên Travel Awards 2026, mở cổng tiếp nhận hồ sơ từ ngày 16/10 đến 23:59 ngày 16/11/2026.',
      author: 'Ban Du lịch',
      readTime: '3 phút đọc',
    },
    {
      id: 2,
      title: 'Checklist 6 nhóm giấy tờ và số liệu doanh nghiệp cần chuẩn bị trước khi nộp hồ sơ',
      date: '02/10/2026 14:15',
      category: 'Hướng dẫn hồ sơ',
      excerpt: 'Để tiết kiệm thời gian và đảm bảo hồ sơ hợp lệ tại vòng sơ tuyển, doanh nghiệp lữ hành, khách sạn và điểm đến cần tổng hợp trước số liệu kinh doanh và báo cáo kiểm toán.',
      author: 'Tổ Thư ký Hội đồng',
      readTime: '5 phút đọc',
    },
    {
      id: 3,
      title: 'Vì sao Travel Awards 2026 yêu cầu xác thực OTP email ngay tại Bước 3?',
      date: '30/09/2026 11:00',
      category: 'Thông cáo báo chí',
      excerpt: 'Cơ chế OTP email và magic link giúp người nộp hồ sơ bảo mật dữ liệu số liệu kinh doanh, đồng thời có thể lưu nháp và quay lại hoàn thiện hồ sơ trên nhiều thiết bị.',
      author: 'Đội ngũ Kỹ thuật Tech',
      readTime: '4 phút đọc',
    },
    {
      id: 4,
      title: 'Hội đồng chuyên môn: 60% điểm số quyết định từ những chỉ số phát triển thực chất',
      date: '28/09/2026 16:45',
      category: 'Hoạt động giải',
      excerpt: 'Chủ tịch Hội đồng giám khảo chia sẻ về phương pháp chấm điểm độc lập kết hợp giữa báo cáo số liệu thực tế của doanh nghiệp và thẩm định thực tế của chuyên gia.',
      author: 'Ban Du lịch',
      readTime: '6 phút đọc',
    },
    {
      id: 5,
      title: 'Thực hành du lịch xanh và câu chuyện tiên phong giảm thiểu rác thải nhựa tại các khu nghỉ dưỡng',
      date: '25/09/2026 08:30',
      category: 'Câu chuyện doanh nghiệp',
      excerpt: 'Hạng mục Sáng kiến du lịch bền vững và Điểm đến du lịch xanh thu hút sự quan tâm lớn từ các tổ chức bảo tồn và cộng đồng du lịch bản địa.',
      author: 'VnExpress Du lịch',
      readTime: '4 phút đọc',
    },
  ];

  return (
    <div className="max-w-[1240px] w-full mx-auto p-4 md:p-6 font-sans text-zinc-900 pb-16">
      {/* Reviewer Note */}
      <BusinessRuleNote
        isVisible={showNotes}
        title="Trang danh sách Tin tức (News List) - Lớp trang số 2"
        rules={[
          'Cung cấp thông tin truyền thông chính thức, thông cáo báo chí và hướng dẫn nộp hồ sơ cho các đơn vị tham gia.',
          'Banner CTA cố định trên đầu trang nhắc nhở thời hạn nộp hồ sơ (16/10 - 16/11) để chuyển đổi độc giả thành người nộp hồ sơ.',
          'Bấm vào bất kỳ bài viết nào để chuyển sang Lớp 3 (Tin tức chi tiết).',
        ]}
      />

      {/* Breadcrumb */}
      <div className="text-xs font-mono text-zinc-500 mb-3 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="hover:underline text-zinc-700"
        >
          Trang chủ
        </button>
        <span>/</span>
        <span className="text-black font-bold">Tin tức & Sự kiện</span>
      </div>

      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold font-mono uppercase text-black">
            TIN TỨC & HOẠT ĐỘNG GIẢI THƯỞNG
          </h1>
          <p className="text-xs text-zinc-600 mt-1">
            Cập nhật diễn biến mới nhất của Travel Awards 2026 và hướng dẫn tham gia đề cử
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onStartNomination}
          className="px-3.5 py-1.5 border-2 border-black bg-amber-400 text-black font-mono font-bold text-xs hover:bg-amber-300"
        >
          📝 Nộp hồ sơ đề cử
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 border-b border-zinc-300 pb-3 mb-5 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveTab(cat.id)}
            className={`px-3 py-1 border transition-all ${
              activeTab === cat.id
                ? 'bg-black text-white border-black font-bold'
                : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:bg-zinc-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Content Layout with Right Sidebar (Large Ad 300x600) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: News Articles Feed */}
        <div className="flex-1 space-y-4">
          {newsItems.map((item) => (
            <article
              key={item.id}
              onClick={() => onNavigate('news_detail')}
              className="border-2 border-zinc-300 bg-white p-3.5 hover:border-black transition-all cursor-pointer flex flex-col md:flex-row gap-4"
            >
              {/* Thumbnail Placeholder */}
              <div className="w-full md:w-56 shrink-0">
                <WireframePlaceholder
                  label={`[ Ảnh Tin #${item.id} ]`}
                  aspectRatio="16/9"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 mb-1">
                    <span className="border border-zinc-400 bg-zinc-100 px-1.5 py-0.2 font-semibold text-zinc-800">
                      {item.category}
                    </span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>

                  <h2 className="text-sm md:text-base font-bold font-mono text-black hover:underline leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-xs text-zinc-600 font-sans mt-1.5 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-200 font-mono text-[10px] text-zinc-500">
                  <span>Tác giả: {item.author}</span>
                  <span className="font-bold text-black underline">Xem chi tiết bài viết →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Sidebar: 3/ QUẢNG CÁO LARGE (300x600) - Ẩn khi showSideAds = false */}
        {showSideAds && (
          <aside
            aria-label="Cột bên phải trang tin tức"
            className="w-full lg:w-[300px] shrink-0 space-y-4 flex flex-col items-center"
          >
            <LargeRectangleAd label="QUẢNG CÁO LARGE (300 × 600 px)" />

            <div className="w-full border border-zinc-300 bg-zinc-50 p-3 font-mono text-xs space-y-2">
              <div className="font-bold text-black border-b border-zinc-200 pb-1">
                CHỦ ĐỀ ĐƯỢC QUAN TÂM:
              </div>
              <ul className="space-y-1 text-zinc-600 text-[11px] list-disc list-inside">
                <li>Hướng dẫn nộp hồ sơ trực tuyến</li>
                <li>Hạng mục Điểm đến của năm</li>
                <li>Danh sách Hội đồng chuyên môn</li>
                <li>Quy định bảo mật số liệu kinh doanh</li>
              </ul>
            </div>
          </aside>
        )}
      </div>

      {/* 2/ VỊ TRÍ QUẢNG CÁO BREAKPAGE (970x250) */}
      <div className="w-full flex justify-center py-4 border-t border-zinc-200 mt-6">
        <BreakpageAd label="BREAKPAGE TRANG TIN TỨC (970 × 250 px)" />
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1.5 mt-8 font-mono text-xs">
        <button type="button" className="border border-zinc-400 px-2 py-1 bg-zinc-100 text-zinc-400 cursor-not-allowed">
          ← Trước
        </button>
        <button type="button" className="border-2 border-black px-2.5 py-1 bg-black text-white font-bold">
          1
        </button>
        <button type="button" className="border border-zinc-300 px-2.5 py-1 bg-white hover:bg-zinc-100">
          2
        </button>
        <button type="button" className="border border-zinc-300 px-2.5 py-1 bg-white hover:bg-zinc-100">
          3
        </button>
        <button type="button" className="border border-zinc-400 px-2 py-1 bg-zinc-100 text-zinc-700 hover:bg-zinc-200">
          Sau →
        </button>
      </div>
    </div>
  );
};
