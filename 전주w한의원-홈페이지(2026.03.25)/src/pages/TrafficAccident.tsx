import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, CheckCircle2, FileText, Stethoscope, Compass, Activity, ChevronDown, Car, Phone } from "lucide-react";
import { useState } from "react";

export default function TrafficAccident() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "교통사고 후 바로 아프지 않아도 한의원 진료를 받아야 하나요?",
      a: "네, 사고 직후에는 괜찮다가 몇 시간에서 며칠 뒤 통증이 나타나는 경우가 적지 않습니다.\n교통사고 직후에는 긴장 상태 때문에 통증을 잘 느끼지 못할 수 있고, 시간이 지나면서 목·허리 통증, 두통, 어지럼, 소화불량 같은 증상이 뒤늦게 드러나기도 합니다.\n특히 사고 이후 몸이 평소와 다르게 뻐근하거나 피로감이 심해졌다면, 가볍게 넘기지 말고 현재 상태를 확인해보는 것이 좋습니다."
    },
    {
      q: "교통사고 후 목, 허리 통증이나 두통이 며칠 뒤 생기는 이유는 무엇인가요?",
      a: "교통사고 후 통증이 늦게 나타나는 것은 사고 충격으로 인한 근육 긴장과 몸의 균형 변화가 시간이 지나며 드러나기 때문입니다.\n사고 순간에는 놀람과 긴장으로 통증이 덜 느껴질 수 있지만, 이후 근육이 굳고 움직임이 불편해지면서 목 통증, 허리 통증, 두통, 어깨 결림으로 이어질 수 있습니다.\n처음엔 가벼운 불편감처럼 느껴져도 일상생활을 하면서 통증이 점점 뚜렷해지는 경우가 많습니다."
    },
    {
      q: "교통사고 후 한의원에서는 어떤 증상을 주로 보나요?",
      a: "한의원에서는 단순히 한 부위의 통증만 보는 것이 아니라, 사고 이후 몸 전체의 변화와 생활 불편을 함께 살핍니다.\n대표적으로는 목과 허리 통증, 어깨 결림, 두통, 어지럼, 팔·다리 저림, 수면장애, 피로감, 소화불량 같은 증상을 함께 확인하는 경우가 많습니다.\n전주W한의원에서도 통증의 위치만이 아니라, 언제 심해지는지, 움직임은 어떤지, 사고 전과 비교해 몸 상태가 어떻게 달라졌는지를 함께 보고 치료 방향을 정합니다."
    },
    {
      q: "교통사고 후 한의원 치료는 어떤 분들에게 도움이 될 수 있나요?",
      a: "교통사고 후 한의원 진료는 통증이 반복되거나 몸이 쉽게 회복되지 않는 분들, 그리고 검사상 큰 이상은 없지만 불편이 계속되는 분들에게 진료 선택지 중 하나가 될 수 있습니다.\n특히 목·허리 통증이 오래 가거나, 앉아 있거나 잘 때 더 불편해졌거나, 두통·어지럼·피로감처럼 일상에 영향을 주는 증상이 함께 나타난다면 몸의 회복 흐름을 다시 점검해볼 필요가 있습니다.\n치료 방법은 개인의 상태와 증상 양상에 따라 달라질 수 있으므로, 현재 몸 상태를 먼저 정확히 살피는 것이 중요합니다."
    },
    {
      q: "교통사고 후 통증이 오래 가면 언제까지 지켜봐야 하나요?",
      a: "교통사고 후 통증이 며칠 이상 계속되거나 점점 더 불편해진다면, 참고 기다리기보다 진료를 통해 현재 상태를 확인하는 것이 좋습니다.\n특히 목이 돌아가지 않거나 허리 움직임이 불편한 경우, 두통이나 어지럼이 반복되는 경우, 잠을 자고 나도 몸이 계속 무거운 경우에는 일상 회복이 늦어질 수 있습니다.\n초기에 몸 상태를 잘 살피고 적절한 방향을 잡는 것이, 통증이 길어지는 것을 줄이는 데 도움이 될 수 있습니다."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pb-24 w-full overflow-x-hidden"
    >
      {/* Hero */}
      <section className="relative w-full pt-32 pb-40 px-5 sm:px-6 overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/image/car_main.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transform: 'scale(1.1)'
          }}
        />
        {/* Dark Overlay & Vignette to hide background signs */}
        <div className="absolute inset-0 bg-navy-900/60 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,25,47,0.9)_80%)] z-0" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            교통사고 입원·통원
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-relaxed md:leading-[1.4] break-keep break-words text-white">
            전주 효자동 전주W한의원은<br className="hidden md:block" />
            <span className="text-white/80">교통사고 이후 통증과 불편에 대해<br className="hidden md:block" /> 입원·통원 진료를 안내합니다.</span>
          </h2>
          <div className="w-12 h-1 bg-beige-200 mx-auto mb-10"></div>
          <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed break-keep break-words max-w-3xl mx-auto">
            사고 후 검사상 큰 이상은 없는데도 몸이 계속 불편하다면,<br className="hidden md:block" />
            현재 상태에 맞는 회복 방향을 함께 정리해 보실 수 있습니다.
          </p>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-24 px-5 sm:px-6 bg-white">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">SYMPTOMS</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 break-keep break-words">이런 증상으로 많이 내원하십니다</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-6 bg-beige-50 rounded-2xl border border-beige-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-2xl">⚡</div>
              <p className="text-navy-800 font-medium pt-3 break-keep break-words text-sm md:text-base">목, 어깨, 허리가 뻐근하고 통증이 있는 경우</p>
            </div>
            <div className="flex items-start gap-4 p-6 bg-beige-50 rounded-2xl border border-beige-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-2xl">😵</div>
              <p className="text-navy-800 font-medium pt-3 break-keep break-words text-sm md:text-base">두통이 생기거나 어지럽고 메스꺼운 경우</p>
            </div>
            <div className="flex items-start gap-4 p-6 bg-beige-50 rounded-2xl border border-beige-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-2xl">💤</div>
              <p className="text-navy-800 font-medium pt-3 break-keep break-words text-sm md:text-base">잠이 잘 안 오거나 자고 나도 개운하지 않은 경우</p>
            </div>
            <div className="flex items-start gap-4 p-6 bg-beige-50 rounded-2xl border border-beige-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-2xl">📉</div>
              <p className="text-navy-800 font-medium pt-3 break-keep break-words text-sm md:text-base">몸이 무겁고 무기력하며 집중이 잘 되지 않는 경우</p>
            </div>
            <div className="flex items-start gap-4 p-6 bg-beige-50 rounded-2xl sm:col-span-2 md:w-1/2 md:mx-auto border border-beige-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-2xl">😰</div>
              <p className="text-navy-800 font-medium pt-3 break-keep break-words text-sm md:text-base">사고 이후 불안감이 남고 긴장이 잘 풀리지 않는 경우</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inpatient vs Outpatient */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">TREATMENT TYPE</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 break-keep break-words">입원과 통원, 어떻게 다른가요?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 입원 강조 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-navy-500 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-navy-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                집중 회복 추천
              </div>
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-4xl">🏥</div>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2 break-keep break-words">
                집중 관리가 필요한 <span className="text-navy-500">입원</span>
              </h4>
              <p className="text-sm md:text-base text-navy-700 leading-relaxed break-keep break-words mb-6">
                사고 직후 통증이 심하거나 거동이 불편하여, <strong className="text-navy-900">충분한 휴식과 집중적인 회복 관리</strong>가 필요한 분들께 적합합니다. 
                의료진의 세밀한 모니터링 하에 빠른 일상 복귀를 돕습니다.
              </p>
              <div className="bg-beige-50 p-4 rounded-xl border border-beige-100">
                <p className="text-xs text-navy-600 font-medium break-keep break-words flex items-start gap-2">
                  <span className="text-navy-500 mt-0.5">*</span>
                  입원실 이용 여부와 자세한 안내는 상담을 통해 확인하실 수 있습니다.
                </p>
              </div>
            </div>
            
            {/* 통원 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-beige-200 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-beige-50 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-4xl">🚶</div>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 break-keep break-words">
                꾸준한 회복을 돕는 통원
              </h4>
              <p className="text-sm md:text-base text-navy-600 leading-relaxed break-keep break-words">
                일상생활은 가능하지만 통증과 불편이 이어지고 있어, 일정에 맞춰 꾸준히 내원하며 회복 관리를 받고 싶은 분들께 적합합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process with Preparation Notice */}
      <section className="py-24 px-5 sm:px-6 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">PROCESS</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 break-keep break-words">진료는 이렇게 진행됩니다</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-beige-50 p-8 rounded-2xl border border-beige-100 relative group hover:bg-navy-900 hover:border-navy-900 transition-colors duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md">1</div>
              <FileText className="w-8 h-8 text-navy-400 mb-4 group-hover:text-white/80 transition-colors" />
              <h4 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-white transition-colors">접수</h4>
              <p className="text-navy-600 text-sm leading-relaxed break-keep break-words group-hover:text-white/70 transition-colors">사고 접수번호와 보험사 담당자 연락처를 확인합니다.</p>
            </div>
            <div className="bg-beige-50 p-8 rounded-2xl border border-beige-100 relative group hover:bg-navy-900 hover:border-navy-900 transition-colors duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md">2</div>
              <Stethoscope className="w-8 h-8 text-navy-400 mb-4 group-hover:text-white/80 transition-colors" />
              <h4 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-white transition-colors">상담</h4>
              <p className="text-navy-600 text-sm leading-relaxed break-keep break-words group-hover:text-white/70 transition-colors">현재 증상과 사고 이후의 변화를 꼼꼼히 상담합니다.</p>
            </div>
            <div className="bg-beige-50 p-8 rounded-2xl border border-beige-100 relative group hover:bg-navy-900 hover:border-navy-900 transition-colors duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md">3</div>
              <Compass className="w-8 h-8 text-navy-400 mb-4 group-hover:text-white/80 transition-colors" />
              <h4 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-white transition-colors">방향 안내</h4>
              <p className="text-navy-600 text-sm leading-relaxed break-keep break-words group-hover:text-white/70 transition-colors">입원 또는 통원 여부를 포함해 현재 상태에 맞는 진료 방향을 안내합니다.</p>
            </div>
            <div className="bg-beige-50 p-8 rounded-2xl border border-beige-100 relative group hover:bg-navy-900 hover:border-navy-900 transition-colors duration-300">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center font-bold font-serif shadow-md">4</div>
              <Activity className="w-8 h-8 text-navy-400 mb-4 group-hover:text-white/80 transition-colors" />
              <h4 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-white transition-colors">회복 관리</h4>
              <p className="text-navy-600 text-sm leading-relaxed break-keep break-words group-hover:text-white/70 transition-colors">경과에 따라 치료와 관리 방향을 조정해 갑니다.</p>
            </div>
          </div>

          {/* Preparation Notice integrated here */}
          <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm max-w-3xl mx-auto">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <Car className="w-6 h-6 text-navy-500" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-base font-bold text-navy-900 mb-2">원활한 진료 안내를 위한 준비물</h4>
              <p className="text-sm text-navy-700 break-keep">
                내원 시 <strong className="text-navy-900 bg-white px-2 py-0.5 rounded border border-navy-100 mx-1">사고 접수번호</strong>와 <strong className="text-navy-900 bg-white px-2 py-0.5 rounded border border-navy-100 mx-1">보험사 담당자 연락처</strong>를 미리 확인해 주시면 더욱 빠른 안내가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & CTA */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-beige-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center leading-[1.4] text-navy-900 break-keep break-words">이런 경우 전주W한의원 상담이<br className="md:hidden" /> 도움이 됩니다</h3>
          <ul className="space-y-4 mb-14">
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">사고 후 며칠이 지났는데 통증이 점점 심해지는 경우</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">치료를 받고 있는데도 불편함이 계속 남아있는 경우</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">입원과 통원 중 어떤 방식이 맞는지 고민되는 경우</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">보험 처리나 진료 절차가 막막하게 느껴지는 경우</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:0632221075" 
              target="_top"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full text-base font-bold hover:bg-navy-800 transition-colors shadow-sm w-full md:w-auto"
            >
              <Phone className="w-5 h-5" />
              전화 상담하기
            </a>
            <a 
              href="https://pf.kakao.com/_xjxcgpxl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FEE500] text-gray-900 rounded-full text-base font-bold hover:bg-[#FDD800] transition-colors shadow-sm w-full md:w-auto"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              카카오톡 상담하기
            </a>
          </div>
        </div>
      </section>

      {/* Clinic Environment / Facilities */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">FACILITIES</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900">편안한 회복을 위한 진료 환경</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group shadow-sm">
              <img src="/image/car1.png" alt="진료 환경 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group shadow-sm">
              <img src="/image/car2.png" alt="진료 환경 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group shadow-sm">
              <img src="/image/car3.png" alt="진료 환경 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group shadow-sm">
              <img src="/image/car4.png" alt="진료 환경 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden relative group shadow-sm">
              <img src="/image/car5.png" alt="진료 환경 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">FAQ</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 break-keep break-words">전주W한의원 교통사고 FAQ</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaqIndex === index 
                    ? 'border-navy-500 shadow-md bg-navy-50/30' 
                    : 'border-beige-200 bg-white hover:border-navy-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4 pr-4">
                    <span className={`font-bold font-serif text-lg mt-0.5 transition-colors ${
                      openFaqIndex === index ? 'text-navy-600' : 'text-navy-300'
                    }`}>
                      Q{index + 1}.
                    </span>
                    <span className={`text-base md:text-lg font-bold break-keep break-words transition-colors ${
                      openFaqIndex === index ? 'text-navy-900' : 'text-navy-800'
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openFaqIndex === index ? 'bg-navy-500 text-white rotate-180' : 'bg-beige-100 text-navy-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-10 border-l-2 border-navy-200 ml-2">
                          {faq.a.split('\n').map((line, i) => (
                            <p key={i} className="text-sm md:text-base text-navy-700 leading-relaxed mb-3 last:mb-0 break-keep break-words">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
