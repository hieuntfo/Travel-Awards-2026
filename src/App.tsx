import React, { useState } from 'react';
import {
  ViewportMode,
  AppScreen,
  FormStep,
  SimulationState,
  NominationData,
  DesktopGridOptions,
} from './types';
import { ReviewerToolbar } from './components/ReviewerToolbar';
import { WireframeHeader } from './components/WireframeHeader';
import { DesktopGridOverlay, DesktopSideGutters } from './components/DesktopGridOverlay';
import { HomePage } from './components/pages/HomePage';
import { NewsListPage } from './components/pages/NewsListPage';
import { NewsDetailPage } from './components/pages/NewsDetailPage';
import { RulesPage } from './components/pages/RulesPage';
import { RegistrationFlow } from './components/pages/RegistrationFlow';
import { VotingListPage } from './components/pages/VotingListPage';
import { VotingDetailPage } from './components/pages/VotingDetailPage';
import { VotingModalsPage } from './components/pages/VotingModalsPage';

const initialNominationData: NominationData = {
  pillar: 'pillar',
  categoryId: 'pillar_hotel',
  email: 'hieunt.fo@gmail.com',
  isEmailVerified: true,
  otp: '123456',
  orgName: 'Công ty Cổ phần Khách sạn & Du lịch Mặt Trời Mọc',
  orgType: 'Cơ sở lưu trú (Khách sạn/Resort/Homestay)',
  taxCode: '0109887766',
  province: 'Kiên Giang (Phú Quốc)',
  detailedAddress: 'Bãi Trường, Dương Tơ, TP. Phú Quốc, Kiên Giang',
  website: 'https://sunriseresort.vn',
  fanpage: 'https://facebook.com/sunriseresort',
  repName: 'Nguyễn Trung Hiếu',
  repTitle: 'Giám đốc Điều hành',
  repPhone: '0912345678',
  repEmail: 'hieunt.fo@gmail.com',
  repGovAgency: '',
  indivType: 'self',
  indivName: '',
  indivRole: '',
  indivProvince: '',
  indivMainChannel: '',
  nomineeTitle: 'Khu nghỉ dưỡng Sunrise Ecolodge & Spa Phú Quốc',
  overviewIntro: '',
  keyAchievements: '',
  keyDifferentiation: '',
  hotelStar: '5_star',
  hotelRooms: 320,
  hotelOccupancyRate: 78.5,
  hotelRoomNightsSold: 85200,
  otaBooking: '9.2',
  otaAgoda: '9.0',
  otaTripadvisor: '4.8',
  otaOther: 'Google 4.7',
  otaReviewUrl: 'https://www.tripadvisor.com/Hotel_Review-Sunrise_Resort_Phu_Quoc',
  textHotelInnovation: 'Đầu tư 45 tỷ đồng nâng cấp toàn diện khu phức hợp chăm sóc sức khỏe thảo dược bản địa và hồ bơi vô cực nước mặn.',
  textHotelSustainability: '100% sử dụng năng lượng mặt trời áp mái, loại bỏ hoàn toàn chai nhựa sử dụng một lần và tái chế 95% nước thải tưới tiêu.',
  uploadedFiles: [
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
  ],
  videoUrl: 'https://www.youtube.com/watch?v=travelawards2026',
  agreedCompliance: true,
  agreedPrivacy: true,
  agreedMediaUse: true,
  agreedRules: true,
  captchaVerified: true,
  submissionCode: 'TA26-8942',
  savedDraftTime: '18:24',
};

export default function App() {
  const [viewport, setViewport] = useState<ViewportMode>('desktop'); // Default to PC 1920 / Safe 1280
  const [gridOptions, setGridOptions] = useState<DesktopGridOptions>({
    show12ColGrid: false, // 2/ Mặc định ĐỪNG bật lưới cột theo yêu cầu
    showRulerGuides: true, // Thước đo tỉ lệ 1920 / 1280
    showMasthead: true, // Masthead 1920x250
    showSideAds: false, // 1/ Tạm thời ẩn QC 2 bên đi theo yêu cầu
    scaleMode: 'fit', // Tự động co vừa khung nhìn màn hình
  });
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [formStep, setFormStep] = useState<FormStep>('M0');
  const [simState, setSimState] = useState<SimulationState>('normal');
  const [showNotes, setShowNotes] = useState<boolean>(true);
  const [formData, setFormData] = useState<NominationData>(initialNominationData);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const handleUpdateFormData = (updates: Partial<NominationData>) => {
    const updatedTime = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    setFormData((prev) => ({
      ...prev,
      ...updates,
      savedDraftTime: updatedTime,
    }));
  };

  const handleResetData = () => {
    setFormData({
      pillar: 'pillar',
      categoryId: '',
      email: '',
      isEmailVerified: false,
      otp: '',
      orgName: '',
      orgType: '',
      taxCode: '',
      province: '',
      detailedAddress: '',
      website: '',
      fanpage: '',
      repName: '',
      repTitle: '',
      repPhone: '',
      repEmail: '',
      indivType: 'self',
      indivName: '',
      indivRole: '',
      indivProvince: '',
      indivMainChannel: '',
      nomineeTitle: '',
      overviewIntro: '',
      keyAchievements: '',
      keyDifferentiation: '',
      uploadedFiles: [],
      videoUrl: '',
      agreedCompliance: false,
      agreedPrivacy: false,
      agreedMediaUse: false,
      agreedRules: false,
      captchaVerified: false,
      submissionCode: '',
      savedDraftTime: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    });
    setFormStep('M0');
    setSimState('normal');
  };

  const handleFillSampleData = () => {
    setFormData(initialNominationData);
    setFormStep('M5');
    setCurrentScreen('nomination_form');
  };

  // Screen content rendering
  const renderScreenContent = () => (
    <>
      <WireframeHeader
        currentScreen={currentScreen}
        onScreenChange={(s) => setCurrentScreen(s)}
        onStartNomination={() => {
          setCurrentScreen('nomination_form');
          setFormStep('M0');
        }}
      />

      <div className="w-full">
        {currentScreen === 'home' && (
          <HomePage
            onNavigate={(s) => setCurrentScreen(s)}
            onStartNomination={() => {
              setCurrentScreen('nomination_form');
              setFormStep('M0');
            }}
            showNotes={showNotes}
          />
        )}

        {currentScreen === 'news_list' && (
          <NewsListPage
            onNavigate={(s) => setCurrentScreen(s)}
            onStartNomination={() => {
              setCurrentScreen('nomination_form');
              setFormStep('M0');
            }}
            showNotes={showNotes}
          />
        )}

        {currentScreen === 'news_detail' && (
          <NewsDetailPage
            onNavigate={(s) => setCurrentScreen(s)}
            onStartNomination={() => {
              setCurrentScreen('nomination_form');
              setFormStep('M0');
            }}
            showNotes={showNotes}
          />
        )}

        {currentScreen === 'rules' && (
          <RulesPage
            onNavigate={(s) => setCurrentScreen(s)}
            onStartNomination={() => {
              setCurrentScreen('nomination_form');
              setFormStep('M0');
            }}
            showNotes={showNotes}
          />
        )}

        {currentScreen === 'nomination_form' && (
          <RegistrationFlow
            currentStep={formStep}
            onStepChange={(st) => setFormStep(st)}
            data={formData}
            onDataChange={handleUpdateFormData}
            simState={simState}
            onSimStateChange={(st) => setSimState(st)}
            showNotes={showNotes}
            onGoHome={() => setCurrentScreen('home')}
          />
        )}

        {currentScreen === 'voting_list' && (
          <VotingListPage
            onNavigate={(s) => setCurrentScreen(s)}
            onSelectCandidate={(cand) => setSelectedCandidate(cand)}
            showNotes={showNotes}
          />
        )}

        {currentScreen === 'voting_detail' && (
          <VotingDetailPage
            candidate={selectedCandidate}
            onNavigate={(s) => setCurrentScreen(s)}
            onOpenModal={(modal) => setCurrentScreen('voting_modals')}
            showNotes={showNotes}
          />
        )}

        {currentScreen === 'voting_modals' && (
          <VotingModalsPage
            onNavigate={(s) => setCurrentScreen(s)}
            showNotes={showNotes}
          />
        )}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col items-center justify-start text-zinc-900 font-sans selection:bg-black selection:text-white overflow-x-auto">
      {/* PERSISTENT TOP INFO BAR (FOR REVIEWER ORIENTATION) */}
      <div className="w-full bg-black text-white text-[11px] font-mono py-1.5 px-4 flex flex-wrap items-center justify-between border-b border-zinc-800 z-50 sticky top-0 shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-bold text-amber-400">TRAVEL AWARDS 2026</span>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-300">Wireframe Lo-Fi Reviewer (PO / Tech / Ban Du lịch)</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-400 text-[10px]">
          <span className="bg-zinc-800 border border-zinc-700 px-2 py-0.5 text-amber-300 font-bold">
            {viewport === 'desktop'
              ? '🖥️ PC Lưới 1920px · Khung an toàn 1280px (Biên 320px × 2)'
              : '📱 Mobile 375px'}
          </span>
          <span>·</span>
          <span>Màn hình: <strong>{currentScreen}</strong></span>
        </div>
      </div>

      {/* VIEWPORT CANVAS */}
      {viewport === 'mobile' ? (
        /* MOBILE VIEWPORT 375px */
        <main className="my-6 max-w-[375px] w-full min-h-[812px] bg-white border-4 border-black shadow-2xl relative">
          {/* Mobile Status Bar Simulation */}
          <div className="bg-black text-white px-4 py-1 text-[10px] font-mono flex items-center justify-between select-none">
            <span>09:41</span>
            <div className="flex items-center gap-1.5 text-[9px]">
              <span>5G</span>
              <span>100% 🔋</span>
            </div>
          </div>
          {renderScreenContent()}
        </main>
      ) : (
        /* PC VIEWPORT: LƯỚI 1920px - KHUNG AN TOÀN 1280px */
        <main
          className={`w-full flex flex-col items-center transition-all ${
            gridOptions.scaleMode === 'fit'
              ? 'max-w-[1920px] origin-top'
              : 'min-w-[1920px] w-[1920px]'
          }`}
        >
          {/* Ruler & Dimensions Header (0 -> 320 -> 1600 -> 1920) */}
          <DesktopGridOverlay
            show12ColGrid={gridOptions.show12ColGrid}
            showRulerGuides={gridOptions.showRulerGuides}
            showMasthead={gridOptions.showMasthead}
          />

          {/* Desktop Stage with 320px Left Gutter + 1280px Safe Area + 320px Right Gutter */}
          <DesktopSideGutters showSideAds={gridOptions.showSideAds}>
            {renderScreenContent()}
          </DesktopSideGutters>
        </main>
      )}

      {/* FIXED REVIEWER TOOLBAR DOCK (PO / TECH / UX CONTROLLER) */}
      <ReviewerToolbar
        viewport={viewport}
        onViewportChange={(v) => setViewport(v)}
        gridOptions={gridOptions}
        onGridOptionsChange={(opts) => setGridOptions((prev) => ({ ...prev, ...opts }))}
        currentScreen={currentScreen}
        onScreenChange={(s) => setCurrentScreen(s)}
        formStep={formStep}
        onFormStepChange={(st) => setFormStep(st)}
        simState={simState}
        onSimStateChange={(st) => setSimState(st)}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onResetData={handleResetData}
        onFillSampleData={handleFillSampleData}
      />
    </div>
  );
}
