import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Clock, MapPin, Phone, CheckCircle2, ArrowRight, HeartHandshake, Compass, Car, Scale, Activity, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/image/main.png",
    mobileImage: "/image/main.png",
    title: "몸 상태와 생활의 리듬을\n함께 살핍니다",
    description: "교통사고 이후 통증과 불편, 체중 관리, 건강검진 수치 관리까지\n현재 상태에 맞는 방향을 함께 정리합니다."
  },
  {
    image: "/image/main2.png",
    mobileImage: "/image/main2_m.png",
    title: "편안한 진료 환경에서\n회복에 집중하세요",
    description: "환자 한 분 한 분의 목소리에 귀 기울이며\n가장 적합한 치료 과정을 안내해 드립니다."
  },
  {
    image: "/image/main3.png",
    mobileImage: "/image/main3_m.png",
    title: "일상으로의 건강한 복귀\n전주W한의원이 함께합니다",
    description: "단순한 증상 완화를 넘어,\n지속 가능한 건강한 삶을 위한 파트너가 되겠습니다."
  }
];

export default function Home({ setPage }: { setPage: (page: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section with Slider */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Background Image - Desktop */}
            <div 
              className="absolute inset-0 hidden md:block"
              style={{
                backgroundImage: `url("${slides[currentIndex].image}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            {/* Background Image - Mobile */}
            <div 
              className="absolute inset-0 block md:hidden"
              style={{
                backgroundImage: `url("${slides[currentIndex].mobileImage || slides[currentIndex].image}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl text-left"
            >
              <span className="text-xs md:text-sm font-medium text-white/90 mb-3 block">
                전주 효자동 한의원
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 leading-[1.2] tracking-tight whitespace-pre-line break-keep">
                {slides[currentIndex].title}
              </h2>
              <p className="text-base md:text-lg text-white/85 mb-10 leading-[1.6] whitespace-pre-line break-keep">
                {slides[currentIndex].description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a 
                  href="tel:0632221075"
                  target="_top"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 rounded-full text-sm font-bold hover:bg-gray-50 transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  상담하기
                </a>
                <a 
                  href="https://pf.kakao.com/_xjxcgpxl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white border border-white/30 rounded-full text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <div className="w-5 h-5 bg-[#FEE500] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-black fill-black" />
                  </div>
                  카카오 상담하기
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls - Bottom Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Optional: Side Navigation Arrows (Visible on Desktop) */}
        <div className="hidden lg:flex absolute inset-x-10 top-1/2 -translate-y-1/2 justify-between z-20 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-black/10 hover:bg-black/30 text-white flex items-center justify-center transition-all pointer-events-auto backdrop-blur-sm border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-black/10 hover:bg-black/30 text-white flex items-center justify-center transition-all pointer-events-auto backdrop-blur-sm border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-20 px-6 bg-beige-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-navy-600 font-bold tracking-wider text-xs mb-2 block">OUR PHILOSOPHY</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">전주W한의원은 이렇게 진료합니다</h3>
            <div className="w-10 h-1 bg-navy-800 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-navy-50 text-navy-800 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">충분히 듣습니다</h4>
              <p className="text-sm text-navy-600 leading-relaxed break-keep">
                단순히 증상만이 아니라, 생활 속 불편과 몸의 변화를 환자분의 입장에서 먼저 귀 기울여 듣습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-navy-50 text-navy-800 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">쉽게 설명합니다</h4>
              <p className="text-sm text-navy-600 leading-relaxed break-keep">
                어려운 의학 용어 대신, 환자분이 바로 이해하고 공감할 수 있는 일상의 언어로 현재 상태를 설명합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-navy-50 text-navy-800 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">현실적인 방향을<br/>함께 정리합니다</h4>
              <p className="text-sm text-navy-600 leading-relaxed break-keep">
                무리한 계획보다는, 지금의 생활 패턴 안에서 꾸준히 이어갈 수 있는 관리 방향을 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="w-full py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-navy-300 font-bold tracking-wider text-xs mb-2 block">CLINIC</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">주요 진료 과목</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div 
              onClick={() => setPage('traffic')}
              className="group bg-navy-800 hover:bg-navy-700 border border-navy-700 hover:border-navy-500 shadow-lg hover:shadow-xl p-8 rounded-3xl transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-navy-200 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-3">교통사고 입원·통원</h4>
              <p className="text-sm text-navy-200 leading-relaxed break-keep flex-grow mb-8">
                사고 후 남는 통증과 불편에 대해, 입원과 통원 중 현재 상태에 맞는 회복 방향을 안내합니다.
              </p>
              <div className="flex items-center text-xs font-bold text-navy-300 group-hover:text-white transition-colors mt-auto">
                자세히 보기 <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div 
              onClick={() => setPage('diet')}
              className="group bg-navy-800 hover:bg-navy-700 border border-navy-700 hover:border-navy-500 shadow-lg hover:shadow-xl p-8 rounded-3xl transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6 text-navy-200 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-3">체중 감량·체질 개선</h4>
              <p className="text-sm text-navy-200 leading-relaxed break-keep flex-grow mb-8">
                몸 상태와 생활 패턴을 함께 살피며, 무리하지 않는 현실적인 관리 방향을 정리합니다.
              </p>
              <div className="flex items-center text-xs font-bold text-navy-300 group-hover:text-white transition-colors mt-auto">
                자세히 보기 <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div 
              onClick={() => setPage('metabolic')}
              className="group bg-navy-800 hover:bg-navy-700 border border-navy-700 hover:border-navy-500 shadow-lg hover:shadow-xl p-8 rounded-3xl transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-navy-200 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-3">고혈압·고지혈증·당뇨</h4>
              <p className="text-sm text-navy-200 leading-relaxed break-keep flex-grow mb-8">
                건강검진 수치가 신경 쓰일 때, 지금 상태에 맞는 관리 방향과 우선순위를 함께 정리합니다.
              </p>
              <div className="flex items-center text-xs font-bold text-navy-300 group-hover:text-white transition-colors mt-auto">
                자세히 보기 <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">혹시 이런 불편함을 겪고 계신가요?</h3>
            <p className="text-base text-navy-600">전주W한의원이 환자분의 고민을 함께 나누고 해결해 드립니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-beige-50 p-6 rounded-3xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-navy-800" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1.5">원인 모를 통증</h4>
                <p className="text-sm text-navy-600 leading-relaxed break-keep">검사상 큰 이상은 없는데 사고 후 통증이나 뻐근함이 계속되는 분</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-beige-50 p-6 rounded-3xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-navy-800" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1.5">반복되는 다이어트</h4>
                <p className="text-sm text-navy-600 leading-relaxed break-keep">잦은 체중 감량 시도와 요요 현상 때문에 지쳐버리신 분</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-beige-50 p-6 rounded-3xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-navy-800" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1.5">건강검진 수치 이상</h4>
                <p className="text-sm text-navy-600 leading-relaxed break-keep">건강검진 결과를 보고 본격적인 대사증후군 관리의 필요성을 느끼신 분</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-beige-50 p-6 rounded-3xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-navy-800" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1.5">꼼꼼한 상담 필요</h4>
                <p className="text-sm text-navy-600 leading-relaxed break-keep">내 상태를 차분히 듣고 이해하기 쉽게 설명해 주는 곳을 찾는 분</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Introduction Section */}
      <section className="w-full py-24 px-6 bg-beige-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Image Side */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-64 h-80 md:w-72 md:h-[420px] rounded-t-[140px] rounded-b-[40px] overflow-hidden shadow-xl border-[6px] border-white bg-[#e6e4dd]">
              <img 
                src="/image/doctor.png" 
                alt="박승현 원장" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Text Side */}
          <div className="w-full md:w-7/12 text-center md:text-left flex flex-col justify-center">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">의료진 소개</span>
            <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-navy-900 mb-8 leading-[1.4] break-keep">
              몸의 불균형을 바로잡고,<br />
              일상을 회복하는 길을 함께합니다.
            </h3>
            
            <div className="flex items-end justify-center md:justify-start gap-2 mb-8 pb-8 border-b border-beige-200">
              <span className="text-2xl font-bold text-navy-900">박승현</span>
              <span className="text-base text-navy-600 font-medium mb-0.5">원장 / 한의사</span>
            </div>
            
            <div className="space-y-5 text-base text-navy-700 leading-[1.7] break-keep">
              <p className="font-medium text-navy-800">
                몸의 증상만 따로 보지 않고,<br />
                생활의 흐름과 회복의 힘까지 함께 살피겠습니다.
              </p>
              <p>
                전주W한의원은 환자 한 분 한 분의 현재 상태를 꼼꼼히 살펴<br className="hidden lg:block" />
                무리하지 않고 지속할 수 있는 치료의 방향을 함께 찾아갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Location Section */}
      <section className="w-full py-20 px-6 border-t border-beige-200 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Clock className="w-6 h-6 text-navy-800" />
              <h3 className="text-xl font-bold text-navy-900">진료시간 안내</h3>
            </div>
            <div className="space-y-5 text-base text-navy-700">
              <div className="flex justify-between items-center border-b border-beige-200 pb-3">
                <span className="font-bold">평일</span>
                <span>08:30 ~ 18:00 <span className="text-navy-500 text-xs ml-1.5">(점심 12:30 ~ 14:00)</span></span>
              </div>
              <div className="flex justify-between items-center border-b border-beige-200 pb-3">
                <span className="font-bold text-navy-900">토요일</span>
                <span>08:30 ~ 13:00 <span className="text-navy-500 text-xs ml-1.5">(점심시간 없이 진료)</span></span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="font-bold text-red-500">일요일 및 공휴일</span>
                <span className="text-red-500 font-medium">휴진</span>
              </div>
            </div>
            <button 
              onClick={() => setPage('guide')} 
              className="mt-6 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-50 text-navy-900 rounded-xl text-sm font-bold hover:bg-navy-900 hover:text-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              진료 안내 더 보기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <MapPin className="w-6 h-6 text-navy-800" />
              <h3 className="text-xl font-bold text-navy-900">찾아오시는 길</h3>
            </div>
            <div className="space-y-5 text-base text-navy-700 bg-beige-50 p-6 rounded-2xl">
              <div>
                <span className="block text-xs font-bold text-navy-500 mb-1">주소</span>
                <p className="font-medium break-keep text-sm">
                  전북 전주시 완산구 홍산1길 21 207호<br />
                  <span className="text-navy-500">(효자동 서희스타힐스 상가)</span>
                </p>
              </div>
              <div>
                <span className="block text-xs font-bold text-navy-500 mb-1">주차</span>
                <p className="font-medium break-keep text-sm">
                  <span className="text-navy-900">상가 2층 주차장</span> 이용 시 한의원 입구와 바로 연결됩니다.<br />
                  <span className="text-navy-500 text-xs">(무료 주차 가능)</span>
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="https://map.naver.com/p/search/%EC%A0%84%EC%A3%BCw%ED%95%9C%EC%9D%98%EC%9B%90/place/1999496121?placePath=/home?bk_query=%EC%A0%84%EC%A3%BCw%ED%95%9C%EC%9D%98%EC%9B%90&entry=pll&from=nx&fromNxList=true&fromPanelNum=2&timestamp=202603161658&locale=ko&svcName=map_pcv5&searchText=%EC%A0%84%EC%A3%BCw%ED%95%9C%EC%9D%98%EC%9B%90&searchType=place&c=15.00,0,0,0,dh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#03C75A] text-white rounded-xl text-sm font-bold hover:bg-[#02b351] shadow-sm transition-colors"
              >
                <MapPin className="w-4 h-4" />
                네이버 지도에서 보기
              </a>
              <a 
                href="tel:0632221075"
                target="_top"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-navy-900 text-white rounded-xl text-sm font-bold hover:bg-navy-800 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                전화 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
