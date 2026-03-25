import { motion } from "motion/react";
import { MapPin, Car, Bus, Footprints, CheckCircle2, HelpCircle, Map, MessageCircle, Phone, Wifi, Users, Accessibility } from "lucide-react";

export default function Location() {
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
            <span className="text-navy-300">오시는 길과 문의 방법</span>
          </h2>
          <div className="w-12 h-1 bg-navy-700 mx-auto mb-10"></div>
          <p className="text-lg text-navy-50/70 leading-relaxed break-keep max-w-3xl mx-auto">
            도보, 대중교통, 자가용 이용 방법과 주차 안내를<br className="hidden md:block" /> 한눈에 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* Address & Map Link */}
      <section className="py-16 px-6 bg-white border-b border-beige-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-beige-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 border border-beige-200 shadow-sm">
            <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">주소 안내</h3>
              <div className="space-y-4 text-lg text-navy-700">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="font-bold text-navy-500 text-sm md:text-base w-24 shrink-0">도로명 주소</span>
                  <span className="font-medium text-navy-900">전북 전주시 완산구 홍산1길 21 207호</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="font-bold text-navy-500 text-sm md:text-base w-24 shrink-0">지번 주소</span>
                  <span>전북 전주시 완산구 효자동2가 1157-1</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="font-bold text-navy-500 text-sm md:text-base w-24 shrink-0">위치 요약</span>
                  <span className="text-navy-700 font-bold bg-beige-200 px-3 py-1 rounded-lg inline-block w-fit mx-auto md:mx-0">효자동 서희스타힐스 상가 2층</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Methods */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Car */}
            <div className="bg-white border-2 border-navy-900 p-8 rounded-3xl shadow-md relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-beige-200 opacity-50">
                <Car className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 text-white rounded-full text-sm font-bold mb-6">
                  <Car className="w-4 h-4" /> 가장 추천하는 방법
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">자차 이용 및 주차</h4>
                <div className="space-y-4 text-navy-700 break-keep">
                  <div>
                    <span className="block font-bold text-navy-900 mb-1">주차 방법</span>
                    <p>건물 1층 주차장 입구로 진입한 뒤, <strong className="text-navy-700">상가 전용 2층 주차장</strong>으로 올라오시면 한의원 입구와 바로 연결됩니다.</p>
                  </div>
                  <div>
                    <span className="block font-bold text-navy-900 mb-1">주차 비용</span>
                    <p>내원 환자 <strong className="text-navy-900 bg-yellow-100 px-1">무료 주차</strong> 가능합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bus */}
            <div className="bg-beige-50 border border-beige-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-beige-200 rounded-full flex items-center justify-center mb-6">
                <Bus className="w-6 h-6 text-navy-800" />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-6">대중교통 이용 시</h4>
              <div className="space-y-6 text-navy-700 break-keep">
                <div>
                  <span className="block font-bold text-navy-900 mb-1">전주우체국 정류장 <span className="text-navy-500 font-normal text-sm">(도보 1분)</span></span>
                  <p className="text-sm bg-white p-3 rounded-xl border border-beige-200">355, 3001, 3002번</p>
                </div>
                <div>
                  <span className="block font-bold text-navy-900 mb-1">효자SK리더스뷰 정류장 <span className="text-navy-500 font-normal text-sm">(도보 이동 필요)</span></span>
                  <p className="text-sm bg-white p-3 rounded-xl border border-beige-200">74, 108, 119, 354, 385, 386, 830, 4000, 5001번</p>
                </div>
              </div>
            </div>

            {/* Walk */}
            <div className="bg-beige-50 border border-beige-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-beige-200 rounded-full flex items-center justify-center mb-6">
                <Footprints className="w-6 h-6 text-navy-800" />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-6">도보로 오실 때</h4>
              <p className="text-navy-700 leading-relaxed break-keep">
                상가 건물 1층 입구로 들어오신 뒤, 엘리베이터나 계단을 이용해 <strong className="text-navy-900 text-lg">2층</strong>으로 올라오시면 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 px-6 bg-beige-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">FACILITIES</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900">✨ 전주W한의원 편의시설 안내</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-navy-800" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">무료 와이파이</h4>
              <p className="text-navy-600 text-sm break-keep">대기 시간 동안 편안하게<br />인터넷을 이용하실 수 있습니다.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-navy-800" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">남/녀 화장실 구분</h4>
              <p className="text-navy-600 text-sm break-keep">상가 내 깨끗하게 관리되는<br />전용 화장실이 마련되어 있습니다.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Accessibility className="w-8 h-8 text-navy-800" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">배리어 프리</h4>
              <p className="text-navy-600 text-sm break-keep">휠체어 이동이 편리하며<br />장애인 주차 구역이 완비되어 있습니다.</p>
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
                <span className="pt-0.5 break-keep">주차가 가능한가요?</span>
              </h4>
              <p className="text-navy-600 leading-relaxed break-keep pl-10">
                네, 건물 내 상가 전용 주차장에 <strong className="text-navy-900">무료 주차</strong>가 가능합니다. 특히 1층 주차장을 지나 <strong className="text-navy-900">2층 주차장</strong>까지 올라오시면 한의원 입구와 바로 연결되어 더욱 편리합니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200">
              <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-start gap-3">
                <span className="text-navy-300 font-serif">Q2.</span>
                <span className="pt-0.5 break-keep">가장 가까운 버스 정류장은 어디인가요?</span>
              </h4>
              <p className="text-navy-600 leading-relaxed break-keep pl-10">
                <strong className="text-navy-900">전주우체국 정류장</strong>이 가장 가깝습니다. 하차 후 도보 1분 거리 내에 한의원이 위치하고 있습니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200">
              <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-start gap-3">
                <span className="text-navy-300 font-serif">Q3.</span>
                <span className="pt-0.5 break-keep">처음 방문인데 길이 헷갈리면 어떻게 하나요?</span>
              </h4>
              <p className="text-navy-600 leading-relaxed break-keep pl-10">
                전화(<strong className="text-navy-900">063-222-1075</strong>) 또는 <strong className="text-navy-900">카카오톡 채널</strong>로 문의해 주시면, 환자분의 현재 위치에 맞춰 가장 빠른 방문 방법을 친절히 안내해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Links */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy-900">빠른 길 찾기 및 문의</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://map.naver.com/p/search/%EC%A0%84%EC%A3%BCw%ED%95%9C%EC%9D%98%EC%9B%90/place/1999496121?placePath=/home?bk_query=%EC%A0%84%EC%A3%BCw%ED%95%9C%EC%9D%98%EC%9B%90&entry=pll&from=nx&fromNxList=true&fromPanelNum=2&timestamp=202603161658&locale=ko&svcName=map_pcv5&searchText=%EC%A0%84%EC%A3%BCw%ED%95%9C%EC%9D%98%EC%9B%90&searchType=place&c=15.00,0,0,0,dh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-4 p-10 bg-[#03C75A]/10 hover:bg-[#03C75A]/20 border border-[#03C75A]/20 rounded-3xl transition-colors group"
            >
              <div className="w-16 h-16 bg-[#03C75A] text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Map className="w-8 h-8" />
              </div>
              <span className="text-lg font-bold text-navy-900">네이버 지도로 위치 보기</span>
            </a>

            <a 
              href="https://pf.kakao.com/_xjxcgpxl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-4 p-10 bg-[#FEE500]/20 hover:bg-[#FEE500]/40 border border-[#FEE500]/30 rounded-3xl transition-colors group"
            >
              <div className="w-16 h-16 bg-[#FEE500] text-[#3C1E1E] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <span className="text-lg font-bold text-navy-900">카카오톡으로 오시는 길 문의</span>
            </a>

            <a 
              href="tel:0632221075" 
              target="_top"
              className="flex flex-col items-center justify-center gap-4 p-10 bg-navy-900 hover:bg-navy-800 text-white rounded-3xl transition-colors group shadow-md"
            >
              <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <div className="text-center">
                <span className="block text-sm text-navy-300 mb-1">전화 문의</span>
                <span className="text-2xl font-bold">063-222-1075</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
