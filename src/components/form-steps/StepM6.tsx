import React from 'react';
import { NominationData, SimulationState } from '../../types';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge, UnfinalizedContainer } from '../UnfinalizedBadge';
import { CATEGORIES } from '../../data/categories';

interface StepM6Props {
  data: NominationData;
  onChange: (updates: Partial<NominationData>) => void;
  onNext: () => void;
  onBack: () => void;
  simState: SimulationState;
  showNotes: boolean;
}

export const StepM6: React.FC<StepM6Props> = ({
  data,
  onChange,
  onNext,
  onBack,
  simState,
  showNotes,
}) => {
  const currentCat = CATEGORIES.find((c) => c.id === data.categoryId);
  const isPillar = currentCat?.pillar === 'pillar';
  const catId = data.categoryId;

  // Growth calculation helpers
  const calcGrowth = (curr: number | string | undefined, prev: number | string | undefined) => {
    const c = parseFloat(String(curr || ''));
    const p = parseFloat(String(prev || ''));
    if (!isNaN(c) && !isNaN(p) && p > 0) {
      const rate = ((c - p) / p) * 100;
      const formatted = rate.toFixed(1);
      return rate >= 0 ? `+${formatted}%` : `${formatted}%`;
    }
    return null;
  };

  const touristGrowth = calcGrowth(data.touristCountCurrent, data.touristCountPrevious);
  const revenueGrowth = calcGrowth(data.revenueCurrent, data.revenuePrevious);

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M6 – Bước 6: Số liệu hoạt động (Mục III)"
        rules={[
          'Banner kỳ xét giải 12 tháng [CHƯA CHỐT – B3: 01/10/2025 - 30/09/2026] giúp thống nhất kỳ đối chiếu.',
          'Banner cam kết bảo mật số liệu bắt buộc: Giải tỏa lo ngại lộ bí mật kinh doanh cho các doanh nghiệp lớn.',
          'Tự động tính % tăng trưởng khi người nộp điền đủ 2 năm giúp tự soát lỗi đơn vị (nhầm triệu/tỷ).',
          'Dựng đầy đủ biểu mẫu mẫu cho 2 nhóm chính: Điểm đến và Khách sạn. Các hạng mục Tiên phong hiển thị nhãn [CHƯA CHỐT - B2].',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-5">
        <div className="border-b-2 border-black pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 6/8 · MỤC III</span>
            <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
              SỐ LIỆU HOẠT ĐỘNG TRONG KỲ XÉT GIẢI
            </h2>
            <div className="text-xs text-zinc-600 mt-0.5 font-mono">
              Hạng mục: <strong>{currentCat?.name || 'Chưa chọn'}</strong>
            </div>
          </div>
        </div>

        {/* TOP BANNER 1: KỲ XÉT GIẢI (CHƯA CHỐT - B3) */}
        <div className="border-2 border-dashed border-amber-600 bg-amber-50 p-3 font-mono text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-bold uppercase">MỐC THỜI GIAN ĐỐI CHIẾU:</span>
              <UnfinalizedBadge code="B3" label="Định nghĩa kỳ xét giải" />
            </div>
            <div>• Kỳ xét giải: <strong>01/10/2025 – 30/09/2026</strong> (12 tháng)</div>
            <div>• Kỳ năm trước so sánh: <strong>01/10/2024 – 30/09/2025</strong></div>
          </div>
          <span className="text-[10px] text-amber-800 italic shrink-0">Không tính tròn năm 2026</span>
        </div>

        {/* TOP BANNER 2: BẢO MẬT SỐ LIỆU */}
        <div className="border border-zinc-700 bg-zinc-100 p-3 font-mono text-xs text-zinc-800 flex items-start gap-2">
          <span className="text-base">🔒</span>
          <div>
            <strong className="text-black">CAM KẾT BẢO MẬT SỐ LIỆU KINH DOANH:</strong>
            <p className="text-[11px] text-zinc-600 mt-0.5 font-sans">
              Toàn bộ số liệu doanh thu, công suất phòng và hợp đồng chỉ phục vụ công tác đối chiếu nội bộ của
              Hội đồng chuyên môn và Tổ thư ký kiểm toán, <strong>tuyệt đối không công bố ra công chúng</strong> dưới bất kỳ hình thức nào.
            </p>
          </div>
        </div>

        {/* DYNAMIC FORM BY CATEGORY */}

        {/* CASE 1: ĐIỂM ĐẾN DU LỊCH CỦA NĂM */}
        {catId === 'pillar_destination' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="font-bold text-black border-b border-zinc-300 pb-1">
              BẢNG CHỈ SỐ DU LỊCH ĐỊA PHƯƠNG
            </div>

            {/* Lượt khách & % Tăng trưởng */}
            <div className="border border-zinc-300 p-3 bg-zinc-50 space-y-2">
              <label className="block font-bold text-zinc-900">
                1. Tổng lượt khách du lịch: <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-zinc-600 text-[11px]">Kỳ xét giải (10/2025 - 09/2026): *</span>
                  <div className="flex">
                    <input
                      type="number"
                      value={data.touristCountCurrent || ''}
                      onChange={(e) => onChange({ touristCountCurrent: e.target.value })}
                      placeholder="VD: 5500000"
                      className="w-full p-2 border border-black bg-white"
                    />
                    <span className="border border-l-0 border-black bg-zinc-200 px-2 py-2 text-zinc-700">Lượt</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-zinc-600 text-[11px]">Kỳ năm trước (10/2024 - 09/2025): *</span>
                  <div className="flex">
                    <input
                      type="number"
                      value={data.touristCountPrevious || ''}
                      onChange={(e) => onChange({ touristCountPrevious: e.target.value })}
                      placeholder="VD: 4600000"
                      className="w-full p-2 border border-black bg-white"
                    />
                    <span className="border border-l-0 border-black bg-zinc-200 px-2 py-2 text-zinc-700">Lượt</span>
                  </div>
                </div>
              </div>

              {touristGrowth && (
                <div className="border border-emerald-600 bg-emerald-50 text-emerald-800 p-2 font-bold flex items-center justify-between">
                  <span>Hệ thống tự động tính tăng trưởng:</span>
                  <span className="text-sm">{touristGrowth}</span>
                </div>
              )}
            </div>

            {/* Doanh thu du lịch & % Tăng trưởng */}
            <div className="border border-zinc-300 p-3 bg-zinc-50 space-y-2">
              <label className="block font-bold text-zinc-900">
                2. Tổng doanh thu du lịch toàn tỉnh/thành: <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-zinc-600 text-[11px]">Kỳ xét giải: *</span>
                  <div className="flex">
                    <input
                      type="number"
                      value={data.revenueCurrent || ''}
                      onChange={(e) => onChange({ revenueCurrent: e.target.value })}
                      placeholder="VD: 14200"
                      className="w-full p-2 border border-black bg-white"
                    />
                    <span className="border border-l-0 border-black bg-zinc-200 px-2 py-2 text-zinc-700">Tỷ VNĐ</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-zinc-600 text-[11px]">Kỳ năm trước: *</span>
                  <div className="flex">
                    <input
                      type="number"
                      value={data.revenuePrevious || ''}
                      onChange={(e) => onChange({ revenuePrevious: e.target.value })}
                      placeholder="VD: 11400"
                      className="w-full p-2 border border-black bg-white"
                    />
                    <span className="border border-l-0 border-black bg-zinc-200 px-2 py-2 text-zinc-700">Tỷ VNĐ</span>
                  </div>
                </div>
              </div>

              {revenueGrowth && (
                <div className="border border-emerald-600 bg-emerald-50 text-emerald-800 p-2 font-bold flex items-center justify-between">
                  <span>Hệ thống tự động tính tăng trưởng:</span>
                  <span className="text-sm">{revenueGrowth}</span>
                </div>
              )}
            </div>

            {/* 3 Text fields for Destination */}
            <div className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">
                  3. Hạ tầng & sản phẩm du lịch mới đưa vào vận hành: *
                </label>
                <textarea
                  rows={3}
                  value={data.textNewInfrastructure || ''}
                  onChange={(e) => onChange({ textNewInfrastructure: e.target.value })}
                  placeholder="Các tuyến cao tốc, sân bay, bến cảng hoặc khu vui chơi mới..."
                  className="w-full p-2 border border-black bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">
                  4. Các chiến dịch xúc tiến, quảng bá du lịch tiêu biểu: *
                </label>
                <textarea
                  rows={3}
                  value={data.textPromotion || ''}
                  onChange={(e) => onChange({ textPromotion: e.target.value })}
                  placeholder="Lễ hội hoa, Festival biển, chiến dịch quảng bá quốc tế..."
                  className="w-full p-2 border border-black bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">
                  5. Công tác bảo tồn di sản, bảo vệ môi trường & gắn kết cộng đồng: *
                </label>
                <textarea
                  rows={3}
                  value={data.textPreservation || ''}
                  onChange={(e) => onChange({ textPreservation: e.target.value })}
                  placeholder="Chính sách bảo vệ cảnh quan, văn hóa bản địa, giảm rác thải nhựa..."
                  className="w-full p-2 border border-black bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* CASE 2: KHÁCH SẠN / RESORT */}
        {(catId === 'pillar_hotel' || catId === 'pillar_resort') && (
          <div className="space-y-4 font-mono text-xs">
            <div className="font-bold text-black border-b border-zinc-300 pb-1">
              CHỈ SỐ VẬN HÀNH & CHẤT LƯỢNG LƯU TRÚ
            </div>

            {/* Hạng sao & Số phòng */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">Hạng sao / Tiêu chuẩn: *</label>
                <select
                  value={data.hotelStar || ''}
                  onChange={(e) => onChange({ hotelStar: e.target.value })}
                  className="w-full p-2 border border-black bg-white"
                >
                  <option value="">-- Chọn xếp hạng --</option>
                  <option value="5_star">5 sao (Theo Quyết định Tổng cục Du lịch)</option>
                  <option value="4_star">4 sao</option>
                  <option value="3_star">3 sao</option>
                  <option value="boutique">Tiêu chuẩn Boutique / Tương đương</option>
                  <option value="unrated">Chưa xếp hạng chính thức</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">Tổng số phòng / villa: *</label>
                <div className="flex">
                  <input
                    type="number"
                    value={data.hotelRooms || ''}
                    onChange={(e) => onChange({ hotelRooms: e.target.value })}
                    placeholder="VD: 320"
                    className="w-full p-2 border border-black bg-white"
                  />
                  <span className="border border-l-0 border-black bg-zinc-200 px-2 py-2 text-zinc-700">Phòng</span>
                </div>
              </div>
            </div>

            {/* Công suất bình quân & Đêm phòng */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">Công suất phòng bình quân (kỳ xét giải): *</label>
                <div className="flex">
                  <input
                    type="number"
                    value={data.hotelOccupancyRate || ''}
                    onChange={(e) => onChange({ hotelOccupancyRate: e.target.value })}
                    placeholder="VD: 78.5"
                    className="w-full p-2 border border-black bg-white"
                  />
                  <span className="border border-l-0 border-black bg-zinc-200 px-3 py-2 text-zinc-700">%</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">Tổng số đêm phòng bán ra: *</label>
                <div className="flex">
                  <input
                    type="number"
                    value={data.hotelRoomNightsSold || ''}
                    onChange={(e) => onChange({ hotelRoomNightsSold: e.target.value })}
                    placeholder="VD: 85200"
                    className="w-full p-2 border border-black bg-white"
                  />
                  <span className="border border-l-0 border-black bg-zinc-200 px-2 py-2 text-zinc-700">Đêm</span>
                </div>
              </div>
            </div>

            {/* Điểm đánh giá OTA */}
            <div className="border border-zinc-300 p-3 bg-zinc-50 space-y-2">
              <div className="font-bold text-black flex items-center justify-between">
                <span>ĐIỂM ĐÁNH GIÁ TRỰC TUYẾN (OTA RATINGS)</span>
                <span className="text-[10px] text-zinc-500 font-normal">Ghi rõ thang điểm</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <span className="text-[10px] text-zinc-600 block">Booking.com (/10)</span>
                  <input
                    type="text"
                    value={data.otaBooking || ''}
                    onChange={(e) => onChange({ otaBooking: e.target.value })}
                    placeholder="9.2"
                    className="w-full p-1.5 border border-zinc-700 bg-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-600 block">Agoda (/10)</span>
                  <input
                    type="text"
                    value={data.otaAgoda || ''}
                    onChange={(e) => onChange({ otaAgoda: e.target.value })}
                    placeholder="9.0"
                    className="w-full p-1.5 border border-zinc-700 bg-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-600 block">Tripadvisor (/5)</span>
                  <input
                    type="text"
                    value={data.otaTripadvisor || ''}
                    onChange={(e) => onChange({ otaTripadvisor: e.target.value })}
                    placeholder="4.8"
                    className="w-full p-1.5 border border-zinc-700 bg-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-600 block">Nền tảng khác</span>
                  <input
                    type="text"
                    value={data.otaOther || ''}
                    onChange={(e) => onChange({ otaOther: e.target.value })}
                    placeholder="Google 4.7"
                    className="w-full p-1.5 border border-zinc-700 bg-white"
                  />
                </div>
              </div>

              <div className="pt-1">
                <span className="text-[10px] text-zinc-600 block">Link trang đánh giá trực tuyến để kiểm chứng (URL):</span>
                <input
                  type="url"
                  value={data.otaReviewUrl || ''}
                  onChange={(e) => onChange({ otaReviewUrl: e.target.value })}
                  placeholder="https://www.tripadvisor.com/Hotel_Review-..."
                  className="w-full p-2 border border-zinc-400 bg-white"
                />
              </div>
            </div>

            {/* 2 Text fields for Hotel */}
            <div className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">
                  Đầu tư nâng cấp & Đổi mới trải nghiệm khách hàng: *
                </label>
                <textarea
                  rows={3}
                  value={data.textHotelInnovation || ''}
                  onChange={(e) => onChange({ textHotelInnovation: e.target.value })}
                  placeholder="Nâng cấp phòng ốc, công nghệ check-in tự động, nhà hàng mới, spa..."
                  className="w-full p-2 border border-black bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">
                  Thực hành du lịch bền vững & Tiết kiệm năng lượng: *
                </label>
                <textarea
                  rows={3}
                  value={data.textHotelSustainability || ''}
                  onChange={(e) => onChange({ textHotelSustainability: e.target.value })}
                  placeholder="Loại bỏ chai nhựa 1 lần, hệ thống xử lý nước thải, năng lượng mặt trời..."
                  className="w-full p-2 border border-black bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* CASE 3: CÁC HẠNG MỤC TRỤ CỘT CÒN LẠI */}
        {isPillar && catId !== 'pillar_destination' && catId !== 'pillar_hotel' && catId !== 'pillar_resort' && (
          <div className="border border-zinc-400 p-4 bg-zinc-50 space-y-3 font-mono text-xs">
            <div className="font-bold text-black">
              BỘ CHỈ SỐ ĐẶC THÙ: {currentCat?.name}
            </div>
            <p className="text-zinc-600 font-sans text-xs">
              Các trường thông số chuyên ngành đã được chuẩn hóa theo Mục 3.3 PRD v2.1:
            </p>
            <ul className="list-disc list-inside space-y-1 text-zinc-800">
              {catId === 'pillar_travel_agency' && (
                <>
                  <li>Doanh thu và nộp ngân sách nhà nước (Tỷ đồng)</li>
                  <li>Tổng lượt khách phục vụ (Khách nội địa & Khách quốc tế)</li>
                  <li>Quy mô đội ngũ HDV có thẻ hành nghề & Nhân sự CSKH (Tách 2 ô số)</li>
                </>
              )}
              {catId === 'pillar_airline' && (
                <>
                  <li>Mạng lưới đường bay nội địa & quốc tế phục vụ du lịch</li>
                  <li>Tần suất chuyến bay/tuần và Chỉ số đúng giờ (OTP %)</li>
                  <li>Chương trình liên kết kích cầu du lịch cùng các tỉnh/thành</li>
                </>
              )}
              {catId === 'pillar_experience' && (
                <>
                  <li>Thời gian triển khai & Địa điểm vận hành</li>
                  <li>Số lượng khách tham gia trải nghiệm thực tế</li>
                  <li>Chỉ số social reach & engagement (Bắt buộc kèm screenshot ở Bước 7)</li>
                </>
              )}
            </ul>
            <div className="pt-2">
              <input
                type="text"
                placeholder="Nhập thông số bổ sung..."
                className="w-full p-2 border border-zinc-400 bg-white"
              />
            </div>
          </div>
        )}

        {/* CASE 4: 9 HẠNG MỤC TIÊN PHONG (CHƯA CHỐT - B2) */}
        {!isPillar && (
          <UnfinalizedContainer
            code="B2"
            title="9/15 Hạng mục nhóm Tiên phong chưa có đặc tả số liệu Mục III"
            description="Ban Du lịch và Hội đồng chuyên môn đang hoàn thiện bộ tiêu chí chi tiết cho nhóm Tiên phong. Hệ thống tạm thời hiển thị khung báo cáo tổng quan định tính & định lượng để nhận hồ sơ."
          >
            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="block font-bold text-amber-950">
                  Tác động định lượng đo đếm được của sáng kiến/sản phẩm: *
                </label>
                <textarea
                  rows={3}
                  placeholder="VD: Số lượng rác nhựa thu gom, số người dân địa phương được hưởng lợi, số lượt reach viral..."
                  className="w-full p-2 border border-zinc-700 bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-amber-950">
                  Khả năng nhân rộng mô hình trong cộng đồng du lịch: *
                </label>
                <textarea
                  rows={2}
                  placeholder="Mô hình có thể chuyển giao hoặc áp dụng cho các đơn vị khác ra sao..."
                  className="w-full p-2 border border-zinc-700 bg-white"
                />
              </div>
            </div>
          </UnfinalizedContainer>
        )}

        {/* Navigation Buttons */}
        <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3 font-mono">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2.5 border border-zinc-400 bg-zinc-100 text-xs font-bold text-zinc-700 hover:bg-zinc-200"
          >
            ← Quay lại Mục II
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Tiếp tục sang Tải hồ sơ & Minh chứng →
          </button>
        </div>
      </div>
    </div>
  );
};
