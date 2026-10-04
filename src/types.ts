export type ViewportMode = 'mobile' | 'desktop';

export interface DesktopGridOptions {
  show12ColGrid: boolean;
  showRulerGuides: boolean;
  showMasthead: boolean;
  showSideAds: boolean;
  scaleMode: 'fit' | 'full';
}

export type AppScreen =
  | 'home'
  | 'news_list'
  | 'news_detail'
  | 'rules'
  | 'nomination_form'
  | 'voting_list'
  | 'voting_detail'
  | 'voting_modals';

export type FormStep =
  | 'M0' // Trang mở đầu
  | 'M1' // Bước 1: Chọn nhóm giải
  | 'M2' // Bước 2: Chọn hạng mục
  | 'M3' // Bước 3: Xác thực OTP email
  | 'M4' // Bước 4: Mục I - TT Đơn vị/Cá nhân
  | 'M5' // Bước 5: Mục II - TT Đề cử
  | 'M6' // Bước 6: Mục III - Số liệu hoạt động
  | 'M7' // Bước 7: Tải hồ sơ & minh chứng
  | 'M8' // Bước 8: Xem lại & Gửi
  | 'M9' // Màn hình Thành công
  | 'M10'; // Khung mô phỏng Email

export type SimulationState =
  | 'normal'
  | 'not_opened' // Chưa mở form (trước 16/10)
  | 'input_error' // Lỗi nhập liệu tại M4/M5
  | 'upload_error' // Lỗi tải file tại M7
  | 'session_timeout' // Hết phiên, yêu cầu OTP
  | 'duplicate_warning' // Cảnh báo trùng hồ sơ tại M5
  | 'portal_closed'; // Đã đóng cổng (sau 16/11)

export type AwardPillar = 'pillar' | 'pioneer';

export interface CategoryItem {
  id: string;
  pillar: AwardPillar;
  name: string;
  code: string;
  shortDesc: string;
  targetAudience: string;
  criteriaPlaceholder: string;
  isIndividual?: boolean;
}

export interface NominationData {
  pillar: AwardPillar;
  categoryId: string;
  // Step 3
  email: string;
  isEmailVerified: boolean;
  otp: string;
  // Step 4 - Organization
  orgName: string;
  orgType: string;
  taxCode: string;
  province: string;
  detailedAddress: string;
  website: string;
  fanpage: string;
  repName: string;
  repTitle: string;
  repPhone: string;
  repEmail: string;
  repGovAgency?: string; // riêng cho Điểm đến cấp tỉnh
  // Step 4 - Individual
  indivType: 'self' | 'other';
  indivName: string;
  indivRole: string;
  indivProvince: string;
  indivMainChannel: string;
  nominatorName?: string;
  nominatorPhone?: string;
  nominatorEmail?: string;
  nomineeEmail?: string;
  // Step 5 - Nomination Details
  nomineeTitle: string;
  overviewIntro: string;
  keyAchievements: string;
  keyDifferentiation: string;
  // Step 6 - Metrics (Dynamic)
  // Điểm đến
  touristCountCurrent?: number | string;
  touristCountPrevious?: number | string;
  revenueCurrent?: number | string;
  revenuePrevious?: number | string;
  textNewInfrastructure?: string;
  textPromotion?: string;
  textPreservation?: string;
  // Khách sạn / Resort
  hotelStar?: string;
  hotelRooms?: number | string;
  hotelOccupancyRate?: number | string;
  hotelRoomNightsSold?: number | string;
  otaBooking?: string;
  otaAgoda?: string;
  otaTripadvisor?: string;
  otaOther?: string;
  otaReviewUrl?: string;
  textHotelInnovation?: string;
  textHotelSustainability?: string;
  // Step 7 - Uploads
  uploadedFiles: {
    id: string;
    category: string;
    name: string;
    size: string;
    status: 'success' | 'uploading' | 'error';
    errorMsg?: string;
  }[];
  videoUrl: string;
  // Step 8 - Commitments
  agreedCompliance: boolean;
  agreedPrivacy: boolean;
  agreedMediaUse: boolean;
  agreedRules: boolean;
  captchaVerified: boolean;
  // Submission
  submissionCode: string;
  savedDraftTime: string;
}
