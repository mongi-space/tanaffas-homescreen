import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, ChevronDown, X, ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import LandingPage from './components/LandingPage';
import { useLanguage, Language } from './contexts/LanguageContext';

export default function App() {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isLanguageDrawerOpen, setIsLanguageDrawerOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  // Close desktop language menu on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowLanguageMenu(false);
        setIsLanguageDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLabels = {
    fr: {
      diagnostics: 'Diagnostics',
      impact: 'Transformation',
      preview: 'Démonstration',
      contact: 'Contact',
      start: 'Démarrer',
    },
    en: {
      diagnostics: 'Diagnostics',
      impact: 'Transformation',
      preview: 'Preview',
      contact: 'Contact',
      start: 'Get Started',
    },
    ar: {
      diagnostics: 'التحليلات',
      impact: 'التحول المؤسسي',
      preview: 'نموذج التقرير',
      contact: 'تواصل معنا',
      start: 'ابدأ الآن',
    },
  }[language];

  const languagesList: { code: Language; label: string }[] = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFF] font-sans text-slate-950 overflow-x-clip selection:bg-[#DF716A]/30 selection:text-slate-950 relative">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 py-2.5 sm:py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div onClick={scrollToTop} className="cursor-pointer group flex items-center">
            <img
              src={language === 'ar' ? 'https://i.imgur.com/5Pcgn2J.png' : 'https://i.imgur.com/ADm7vNg.png'}
              alt="Tanaffas Logo"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('diagnostics')}
              className="text-xs font-semibold tracking-tight text-slate-600 hover:text-[#0B121F] transition-colors cursor-pointer"
            >
              {navLabels.diagnostics}
            </button>
            <button
              onClick={() => scrollTo('impact')}
              className="text-xs font-semibold tracking-tight text-slate-600 hover:text-[#0B121F] transition-colors cursor-pointer"
            >
              {navLabels.impact}
            </button>
            <button
              onClick={() => scrollTo('preview')}
              className="text-xs font-semibold tracking-tight text-slate-600 hover:text-[#0B121F] transition-colors cursor-pointer"
            >
              {navLabels.preview}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-xs font-semibold tracking-tight text-slate-600 hover:text-[#0B121F] transition-colors cursor-pointer"
            >
              {navLabels.contact}
            </button>
          </div>

          {/* Actions & Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher */}
            <div className="relative" ref={languageMenuRef}>
              <button
                type="button"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setIsLanguageDrawerOpen(true);
                  } else {
                    setShowLanguageMenu(!showLanguageMenu);
                  }
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 px-3 py-1.5 sm:py-2 rounded-full hover:bg-slate-100 transition-all uppercase border border-slate-200/60 cursor-pointer"
                aria-label="Select language"
              >
                <Languages size={15} className="text-[#DF716A]" />
                <span>{language}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${showLanguageMenu ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className={`absolute top-full mt-2 ${
                      language === 'ar' ? 'left-0' : 'right-0'
                    } bg-white border border-slate-100 rounded-2xl shadow-xl p-1.5 min-w-[140px] z-50 hidden md:block`}
                  >
                    {languagesList.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguageMenu(false);
                        }}
                        className={`w-full text-start px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                          language === lang.code
                            ? 'bg-[#0B121F] text-white'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-[#0B121F]'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-[#DF716A]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => scrollTo('preview')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0B121F] text-white text-xs font-bold hover:bg-[#DF716A] hover:text-[#0B121F] transition-all shadow-sm active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>{navLabels.start}</span>
              <ArrowUpRight size={14} className="rtl:rotate-270" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Landing Page Container */}
      <main className="pt-16 sm:pt-20">
        <LandingPage
          onStart={() => scrollTo('preview')}
          onViewMethod={() => scrollTo('impact')}
          onViewAirlessRoom={() => scrollTo('diagnostics')}
          onViewBurnoutBarometer={() => scrollTo('diagnostics')}
          onViewChaosTaxCalculator={() => scrollTo('diagnostics')}
          onViewOxygenLeakMap={() => scrollTo('diagnostics')}
        />
      </main>

      {/* Comprehensive Footer */}
      <footer className="border-t border-slate-100 pt-16 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & Vision */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-6">
            <img
              src={language === 'ar' ? 'https://i.imgur.com/5Pcgn2J.png' : 'https://i.imgur.com/ADm7vNg.png'}
              alt="Tanaffas Logo"
              className="h-10 w-auto object-contain cursor-pointer"
              onClick={scrollToTop}
            />
            <p className="text-slate-600 text-sm max-w-md leading-relaxed text-center md:text-start">
              {t('footer.vision')}
            </p>
          </div>

          {/* Column 2: Navigation & Sections */}
          <div className="space-y-6 text-center md:text-start">
            <h4 className="text-xs font-bold text-[#0B121F] tracking-[0.2em] uppercase">{t('footer.approach')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('diagnostics')}
                  className="hover:text-[#DF716A] transition-colors cursor-pointer text-slate-500 font-bold"
                >
                  {navLabels.diagnostics}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('impact')}
                  className="hover:text-[#DF716A] transition-colors cursor-pointer text-slate-500 font-bold"
                >
                  {navLabels.impact}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('preview')}
                  className="hover:text-[#DF716A] transition-colors cursor-pointer text-slate-500 font-bold"
                >
                  {navLabels.preview}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6 text-center md:text-start">
            <h4 className="text-xs font-bold text-[#0B121F] tracking-[0.2em] uppercase">{navLabels.contact}</h4>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a
                href="https://wa.me/21698283738"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-[#DF716A] transition-colors group"
                dir="ltr"
              >
                <div className="p-2 rounded-full bg-slate-50 group-hover:bg-[#DF716A]/10 transition-colors">
                  <MessageCircle size={16} />
                </div>
                <span className="text-sm font-medium tracking-wide">+216 98 283 738</span>
              </a>

              <a
                href="mailto:mongi@tanaffas.pro"
                className="flex items-center gap-2 text-slate-500 hover:text-[#DF716A] transition-colors group"
                dir="ltr"
              >
                <div className="p-2 rounded-full bg-slate-50 group-hover:bg-[#DF716A]/10 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-medium">mongi@tanaffas.pro</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center md:justify-between gap-y-3 text-slate-400 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span>{t('footer.rights')}</span>
            <span>•</span>
            <span>{t('footer.founded')}</span>
          </div>
          <div className="text-[0.65rem] tracking-wider uppercase text-slate-400 font-bold">
            Tanaffas™ — Enterprise Intelligence
          </div>
        </div>
      </footer>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isLanguageDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLanguageDrawerOpen(false)}
            className="fixed inset-0 bg-[#0B121F]/40 backdrop-blur-sm z-[100]"
          />
        )}
      </AnimatePresence>

      {/* Language Mobile Drawer / BottomSheet */}
      <AnimatePresence>
        {isLanguageDrawerOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 450, mass: 0.5 }}
            className="fixed bottom-0 inset-x-0 bg-white rounded-t-3xl z-[110] p-6 sm:p-8 md:hidden shadow-2xl pb-10"
          >
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
            <div className="text-start space-y-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#0B121F]">
                  {t('language.select') || 'Sélectionner la langue'}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsLanguageDrawerOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-2.5">
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLanguageDrawerOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                      language === lang.code
                        ? 'bg-[#0B121F] border-[#0B121F] text-white'
                        : 'bg-white border-slate-100 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-sm">{lang.label}</span>
                    {language === lang.code && <div className="w-2.5 h-2.5 rounded-full bg-[#DF716A]" />}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
