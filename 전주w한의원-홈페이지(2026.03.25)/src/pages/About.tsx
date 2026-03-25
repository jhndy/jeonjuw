import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pb-24 w-full"
    >
      {/* Hero */}
      <section className="relative w-full pt-32 pb-32 px-6 overflow-hidden min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/image/introduce.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-900/70 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white mb-6 leading-[1.4] break-keep">
            전주 효자동에서 몸 상태와 생활의 리듬을 함께 살피는 <br className="hidden md:block" />
            <span className="text-beige-200">전주W한의원입니다.</span>
          </h2>
          <p className="text-base md:text-lg text-white/90 font-medium mb-8 break-keep">
            지금의 불편함을 증상 하나로만 보지 않고, 현재의 몸 상태와 일상을 함께 살핍니다.
          </p>
          <div className="w-10 h-1 bg-beige-200 mx-auto mb-8"></div>
          <p className="text-sm md:text-base text-white/80 leading-relaxed break-keep max-w-3xl mx-auto">
            전주W한의원은 교통사고 이후 남는 통증과 불편, 반복되는 체중 증가와 요요, 그리고 고혈압·고지혈증·당뇨처럼 꾸준한 생활 관리가 중요한 문제들을 다룹니다. 환자분의 현재 상태를 꼼꼼히 확인하고, 지금 필요한 관리 방향을 차분히 함께 정리해 드립니다.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-white border-t border-beige-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-600 font-bold tracking-wider text-xs mb-2 block">OUR PHILOSOPHY</span>
            <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-5">전주W한의원은 이렇게 진료합니다</h3>
            <div className="w-10 h-1 bg-navy-800 mx-auto"></div>
          </div>
          
          <div className="relative mt-12">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-beige-200"></div>
            
            <div className="grid md:grid-cols-3 gap-10 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-beige-200 flex items-center justify-center text-xl font-bold text-navy-400 mb-6 relative z-10 shadow-sm group-hover:bg-navy-800 group-hover:border-navy-900 group-hover:text-white transition-all duration-300">
                  01
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">충분히 듣습니다</h4>
                <p className="text-sm text-navy-600 leading-relaxed break-keep">
                  단순히 통증 부위만 묻지 않습니다. 수면, 식사, 피로도, 생활 패턴까지 함께 살피며 현재 몸의 상태를 면밀히 정리합니다.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-beige-200 flex items-center justify-center text-xl font-bold text-navy-400 mb-6 relative z-10 shadow-sm group-hover:bg-navy-800 group-hover:border-navy-900 group-hover:text-white transition-all duration-300">
                  02
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">쉽게 설명합니다</h4>
                <p className="text-sm text-navy-600 leading-relaxed break-keep">
                  어려운 의학 용어보다 환자분이 바로 이해하실 수 있는 일상의 언어로, 현재 몸 상태와 관리 방향을 친절히 설명해 드립니다.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-beige-200 flex items-center justify-center text-xl font-bold text-navy-400 mb-6 relative z-10 shadow-sm group-hover:bg-navy-800 group-hover:border-navy-900 group-hover:text-white transition-all duration-300">
                  03
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">현실적인 방향을<br/>함께 찾습니다</h4>
                <p className="text-sm text-navy-600 leading-relaxed break-keep">
                  실천하기 어려운 무리한 방법보다는, 환자분의 지금 생활 안에서 꾸준히 이어갈 수 있는 현실적인 관리 방향을 함께 고민합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-20 px-6 bg-beige-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-navy-600 font-bold tracking-wider text-xs mb-2 block">CLINIC</span>
            <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-5">전주W한의원 주요 진료 분야</h3>
            <div className="w-10 h-1 bg-navy-800 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-beige-50 rounded-2xl flex items-center justify-center text-xl mb-5">🚗</div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">교통사고 클리닉</h4>
              <p className="text-sm text-navy-600 break-keep leading-relaxed">사고 후 통증에 대한<br/><strong className="text-navy-800 font-semibold">입원 치료 및 통원 진료</strong> 안내</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-beige-50 rounded-2xl flex items-center justify-center text-xl mb-5">🥗</div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">체중 감량 · 체질 개선</h4>
              <p className="text-sm text-navy-600 break-keep leading-relaxed">요요 없는 건강한 감량을 위한<br/><strong className="text-navy-800 font-semibold">생활 패턴 분석 및 관리</strong></p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-beige-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-beige-50 rounded-2xl flex items-center justify-center text-xl mb-5">📈</div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">고혈압·고지혈증·당뇨</h4>
              <p className="text-sm text-navy-600 break-keep leading-relaxed">수치 관리의<br/><strong className="text-navy-800 font-semibold">우선순위를 잡아주는 생활 습관 가이드</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-beige-50 rounded-[2rem] p-8 md:p-12 border border-beige-200 shadow-sm">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3 leading-[1.4]">이런 고민이 있다면<br className="md:hidden" /> 전주W한의원 상담이 도움이 됩니다</h3>
            <p className="text-sm text-navy-600">환자분의 현재 상태에 맞는 가장 현실적인 관리 방향을 안내해 드립니다.</p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 mb-12">
            <li className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-beige-100">
              <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
              <span className="text-sm text-navy-800 font-medium break-keep leading-relaxed">사고 후 검사상 큰 이상은 없는데 몸이 계속 불편한 경우</span>
            </li>
            <li className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-beige-100">
              <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
              <span className="text-sm text-navy-800 font-medium break-keep leading-relaxed">체중 감량을 반복했지만 다시 원래 상태로 돌아가 고민인 경우</span>
            </li>
            <li className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-beige-100">
              <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
              <span className="text-sm text-navy-800 font-medium break-keep leading-relaxed">혈압, 혈당, 체중 관리가 동시에 필요하다고 느끼는 경우</span>
            </li>
            <li className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-beige-100">
              <CheckCircle2 className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
              <span className="text-sm text-navy-800 font-medium break-keep leading-relaxed">내 상태를 충분히 들어주고 명확히 설명해 주는 곳이 필요한 경우</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:0632221075" 
              target="_top"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full text-sm font-bold hover:bg-navy-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full md:w-auto"
            >
              <Phone className="w-4 h-4" />
              전화 상담하기
            </a>
            <a 
              href="https://pf.kakao.com/_xjxcgpxl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FEE500] text-black rounded-full text-sm font-bold hover:bg-[#e6cf00] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full md:w-auto"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              카카오톡 상담하기
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
