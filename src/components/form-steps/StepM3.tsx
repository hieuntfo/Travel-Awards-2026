import React, { useState, useEffect } from 'react';
import { BusinessRuleNote } from '../BusinessRuleNote';

interface StepM3Props {
  email: string;
  isVerified: boolean;
  otp: string;
  onChangeEmail: (email: string) => void;
  onChangeOtp: (otp: string) => void;
  onVerifyOtp: () => void;
  onNext: () => void;
  onBack: () => void;
  showNotes: boolean;
}

export const StepM3: React.FC<StepM3Props> = ({
  email,
  isVerified,
  otp,
  onChangeEmail,
  onChangeOtp,
  onVerifyOtp,
  onNext,
  onBack,
  showNotes,
}) => {
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [isCounting, setIsCounting] = useState(false);
  const [localOtpDigits, setLocalOtpDigits] = useState(['', '', '', '', '', '']);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCounting && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
    }
    return () => clearTimeout(timer);
  }, [isCounting, countdown]);

  const handleSendCode = () => {
    if (!email || !email.includes('@')) {
      setEmailError('Vui lòng nhập địa chỉ email hợp lệ (ví dụ: contact@doanhnghiep.vn)');
      return;
    }
    setEmailError('');
    setCodeSent(true);
    setIsCounting(true);
    setCountdown(60);
    // Auto-fill demo OTP
    setLocalOtpDigits(['1', '2', '3', '4', '5', '6']);
    onChangeOtp('123456');
  };

  const handleResend = () => {
    if (countdown === 0) {
      setCountdown(60);
      setIsCounting(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 font-sans">
      <BusinessRuleNote
        isVisible={showNotes}
        title="M3 – Bước 3: Xác thực email người nộp bằng OTP"
        rules={[
          'Chặn spam bot ngay từ đầu trước khi cho phép nhập dữ liệu sâu.',
          'Gắn hồ sơ đề cử với email đã xác thực; email này dùng để khóa trường Email Người đại diện ở Mục I.',
          'Hệ thống tự động sinh Magic Link và gửi về email này để người nộp quay lại chỉnh sửa nháp bất cứ lúc nào.',
          'Hỗ trợ đếm ngược 60s trước khi cho phép gửi lại mã OTP.',
        ]}
      />

      <div className="border-2 border-black bg-white p-4 md:p-6 space-y-4">
        <div className="border-b-2 border-black pb-2">
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase">BƯỚC 3/8</span>
          <h2 className="text-lg md:text-xl font-bold font-mono uppercase text-black mt-0.5">
            XÁC THỰC EMAIL NGƯỜI NỘP HỒ SƠ
          </h2>
          <p className="text-xs text-zinc-600 mt-1">
            Mã OTP 6 số sẽ được gửi tới hòm thư của bạn để bảo mật hồ sơ và kích hoạt tính năng lưu nháp an toàn.
          </p>
        </div>

        {/* Input Email Box */}
        <div className="space-y-1.5 font-mono text-xs">
          <label className="block font-bold text-zinc-900">
            Địa chỉ email nhận mã xác thực & link nháp: <span className="text-red-600">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              disabled={isVerified}
              onChange={(e) => {
                onChangeEmail(e.target.value);
                if (emailError) setEmailError('');
              }}
              placeholder="VD: marketing@resort-vietnam.com"
              className={`flex-1 p-2.5 border-2 bg-white text-xs font-mono focus:outline-none ${
                emailError ? 'border-red-600 bg-red-50' : 'border-black'
              }`}
            />
            <button
              type="button"
              disabled={isVerified || (codeSent && isCounting)}
              onClick={handleSendCode}
              className={`px-4 py-2.5 border-2 text-xs font-bold font-mono whitespace-nowrap ${
                isVerified
                  ? 'border-emerald-600 bg-emerald-100 text-emerald-800 cursor-default'
                  : codeSent && isCounting
                  ? 'border-zinc-300 bg-zinc-200 text-zinc-500 cursor-not-allowed'
                  : 'border-black bg-black text-white hover:bg-zinc-800 cursor-pointer'
              }`}
            >
              {isVerified ? '✓ Đã xác thực' : codeSent ? 'Gửi lại mã' : 'Gửi mã OTP'}
            </button>
          </div>
          {emailError && (
            <p className="text-[11px] text-red-600 font-semibold font-mono">{emailError}</p>
          )}
        </div>

        {/* OTP Input Section */}
        {codeSent && (
          <div className="border border-zinc-400 bg-zinc-50 p-4 space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-zinc-800">Nhập mã xác thực (6 số OTP):</span>
              <span className="text-[11px] text-zinc-500">Mã mẫu thử nghiệm: 123456</span>
            </div>

            {/* 6 Digit Inputs */}
            <div className="flex items-center justify-center gap-2">
              {localOtpDigits.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={digit}
                  disabled={isVerified}
                  onChange={(e) => {
                    const next = [...localOtpDigits];
                    next[i] = e.target.value;
                    setLocalOtpDigits(next);
                    onChangeOtp(next.join(''));
                  }}
                  className="w-10 h-12 text-center text-lg font-black border-2 border-black bg-white focus:bg-zinc-100 focus:outline-none"
                />
              ))}
            </div>

            {/* Countdown & Resend */}
            <div className="flex items-center justify-between text-xs pt-1">
              <div>
                {isCounting ? (
                  <span className="text-zinc-500 text-[11px]">
                    Gửi lại mã sau: <strong>{countdown}s</strong>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="underline text-black font-bold hover:text-zinc-600 cursor-pointer"
                  >
                    Gửi lại mã xác thực
                  </button>
                )}
              </div>

              {!isVerified && (
                <button
                  type="button"
                  onClick={onVerifyOtp}
                  className="px-4 py-1.5 border-2 border-black bg-amber-400 text-black font-bold text-xs hover:bg-amber-300"
                >
                  Xác nhận mã OTP
                </button>
              )}
            </div>

            {isVerified && (
              <div className="border border-emerald-600 bg-emerald-50 text-emerald-900 p-2 text-xs flex items-center gap-2">
                <span>✓</span>
                <span>Email <strong>{email}</strong> đã xác thực thành công. Mã hồ sơ tạm thời được khởi tạo.</span>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3 font-mono">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2.5 border border-zinc-400 bg-zinc-100 text-xs font-bold text-zinc-700 hover:bg-zinc-200"
          >
            ← Quay lại Chọn hạng mục
          </button>
          <button
            type="button"
            disabled={!isVerified}
            onClick={onNext}
            className={`px-6 py-2.5 border-2 text-xs font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
              isVerified
                ? 'border-black bg-black text-white hover:bg-zinc-800 cursor-pointer'
                : 'border-zinc-300 bg-zinc-200 text-zinc-400 cursor-not-allowed'
            }`}
          >
            Tiếp tục sang Thông tin đăng ký →
          </button>
        </div>
      </div>
    </div>
  );
};
