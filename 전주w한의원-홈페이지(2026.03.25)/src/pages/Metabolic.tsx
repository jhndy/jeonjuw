import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, CheckCircle2, ClipboardList, Activity, HeartPulse, FileText, Pill, ChevronDown, Phone } from "lucide-react";

export default function Metabolic() {
  const faqs = [
    {
      q: "고혈압, 고지혈증, 당뇨는 증상이 없어도 관리가 필요한가요?",
      a: "네, 증상이 뚜렷하지 않아도 꾸준한 관리가 필요한 경우가 많습니다.\n고혈압은 특별한 증상이 없어도 방치하면 심근경색, 뇌졸중 같은 심뇌혈관질환 위험을 높일 수 있고, 고지혈증(이상지질혈증)도 장기간 조절되지 않으면 혈관 벽에 콜레스테롤이 쌓여 혈관이 좁아지거나 막힐 수 있습니다. 당뇨병 역시 혈당만의 문제가 아니라 고혈압, 고지혈증, 비만과 함께 관리해야 합병증 위험을 줄이는 데 도움이 됩니다."
    },
    {
      q: "고혈압, 고지혈증, 당뇨는 각각 따로 보는 것보다 함께 관리하는 게 중요한가요?",
      a: "네, 세 가지는 서로 영향을 주기 쉬워 함께 보는 것이 중요합니다.\n당뇨병의 합병증 위험은 혈당만이 아니라 고혈압, 고지혈증, 흡연, 비만 등의 영향을 함께 받습니다. 그래서 한 가지 수치만 보는 것보다 혈압, 혈당, 지질 상태와 생활습관을 같이 살피는 접근이 더 현실적입니다."
    },
    {
      q: "약을 먹고 있어도 생활습관 관리는 계속 중요할까요?",
      a: "네, 약을 복용 중이어도 식사·운동·체중·생활습관 관리는 여전히 중요합니다.\n고혈압은 규칙적인 운동, 식사조절, 약물치료를 함께 할 때 관리에 도움이 되며, 당뇨병도 진단 초기부터 생활습관 개선이 기본이 됩니다. 또한 체중 조절은 혈압 관리에도 도움이 될 수 있어, 약만이 아니라 일상 전체를 함께 보는 것이 중요합니다."
    },
    {
      q: "고혈압, 고지혈증, 당뇨가 있으면 식사 관리는 무조건 엄격해야 하나요?",
      a: "아닙니다. 무조건 굶거나 한 가지만 극단적으로 제한하는 방식보다, 규칙적이고 균형 있는 식사가 더 중요합니다.\n당뇨병 식사요법은 특정 음식만 지나치게 제한하는 것이 아니라 다양한 식품을 골고루, 적당량 섭취하는 것이 기본입니다. 심뇌혈관질환 예방을 위해서는 채소, 과일, 통곡류, 콩류, 생선류 등을 활용하고, 기름진 육류·가공육·튀긴 음식·단 음식은 섭취 횟수와 양을 조절하는 것이 권장됩니다."
    },
    {
      q: "고혈압, 고지혈증, 당뇨로 한의원을 찾을 때 무엇을 가장 중요하게 봐야 하나요?",
      a: "가장 중요한 것은 현재 수치만이 아니라 생활 패턴과 몸 상태를 함께 듣고, 현실적인 관리 방향을 제안해주는지입니다.\n이 세 가지는 장기 관리가 필요한 경우가 많기 때문에, 무리한 방식보다 식사·운동·수면·체중·스트레스 같은 일상 요소를 함께 점검하는 곳이 더 중요합니다. 특히 복용 중인 약이 있다면 임의로 중단하지 않고, 현재 치료와 생활관리를 어떻게 조화롭게 이어갈지 설명해주는지가 중요한 기준이 됩니다. 이 방향은 공식 건강정보에서도 약물치료와 생활습관 개선을 함께 강조하고 있습니다."
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
          <img 
            src="/image/blood.jpg" 
            alt="고혈압, 고지혈증, 당뇨 관리" 
            className="w-full h-full object-cover object-center md:object-right"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-beige-50 via-beige-50/90 to-transparent"></div>
          {/* Mobile extra overlay for readability */}
          <div className="absolute inset-0 bg-beige-50/40 md:hidden"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center md:items-start gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-navy-900 text-white text-sm font-bold mb-6 shadow-sm">
              고혈압 · 고지혈증 · 당뇨
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-navy-900 mb-6 leading-relaxed md:leading-[1.4] [word-break:keep-all] [overflow-wrap:anywhere]">
              전주 효자동 전주W한의원은<br className="hidden md:block" />
              <span className="text-navy-700">고혈압 · 고지혈증 · 당뇨처럼 생활 관리가<br className="hidden md:block" /> 중요한 문제에 대해 상담을 진행합니다.</span>
            </h2>
            <div className="w-12 h-1 bg-navy-900/20 mx-auto md:mx-0 mb-8"></div>
            <p className="text-base sm:text-lg text-navy-800 font-medium leading-relaxed [word-break:keep-all] [overflow-wrap:anywhere]">
              건강검진 수치가 신경 쓰이기 시작했다면,<br className="hidden md:block" />
              지금 몸 상태에 맞는 현실적인 관리 방향과 우선순위를 함께 정리할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms / Concerns */}
      <section className="py-24 px-5 sm:px-6 bg-white">
        <div className="w-full max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16 text-navy-900 [word-break:keep-all] [overflow-wrap:anywhere]">이런 고민으로 전주W한의원을<br className="md:hidden" /> 많이 찾으십니다</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🩺</div>
              <p className="font-bold text-navy-900 mb-1">수치 관리</p>
              <p className="text-xs text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere]">혈압 · 혈당 · 지질 걱정</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💊</div>
              <p className="font-bold text-navy-900 mb-1">생활 병행</p>
              <p className="text-xs text-navy-600">약 복용과 습관 관리</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚖️</div>
              <p className="font-bold text-navy-900 mb-1">체중 조절</p>
              <p className="text-xs text-navy-600">수치와 체중 동시 관리</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏃‍♂️</div>
              <p className="font-bold text-navy-900 mb-1">실천의 어려움</p>
              <p className="text-xs text-navy-600">막막한 식단과 운동</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🧭</div>
              <p className="font-bold text-navy-900 mb-1">맞춤 방향</p>
              <p className="text-xs text-navy-600">현실적인 관리 계획</p>
            </div>
            <div className="p-6 bg-beige-50 rounded-2xl text-center hover:bg-navy-50 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">✨</div>
              <p className="font-bold text-navy-900 mb-1">건강 회복</p>
              <p className="text-xs text-navy-600">활기찬 일상 되찾기</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why is it hard? */}
      <section className="py-24 px-5 sm:px-6 bg-navy-900 text-white">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight [word-break:keep-all] [overflow-wrap:anywhere]">❓ 왜 건강 관리는 늘 숙제처럼 무겁게만 느껴질까요?</h3>
          <div className="space-y-6 text-lg text-navy-50/70 leading-relaxed [word-break:keep-all] [overflow-wrap:anywhere]">
            <p>
              고혈압, 고지혈증, 당뇨 관리는 단순히 약을 먹는 것만으로 끝나지 않는 경우가 많습니다. 식사, 운동, 체중, 수면 등 일상 전반을 바꿔야 한다는 압박감이 관리를 더 어렵게 만듭니다.
            </p>
            <p className="font-medium text-white bg-navy-800/50 p-6 rounded-2xl border border-navy-700 inline-block mt-4">
              모든 것을 한 번에 완벽하게 바꾸려 하기보다,<br className="hidden md:block" />
              <span className="text-beige-200">내 생활 리듬에서 가장 먼저, 그리고 꾸준히 할 수 있는 것</span>부터 찾는 것이 중요합니다.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Shorts Video Section */}
      <section className="py-24 px-5 sm:px-6 bg-white">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block uppercase">VIDEO STORY</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 [word-break:keep-all]">
              영상으로 전하는<br className="hidden md:block" /> 전주W한의원의 건강 관리 철학
            </h3>
            <p className="text-lg text-navy-600 mb-8 [word-break:keep-all]">
              고혈압, 고지혈증, 당뇨 관리는 단순한 수치 조절이 아닌,<br className="hidden md:block" /> 
              내 삶의 리듬을 찾아가는 과정입니다. <br className="hidden md:block" />
              짧은 영상을 통해 전주W한의원의 진심을 확인해 보세요.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-beige-50 rounded-full text-navy-700 text-sm font-medium border border-beige-200">
                <CheckCircle2 className="w-4 h-4" /> 현실적인 관리
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-beige-50 rounded-full text-navy-700 text-sm font-medium border border-beige-200">
                <CheckCircle2 className="w-4 h-4" /> 일상 속 실천
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-[320px] mx-auto md:mx-0 shrink-0">
            <div className="relative aspect-[9/16] w-full bg-navy-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-navy-800">
              <iframe
                src="https://www.youtube.com/embed/U7XgEtrHnsM"
                title="전주W한의원 고혈압 고지혈증 당뇨 관리 이야기"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-xs text-navy-400 mt-4 italic">※ 유튜브 쇼츠 영상입니다.</p>
          </div>
        </div>
      </section>

      {/* Approach & Checklist */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block">APPROACH</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">✨ 전주W한의원은 이렇게 접근합니다</h3>
            <p className="text-lg text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere]">단순한 수치 변화를 넘어, 일상 속에서 실천 가능한<br className="hidden md:block" /> 건강한 생활 습관을 함께 찾아갑니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-8xl font-black text-beige-50 group-hover:text-beige-100 transition-colors z-0">1</div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-beige-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-4">수치만 보지 않습니다</h4>
                <p className="text-navy-600 leading-relaxed [word-break:keep-all] [overflow-wrap:anywhere]">숫자 변화만이 아니라, 피로도와 수면 상태, 생활 패턴까지 함께 살핍니다.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-8xl font-black text-beige-50 group-hover:text-beige-100 transition-colors z-0">2</div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-beige-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-4">우선순위를 정합니다</h4>
                <p className="text-navy-600 leading-relaxed [word-break:keep-all] [overflow-wrap:anywhere]">식사, 운동, 수면 중 지금 가장 시급하고 실천 가능한 부분부터 차근차근 정리합니다.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-8xl font-black text-beige-50 group-hover:text-beige-100 transition-colors z-0">3</div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-beige-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-4">함께 관리합니다</h4>
                <p className="text-navy-600 leading-relaxed [word-break:keep-all] [overflow-wrap:anywhere]">막막한 관리가 일상 안에서 이어질 수 있도록, 생활 리듬에 맞는 현실적인 방향을 안내합니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-beige-200">
            <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-10 text-center">건강검진 상담 시 함께 확인하는 내용</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              <div className="bg-beige-50 p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <HeartPulse className="w-6 h-6 text-navy-800" />
                </div>
                <h5 className="font-bold text-navy-900 mb-2">기본 수치</h5>
                <p className="text-sm text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere]">혈압, 혈당, 콜레스테롤</p>
              </div>
              <div className="bg-beige-50 p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Activity className="w-6 h-6 text-navy-800" />
                </div>
                <h5 className="font-bold text-navy-900 mb-2">체중 변화</h5>
                <p className="text-sm text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere]">과거부터 현재 추이</p>
              </div>
              <div className="bg-beige-50 p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h5 className="font-bold text-navy-900 mb-2">식사 습관</h5>
                <p className="text-sm text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere]">식사량, 시간대, 패턴</p>
              </div>
              <div className="bg-beige-50 p-6 rounded-2xl text-center shadow-sm border border-beige-200 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🌙</span>
                </div>
                <h5 className="font-bold text-navy-900 mb-2">수면 및 활동</h5>
                <p className="text-sm text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere]">수면 상태와 활동량</p>
              </div>
            </div>

            <div className="bg-navy-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <ClipboardList className="w-6 h-6 text-navy-800" />
                </div>
                <div>
                  <h5 className="font-bold text-navy-900 text-lg mb-1">상담 준비물</h5>
                  <p className="text-navy-700 [word-break:keep-all] [overflow-wrap:anywhere] text-sm md:text-base">최근 건강검진 결과지와 복용 중인 약 정보를 미리 준비해 주시면 상담에 큰 도움이 됩니다.</p>
                </div>
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
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 [word-break:keep-all] [overflow-wrap:anywhere]">고혈압 · 고지혈증 · 당뇨 상담은 이렇게 진행됩니다</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">01</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">📋</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">현재 상태 확인</h4>
                <p className="text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere] leading-relaxed">건강검진 수치와 현재 느끼는 불편함을 함께 확인합니다.</p>
              </div>
            </div>
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">02</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">🔍</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">생활 패턴 정리</h4>
                <p className="text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere] leading-relaxed">식사 습관, 활동량, 수면 리듬을 함께 살핍니다.</p>
              </div>
            </div>
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">03</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">🧭</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">관리 방향 안내</h4>
                <p className="text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere] leading-relaxed">지금 바로 시작할 수 있는 최우선 관리 포인트를 짚어드립니다.</p>
              </div>
            </div>
            <div className="bg-beige-50 p-8 rounded-3xl relative overflow-hidden group hover:bg-navy-50 transition-colors">
              <div className="text-6xl font-black text-beige-200 absolute -top-4 -right-2 opacity-50 group-hover:text-navy-100 transition-colors">04</div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">⚖️</div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">경과에 따른 조정</h4>
                <p className="text-navy-600 [word-break:keep-all] [overflow-wrap:anywhere] leading-relaxed">변화하는 수치와 몸 상태에 맞춰 관리 방향을 조정해갑니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & CTA */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-beige-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center leading-[1.4] text-navy-900 [word-break:keep-all] [overflow-wrap:anywhere]">이런 경우 전주W한의원 상담이<br className="md:hidden" /> 도움이 됩니다</h3>
          <ul className="space-y-4 mb-14">
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium [word-break:keep-all] [overflow-wrap:anywhere]">건강검진 이후 무엇부터 바꿔야 할지 막막하신 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium [word-break:keep-all] [overflow-wrap:anywhere]">약 복용과 병행할 수 있는 건강한 생활 습관을 만들고 싶은 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium [word-break:keep-all] [overflow-wrap:anywhere]">체중 관리와 수치 관리를 동시에 진행하고 싶은 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium [word-break:keep-all] [overflow-wrap:anywhere]">내 몸 상태를 이해하고 생활 관리 방향을 함께 정리하고 싶은 분</span>
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
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 [word-break:keep-all] [overflow-wrap:anywhere]">고혈압 · 고지혈증 · 당뇨 FAQ</h3>
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
                    <span className={`text-base md:text-lg font-bold [word-break:keep-all] [overflow-wrap:anywhere] transition-colors ${
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
                            <p key={i} className="text-sm md:text-base text-navy-700 leading-relaxed mb-3 last:mb-0 [word-break:keep-all] [overflow-wrap:anywhere]">
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
