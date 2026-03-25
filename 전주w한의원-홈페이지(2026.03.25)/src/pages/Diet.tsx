import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, CheckCircle2, ChevronDown, Phone } from "lucide-react";

export default function Diet() {
  const faqs = [
    {
      q: "한의원 다이어트는 일반적인 체중 감량과 무엇이 다른가요?",
      a: "한의원 다이어트는 단순히 체중만 줄이는 것이 아니라, 현재 몸 상태와 생활 습관을 함께 살펴 감량 방향을 정하는 방식입니다.\n같은 체중 고민이라도 식욕이 강한 분, 붓기가 심한 분, 피로가 많은 분, 소화가 약한 분은 관리 방향이 달라질 수 있습니다.\n그래서 무조건 적게 먹는 방식보다, 상담을 통해 내 몸에 맞는 우선순위를 정하는 것이 중요합니다."
    },
    {
      q: "체질 개선 다이어트는 어떤 의미인가요?",
      a: "체질 개선 다이어트는 살이 잘 붙는 생활 패턴과 몸의 불균형을 함께 점검하는 과정이라고 볼 수 있습니다.\n단순히 일시적으로 체중을 줄이는 데 그치지 않고, 식습관, 수면, 활동량, 컨디션 변화까지 함께 살피며 감량 이후의 유지까지 고려합니다.\n즉, “왜 자꾸 같은 문제가 반복되는지”를 함께 보는 접근에 가깝습니다."
    },
    {
      q: "한의원 다이어트는 무조건 적게 먹어야 하나요?",
      a: "아닙니다. 한의원 다이어트라고 해서 무조건 굶거나 지나치게 적게 먹는 방향으로 가는 것은 아닙니다.\n오히려 너무 무리한 식사 제한은 피로감, 폭식, 요요로 이어질 수 있기 때문에 현재 생활 패턴에 맞는 식사 조절이 더 중요합니다.\n현실적으로 지속할 수 있는 식사 관리가 가능한지 확인하는 것이 한의원을 고를 때 중요한 기준이 됩니다."
    },
    {
      q: "요요가 걱정되는데, 체중 감량 후 유지 관리도 함께 볼 수 있나요?",
      a: "네, 다이어트를 시작할 때는 감량만큼 유지 전략이 함께 있는지 보는 것이 중요합니다.\n짧은 기간만 체중을 줄이는 방식은 다시 원래 패턴으로 돌아가기 쉬워, 감량 이후의 식사, 운동, 생활 관리까지 함께 안내하는지 확인해보는 것이 좋습니다.\n체중 감량은 시작보다 유지가 더 중요하기 때문에, 상담 시 유지 계획까지 함께 설명하는 한의원인지 살펴보는 것이 도움이 됩니다."
    },
    {
      q: "다이어트 한의원을 고를 때 가장 중요하게 봐야 할 점은 무엇인가요?",
      a: "다이어트 한의원을 고를 때는 내 몸 상태를 충분히 듣고, 현실적인 계획을 제안해주는지를 먼저 보는 것이 좋습니다.\n무조건 빠른 감량만 강조하기보다, 현재 증상과 생활 패턴, 이전 다이어트 경험, 유지 가능성까지 함께 살펴주는 곳이 더 중요합니다.\n결국 좋은 다이어트는 “버틸 수 있는 방식”이 아니라, “지속할 수 있는 방식”으로 설계되어야 합니다."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pb-24 w-full overflow-x-hidden"
    >
      {/* Hero */}
      <section 
        className="relative pt-32 pb-20 px-5 sm:px-6 overflow-hidden min-h-[450px] md:min-h-[500px] flex items-center bg-beige-50"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/image/diet_m.png" media="(max-width: 767px)" />
            <img 
              src="/image/diet.png" 
              alt="체중 감량 모델" 
              className="w-full h-full object-cover object-top md:object-right-top"
              referrerPolicy="no-referrer"
            />
          </picture>
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-beige-50 via-beige-50/90 to-transparent"></div>
          {/* Mobile extra overlay for readability */}
          <div className="absolute inset-0 bg-beige-50/40 md:hidden"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center md:items-start gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-navy-900 text-white text-sm font-bold mb-6 shadow-sm">
              체중 감량·체질 개선
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-navy-900 mb-6 leading-relaxed md:leading-[1.4] break-keep break-words">
              전주 효자동 전주W한의원은<br className="hidden md:block" />
              <span className="text-navy-700">체중 감량과 체질 개선 상담을<br className="hidden md:block" /> 함께 진행합니다.</span>
            </h2>
            <div className="w-12 h-1 bg-navy-900/20 mx-auto md:mx-0 mb-8"></div>
            <p className="text-base sm:text-lg text-navy-800 font-medium leading-relaxed break-keep break-words">
              자꾸 반복되는 체중 고민이 의지의 문제로만 느껴졌다면,<br className="hidden md:block" />
              지금 몸 상태에 맞는 현실적인 관리 방향을 함께 정리할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms / Concerns */}
      <section className="py-24 px-5 sm:px-6 bg-white">
        <div className="w-full max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16 text-navy-900 break-keep break-words">이런 고민으로 전주W한의원을<br className="md:hidden" /> 많이 찾으십니다</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📉</div>
              <p className="font-bold text-navy-900 mb-1">요요 현상</p>
              <p className="text-xs text-navy-600">반복되는 체중 고민</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🍕</div>
              <p className="font-bold text-navy-900 mb-1">식욕 조절</p>
              <p className="text-xs text-navy-600">식단 관리의 어려움</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">😫</div>
              <p className="font-bold text-navy-900 mb-1">만성 피로</p>
              <p className="text-xs text-navy-600">무거운 몸과 피로감</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎈</div>
              <p className="font-bold text-navy-900 mb-1">부종·소화</p>
              <p className="text-xs text-navy-600">자주 붓고 불편한 속</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏃‍♂️</div>
              <p className="font-bold text-navy-900 mb-1">막막한 관리</p>
              <p className="text-xs text-navy-600">조정 방향의 어려움</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🧭</div>
              <p className="font-bold text-navy-900 mb-1">맞춤 방향</p>
              <p className="text-xs text-navy-600">나에게 맞는 식단·습관</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why is it hard? */}
      <section className="py-24 px-5 sm:px-6 bg-navy-900 text-white">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight break-keep break-words">❓ 왜 체중 감량은 늘 어렵게 느껴질까요?</h3>
          <div className="space-y-6 text-lg text-navy-50/70 leading-relaxed break-keep break-words">
            <p>
              체중 감량은 단순히 적게 먹고 많이 움직이는 문제로만 설명되지 않는 경우가 많습니다. 식사 습관, 수면, 활동량, 스트레스, 그리고 현재의 몸 상태가 함께 영향을 주기 때문에 감량보다 유지가 더 어렵게 느껴질 수 있습니다.
            </p>
            <p className="font-medium text-white bg-navy-800/50 p-6 rounded-2xl border border-navy-700 inline-block mt-4">
              실패가 반복되었다면 의지의 문제라기보다,<br className="hidden md:block" />
              <span className="text-beige-200">지금의 생활 리듬과 몸 상태가 감량을 유지하기 어려운 방향</span>이었을 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">APPROACH</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">전주W한의원은 이렇게 접근합니다</h3>
            <p className="text-lg text-navy-600 break-keep break-words">단순한 식단 조절을 넘어, 살이 찌는 근본적인 원인을 파악하기 위해<br className="hidden md:block" /> 다음 4가지 핵심 요소를 꼼꼼히 살핍니다.</p>
          </div>
          
          {/* Integrated Checklist */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-beige-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h5 className="font-bold text-navy-900 mb-2">식사 습관</h5>
              <p className="text-sm text-navy-600 break-keep">식사량, 시간대, 패턴 분석</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-beige-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h5 className="font-bold text-navy-900 mb-2">수면 상태</h5>
              <p className="text-sm text-navy-600 break-keep">수면의 질과 시간 확인</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-beige-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃‍♂️</span>
              </div>
              <h5 className="font-bold text-navy-900 mb-2">활동량</h5>
              <p className="text-sm text-navy-600 break-keep">일상 속 움직임과 운동량</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-beige-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h5 className="font-bold text-navy-900 mb-2">체중 변화 흐름</h5>
              <p className="text-sm text-navy-600 break-keep">과거부터 현재 추이</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-beige-200">
            <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-10 text-center">이러한 분석을 바탕으로, 우리는</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-50 text-navy-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h5 className="text-lg font-bold text-navy-900 mb-3">숫자만 보지 않습니다</h5>
                <p className="text-navy-600 leading-relaxed break-keep text-sm md:text-base">
                  체중 숫자만이 아니라, 컨디션과 일상의 변화를 함께 살핍니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-50 text-navy-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h5 className="text-lg font-bold text-navy-900 mb-3">생활 패턴을 함께 봅니다</h5>
                <p className="text-navy-600 leading-relaxed break-keep text-sm md:text-base">
                  식사 시간, 수면, 활동량, 스트레스 등 체중 변화와 연결된 생활 습관을 함께 확인합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-50 text-navy-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h5 className="text-lg font-bold text-navy-900 mb-3">현실적인 방향을 찾습니다</h5>
                <p className="text-navy-600 leading-relaxed break-keep text-sm md:text-base">
                  일상생활을 방해하는 무리한 방법보다, 지금 생활 안에서 이어갈 수 있는 관리 방향을 정리합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-5 sm:px-6 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block uppercase">PROCESS</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 break-keep break-words">체중 감량 · 체질 개선 상담은 이렇게 진행됩니다</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">01</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">📝</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">생활 리듬 확인</h4>
                <p className="text-navy-600 break-keep leading-relaxed">현재 식습관, 수면, 활동량을 함께 확인합니다.</p>
              </div>
            </div>
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">02</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">🔍</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">몸 상태 정리</h4>
                <p className="text-navy-600 break-keep leading-relaxed">현재 체중 변화의 흐름과 몸 상태를 함께 살핍니다.</p>
              </div>
            </div>
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">03</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">🧭</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">관리 방향 안내</h4>
                <p className="text-navy-600 break-keep leading-relaxed">내 몸 상태에 맞는 단계별 관리 방향을 안내합니다.</p>
              </div>
            </div>
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">04</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">⚖️</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">경과에 따른 조정</h4>
                <p className="text-navy-600 break-keep leading-relaxed">변화 과정에 맞춰 관리 방향을 조정해갑니다.</p>
              </div>
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
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">이번에는 무리하지 않고 건강하게 감량하고 싶은 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">체중 변화와 함께 컨디션 관리도 필요한 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">건강검진 수치가 신경 쓰여 체계적인 관리가 필요한 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">나에게 맞는 식단과 생활 습관 방향을 함께 정리하고 싶은 분</span>
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

      {/* FAQ Section */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block uppercase">FAQ</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 break-keep break-words">체중 감량 · 체질 개선 FAQ</h3>
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
                    <span className={`text-base md:text-lg font-bold break-keep transition-colors ${
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
                            <p key={i} className="text-sm md:text-base text-navy-700 leading-relaxed mb-3 last:mb-0 break-keep">
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
