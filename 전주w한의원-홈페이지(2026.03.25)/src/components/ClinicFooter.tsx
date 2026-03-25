import { Clock, MapPin } from "lucide-react";
import Logo from "./Logo";

interface ClinicFooterProps {
  setCurrentPage: (page: string) => void;
}

export default function ClinicFooter({ setCurrentPage }: ClinicFooterProps) {
  return (
    <footer className="w-full border-t border-beige-200">
      {/* Top Section */}
      <div className="bg-beige-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <Logo variant="navy" className="h-10" />
            <div className="text-sm text-navy-600 leading-relaxed">
              <p>몸의 불균형을 바로잡고,</p>
              <p>일상을 회복하는 길을 함께합니다.</p>
            </div>
          </div>

          {/* Clinical Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              진료 안내
            </h3>
            <div className="space-y-3 text-sm text-navy-600">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <div className="space-y-1">
                  <p>평일 08:30 ~ 18:00</p>
                  <p>점심 시간 12:30 ~ 14:00</p>
                  <p>토요일 08:30 ~ 13:00 (점심시간 없이 진료)</p>
                  <p className="text-red-500/80">일요일 및 공휴일 휴진</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-beige-200">
                <MapPin className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <p>전북 전주시 완산구 홍산1길 21 207호</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-navy-900">바로가기</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-navy-600">
              <button onClick={() => setCurrentPage('home')} className="text-left hover:text-navy-900 hover:underline transition-colors">홈</button>
              <button onClick={() => setCurrentPage('about')} className="text-left hover:text-navy-900 hover:underline transition-colors">한의원 소개</button>
              <button onClick={() => setCurrentPage('traffic')} className="text-left hover:text-navy-900 hover:underline transition-colors">교통사고 입원·통원</button>
              <button onClick={() => setCurrentPage('diet')} className="text-left hover:text-navy-900 hover:underline transition-colors">체중 감량·체질 개선</button>
              <button onClick={() => setCurrentPage('metabolic')} className="text-left hover:text-navy-900 hover:underline transition-colors">고혈압·고지혈증·당뇨</button>
              <button onClick={() => setCurrentPage('guide')} className="text-left hover:text-navy-900 hover:underline transition-colors">진료 안내</button>
              <button onClick={() => setCurrentPage('location')} className="text-left hover:text-navy-900 hover:underline transition-colors">오시는 길 / 문의</button>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Section (Navy) */}
      <div className="bg-navy-900 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-beige-50/80">
          <div className="flex gap-6">
            <button 
              onClick={() => setCurrentPage('privacy')} 
              className="hover:text-white hover:underline transition-colors font-medium"
            >
              개인정보처리방침
            </button>
          </div>
          <p>© 2026 Jeonju W Korean Medicine Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
