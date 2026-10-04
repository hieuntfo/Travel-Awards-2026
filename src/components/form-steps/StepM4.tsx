import React, { useRef, useEffect } from 'react';
import { NominationData, SimulationState } from '../../types';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge, UnfinalizedContainer } from '../UnfinalizedBadge';
import { CATEGORIES } from '../../data/categories';

interface StepM4Props {
  data: NominationData;
  onChange: (updates: Partial<NominationData>) => void;
  onNext: () => void;
  onBack: () => void;
  simState: SimulationState;
  showNotes: boolean;
}

export const StepM4: React.FC<StepM4Props> = ({
  data,
  onChange,
  onNext,
  onBack,
  simState,
  showNotes,
}) => {
  const currentCategory = CATEGORIES.find((c) => c.id === data.categoryId);
  const isIndividual = currentCategory?.isIndividual || data.pillar === 'pioneer' && (data.categoryId === 'pioneer_personality' || data.categoryId === 'pioneer_ambassador');
  const isDestination = data.categoryId === 'pillar_destination';

  const firstErrorRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to first error if in input_error simulation state
  useEffect(() => {
    if (simState === 'input_error' && firstErrorRef.current) {
      firstErrorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [simState]);

  const provinces = [
    'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Quảng Ninh', 'Khánh Hòa',
    'Kiên Giang (Phú Quốc)', 'Lâm Đồng (Đà Lạt)', 'Thừa Thiên Huế',
    'Bình Định (Quy Nhơn)', 'Lào Cai (Sa Pa)', 'Ninh Bình', 'Quảng Nam (Hội An)',
    'Bà Rịa - Vũng Tàu', 'Hải Phòng', 'Cần Thơ', 'Khác (Các tỉnh/thành khác)'
  ];

  const orgTypes = [
    'Cơ quan quản lý nhà nước (Sở VHTTDL/UBND)',
    'Doanh nghiệp lữ hành (Nội địa & Quốc tế)',
    'Cơ sở lưu trú (Khách sạn/Resort/Homestay)',
    'Hãng vận chuyển (Hàng không/Đường bộ/Tàu)',
    'Khu/Điểm du lịch, Công viên chủ đề',
    'Hợp tác xã nông nghiệp/Làng du lịch cộng đồng',
    'Doanh nghiệp công nghệ/Dịch vụ phụ trợ du lịch',
    'Khác (Ghi rõ trong hồ sơ)'
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M4 – Bước 4: Thông tin đăng ký (Mục I)"
        rules={[
          'Tự động phân nhánh: Nếu hạng mục là Tổ chức hiện bộ trường Pháp nhân; Nếu là Cá nhân hiện bộ trường Cá nhân [CHƯA CHỐT - B4].',
          'Riêng hạng mục "Điểm đến cấp tỉnh": bắt buộc có trường Cơ quan đại diện đề cử (Sở/UBND).',
          'Email người đại diện bị khóa (readonly) theo email đã xác thực ở Bước 3 để đảm bảo tính toàn vẹn.',
          'Khi bật trạng thái "Lỗi nhập liệu": 2 trường báo đỏ có hướng dẫn sửa chi tiết và màn hình tự cuộn tới lỗi đầu tiên mà KHÔNG làm mất dữ liệu đã nhập.',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-5">
        <div className="border-b-2 border-black pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 4/8 · MỤC I</span>
            <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
              THÔNG TIN ĐĂNG KÝ HỒ SƠ
            </h2>
            <div className="text-xs text-zinc-600 mt-0.5 font-mono">
              Hạng mục: <strong>{currentCategory?.name || 'Chưa chọn'}</strong>
            </div>
          </div>
          {isIndividual && <UnfinalizedBadge code="B4" label="Bộ trường Cá nhân" />}
        </div>

        {/* NOTIFICATION: SIMULATION INPUT ERROR BANNER */}
        {simState === 'input_error' && (
          <div className="border-2 border-red-600 bg-red-50 p-3 font-mono text-xs text-red-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-red-800">
              <span>❌</span>
              <span>PHÁT HIỆN 2 LỖI NHẬP LIỆU CẦN ĐIỀU CHỈNH:</span>
            </div>
            <p className="text-[11px] text-red-700">
              Vui lòng xem thông báo lỗi màu đỏ ngay dưới từng ô nhập liệu và sửa theo chỉ dẫn. Dữ liệu các trường khác vẫn được giữ nguyên.
            </p>
          </div>
        )}

        {/* BRANCH A: TỔ CHỨC */}
        {!isIndividual ? (
          <div className="space-y-4 font-mono text-xs">
            {/* Tên đơn vị */}
            <div className="space-y-1">
              <label className="block font-bold text-zinc-900">
                Tên đơn vị / Tổ chức: <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                maxLength={200}
                value={data.orgName}
                onChange={(e) => onChange({ orgName: e.target.value })}
                placeholder="VD: Công ty Cổ phần Du lịch và Nghỉ dưỡng Biển Xanh"
                className="w-full p-2.5 border-2 border-black bg-white focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>Tên pháp nhân theo giấy đăng ký kinh doanh hoặc quyết định thành lập</span>
                <span>{data.orgName.length}/200 ký tự</span>
              </div>
            </div>

            {/* Cơ quan đại diện đề cử (Chỉ hiện cho Điểm đến cấp tỉnh) */}
            {isDestination && (
              <div className="border-2 border-black bg-zinc-100 p-3 space-y-1">
                <label className="block font-bold text-black">
                  Cơ quan đại diện đề cử (Sở/UBND): <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={data.repGovAgency || ''}
                  onChange={(e) => onChange({ repGovAgency: e.target.value })}
                  placeholder="VD: Sở Du lịch tỉnh Kiên Giang"
                  className="w-full p-2 border border-black bg-white focus:outline-none"
                />
                <span className="text-[10px] text-zinc-600 block">
                  Chỉ cơ quan quản lý nhà nước cấp tỉnh mới có thẩm quyền nộp hồ sơ hạng mục này (bắt buộc kèm công văn cử đại diện ở Bước 7).
                </span>
              </div>
            )}

            {/* Loại hình đơn vị & MST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">
                  Loại hình đơn vị: <span className="text-red-600">*</span>
                </label>
                <select
                  value={data.orgType}
                  onChange={(e) => onChange({ orgType: e.target.value })}
                  className="w-full p-2.5 border-2 border-black bg-white focus:outline-none"
                >
                  <option value="">-- Chọn loại hình đơn vị --</option>
                  {orgTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* MST / GPKD with simulated error condition */}
              <div ref={firstErrorRef} className="space-y-1">
                <label className="block font-bold text-zinc-900">
                  Mã số thuế / GPKD: <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={data.taxCode}
                  onChange={(e) => onChange({ taxCode: e.target.value })}
                  placeholder="VD: 0101234567"
                  className={`w-full p-2.5 border-2 bg-white focus:outline-none ${
                    simState === 'input_error' ? 'border-red-600 bg-red-50 text-red-900 font-bold' : 'border-black'
                  }`}
                />
                {simState === 'input_error' ? (
                  <p className="text-[11px] text-red-600 font-bold font-mono">
                    ⚠️ Lỗi: Mã số thuế phải gồm 10 hoặc 13 chữ số, không chứa ký tự đặc biệt.
                  </p>
                ) : (
                  <span className="text-[10px] text-zinc-500 block">Dùng để xác minh pháp lý và phòng ngừa trùng hồ sơ</span>
                )}
              </div>
            </div>

            {/* Tỉnh/thành & Địa chỉ chi tiết */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1 sm:col-span-1">
                <label className="block font-bold text-zinc-900">
                  Tỉnh / Thành phố: <span className="text-red-600">*</span>
                </label>
                <select
                  value={data.province}
                  onChange={(e) => onChange({ province: e.target.value })}
                  className="w-full p-2.5 border-2 border-black bg-white focus:outline-none"
                >
                  <option value="">-- Tỉnh/thành --</option>
                  {provinces.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="block font-bold text-zinc-900">
                  Địa chỉ chi tiết: <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={data.detailedAddress}
                  onChange={(e) => onChange({ detailedAddress: e.target.value })}
                  placeholder="Số nhà, đường, phường/xã, quận/huyện"
                  className="w-full p-2.5 border-2 border-black bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Website & Fanpage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">Website chính thức (URL):</label>
                <input
                  type="url"
                  value={data.website}
                  onChange={(e) => onChange({ website: e.target.value })}
                  placeholder="https://www.example.com"
                  className="w-full p-2.5 border border-zinc-400 bg-white focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="block font-bold text-zinc-900">Fanpage / Kênh mạng xã hội:</label>
                <input
                  type="url"
                  value={data.fanpage}
                  onChange={(e) => onChange({ fanpage: e.target.value })}
                  placeholder="https://facebook.com/example"
                  className="w-full p-2.5 border border-zinc-400 bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* KHỐI NGƯỜI ĐẠI DIỆN HỒ SƠ */}
            <div className="border-2 border-black bg-zinc-50 p-3.5 space-y-3 mt-2">
              <div className="font-bold text-black border-b border-zinc-300 pb-1 flex items-center justify-between">
                <span>THÔNG TIN NGƯỜI ĐẠI DIỆN NỘP HỒ SƠ</span>
                <span className="text-[10px] text-zinc-500 font-normal">Bắt buộc đủ 4 trường</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-zinc-900">
                    Họ và tên: <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.repName}
                    onChange={(e) => onChange({ repName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full p-2 border border-black bg-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block font-bold text-zinc-900">
                    Chức vụ / Bộ phận: <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.repTitle}
                    onChange={(e) => onChange({ repTitle: e.target.value })}
                    placeholder="Trưởng phòng Marketing / Phó GĐ"
                    className="w-full p-2 border border-black bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone with simulated error condition */}
                <div className="space-y-1">
                  <label className="block font-bold text-zinc-900">
                    Số điện thoại liên hệ: <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={data.repPhone}
                    onChange={(e) => onChange({ repPhone: e.target.value })}
                    placeholder="0912 345 678"
                    className={`w-full p-2 border-2 bg-white focus:outline-none ${
                      simState === 'input_error' ? 'border-red-600 bg-red-50 text-red-900 font-bold' : 'border-black'
                    }`}
                  />
                  {simState === 'input_error' && (
                    <p className="text-[11px] text-red-600 font-bold font-mono">
                      ⚠️ Lỗi: Số điện thoại phải gồm 10 chữ số bắt đầu bằng đầu số 03, 05, 07, 08, 09.
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block font-bold text-zinc-900">
                    Email người đại diện: <span className="text-red-600">*</span> (Khóa theo OTP)
                  </label>
                  <input
                    type="email"
                    readOnly
                    value={data.email || 'contact@example.com'}
                    className="w-full p-2 border border-zinc-400 bg-zinc-200 text-zinc-700 cursor-not-allowed font-mono"
                  />
                  <span className="text-[10px] text-zinc-500 block">Khóa đồng bộ với email xác thực ở Bước 3</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* BRANCH B: CÁ NHÂN */
          <UnfinalizedContainer
            code="B4"
            title="Đặc tả bộ trường Cá nhân (Nhân vật du lịch / Đại sứ)"
            description="Tách riêng bộ trường tổ chức; tuân thủ Luật 91/2025/QH15 không thu thập số CCCD, ngày sinh để tối thiểu hóa dữ liệu."
          >
            <div className="space-y-4 font-mono text-xs">
              {/* Radio Tự đề cử vs Đề cử người khác */}
              <div className="space-y-1">
                <label className="block font-bold text-black">Hình thức đề cử: *</label>
                <div className="flex gap-4 p-2.5 border border-amber-400 bg-white">
                  <label className="flex items-center gap-2 cursor-pointer font-bold">
                    <input
                      type="radio"
                      name="indivType"
                      checked={data.indivType === 'self'}
                      onChange={() => onChange({ indivType: 'self' })}
                      className="accent-black"
                    />
                    Tự đề cử bản thân
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-bold">
                    <input
                      type="radio"
                      name="indivType"
                      checked={data.indivType === 'other'}
                      onChange={() => onChange({ indivType: 'other' })}
                      className="accent-black"
                    />
                    Đề cử cho cá nhân khác
                  </label>
                </div>
              </div>

              {/* Thông tin ứng viên */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-black">Họ và tên ứng viên: *</label>
                  <input
                    type="text"
                    value={data.indivName}
                    onChange={(e) => onChange({ indivName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full p-2 border border-black bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block font-bold text-black">Vai trò / Nghề nghiệp: *</label>
                  <input
                    type="text"
                    value={data.indivRole}
                    onChange={(e) => onChange({ indivRole: e.target.value })}
                    placeholder="Travel Blogger / Sáng tạo nội dung"
                    className="w-full p-2 border border-black bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-black">Tỉnh/thành hoạt động chính: *</label>
                  <select
                    value={data.indivProvince}
                    onChange={(e) => onChange({ indivProvince: e.target.value })}
                    className="w-full p-2 border border-black bg-white"
                  >
                    <option value="">-- Chọn tỉnh/thành --</option>
                    {provinces.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block font-bold text-black">Kênh truyền thông chính: *</label>
                  <input
                    type="url"
                    value={data.indivMainChannel}
                    onChange={(e) => onChange({ indivMainChannel: e.target.value })}
                    placeholder="https://youtube.com/@channel hoặc TikTok/FB"
                    className="w-full p-2 border border-black bg-white"
                  />
                </div>
              </div>

              {/* Nếu Đề cử người khác */}
              {data.indivType === 'other' && (
                <div className="border-2 border-amber-600 bg-amber-100/70 p-3 space-y-2">
                  <div className="font-bold text-amber-950 uppercase">
                    Thông tin người đề cử & Xác nhận người được đề cử:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={data.nominatorName || ''}
                      onChange={(e) => onChange({ nominatorName: e.target.value })}
                      placeholder="Họ tên người đề cử *"
                      className="p-2 border border-zinc-700 bg-white"
                    />
                    <input
                      type="email"
                      value={data.nomineeEmail || ''}
                      onChange={(e) => onChange({ nomineeEmail: e.target.value })}
                      placeholder="Email người được đề cử (nhận link đồng ý) *"
                      className="p-2 border border-zinc-700 bg-white"
                    />
                  </div>
                  <p className="text-[11px] text-amber-900 leading-tight">
                    ⚠️ <strong>Quy tắc pháp chế (Luật 91/2025/QH15):</strong> Hệ thống sẽ tự động gửi email xin xác nhận
                    tới người được đề cử. Chỉ những hồ sơ được người đó nhấn nút xác nhận mới được chuyển vào vòng sơ tuyển.
                  </p>
                </div>
              )}
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
            ← Quay lại Xác thực OTP
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Tiếp tục sang Thông tin đề cử →
          </button>
        </div>
      </div>
    </div>
  );
};
