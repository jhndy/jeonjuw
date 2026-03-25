import { motion } from "motion/react";
import { Clock, Phone, MessageCircle, Info, HelpCircle, ChevronRight, Car, FileText, Pill } from "lucide-react";

export default function Guide() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pb-24 w-full"
    >
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-[1.4] break-keep">
            전주 효자동 전주W한의원<br className="hidden md:block" />
            <span className="text-navy-300">진료 안내</span>
          </h2>
          <div className="w-12 h-1 bg-navy-700 mx-auto mb-10"></div>
          <p className="text-lg text-navy-50/70 leading-relaxed break-keep max-w-3xl mx-auto">
            처음 내원하시기 전 확인하시면 좋은 내용을<br className="hidden md:block" /> 한곳에 정리했습니다.
          </p>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="py-24 px-6 bg-beige-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Hours */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-beige-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-beige-200 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-navy-800" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900">진료 시간 안내</h3>
            </div>
            <div className="space-y-6 text-lg text-navy-700">
              <div className="flex justify-between items-center border-b border-beige-200 pb-4">
                <span className="font-bold text-navy-900">평일</span>
                <span>08:30 ~ 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-beige-200 pb-4">
                <span className="font-bold text-navy-500">점심 시간</span>
                <span className="text-navy-500">12:30 ~ 14:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-beige-200 pb-4">
                <span className="font-bold text-navy-900">토요일</span>
                <div className="text-right">
                  <span className="block">08:30 ~ 13:00</span>
                  <span className="text-sm text-navy-500">(점심시간 없이 진료)</span>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="font-bold text-red-500">일요일 및 공휴일</span>
                <span className="text-red-500 font-medium">휴진</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-beige-200 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-beige-200 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-navy-800" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900">예약 및 문의 방법</h3>
            </div>
            
            <div className="space-y-6 flex-grow">
              <a 
                href="tel:0632221075" 
                target="_top"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 bg-beige-50 rounded-full flex items-center justify-center shrink-0 mt-1 border border-beige-200 group-hover:bg-beige-100 transition-colors">
                  <Phone className="w-4 h-4 text-navy-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1 group-hover:text-navy-700 transition-colors">전화 문의</h4>
                  <p className="text-navy-600 text-lg group-hover:text-navy-800 transition-colors">063-222-1075</p>
                </div>
              </a>
              
              <a href="https://pf.kakao.com/_xjxcgpxl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 bg-[#FEE500] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FADA0A] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#3C1E1E]" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 group-hover:text-navy-700 transition-colors">카카오톡 문의</h4>
                </div>
              </a>
            </div>

            <div className="mt-8 bg-beige-50 p-6 rounded-2xl border border-beige-200">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-5 h-5 text-navy-800" />
                <h4 className="font-bold text-navy-900">상담 팁</h4>
              </div>
              <p className="text-navy-600 text-sm leading-relaxed break-keep">
                현재 불편한 증상이나 상담받고 싶은 내용을 간단히 남겨주시면 더욱 빠른 안내가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Visit Info */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16 text-navy-900">✅ 처음 내원하시는 분께 안내드립니다</h3>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-beige-50 rounded-3xl border border-beige-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <Car className="w-8 h-8 text-navy-800" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">교통사고 진료</h4>
                <p className="text-navy-600 text-lg break-keep">사고 접수번호와 보험사 담당자 연락처를 미리 확인해 주세요.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-beige-50 rounded-3xl border border-beige-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-8 h-8 text-navy-800" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">건강검진 결과 상담</h4>
                <p className="text-navy-600 text-lg break-keep">최근 건강검진 결과지가 있다면 함께 가져오시면 상담에 도움이 됩니다.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-beige-50 rounded-3xl border border-beige-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <Pill className="w-8 h-8 text-navy-800" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">복용 중인 약</h4>
                <p className="text-navy-600 text-lg break-keep">현재 복용 중인 약이 있다면 미리 알려주세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-beige-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <HelpCircle className="w-8 h-8 text-navy-800" />
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900">자주 묻는 질문 (FAQ)</h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200">
              <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-start gap-3">
                <span className="text-navy-300 font-serif">Q1.</span>
                <span className="pt-0.5 break-keep">토요일에도 진료하나요?</span>
              </h4>
              <p className="text-navy-600 leading-relaxed break-keep pl-10">
                네, 토요일은 오전 08:30부터 13:00까지 진료합니다. 토요일은 점심시간 없이 운영되니 편하게 내원해 주세요.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200">
              <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-start gap-3">
                <span className="text-navy-300 font-serif">Q2.</span>
                <span className="pt-0.5 break-keep">교통사고 진료를 받으려면 무엇이 필요한가요?</span>
              </h4>
              <p className="text-navy-600 leading-relaxed break-keep pl-10">
                사고 접수번호와 보험사 담당자 연락처를 미리 확인해 주시면, 복잡한 절차 없이 바로 진료 안내를 도와드립니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200">
              <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-start gap-3">
                <span className="text-navy-300 font-serif">Q3.</span>
                <span className="pt-0.5 break-keep">건강검진 결과지를 가져가면 도움이 되나요?</span>
              </h4>
              <p className="text-navy-600 leading-relaxed break-keep pl-10">
                네, 최근 건강검진 결과지가 있다면 현재 상태를 더욱 면밀히 살피는 데 큰 도움이 됩니다. 복용 중인 약 정보도 함께 알려주시면 좋습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-navy-900 rounded-[2.5rem] p-10 md:p-16 text-white shadow-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 leading-[1.4]">
            궁금한 점이 있으시다면<br className="md:hidden" /> 언제든 문의해 주세요
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:0632221075" 
              target="_top"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-navy-900 rounded-full text-base font-bold hover:bg-navy-50 transition-colors shadow-md w-full md:w-auto"
            >
              <Phone className="w-5 h-5" />
              전화 상담하기
            </a>
            <a 
              href="https://pf.kakao.com/_xjxcgpxl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#FEE500] text-[#3C1E1E] rounded-full text-base font-bold hover:bg-[#FADA0A] transition-colors shadow-md w-full md:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 상담하기
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
