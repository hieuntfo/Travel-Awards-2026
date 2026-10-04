import React, { useState } from 'react';
import { FormStep, NominationData, SimulationState, AwardPillar } from '../../types';
import { StepHeader } from '../form-steps/StepHeader';
import { StepM0 } from '../form-steps/StepM0';
import { StepM1, StepM2 } from '../form-steps/StepM1M2';
import { StepM3 } from '../form-steps/StepM3';
import { StepM4 } from '../form-steps/StepM4';
import { StepM5 } from '../form-steps/StepM5';
import { StepM6 } from '../form-steps/StepM6';
import { StepM7 } from '../form-steps/StepM7';
import { StepM8 } from '../form-steps/StepM8';
import { StepM9, StepM10 } from '../form-steps/StepM9M10';

interface RegistrationFlowProps {
  currentStep: FormStep;
  onStepChange: (step: FormStep) => void;
  data: NominationData;
  onDataChange: (updates: Partial<NominationData>) => void;
  simState: SimulationState;
  onSimStateChange: (state: SimulationState) => void;
  showNotes: boolean;
  onGoHome: () => void;
}

export const RegistrationFlow: React.FC<RegistrationFlowProps> = ({
  currentStep,
  onStepChange,
  data,
  onDataChange,
  simState,
  onSimStateChange,
  showNotes,
  onGoHome,
}) => {
  const [sessionTimeoutModalOpen, setSessionTimeoutModalOpen] = useState(false);

  // Trigger modal when simState is session_timeout
  const isTimeout = simState === 'session_timeout';

  const handleNextFromM1 = () => onStepChange('M2');
  const handleNextFromM2 = () => onStepChange('M3');
  const handleNextFromM3 = () => onStepChange('M4');
  const handleNextFromM4 = () => onStepChange('M5');
  const handleNextFromM5 = () => onStepChange('M6');
  const handleNextFromM6 = () => onStepChange('M7');
  const handleNextFromM7 = () => onStepChange('M8');

  const handleSubmit = () => {
    // Generate code TA26-XXXX
    const randomCode = `TA26-${Math.floor(1000 + Math.random() * 9000)}`;
    onDataChange({
      submissionCode: randomCode,
      savedDraftTime: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    });
    onStepChange('M9');
  };

  const handleNominateAnother = () => {
    // Keep Section I and II, reset category & section III
    onDataChange({
      categoryId: '',
      touristCountCurrent: '',
      touristCountPrevious: '',
      revenueCurrent: '',
      revenuePrevious: '',
      hotelRooms: '',
      agreedCompliance: false,
      agreedPrivacy: false,
      agreedMediaUse: false,
      agreedRules: false,
      captchaVerified: false,
    });
    onStepChange('M1');
  };

  return (
    <div className="max-w-[1240px] w-full mx-auto p-4 md:p-6 pb-20">
      {/* Session Timeout Modal */}
      {(isTimeout || sessionTimeoutModalOpen) && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black p-5 max-w-md w-full font-mono space-y-3 shadow-2xl">
            <div className="flex items-center gap-2 text-black font-bold text-base border-b-2 border-black pb-2">
              <span className="text-xl">⌛</span>
              <span>PHIÊN LÀM VIỆC ĐÃ HẾT HẠN</span>
            </div>

            <p className="text-xs text-zinc-700 font-sans leading-relaxed">
              Vì lý do bảo mật dữ liệu kinh doanh, phiên đăng nhập của bạn đã tạm dừng sau 15 phút không thao tác.
              <strong> Dữ liệu của bạn đã được lưu nháp an toàn lúc {data.savedDraftTime || '18:24'}.</strong>
            </p>

            <div className="border border-zinc-400 bg-zinc-100 p-2.5 text-[11px] text-zinc-800 space-y-1">
              <div>• Email tài khoản: <strong>{data.email || 'hieunt.fo@gmail.com'}</strong></div>
              <div>• Vui lòng nhập mã OTP mới được gửi để tiếp tục chỉnh sửa.</div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  onSimStateChange('normal');
                  setSessionTimeoutModalOpen(false);
                  onStepChange('M3');
                }}
                className="px-4 py-2 border-2 border-black bg-amber-400 text-black font-bold hover:bg-amber-300 cursor-pointer"
              >
                Nhập OTP để tiếp tục làm việc →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8-Step Header with Draft Timestamp and Deadline */}
      <StepHeader
        currentStep={currentStep}
        savedTime={data.savedDraftTime}
        onStepClick={(step) => onStepChange(step)}
      />

      {/* RENDER STEP */}
      {currentStep === 'M0' && (
        <StepM0
          onStart={() => onStepChange('M1')}
          simState={simState}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M1' && (
        <StepM1
          selectedPillar={data.pillar}
          onSelectPillar={(pillar: AwardPillar) => onDataChange({ pillar })}
          onNext={handleNextFromM1}
          onBack={() => onStepChange('M0')}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M2' && (
        <StepM2
          selectedPillar={data.pillar}
          selectedCategoryId={data.categoryId}
          onSelectCategory={(catId: string) => onDataChange({ categoryId: catId })}
          onNext={handleNextFromM2}
          onBack={() => onStepChange('M1')}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M3' && (
        <StepM3
          email={data.email}
          isVerified={data.isEmailVerified}
          otp={data.otp}
          onChangeEmail={(email) => onDataChange({ email })}
          onChangeOtp={(otp) => onDataChange({ otp })}
          onVerifyOtp={() => onDataChange({ isEmailVerified: true })}
          onNext={handleNextFromM3}
          onBack={() => onStepChange('M2')}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M4' && (
        <StepM4
          data={data}
          onChange={onDataChange}
          onNext={handleNextFromM4}
          onBack={() => onStepChange('M3')}
          simState={simState}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M5' && (
        <StepM5
          data={data}
          onChange={onDataChange}
          onNext={handleNextFromM5}
          onBack={() => onStepChange('M4')}
          simState={simState}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M6' && (
        <StepM6
          data={data}
          onChange={onDataChange}
          onNext={handleNextFromM6}
          onBack={() => onStepChange('M5')}
          simState={simState}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M7' && (
        <StepM7
          data={data}
          onChange={onDataChange}
          onNext={handleNextFromM7}
          onBack={() => onStepChange('M6')}
          simState={simState}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M8' && (
        <StepM8
          data={data}
          onChange={onDataChange}
          onJumpToStep={(step) => onStepChange(step)}
          onSubmit={handleSubmit}
          onBack={() => onStepChange('M7')}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M9' && (
        <StepM9
          data={data}
          onNominateAnother={handleNominateAnother}
          onViewEmail={() => onStepChange('M10')}
          onGoHome={onGoHome}
          showNotes={showNotes}
        />
      )}

      {currentStep === 'M10' && (
        <StepM10
          data={data}
          onBackToM9={() => onStepChange('M9')}
          showNotes={showNotes}
        />
      )}
    </div>
  );
};
