import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, MessageCircle, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Home from "./pages/Home";
import About from "./pages/About";
import TrafficAccident from "./pages/TrafficAccident";
import Diet from "./pages/Diet";
import Metabolic from "./pages/Metabolic";
import Guide from "./pages/Guide";
import Location from "./pages/Location";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ClinicFooter from "./components/ClinicFooter";
import Logo from "./components/Logo";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // Close mobile menu on page change
  }, [currentPage]);

  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '한의원 소개' },
    { 
      id: 'services', 
      label: '진료 분야',
      subItems: [
        { id: 'traffic', label: '교통사고 입원·통원' },
        { id: 'diet', label: '체중 감량·체질 개선' },
        { id: 'metabolic', label: '고혈압·고지혈증·당뇨' },
      ]
    },
    { id: 'guide', label: '진료 안내' },
    { id: 'location', label: '오시는 길 / 문의' },
  ];

  return (
    <div className="min-h-screen bg-beige-50 text-navy-800 font-sans selection:bg-beige-200 flex flex-col">
      {/* Header (Sticky) */}
      <header className="sticky top-0 z-50 bg-beige-50/90 backdrop-blur-md border-b border-beige-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Logo variant="navy" className="h-10 md:h-12" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 text-[15px] font-medium text-navy-600">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`transition-all px-4 py-2 rounded-full ${currentPage === 'home' ? 'text-navy-900 font-bold bg-navy-50' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'}`}
            >
              홈
            </button>
            <button 
              onClick={() => setCurrentPage('about')} 
              className={`transition-all px-4 py-2 rounded-full ${currentPage === 'about' ? 'text-navy-900 font-bold bg-navy-50' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'}`}
            >
              한의원 소개
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-all px-4 py-2 rounded-full ${['traffic', 'diet', 'metabolic'].includes(currentPage) ? 'text-navy-900 font-bold bg-navy-50' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'}`}>
                진료 분야 <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Content */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white border border-beige-200 shadow-xl rounded-xl transition-all duration-200 flex flex-col py-2 overflow-hidden ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <button 
                  onClick={() => { setCurrentPage('traffic'); setIsDropdownOpen(false); }}
                  className={`px-5 py-3 text-left transition-all text-sm border-l-4 ${currentPage === 'traffic' ? 'text-navy-900 font-bold bg-navy-50 border-navy-800' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50 hover:border-navy-300 border-transparent'}`}
                >
                  교통사고 입원·통원
                </button>
                <button 
                  onClick={() => { setCurrentPage('diet'); setIsDropdownOpen(false); }}
                  className={`px-5 py-3 text-left transition-all text-sm border-l-4 ${currentPage === 'diet' ? 'text-navy-900 font-bold bg-navy-50 border-navy-800' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50 hover:border-navy-300 border-transparent'}`}
                >
                  체중 감량·체질 개선
                </button>
                <button 
                  onClick={() => { setCurrentPage('metabolic'); setIsDropdownOpen(false); }}
                  className={`px-5 py-3 text-left transition-all text-sm border-l-4 ${currentPage === 'metabolic' ? 'text-navy-900 font-bold bg-navy-50 border-navy-800' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50 hover:border-navy-300 border-transparent'}`}
                >
                  고혈압·고지혈증·당뇨
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentPage('guide')} 
              className={`transition-all px-4 py-2 rounded-full ${currentPage === 'guide' ? 'text-navy-900 font-bold bg-navy-50' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'}`}
            >
              진료 안내
            </button>
            <button 
              onClick={() => setCurrentPage('location')} 
              className={`transition-all px-4 py-2 rounded-full ${currentPage === 'location' ? 'text-navy-900 font-bold bg-navy-50' : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'}`}
            >
              오시는 길 / 문의
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-navy-900 p-2 hover:bg-navy-50 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-900/40 backdrop-blur-sm z-[60] md:hidden"
            />
            {/* Menu Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[70] shadow-2xl md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-beige-100">
                <Logo variant="navy" className="h-8" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-navy-400 hover:text-navy-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex-grow overflow-y-auto py-6 px-4">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.id} className="space-y-1">
                      {item.subItems ? (
                        <div className="py-2">
                          <button
                            onClick={() => setCurrentPage(item.id === 'services' ? 'traffic' : item.id)}
                            className={`w-full flex items-center px-4 py-3 rounded-xl text-[15px] font-bold transition-all ${
                              ['traffic', 'diet', 'metabolic'].includes(currentPage) && item.id === 'services'
                                ? 'bg-navy-50 text-navy-900' 
                                : 'text-navy-900 hover:bg-beige-50'
                            }`}
                          >
                            {item.label}
                          </button>
                          <div className="mt-1 space-y-1">
                            {item.subItems.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => setCurrentPage(sub.id)}
                                className={`w-full flex items-center px-8 py-3 rounded-xl text-[14px] transition-all ${
                                  currentPage === sub.id 
                                    ? 'bg-navy-50 text-navy-900 font-bold' 
                                    : 'text-navy-600 hover:bg-beige-50'
                                }`}
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setCurrentPage(item.id)}
                          className={`w-full flex items-center px-4 py-3 rounded-xl text-[15px] font-bold transition-all ${
                            currentPage === item.id 
                              ? 'bg-navy-50 text-navy-900' 
                              : 'text-navy-900 hover:bg-beige-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
              
              <div className="p-6 bg-beige-50 border-t border-beige-100 space-y-3">
                <p className="text-xs text-navy-400 mb-1">전주W한의원 상담 및 예약</p>
                <a 
                  href="https://pf.kakao.com/_xjxcgpxl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FEE500] text-gray-900 rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  카카오톡 상담하기
                </a>
                <a 
                  href="tel:0632221075"
                  target="_top"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-navy-900 text-white rounded-xl text-sm font-bold shadow-lg active:scale-95 transition-transform"
                >
                  <Phone className="w-4 h-4" />
                  063-222-1075
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center w-full">
        {currentPage === 'home' && <Home setPage={setCurrentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'traffic' && <TrafficAccident />}
        {currentPage === 'diet' && <Diet />}
        {currentPage === 'metabolic' && <Metabolic />}
        {currentPage === 'guide' && <Guide />}
        {currentPage === 'location' && <Location />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
      </main>

      {/* Footer */}
      {currentPage === 'home' ? (
        <footer className="bg-navy-900 text-navy-50/70 py-12 px-6 border-t border-navy-800 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <Logo variant="white" className="h-10 opacity-90" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <button 
                onClick={() => setCurrentPage('privacy')}
                className="text-sm hover:text-white transition-colors"
              >
                개인정보처리방침
              </button>
              <p className="text-sm text-center md:text-left">
                © 2026 Jeonju W Korean Medicine Clinic. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ) : (
        <ClinicFooter setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
