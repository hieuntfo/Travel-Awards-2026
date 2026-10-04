import React, { useState } from 'react';
import { NominationData, SimulationState } from '../../types';
import { BusinessRuleNote } from '../BusinessRuleNote';
import { UnfinalizedBadge } from '../UnfinalizedBadge';
import { WireframePlaceholder } from '../WireframePlaceholder';

interface StepM7Props {
  data: NominationData;
  onChange: (updates: Partial<NominationData>) => void;
  onNext: () => void;
  onBack: () => void;
  simState: SimulationState;
  showNotes: boolean;
}

export const StepM7: React.FC<StepM7Props> = ({
  data,
  onChange,
  onNext,
  onBack,
  simState,
  showNotes,
}) => {
  const [driveWarn, setDriveWarn] = useState(false);

  const isUploadError = simState === 'upload_error';

  // Sample initial files if empty
  const files: {
    id: string;
    category: string;
    name: string;
    size: string;
    status: 'success' | 'uploading' | 'error';
    errorMsg?: string;
  }[] = data.uploadedFiles.length > 0 ? data.uploadedFiles : [
    {
      id: 'f1',
      category: 'intro',
      name: 'Ho_so_gioi_thieu_Sunrise_Resort_2026.pdf',
      size: '14.2 MB',
      status: 'success',
    },
    {
      id: 'f2',
      category: 'legal',
      name: 'Quyet_dinh_cong_nhan_5_sao_TCDL.pdf',
      size: '3.8 MB',
      status: 'success',
    },
    {
      id: 'f3',
      category: 'legal',
      name: 'Giay_chung_nhan_PCCC_2026.pdf',
      size: '2.1 MB',
      status: 'success',
    },
    {
      id: 'f4',
      category: 'metrics',
      name: 'Bao_cao_kiem_toan_doanh_thu_va_cong_suat.xlsx',
      size: '5.6 MB',
      status: 'success',
    },
  ];

  const handleDeleteFile = (id: string) => {
    const updated = files.filter((f) => f.id !== id);
    onChange({ uploadedFiles: updated });
  };

  const handleVideoUrlChange = (url: string) => {
    onChange({ videoUrl: url });
    if (url.includes('drive.google.com') && !url.includes('usp=sharing')) {
      setDriveWarn(true);
    } else {
      setDriveWarn(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M7 – Bước 7: Tải hồ sơ & minh chứng"
        rules={[
          'Gộp toàn bộ phần upload từ các mục rải rác về một bước tập trung để tránh gián đoạn nhập số liệu.',
          'Mỗi nhóm file là một dropzone wireframe riêng, có danh sách chứng nhận gợi ý cụ thể theo hạng mục.',
          'Hiển thị lưới ảnh thu nhỏ wireframe X cho 3-10 hình ảnh độ phân giải cao.',
          'Mô phỏng lỗi upload Poka-Yoke: Lỗi 1 file quá dung lượng (hoặc mất mạng) KHÔNG làm mất các file khác; có nút thử lại riêng.',
          'Kiểm tra định dạng link video (YouTube/Drive); cảnh báo nếu link Drive chưa mở quyền xem công khai.',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-5">
        <div className="border-b-2 border-black pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 7/8 · MINH CHỨNG</span>
            <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
              TẢI HỒ SƠ & TÀI LIỆU MINH CHỨNG
            </h2>
          </div>
          <UnfinalizedBadge code="B5" label="Giới hạn dung lượng tổng ≤ 100 MB" />
        </div>

        {/* NOTIFICATION: SIMULATED UPLOAD ERROR */}
        {isUploadError && (
          <div className="border-2 border-red-600 bg-red-50 p-3.5 font-mono text-xs text-red-900 space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-red-800">
              <span className="text-base">❌</span>
              <span>LỖI TẢI TỆP: 1 FILE VƯỢT QUÁ GIỚI HẠN DUNG LƯỢNG CHO PHÉP</span>
            </div>
            <p className="text-[11px] text-red-700 font-sans">
              File <code>Ho_so_nang_cao.pdf (24.8 MB)</code> đã bị từ chối do vượt mức 20 MB/file.
              Các file khác của bạn vẫn được lưu giữ an toàn. Vui lòng nén file hoặc thử lại bên dưới.
            </p>
          </div>
        )}

        {/* 1. HỒ SƠ GIỚI THIỆU ĐỀ CỬ */}
        <div className="border-2 border-black p-3.5 bg-zinc-50 space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between">
            <label className="font-bold text-black">
              1. Hồ sơ giới thiệu đề cử (Profile / Dossier): <span className="text-red-600">*</span>
            </label>
            <span className="text-[10px] bg-white border border-zinc-400 px-1.5 text-zinc-600">
              PDF / PPTX · Tối đa 1 file · ≤ 20 MB
            </span>
          </div>

          <div className="border-2 border-dashed border-zinc-400 bg-white p-4 text-center space-y-1 hover:border-black cursor-pointer">
            <div className="text-zinc-600 font-bold">Kéo thả tệp hồ sơ vào đây hoặc [Chọn tệp từ máy tính]</div>
            <div className="text-[10px] text-zinc-500 font-sans">
              Khuyến nghị định dạng PDF có đánh mục lục để Hội đồng dễ tra cứu
            </div>
          </div>
        </div>

        {/* 2. PHÁP LÝ & CHỨNG NHẬN */}
        <div className="border-2 border-black p-3.5 bg-zinc-50 space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between">
            <label className="font-bold text-black">
              2. Tài liệu pháp lý & Chứng nhận chuyên ngành: <span className="text-red-600">*</span>
            </label>
            <span className="text-[10px] bg-white border border-zinc-400 px-1.5 text-zinc-600">
              PDF/JPG/PNG · Tối đa 5 file · ≤ 10 MB/file
            </span>
          </div>

          <div className="bg-zinc-100 p-2 border border-zinc-300 text-[11px] text-zinc-700">
            <strong>Danh sách tài liệu gợi ý theo hạng mục của bạn:</strong>
            <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-[10px]">
              <li>Quyết định công nhận hạng sao (hoặc công văn của Sở/Tổng cục Du lịch)</li>
              <li>Giấy chứng nhận thẩm duyệt thiết kế PCCC & Biên bản nghiệm thu</li>
              <li>Giấy chứng nhận cơ sở đủ điều kiện An toàn vệ sinh thực phẩm</li>
              <li>Bản chụp màn hình điểm đánh giá OTA xác thực từ trang chủ quản</li>
            </ul>
          </div>

          <div className="border-2 border-dashed border-zinc-400 bg-white p-3 text-center space-y-1 hover:border-black cursor-pointer">
            <div className="text-zinc-600 font-bold">Kéo thả các file chứng nhận vào đây [Chọn tệp]</div>
          </div>
        </div>

        {/* 3. TÀI LIỆU CHỨNG MINH SỐ LIỆU */}
        <div className="border border-zinc-400 p-3 bg-white space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between">
            <label className="font-bold text-zinc-800">
              3. Tài liệu chứng minh số liệu (Báo cáo tài chính / Thống kê):
            </label>
            <span className="text-[10px] text-zinc-500">PDF/XLSX · Tối đa 5 file</span>
          </div>
          <div className="border border-dashed border-zinc-300 p-2.5 text-center text-zinc-500 text-[11px]">
            [ Bấm để tải lên báo cáo doanh thu, xác nhận nộp thuế, thống kê lượt khách ]
          </div>
        </div>

        {/* 4. HÌNH ẢNH CHẤT LƯỢNG CAO (3 - 10 ẢNH) */}
        <div className="border-2 border-black p-3.5 bg-zinc-50 space-y-2.5 font-mono text-xs">
          <div className="flex items-center justify-between">
            <label className="font-bold text-black">
              4. Hình ảnh tư liệu chất lượng cao: <span className="text-red-600">*</span>
            </label>
            <span className="text-[10px] bg-white border border-zinc-400 px-1.5 text-zinc-600">
              3 – 10 ảnh · JPG/PNG · Cạnh dài ≥ 1.600 px · ≤ 5 MB/ảnh
            </span>
          </div>

          {/* Thumbnail Wireframe Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="relative group">
                <WireframePlaceholder
                  label={`[Ảnh #${idx}]`}
                  sublabel="1600x1200"
                  aspectRatio="4/3"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-black text-white text-[9px] px-1 font-mono hover:bg-red-600"
                >
                  × Xóa
                </button>
              </div>
            ))}
            <div className="border-2 border-dashed border-zinc-400 bg-white flex flex-col items-center justify-center p-2 text-center aspect-[4/3] cursor-pointer hover:border-black">
              <span className="text-base text-zinc-400">+</span>
              <span className="text-[10px] text-zinc-600 font-bold">Thêm ảnh</span>
              <span className="text-[9px] text-zinc-400">(Đã chọn 4/10)</span>
            </div>
          </div>
        </div>

        {/* 5. LINK VIDEO GIỚI THIỆU */}
        <div className="border border-zinc-400 p-3 bg-white space-y-1.5 font-mono text-xs">
          <label className="block font-bold text-zinc-900">
            5. Đường link video giới thiệu (YouTube / Google Drive):
          </label>
          <input
            type="url"
            value={data.videoUrl || ''}
            onChange={(e) => handleVideoUrlChange(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=... hoặc link Google Drive"
            className="w-full p-2 border-2 border-black bg-white focus:outline-none"
          />
          {driveWarn && (
            <div className="border border-amber-600 bg-amber-50 p-2 text-amber-900 text-[11px] flex items-start gap-1.5">
              <span>⚠️</span>
              <span>
                <strong>Cảnh báo quyền riêng tư link Drive:</strong> Vui lòng đảm bảo link Google Drive đã được bật chế độ
                <strong> "Bất kỳ ai có đường liên kết đều có thể xem"</strong> để Hội đồng chuyên môn có thể truy cập.
              </span>
            </div>
          )}
          <span className="text-[10px] text-zinc-500 block">
            Không upload video trực tiếp lên hệ thống; chỉ tiếp nhận đường link xem trực tuyến.
          </span>
        </div>

        {/* 6. DANH SÁCH CÁC TỆP ĐÃ TẢI LÊN (FILE MANAGEMENT LIST) */}
        <div className="border-2 border-black bg-zinc-100 p-3 space-y-2 font-mono text-xs">
          <div className="font-bold text-black flex items-center justify-between border-b border-zinc-300 pb-1">
            <span>DANH SÁCH FILE ĐÃ TẢI LÊN ({files.length + (isUploadError ? 1 : 0)} TỆP)</span>
            <span className="text-[10px] text-zinc-600">Tổng: ~25.7 MB / 100 MB</span>
          </div>

          <div className="space-y-1.5">
            {files.map((file) => (
              <div
                key={file.id}
                className="border border-zinc-300 bg-white p-2 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-zinc-500">📄</span>
                  <div className="truncate">
                    <span className="font-bold text-black text-[11px] truncate block">{file.name}</span>
                    <span className="text-[10px] text-zinc-500">{file.size} · Đã tải 100%</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    className="border border-zinc-400 bg-zinc-100 hover:bg-zinc-200 px-2 py-0.5 text-[10px]"
                  >
                    Xem trước
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteFile(file.id)}
                    className="border border-zinc-400 bg-zinc-100 hover:bg-red-100 text-red-600 px-2 py-0.5 text-[10px]"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}

            {/* Simulated Failed Upload Item */}
            {isUploadError && (
              <div className="border-2 border-red-600 bg-red-50 p-2 flex items-center justify-between gap-2 text-red-900">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <div className="truncate">
                    <span className="font-bold text-[11px] block truncate">
                      Ho_so_dinh_kem_video_nang.pdf
                    </span>
                    <span className="text-[10px] text-red-700">
                      24.8 MB · <strong>Lỗi: Vượt quá dung lượng tối đa 20 MB/file</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    className="border border-red-600 bg-red-600 text-white font-bold px-2 py-0.5 text-[10px] hover:bg-red-700"
                  >
                    Thử lại
                  </button>
                  <button
                    type="button"
                    className="border border-zinc-400 bg-white text-zinc-600 px-2 py-0.5 text-[10px]"
                  >
                    Hủy bỏ
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3 font-mono">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2.5 border border-zinc-400 bg-zinc-100 text-xs font-bold text-zinc-700 hover:bg-zinc-200"
          >
            ← Quay lại Mục III
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 border-2 border-black bg-black text-white text-xs font-bold hover:bg-zinc-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Tiếp tục sang Xem lại & Gửi hồ sơ →
          </button>
        </div>
      </div>
    </div>
  );
};
