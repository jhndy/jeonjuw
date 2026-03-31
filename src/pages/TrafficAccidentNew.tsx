import { motion, AnimatePresence, useInView } from "motion/react";
import { 
  MessageCircle, CheckCircle2, FileText, Stethoscope, Compass, Activity, 
  ChevronDown, Car, Phone, MapPin, AlertCircle, Clock, ShieldCheck, 
  HeartPulse, Trophy, Users, BarChart3, Star, X, Maximize2, 
  ChevronLeft, ChevronRight, Briefcase, Home, GraduationCap, 
  Monitor, Baby, Dumbbell, Quote, User, Bed, HelpCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

function Counter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    if (isInView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, target, duration]);

  return <span ref={ref} className="inline-block min-w-[1ch]">{count.toLocaleString()}</span>;
}

export default function TrafficAccidentNew({ setPage }: { setPage: (page: string) => void }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [hoveredGuide, setHoveredGuide] = useState<'inpatient' | 'outpatient' | null>(null);

  const clinicImages = Array.from({ length: 17 }, (_, i) => `/image/carcare${i + 1}.png`);

  const reviews = [
    {
      author: "백25",
      tag: "만족스러운 치료",
      theme: "blue",
      content: "식사가 정말 맛있고 물리치료도 최고예요. 무엇보다 직원분들이 세심하게 챙겨주셔서 입원 기간 동안 편안하게 회복했습니다."
    },
    {
      author: "오정빈47",
      tag: "친절한 진료",
      theme: "emerald",
      content: "의사 선생님이 침을 안 아프게 놔주시고, 어디가 아픈지 편하게 말할 수 있는 분위기라 정말 만족스럽게 치료받았습니다."
    },
    {
      author: "dpc****",
      tag: "쾌적한 시설",
      theme: "orange",
      content: "교통사고 후유증으로 목이 뻐근했는데, 이곳만의 특수치료를 받고 나니 통증이 확실히 줄어드는 게 느껴집니다."
    },
    {
      author: "룰루랄라122",
      tag: "꼼꼼한 설명",
      theme: "rose",
      content: "목, 어깨, 허리 통증으로 통원치료 중인데 선생님들이 다들 친절하시고 치료 효과도 좋아 대만족입니다."
    },
    {
      author: "밍쭈27",
      tag: "빠른 회복",
      theme: "purple",
      content: "사고 후 목이 안 돌아가서 입원했는데 침 치료 후 회복이 빨랐어요. 입원실도 쾌적해서 가족에게도 추천하고 싶네요."
    },
    {
      author: "melissa41",
      tag: "추천하고 싶은 곳",
      theme: "teal",
      content: "시설이 정말 깨끗하고 안내도 친절합니다. 사고 후 입원 치료뿐만 아니라 처방받은 약도 효과가 좋아 추천해요."
    }
  ];

  const getThemeClasses = (theme: string) => {
    const themes: Record<string, { bg: string, text: string, icon: string, border: string, light: string }> = {
      rose: { bg: "bg-rose-50", text: "text-rose-600", icon: "bg-rose-100", border: "hover:border-rose-300", light: "bg-rose-50/50" },
      blue: { bg: "bg-blue-50", text: "text-blue-600", icon: "bg-blue-100", border: "hover:border-blue-300", light: "bg-blue-50/50" },
      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", icon: "bg-emerald-100", border: "hover:border-emerald-300", light: "bg-emerald-50/50" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", icon: "bg-purple-100", border: "hover:border-purple-300", light: "bg-purple-50/50" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", icon: "bg-orange-100", border: "hover:border-orange-300", light: "bg-orange-50/50" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", icon: "bg-teal-100", border: "hover:border-teal-300", light: "bg-teal-50/50" },
    };
    return themes[theme] || themes.blue;
  };

  const maskAuthor = (author: string) => {
    const cleanAuthor = author.replace(/\*/g, '');
    return cleanAuthor.substring(0, 1) + "***";
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "사고 직후에는 괜찮았는데 며칠 후 통증이 생겼어요. 지금 방문해도 되나요?",
      a: (
        <>
          네, <span className="font-bold text-navy-900">오히려 이런 경우가 더 많습니다.</span> 사고 직후에는 긴장과 놀람으로 통증을 잘 느끼지 못하다가, 2~3일이 지나면서 긴장이 풀리고 염증 반응이 나타나며 통증이 뚜렷해집니다. <span className="font-bold text-navy-900 underline decoration-beige-300 decoration-4 underline-offset-4">지금이라도 상태를 확인하고 치료를 시작하시는 것</span>이 후유증을 줄이는 데 가장 중요합니다.
        </>
      )
    },
    {
      q: "자동차보험으로 치료가 가능한가요?",
      a: (
        <>
          네, 교통사고 관련 한의원 치료는 <span className="font-bold text-navy-900">자동차보험 적용이 가능합니다.</span> 복잡한 절차 없이 <span className="font-bold text-navy-900 underline decoration-beige-300 decoration-4 underline-offset-4">사고 접수번호와 보험사 담당자 연락처</span>만 알려주시면, 이후의 보험 처리 흐름은 저희가 함께 안내해 드립니다.
        </>
      )
    },
    {
      q: "입원 치료 후 통원으로 이어갈 수 있나요?",
      a: (
        <>
          네, 가능합니다. 초기 집중 회복이 필요한 시기에는 입원 치료를 통해 안정을 취하고, 상태가 호전되어 일상 복귀가 가능해지면 <span className="font-bold text-navy-900 underline decoration-beige-300 decoration-4 underline-offset-4">통원 치료로 자연스럽게 전환</span>하여 남은 불편함을 관리하실 수 있습니다.
        </>
      )
    },
    {
      q: "정형외과와 한의원을 함께 다닐 수 있나요?",
      a: (
        <>
          네, 가능합니다. 사고 직후 정형외과에서 엑스레이나 MRI 등 영상 검사를 받으시고, <span className="font-bold text-navy-900 underline decoration-beige-300 decoration-4 underline-offset-4">한의원에서 침·추나·약침 등 한방 치료를 병행</span>하시는 분들이 많습니다. 현재 받고 계신 진료 흐름에 맞춰 최적의 치료 방향을 조율해 드립니다.
        </>
      )
    },
    {
      q: "전치 2주 진단을 받았는데 치료를 2주만 가능한가요? 그리고 합의는 언제 하는 게 좋을까요?",
      a: (
        <>
          아니요, <span className="font-bold text-navy-900">진단 주수와 상관없이 통증이 남아있다면 지속적인 치료가 가능합니다.</span> 전치 2주는 '최소한의 안정 기간'을 의미할 뿐, 치료의 종료 시점을 의미하지 않습니다. <span className="font-bold text-navy-900 underline decoration-beige-300 decoration-4 underline-offset-4">합의 또한 서두르실 필요 없습니다.</span> 충분한 치료를 통해 몸 상태가 완전히 회복된 것을 확인한 후 진행하시는 것이 가장 현명합니다.
        </>
      )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-24 w-full overflow-x-hidden bg-[#FDFCFB]"
    >
      {/* Hero Section: Empathy & Clarity */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900/5 -skew-x-12 translate-x-1/4 z-0" />
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-beige-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-navy-900 text-white text-xs font-bold mb-8 tracking-wider uppercase break-keep"
              >
                <AlertCircle className="w-3.5 h-3.5" /> 전주 교통사고 한의원 | 전주W한의원
              </motion.span>
              
              <h1 className="font-bold text-navy-900 leading-[1.1] mb-8 break-keep break-words">
                <span className="text-xl md:text-2xl lg:text-3xl block mb-3 opacity-70 tracking-tight break-keep">사고 후 통증보다 먼저 생기는</span>
                <motion.span 
                  className="text-4xl md:text-5xl lg:text-6xl block my-5 text-navy-600 italic font-serif relative inline-block break-keep"
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  수많은 고민들,
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-1.5 bg-beige-400/30"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                  />
                </motion.span>
                <span className="text-2xl md:text-3xl lg:text-4xl block mt-3 font-semibold">저희가 함께 정리해 드립니다.</span>
              </h1>
              
              <div className="text-lg md:text-xl text-navy-700 leading-relaxed mb-10 break-keep break-words max-w-2xl mx-auto lg:mx-0">
                <p className="mb-8 opacity-80 break-keep break-words">
                  어디서 치료받아야 할지, 입원이 필요한지, <br className="hidden md:block" />
                  지금 당장 무엇부터 해야 할지. <br className="hidden md:block" />
                  몸이 불편한 상태에서 혼자 판단하기는 쉽지 않습니다.
                </p>
                
                <div className="relative inline-block group">
                  <motion.div 
                    className="absolute inset-0 bg-beige-200/50 -z-10 rounded-lg"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                  />
                  <motion.p 
                    className="font-bold text-navy-900 text-xl md:text-2xl py-2 px-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    전주W한의원은 사고 이후 <br className="hidden md:block" />
                    <motion.span 
                      className="text-navy-600 relative"
                      animate={{ 
                        color: ["#1e3a8a", "#d4a373", "#1e3a8a"]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      '첫 번째 판단'
                    </motion.span>부터 함께합니다.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="flex-1 relative flex justify-center lg:justify-end"
            >
              <div className="relative z-10 w-full max-w-[480px]">
                {/* Editorial Portrait Frame */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] md:rounded-[6rem] border-[1px] border-beige-200 shadow-2xl group">
                  <img 
                    src="/image/doctor.png" 
                    alt="W Clinic Doctor" 
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                  
                  {/* Subtle highlight overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-beige-400/10 to-transparent pointer-events-none" />
                </div>
                
                {/* Connecting background elements */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-beige-100 rounded-full -z-10 blur-3xl" 
                />
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.5 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                  className="absolute -bottom-10 -left-20 w-64 h-64 border border-beige-200 rounded-full -z-10" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Counter: Social Proof */}
      <section className="py-20 px-6 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 break-keep break-words leading-tight">
              압도적인 치료 데이터가 증명하는 <br className="hidden md:block" />
              <span className="text-amber-400">교통사고 치료의 전문성</span>
            </h2>
            
            <div className="relative">
              {/* Glow effect behind counter */}
              <div className="absolute inset-0 bg-amber-400/20 blur-[80px] rounded-full scale-150" />
              
              <div className="relative flex flex-col items-center">
                <div className="text-6xl md:text-8xl lg:text-9xl font-black text-amber-400 tracking-tighter flex items-baseline gap-2">
                  <Counter target={16374} />
                  <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">건+</span>
                </div>
                <p className="mt-8 text-white text-lg md:text-xl font-medium px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg break-keep break-words">
                  2026년 3월 말 기준 <span className="text-white/40 mx-2">|</span> (통원·입원 합산 치료 내역)
                </p>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
              {[
                { label: "신뢰의 기록", val: "16,000건+", icon: ShieldCheck },
                { label: "풍부한 임상", val: "수많은 사례", icon: Users },
                { label: "정밀한 진단", val: "1:1 맞춤", icon: Stethoscope },
                { label: "집중 케어", val: "빠른 회복", icon: Activity },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <item.icon className="w-7 h-7 text-amber-400 mb-2" />
                  <div className="text-white font-bold text-xl">{item.val}</div>
                  <div className="text-white/60 text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block uppercase">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 break-keep break-words">진심이 담긴 환자분들의 이야기</h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto break-keep break-words">
              네이버 플레이스에 남겨주신 소중한 후기입니다. <br className="hidden md:block" />
              환자분들의 회복 경험이 <br className="hidden md:block" />
              누군가에게는 새로운 희망이 됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review, index) => {
                const theme = getThemeClasses(review.theme || "blue");
                return (
                  <motion.div
                    key={review.author}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: showAllReviews ? 0 : index * 0.1 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    className={`${theme.bg} p-8 rounded-[2.5rem] border border-transparent flex flex-col h-full ${theme.border} hover:bg-white hover:shadow-[0_20px_50px_rgba(10,25,47,0.1)] transition-all duration-300 group cursor-default relative overflow-hidden`}
                  >
                    {/* Decorative Quote Icon */}
                    <Quote className={`absolute -top-4 -right-4 w-24 h-24 ${theme.text} opacity-[0.04] rotate-12 group-hover:opacity-[0.08] transition-opacity`} />
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${theme.icon} ${theme.text} font-bold text-[11px] tracking-tight`}>
                        <Star className="w-3 h-3 fill-current" />
                        {review.tag}
                      </div>
                    </div>

                    <p className="text-navy-800 leading-relaxed break-keep break-words mb-8 flex-grow text-[17px] font-medium relative z-10">
                      "{review.content}"
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-navy-900/5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${theme.icon} rounded-full flex items-center justify-center shadow-inner`}>
                          <Users className={`w-5 h-5 ${theme.text}`} />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-navy-900 block">{maskAuthor(review.author)}</span>
                          <span className="text-[10px] text-navy-400 font-medium tracking-tight">네이버 플레이스 리뷰</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 py-1 px-2.5 bg-white rounded-full border border-navy-100 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        <span className="text-[10px] font-bold text-navy-400 uppercase tracking-tighter">Verified</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {!showAllReviews && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setShowAllReviews(true)}
                className="inline-flex items-center gap-3 px-10 py-5 bg-navy-900 text-white rounded-full font-bold hover:bg-navy-800 transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                진심이 담긴 후기 더보기 <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Room Type Empathy Section - Side-by-Side Interactive Cards */}
      <section className="py-24 px-6 bg-beige-50/30 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-navy-500 font-bold tracking-wider text-sm mb-4 block uppercase"
            >
              Room Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 break-keep break-words"
            >
              내 상황에 꼭 맞는 <br className="md:hidden" /> 편안한 회복 공간
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-navy-600 break-keep break-words"
            >
              다인실의 불편함 없이, 오직 회복에만 집중할 수 있도록 <br className="hidden md:block" />
              전주W한의원은 모든 입원실을 1인실과 2인실로만 구성했습니다.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1-Person Room Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-beige-200 group hover:bg-navy-900 transition-all duration-500 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative overflow-hidden"
            >
              {/* Left Box: Large Typography */}
              <div className="w-full lg:w-1/3 flex justify-center relative z-10">
                <div className="relative flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-black text-navy-900/5 group-hover:text-white/10 transition-colors absolute -left-4">01</span>
                  <div className="flex flex-col items-center relative z-10">
                    <span className="text-5xl md:text-6xl font-black text-navy-900 group-hover:text-white transition-colors">01</span>
                    <span className="text-[10px] font-bold text-navy-400 group-hover:text-beige-300 tracking-[0.4em] uppercase mt-1">Private</span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-2/3 relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 group-hover:text-white transition-colors break-keep leading-tight">
                    프라이빗한 휴식을 위한 <br />
                    <span className="inline-flex items-center gap-2 underline decoration-4 underline-offset-8 decoration-navy-200 group-hover:decoration-amber-400 group-hover:text-amber-400 transition-all">
                      1인실 <User className="w-6 h-6" />
                    </span>
                  </h3>
                </div>
                <p className="text-navy-600 group-hover:text-white/70 mb-8 leading-relaxed break-keep break-words transition-colors">
                  주변의 시선이나 소음 걱정 없이, 나만의 독립된 공간에서 조용하고 완전한 휴식을 원하는 분들께 추천합니다.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "조용한 집중 회복이 필요할 때",
                    "프라이빗한 공간 선호",
                    "개인 업무/독서 시간 필요",
                    "완전한 심리적 안정"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 px-4 bg-navy-50 group-hover:bg-white/5 rounded-xl border border-navy-100/50 group-hover:border-white/10 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-navy-500 group-hover:text-amber-400" />
                      <span className="text-sm font-bold text-navy-700 group-hover:text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 2-Person Room Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-beige-200 group hover:bg-stone-900 transition-all duration-500 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative overflow-hidden"
            >
              {/* Left Box: Large Typography */}
              <div className="w-full lg:w-1/3 flex justify-center relative z-10">
                <div className="relative flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-black text-navy-900/5 group-hover:text-white/10 transition-colors absolute -left-4">02</span>
                  <div className="flex flex-col items-center relative z-10">
                    <span className="text-5xl md:text-6xl font-black text-navy-900 group-hover:text-white transition-colors">02</span>
                    <span className="text-[10px] font-bold text-navy-400 group-hover:text-stone-400 tracking-[0.4em] uppercase mt-1">Together</span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-2/3 relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 group-hover:text-white transition-colors break-keep leading-tight">
                    서로 의지하며 회복하는 <br />
                    <span className="inline-flex items-center gap-2 underline decoration-4 underline-offset-8 decoration-navy-200 group-hover:decoration-cyan-400 group-hover:text-cyan-400 transition-all">
                      2인실 <Users className="w-6 h-6" />
                    </span>
                  </h3>
                </div>
                <p className="text-navy-600 group-hover:text-white/70 mb-8 leading-relaxed break-keep break-words transition-colors">
                  가족, 친구 등 사고를 함께 겪은 분과 서로 의지하며 심리적 안정을 찾고 함께 회복하고 싶은 분들께 적합합니다.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "가족/지인과 동시 입원 가능",
                    "사고 후 심리적 불안 해소",
                    "동승자와의 정서적 교감",
                    "함께 응원하는 회복 과정"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 px-4 bg-beige-50 group-hover:bg-white/5 rounded-xl border border-beige-100/50 group-hover:border-white/10 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-navy-500 group-hover:text-cyan-400" />
                      <span className="text-sm font-bold text-navy-700 group-hover:text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-navy-500 font-bold tracking-wider text-sm mb-4 block uppercase">Our Space</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 break-keep break-words">쾌적하고 편안한 회복을 위한 공간</h2>

              <p className="text-lg text-navy-600 break-keep break-words">
                환자분들이 오직 회복에만 전념하실 수 있도록, <br className="hidden md:block" />
                전주W한의원은 모든 공간을 <br className="hidden md:block" />
                청결하고 아늑하게 관리하고 있습니다.
              </p>
            </div>
            {!showAllPhotos && (
              <button 
                onClick={() => setShowAllPhotos(true)}
                className="text-navy-900 font-bold flex items-center gap-2 hover:text-navy-600 transition-colors group"
              >
                전체 사진 보기 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Bento Grid Layout for first 5 images */}
            {!showAllPhotos ? (
              <>
                <motion.div 
                  layoutId="gallery-1"
                  onClick={() => setSelectedImageIndex(0)}
                  className="col-span-2 row-span-2 aspect-square md:aspect-auto md:h-[500px] relative rounded-3xl overflow-hidden cursor-pointer group"
                >
                  <img src={clinicImages[0]} alt="Clinic 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </motion.div>
                <motion.div 
                  layoutId="gallery-2"
                  onClick={() => setSelectedImageIndex(1)}
                  className="aspect-square relative rounded-3xl overflow-hidden cursor-pointer group"
                >
                  <img src={clinicImages[1]} alt="Clinic 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </motion.div>
                <motion.div 
                  layoutId="gallery-3"
                  onClick={() => setSelectedImageIndex(2)}
                  className="aspect-square relative rounded-3xl overflow-hidden cursor-pointer group"
                >
                  <img src={clinicImages[2]} alt="Clinic 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </motion.div>
                <motion.div 
                  layoutId="gallery-4"
                  onClick={() => setSelectedImageIndex(3)}
                  className="aspect-square relative rounded-3xl overflow-hidden cursor-pointer group"
                >
                  <img src={clinicImages[3]} alt="Clinic 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </motion.div>
                <motion.div 
                  layoutId="gallery-5"
                  onClick={() => setSelectedImageIndex(4)}
                  className="aspect-square relative rounded-3xl overflow-hidden cursor-pointer group"
                >
                  <img src={clinicImages[4]} alt="Clinic 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                    <span className="text-white font-bold text-lg">+12</span>
                  </div>
                </motion.div>
              </>
            ) : (
              clinicImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImageIndex(index)}
                  className="aspect-square relative rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img src={src} alt={`Clinic ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {showAllPhotos && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAllPhotos(false)}
                className="px-8 py-3 bg-navy-50 text-navy-900 rounded-full font-bold hover:bg-navy-100 transition-all"
              >
                접기
              </button>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImageIndex(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
                onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + clinicImages.length) % clinicImages.length : null));
                  }}
                >
                  <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
                </button>

                <motion.img
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={clinicImages[selectedImageIndex]}
                  alt={`Clinic Full ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />

                <button 
                  className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % clinicImages.length : null));
                  }}
                >
                  <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
                </button>

                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/70 font-medium">
                  {selectedImageIndex + 1} / {clinicImages.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Intermediate CTA Section */}
      <section className="py-16 px-6 bg-beige-50/50 border-y border-beige-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6 border border-red-100 shadow-sm">
              <Clock className="w-4 h-4" /> 일요일·공휴일에도 입원 환자 접수 가능
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 break-keep break-words">
              지금 바로 상담이 필요하신가요?
            </h3>
            <p className="text-navy-600 mb-10 break-keep break-words">
              교통사고 치료, 입원 가능 여부 등 궁금하신 점을 <br className="hidden md:block" />
              전화나 카카오톡으로 문의주시면 친절하게 안내해 드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:0632217500"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-navy-900 text-white rounded-2xl font-bold hover:bg-navy-800 transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                전화로 문의하기
              </a>
              <a 
                href="https://pf.kakao.com/_xjxcgpxl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#FEE500] text-[#3C1E1E] rounded-2xl font-bold hover:bg-[#FDD835] transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <div className="w-6 h-6 bg-[#3C1E1E] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-[#FEE500] fill-current" />
                </div>
                카카오톡 상담하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inpatient vs Outpatient Guide Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-navy-500 font-bold tracking-wider text-sm mb-4 block uppercase"
            >
              Recovery Guide
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 break-keep break-words"
            >
              지금 나에게 필요한 치료는? <br className="md:hidden" /> 입원 vs 통원 가이드
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-navy-600 break-keep break-words"
            >
              사고의 정도와 통증의 양상에 따라 <br className="md:hidden" /> 최적의 회복 방법이 달라집니다.
            </motion.p>
          </div>

          <div className="relative border border-beige-200 rounded-[40px] overflow-hidden shadow-2xl bg-white min-h-[600px] flex flex-col md:flex-row">
            {/* Inpatient Guide */}
            <motion.div 
              animate={{ 
                flex: hoveredGuide === 'inpatient' ? 1.1 : hoveredGuide === 'outpatient' ? 0.9 : 1 
              }}
              onMouseEnter={() => setHoveredGuide('inpatient')}
              onMouseLeave={() => setHoveredGuide(null)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="p-8 md:p-12 bg-white hover:bg-navy-50/30 transition-colors duration-500 group border-b md:border-b-0 md:border-r border-beige-100 relative overflow-hidden cursor-pointer"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Bed className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-navy-500 text-xs font-bold tracking-widest uppercase mb-1 block">Intensive Care</span>
                    <h3 className="text-2xl font-bold text-navy-900 underline decoration-4 decoration-navy-100 underline-offset-4">입원 치료</h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-navy-400 uppercase tracking-wider mb-4">이런 분들께 권장합니다</h4>
                    <ul className="space-y-4">
                      {[
                        { title: "사고 직후 급성기", desc: "사고 발생 후 1~2일 이내 극심한 통증" },
                        { title: "거동 및 일상 불편", desc: "혼자 움직이기 힘들거나 일상 수행 불가" },
                        { title: "집중 회복 필요", desc: "단기간에 집중적인 한방 복합 치료 희망" },
                        { title: "심리적 안정", desc: "사고 후유증 예방을 위한 절대적 안정" }
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4">
                          <div className="mt-1 w-5 h-5 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-navy-600" />
                          </div>
                          <div>
                            <p className="font-bold text-navy-900 text-base mb-0.5">{item.title}</p>
                            <p className="text-sm text-navy-500 break-keep opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-beige-100">
                    <div className="bg-navy-900 text-white p-6 rounded-2xl transform group-hover:scale-105 transition-transform duration-500">
                      <p className="text-xs font-bold text-beige-300 uppercase tracking-widest mb-2">Treatment Goal</p>
                      <p className="text-sm leading-relaxed break-keep break-words">
                        통증의 원인이 되는 어혈을 빠르게 제거하고, <br />
                        손상된 근육과 인대를 집중적으로 회복하여 <br />
                        <span className="text-beige-300 font-bold">후유증 발생 가능성을 최소화</span>합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorative Element */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-navy-900/5 rounded-full blur-3xl group-hover:bg-navy-900/10 transition-colors" />
            </motion.div>

            {/* Outpatient Guide */}
            <motion.div 
              animate={{ 
                flex: hoveredGuide === 'outpatient' ? 1.1 : hoveredGuide === 'inpatient' ? 0.9 : 1 
              }}
              onMouseEnter={() => setHoveredGuide('outpatient')}
              onMouseLeave={() => setHoveredGuide(null)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="p-8 md:p-12 bg-white hover:bg-beige-50/30 transition-colors duration-500 group relative overflow-hidden cursor-pointer"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-beige-200 rounded-2xl flex items-center justify-center text-navy-900 shadow-lg group-hover:scale-110 transition-transform">
                    <Activity className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-navy-500 text-xs font-bold tracking-widest uppercase mb-1 block">Continuous Care</span>
                    <h3 className="text-2xl font-bold text-navy-900 underline decoration-4 decoration-beige-200 underline-offset-4">통원 치료</h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-navy-400 uppercase tracking-wider mb-4">이런 분들께 권장합니다</h4>
                    <ul className="space-y-4">
                      {[
                        { title: "일상생활 병행", desc: "직장, 학업 등 일상을 유지하며 치료 희망" },
                        { title: "관리 가능한 통증", desc: "거동은 가능하나 특정 부위의 뻐근함 지속" },
                        { title: "장기적 후유증 관리", desc: "급성기 이후 꾸준한 재활 및 교정 필요" },
                        { title: "경미한 사고", desc: "외상은 없으나 사고 후 컨디션 저하" }
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4">
                          <div className="mt-1 w-5 h-5 rounded-full bg-beige-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-beige-600" />
                          </div>
                          <div>
                            <p className="font-bold text-navy-900 text-base mb-0.5">{item.title}</p>
                            <p className="text-sm text-navy-500 break-keep opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-beige-100">
                    <div className="bg-beige-100 text-navy-900 p-6 rounded-2xl transform group-hover:scale-105 transition-transform duration-500">
                      <p className="text-xs font-bold text-navy-400 uppercase tracking-widest mb-2">Treatment Goal</p>
                      <p className="text-sm leading-relaxed break-keep break-words">
                        일상 속에서 무리가 가지 않는 선에서 <br />
                        지속적인 추나, 침 치료를 통해 <br />
                        <span className="text-navy-900 font-bold">신체 밸런스를 정상화</span>하고 통증을 완화합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Element */}
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-beige-200/20 rounded-full blur-3xl group-hover:bg-beige-200/40 transition-colors" />
            </motion.div>

            {/* Center VS Badge */}
            <motion.div 
              animate={{ 
                left: hoveredGuide === 'inpatient' ? '52.5%' : hoveredGuide === 'outpatient' ? '47.5%' : '50%' 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden md:flex absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-beige-50 rounded-full items-center justify-center shadow-xl z-20 pointer-events-none"
            >
              <span className="text-navy-900 font-black text-xl italic">VS</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Recovery Philosophy Section */}
      <section className="py-24 px-6 bg-white border-t border-beige-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 break-keep break-words"
            >
              눈에 보이지 않는 통증까지, <br className="hidden md:block" />
              전주W한의원의 세심한 회복 철학
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-600 break-keep break-words"
            >
              단순한 통증 완화를 넘어, 사고 전의 일상으로 <br className="md:hidden" /> 건강하게 돌아가실 수 있도록 돕습니다.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1. Delayed Symptoms */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
              className="bg-beige-50/50 p-10 rounded-[2.5rem] border border-beige-100 flex flex-col h-full hover:bg-navy-900 transition-all duration-500 cursor-default group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-navy-900 group-hover:bg-white text-white group-hover:text-navy-900 rounded-xl flex items-center justify-center mb-8 shadow-lg transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-white mb-6 break-keep break-words transition-colors">
                  영상 검사에서 이상이 없어도 <br /> 불편함이 계속된다면
                </h3>
                <p className="text-navy-600 group-hover:text-white leading-relaxed mb-8 break-keep break-words flex-grow transition-colors">
                  사고 직후보다 <span className="text-navy-900 group-hover:text-amber-400 font-bold transition-colors">2~3일 뒤</span> 통증이 더 선명해지는 경우가 많습니다. 이는 충격을 받은 몸이 근육과 인대의 긴장을 천천히 드러내기 때문입니다.
                </p>
                <div className="p-5 bg-white group-hover:bg-white/10 rounded-2xl border border-beige-200 group-hover:border-white/20 text-sm text-navy-500 group-hover:text-amber-400 italic leading-relaxed transition-all">
                  "초기에 적절한 관리를 하지 않으면 <br /> 만성화될 위험이 있으니 주의가 필요합니다."
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-navy-900/5 group-hover:bg-white/5 rounded-full blur-3xl transition-colors" />
            </motion.div>

            {/* 2. Holistic Approach */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -20, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
              className="bg-beige-50/50 p-10 rounded-[2.5rem] border border-beige-100 flex flex-col h-full hover:bg-navy-900 transition-all duration-500 cursor-default group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-navy-900 group-hover:bg-white text-white group-hover:text-navy-900 rounded-xl flex items-center justify-center mb-8 shadow-lg transition-colors">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-white mb-6 break-keep break-words transition-colors">
                  통증 부위만이 아니라, <br /> 몸 전체의 흐름을 봅니다
                </h3>
                <p className="text-navy-600 group-hover:text-white leading-relaxed mb-8 break-keep break-words flex-grow transition-colors">
                  단순히 '어디가 아픈' 상태를 넘어 수면, 소화, 일상의 컨디션까지 살핍니다. 전신 컨디션을 회복해야 통증도 빠르게 잡힙니다.
                </p>
                <ul className="space-y-4">
                  {[
                    "침·약침·추나 복합 치료",
                    "어혈 제거 맞춤 한약 처방",
                    "전신 밸런스 및 컨디션 케어"
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-navy-500 group-hover:text-amber-400 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-navy-300 group-hover:text-amber-400 transition-colors" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-navy-900/5 group-hover:bg-white/5 rounded-full blur-3xl transition-colors" />
            </motion.div>

            {/* 3. Orthopedic Collaboration */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -20, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
              className="bg-beige-50/50 p-10 rounded-[2.5rem] border border-beige-100 flex flex-col h-full hover:bg-navy-900 transition-all duration-500 cursor-default group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-navy-900 group-hover:bg-white text-white group-hover:text-navy-900 rounded-xl flex items-center justify-center mb-8 shadow-lg transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-white mb-6 break-keep transition-colors">
                  정형외과와 함께 <br /> 다니셔도 됩니다
                </h3>
                <p className="text-navy-600 group-hover:text-white leading-relaxed mb-8 break-keep flex-grow transition-colors">
                  영상 확인이 필요한 경우 정형외과 진료를 먼저 받으시는 것이 맞습니다. <span className="group-hover:text-amber-400 font-bold transition-colors">한의원 치료는 정형외과 진료와 병행하며 회복 속도를 높일 수 있습니다.</span>
                </p>
                
                {/* Synergy Section Added */}
                <div className="mt-auto pt-6 border-t border-beige-100 group-hover:border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-navy-100 group-hover:bg-white/20 flex items-center justify-center border-2 border-white group-hover:border-navy-800">
                        <Stethoscope className="w-4 h-4 text-navy-600 group-hover:text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-amber-100 group-hover:bg-amber-400/20 flex items-center justify-center border-2 border-white group-hover:border-navy-800">
                        <HeartPulse className="w-4 h-4 text-amber-600 group-hover:text-amber-400" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-navy-900 group-hover:text-white transition-colors">협진 시너지 효과</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white group-hover:bg-white/5 p-3 rounded-xl border border-beige-100 group-hover:border-white/10 text-[11px] text-navy-600 group-hover:text-white/80 transition-all text-center">
                      정밀 진단 & <br/>영상 확인
                    </div>
                    <div className="bg-white group-hover:bg-white/5 p-3 rounded-xl border border-beige-100 group-hover:border-white/10 text-[11px] text-navy-600 group-hover:text-white/80 transition-all text-center">
                      통증 완화 & <br/>기능 회복
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-navy-400 group-hover:text-white/40 font-bold text-[10px] tracking-[0.3em] uppercase transition-colors">
                  <div className="h-px bg-navy-100 group-hover:bg-white/10 flex-grow transition-colors" />
                  Collaboration
                  <div className="h-px bg-navy-100 group-hover:bg-white/10 flex-grow transition-colors" />
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-navy-900/5 group-hover:bg-white/5 rounded-full blur-3xl transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#FDFCFB] border-t border-beige-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 break-keep break-words">자주 묻는 질문</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-beige-200 rounded-2xl bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center gap-6 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-navy-600" />
                  </div>
                  <span className="text-lg font-bold text-navy-900 flex-grow pr-8 break-keep break-words">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-navy-400 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-8 pb-8 flex gap-6 border-t border-beige-50 pt-6">
                        <div className="w-10 shrink-0 flex justify-center">
                          <div className="w-1.5 h-full bg-beige-100 rounded-full" />
                        </div>
                        <div className="text-navy-900 leading-relaxed break-keep break-words">
                          {faq.a}
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

      {/* Final CTA */}
      <section className="py-24 px-5 sm:px-6 bg-beige-50">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-beige-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center leading-[1.4] text-navy-900 break-keep break-words">이런 경우 전주W한의원 상담이<br className="md:hidden" /> 도움이 됩니다</h3>
          <ul className="space-y-4 mb-14">
            <li className="flex items-start gap-4 bg-red-50/50 p-6 rounded-2xl border border-red-100 shadow-sm">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <span className="text-base md:text-lg text-red-600 font-bold break-keep break-words">일요일 및 공휴일에도 교통사고 입원 환자 접수가 가능합니다.</span>
                <p className="text-sm text-red-500/80 mt-1">갑작스러운 사고에도 당황하지 마시고 문의주세요.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">사고 후 몸이 불편한데 어디서부터 시작해야 할지 막막하신 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">입원 치료와 통원 치료 중 나에게 맞는 회복 방향을 찾고 싶은 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">정형외과 진료와 병행하며 더 빠른 회복을 원하시는 분</span>
            </li>
            <li className="flex items-start gap-4 bg-beige-50 p-6 rounded-2xl border border-beige-100">
              <CheckCircle2 className="w-6 h-6 text-navy-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-navy-800 font-medium break-keep break-words">내 몸 상태를 충분히 듣고 이해하기 쉽게 설명해 주는 곳을 찾는 분</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:0632217500" 
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
            <button 
              onClick={() => setPage('/location')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 border border-navy-900 rounded-full text-base font-bold hover:bg-navy-50 transition-colors shadow-sm w-full md:w-auto"
            >
              <MapPin className="w-5 h-5" />
              오시는 길 확인하기
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

