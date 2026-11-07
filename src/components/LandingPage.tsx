import { useState } from 'react';
import { Wind, Gauge, Calculator, Map, UserCircle, Users, BarChart3, Search, Sparkles, Target, FileText, Compass, ListOrdered, CheckCircle2, MessageCircle, Mail, Activity, Lock, AlertCircle, Zap, Download, Layers, TrendingUp, ChevronRight, BookOpen, ListTodo, CheckSquare, ArrowRight, Clock, GraduationCap, Video, LayoutList, Workflow, Award, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroBackgroundIllustration from './HeroBackgroundIllustration';

interface LandingPageProps {
  onStart: () => void;
  onViewMethod: () => void;
  onViewAirlessRoom: () => void;
  onViewBurnoutBarometer?: () => void;
  onViewChaosTaxCalculator?: () => void;
  onViewOxygenLeakMap?: () => void;
}

export default function LandingPage({ onStart, onViewMethod, onViewAirlessRoom, onViewBurnoutBarometer, onViewChaosTaxCalculator, onViewOxygenLeakMap }: LandingPageProps) {
  const { language, t } = useLanguage();
  const [mobilePreviewTab, setMobilePreviewTab] = useState<'combined' | 'score' | 'modules'>('combined');

  const diagnosticCards = [
    {
      title: "Airless Room",
      description: t('landing.diag.airless'),
      icon: Wind,
      color: "bg-[#FDA19B]/10 text-[#FDA19B] border-[#FDA19B]/20",
      cta: language === 'fr' ? "Découvrir le diagnostic" : language === 'en' ? "Explore Airless Room" : "استكشف تشخيص الاختناق"
    },
    {
      title: "Burnout Barometer",
      description: t('landing.diag.burnout'),
      icon: Gauge,
      color: "bg-orange-50 text-orange-600 border-orange-100",
      cta: language === 'fr' ? "Évaluer le Baromètre Burnout" : language === 'en' ? "Measure Burnout Barometer" : "قياس مؤشر الإجهاد القيادي"
    },
    {
      title: "Chaos Tax Calculator",
      description: t('landing.diag.chaos'),
      icon: Calculator,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      cta: language === 'fr' ? "Calculer la Taxe de Chaos" : language === 'en' ? "Calculate Chaos Tax" : "حساب تكلفة الفوضى الهيكلية"
    },
    {
      title: "Oxygen Leak Map",
      description: t('landing.diag.oxygen'),
      icon: Map,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      cta: language === 'fr' ? "Cartographier les Fuites d'Oxygène" : language === 'en' ? "Map Oxygen Leaks" : "كشف خريطة تسرب الطاقة"
    }
  ];

  const impacts = [
    {
      title: language === 'fr' ? "Profil Leader" : language === 'en' ? "Leader Profile" : "ملف القائد",
      desc: language === 'fr' ? "Transformez votre rôle : passez de la gestion de crise quotidienne à une orientation stratégique claire. Le diagnostic identifie où s'épuisent votre temps et votre énergie pour vous redonner le contrôle des décisions à fort impact." : language === 'en' ? "Transform your leadership role from daily fire-fighting to clear strategic direction. The diagnostic Pinpoints where time and energy leak, enabling you to regain focus on high-impact decisions." : "تحويل دور القيادة من إطفاء الحرائق اليومية إلى توجيه استراتيجية واضحة. يحدد التشخيص بدقة أين يُستنزف وقتك وطاقتك، مما يتيح لك استعادة التحكم والتركيز على القرارات عالية الأثر.",
      icon: UserCircle,
      items: language === 'fr' ? ["Protection de la charge mentale", "Vision stratégique libérée", "Décisions claires sans épuisement"] : language === 'en' ? ["Mental bandwidth protection", "Uncluttered strategic vision", "Decisive leadership without burnout"] : ["حماية الطاقة والتركيز القيادي", "رؤية استراتيجية متحررة من التفاصيل", "قرارات حاسمة دون استنزاف ذهني"]
    },
    {
      title: language === 'fr' ? "Organisation" : language === 'en' ? "Organization" : "المنظمة",
      desc: language === 'fr' ? "Révélez les goulots d'étranglement invisibles qui ralentissent vos équipes. Obtenez une cartographie fluide qui clarifie les responsabilités et élimine les frictions internes pour un fonctionnement autonome." : language === 'en' ? "Uncover hidden operational bottlenecks slowing down your teams. Get a clear organizational roadmap that eliminates friction and establishes smooth, autonomous cross-team execution." : "كشف العوائق الهيكلية ونقاط الاختناق الخفية التي تبطئ التنسيق بين الفِرَق. يوفر التقرير خارطة تنظيمية توضح المسؤوليات وتزيل الاحتكاك لتأسيس بيئة عمل متناسقة وتلقائية الأداء.",
      icon: Users,
      items: language === 'fr' ? ["Clarté totale des responsabilités", "Flux de communication direct", "Autonomie et alignement des équipes"] : language === 'en' ? ["Zero role ambiguity", "Streamlined cross-team comms", "Empowered autonomous execution"] : ["إنهاء تضارب المسؤوليات والازدواجية", "تدفق معلومات سلس وسريع", "فرق عمل متناغمة ومستقلة"]
    },
    {
      title: language === 'fr' ? "Business" : language === 'en' ? "Business" : "الأعمال",
      desc: language === 'fr' ? "Éliminez la 'Taxe du Chaos' financière due à la lenteur décisionnelle. Transformez la santé organisationnelle en levier mesurable de rentabilité, de rétention des talents et de vitesse d'exécution." : language === 'en' ? "Eliminate the financial 'Chaos Tax' caused by decision drag. Turn organizational health into a measurable engine for execution speed, talent retention, and bottom-line performance." : "قياس ووقف 'ضريبة الفوضى' والتبديد المالي الناتج عن بطء اتخاذ القرار. تحويل الصحة التنظيمية إلى محرك ملموس لسرعة التنفيذ، وحماية رأس المال البشري، وتعزيز الأداء الاستثماري.",
      icon: BarChart3,
      items: language === 'fr' ? ["Réduction du gaspillage opérationnel", "Rétention et protection des talents", "Vitesse d'exécution et croissance"] : language === 'en' ? ["Reduced operational waste", "High talent retention & safety", "Accelerated execution & ROI"] : ["خفض الهدر الناتج عن التردد", "رفع سرعة الإنتاجية والتنفيذ", "استدامة الكفاءات والقدرة التنافسية"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-24 px-6 flex flex-col items-center text-center space-y-10">
        <HeroBackgroundIllustration />
        <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#DF716A]/10 border border-[#DF716A]/20 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#DF716A]"
          >
            {t('landing.platform')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col mb-6 font-display ${language === 'ar' ? 'leading-[1.4] py-2' : 'leading-[1.15]'}`}
          >
             <span className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-slate-600 mb-3 sm:mb-5">
               {t('landing.hero.title1')}
             </span>
             <span className={`font-bold tracking-tighter text-[#DF716A] ${
               language === 'ar' 
                 ? 'text-[22px] min-[390px]:text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[76px]' 
                 : 'text-2xl sm:text-4xl md:text-6xl lg:text-[88px]'
             }`}>
               {t('landing.hero.title2')}
             </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal text-balance"
          >
            {t('landing.hero.desc')}
          </motion.p>

          {/* Product Preview Section */}
          <motion.div
            id="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="w-full max-w-5xl mx-auto space-y-4 my-6"
          >
            {/* Intro Header above simulation */}
            <div className="text-center space-y-2 mt-16 sm:mt-24 mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0B121F] font-display tracking-tight">
                {t('landing.hero.preview.title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                {t('landing.hero.preview.subtitle')}
              </p>
            </div>

            {/* Mobile Responsive View Switcher (Hidden on Tablet and Desktop) */}
            <div className="flex md:hidden items-center justify-center p-1 bg-slate-100/90 rounded-2xl max-w-sm mx-auto mb-3 border border-slate-200/60 shadow-xs">
              <button
                type="button"
                onClick={() => setMobilePreviewTab('combined')}
                className={`flex-1 py-1.5 px-2.5 rounded-xl text-[0.7rem] font-bold transition-all text-center cursor-pointer ${
                  mobilePreviewTab === 'combined'
                    ? 'bg-white text-[#0B121F] shadow-xs'
                    : 'text-slate-500 hover:text-[#0B121F]'
                }`}
              >
                {language === 'ar' ? 'عرض متكامل' : language === 'en' ? 'Combined View' : 'Vue combinée'}
              </button>
              <button
                type="button"
                onClick={() => setMobilePreviewTab('score')}
                className={`flex-1 py-1.5 px-2.5 rounded-xl text-[0.7rem] font-bold transition-all text-center cursor-pointer ${
                  mobilePreviewTab === 'score'
                    ? 'bg-white text-[#0B121F] shadow-xs'
                    : 'text-slate-500 hover:text-[#0B121F]'
                }`}
              >
                {language === 'ar' ? 'التقييم (49)' : language === 'en' ? 'Score (49)' : 'Score (49)'}
              </button>
              <button
                type="button"
                onClick={() => setMobilePreviewTab('modules')}
                className={`flex-1 py-1.5 px-2.5 rounded-xl text-[0.7rem] font-bold transition-all text-center cursor-pointer ${
                  mobilePreviewTab === 'modules'
                    ? 'bg-white text-[#0B121F] shadow-xs'
                    : 'text-slate-500 hover:text-[#0B121F]'
                }`}
              >
                {language === 'ar' ? 'الأبعاد (6)' : language === 'en' ? '6 Modules' : '6 Modules'}
              </button>
            </div>

            {/* Simulated Report Preview matching exact Diagnostic UI components without container stroke or shadow */}
            <div className={`relative text-start overflow-hidden transition-all duration-300 ${
              mobilePreviewTab === 'combined'
                ? 'max-h-[660px] sm:max-h-[700px] md:max-h-[520px] lg:max-h-[540px]'
                : 'max-h-[480px] md:max-h-[520px] lg:max-h-[540px]'
            }`}>
              
              {/* Report Body Reproducing Exact Diagnostic UI Components from ReportView */}
              <div className="p-2 sm:p-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                  
                  {/* 1. Main Score Card (Prominent Executive Gauge Card - md:col-span-5) */}
                  <div className={`md:col-span-5 rounded-3xl bg-white p-4 sm:p-6 md:p-6 lg:p-8 border border-slate-200 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] flex-col justify-between relative overflow-hidden text-center min-h-0 md:min-h-[480px] lg:min-h-[520px] ${
                    mobilePreviewTab === 'modules' ? 'hidden md:flex' : 'flex'
                  }`}>
                    <div>
                      <div className="flex justify-center mb-2.5 sm:mb-4">
                        <span className="text-[0.65rem] font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase text-slate-400 bg-slate-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-100">
                          {language === 'ar' ? 'التقييم الإجمالي' : language === 'en' ? 'Global Assessment' : 'Évaluation globale'}
                        </span>
                      </div>

                      {/* Circle Gauge */}
                      <div className="relative flex items-center justify-center my-1.5 sm:my-3 md:my-4">
                        <svg className="h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 -rotate-90" viewBox="0 0 240 240">
                          <circle cx="120" cy="120" r="100" stroke="#F1F5F9" strokeWidth="16" fill="transparent" />
                          <motion.circle 
                            cx="120" cy="120" r="100" 
                            stroke="#E11D48" 
                            strokeWidth="16" 
                            fill="transparent" 
                            strokeDasharray="628" 
                            initial={{ strokeDashoffset: 628 }}
                            animate={{ strokeDashoffset: 628 - (628 * 49) / 100 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            strokeLinecap="round" 
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center text-center">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-rose-600 font-display">
                              49
                            </span>
                            <span className="text-base sm:text-lg md:text-xl font-bold text-slate-400 ms-1">/100</span>
                          </div>
                          
                          {/* Dynamic Status Badge */}
                          <span className="mt-1.5 sm:mt-2.5 px-3 py-1 rounded-full text-[0.65rem] sm:text-xs font-black uppercase tracking-wider border shadow-xs bg-rose-50 border-rose-200 text-rose-700">
                            {language === 'ar' ? 'يتطلب تدخلاً' : language === 'en' ? 'Requires Intervention' : 'Intervention requise'}
                          </span>
                        </div>
                      </div>

                      {/* Label & Micro-interpretation */}
                      <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-3 px-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0B121F] tracking-tight">
                          {language === 'ar' ? 'مؤشر الصحة التنظيمية' : language === 'en' ? 'Organizational Health Index' : 'Indice de santé organisationnelle'}
                        </h3>
                        <p className="text-[0.75rem] sm:text-xs md:text-sm text-slate-600 font-medium leading-relaxed max-w-xs mx-auto">
                          {language === 'ar' 
                            ? 'يعكس هذا المؤشر وجود تحديات تنظيمية تستحق اهتمامًا وأولوية في المعالجة.' 
                            : language === 'en' 
                            ? 'This index reflects organizational challenges that warrant attention and priority in resolution.' 
                            : 'Cet indice reflète des défis organisationnels qui méritent une attention et une priorité d\'action.'}
                        </p>
                      </div>
                    </div>

                    {/* Performance Zone Explanation Box */}
                    <div className="mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-2xl border text-start transition-all bg-rose-50/80 border-rose-200 text-rose-950">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="text-xs font-black uppercase tracking-wider">
                          {language === 'ar' ? 'يتطلب تدخلاً' : language === 'en' ? 'Requires Intervention' : 'Intervention requise'}
                        </span>
                      </div>
                      <p className="text-[0.7rem] sm:text-[0.75rem] leading-relaxed font-medium opacity-90">
                        {language === 'ar' 
                          ? 'تعكس هذه المنطقة وجود تحديات مؤثرة قد تحد من كفاءة المنظمة، وينصح بالبدء في معالجة الأولويات بشكل تدريجي.' 
                          : language === 'en' 
                          ? 'This zone reflects impactful challenges that may limit organizational efficiency; addressing priorities step-by-step is recommended.' 
                          : 'Cette zone traduit des défis importants pouvant limiter l\'efficacité; il est conseillé de traiter progressivement les priorités.'}
                      </p>
                    </div>

                    {/* Quick navigation pill on mobile when in score mode */}
                    {mobilePreviewTab === 'score' && (
                      <button
                        type="button"
                        onClick={() => setMobilePreviewTab('modules')}
                        className="md:hidden mt-3 w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-xs font-bold text-[#0B121F] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{language === 'ar' ? 'عرض تحليل الأبعاد (6 وحدات) ←' : language === 'en' ? 'View 6 dimensional modules →' : 'Voir l\'analyse par module (6 dimensions) →'}</span>
                      </button>
                    )}
                  </div>

                  {/* 2. Unified Dimension Performance Card (md:col-span-7) */}
                  <div className={`md:col-span-7 rounded-3xl bg-white p-4 sm:p-6 md:p-6 lg:p-8 border border-slate-200 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] flex-col justify-between min-h-0 md:min-h-[480px] lg:min-h-[520px] ${
                    mobilePreviewTab === 'score' ? 'hidden md:flex' : 'flex'
                  }`}>
                    <div>
                      <header className="mb-4 sm:mb-6 md:mb-6 lg:mb-8 pb-3 sm:pb-4 md:pb-5 border-b border-slate-100 space-y-2.5 sm:space-y-3.5 text-start">
                        {/* Line 1: Detailed Dimensional Analysis - Performance by Module */}
                        <div className="flex flex-wrap items-center gap-2 text-[#0B121F]">
                          <span className="text-[0.65rem] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 uppercase">
                            {language === 'ar' ? 'تحليل مفصل الأبعاد' : language === 'en' ? 'Detailed Dimensional Analysis' : 'Analyse Détaillée'}
                          </span>
                          <span className="text-slate-300 font-bold hidden sm:inline">•</span>
                          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-[#0B121F] tracking-tight">
                            {language === 'ar' ? 'الأداء حسب الوحدة' : language === 'en' ? 'Performance by Module' : 'Performance par Module'}
                          </span>
                        </div>

                        {/* Line 2: Color Indicators */}
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 md:gap-5 text-[0.65rem] sm:text-xs font-bold text-slate-600 pt-1">
                          <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{language === 'ar' ? 'أداء قوي' : language === 'en' ? 'Strong Performance' : 'Performance solide'}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                            <span>{language === 'ar' ? 'يحتاج إلى تحسين' : language === 'en' ? 'Needs Improvement' : 'À améliorer'}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                            <span>{language === 'ar' ? 'يتطلب تدخلاً' : language === 'en' ? 'Requires Intervention' : 'Intervention requise'}</span>
                          </div>
                        </div>
                      </header>

                      {/* 6 Module Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-3 lg:gap-4">
                        {[
                          {
                            tag: 'M1',
                            score: 63,
                            name: { ar: 'القيادة والتوجه', en: 'Leadership & Direction', fr: 'Leadership & Direction' }
                          },
                          {
                            tag: 'M2',
                            score: 50,
                            name: { ar: 'تدفق الاتصالات', en: 'Communication Flow', fr: 'Flux de Communication' }
                          },
                          {
                            tag: 'M3',
                            score: 50,
                            name: { ar: 'عبء العمل والضغط', en: 'Workload & Pressure', fr: 'Charge & Pression' }
                          },
                          {
                            tag: 'M4',
                            score: 63,
                            name: { ar: 'وضوح الأدوار', en: 'Role Clarity', fr: 'Clarté des Rôles' }
                          },
                          {
                            tag: 'M5',
                            score: 25,
                            name: { ar: 'التعاون والثقة', en: 'Collaboration & Trust', fr: 'Collaboration & Confiance' }
                          },
                          {
                            tag: 'M6',
                            score: 40,
                            name: { ar: 'سرعة القرار', en: 'Decision Velocity', fr: 'Vitesse Décisionnelle' }
                          }
                        ].map((m, idx) => {
                          const score = m.score;
                          const barColorClass = score < 50 ? 'bg-rose-500' : score < 75 ? 'bg-amber-500' : 'bg-emerald-500';
                          const badgeBg = score < 50 ? 'bg-rose-50 text-rose-700' : score < 75 ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700';

                          return (
                            <div key={m.tag} className="p-3 sm:p-3.5 md:p-3 lg:p-3.5 rounded-2xl bg-slate-50/60 border border-slate-100 flex flex-col justify-between space-y-2 sm:space-y-2.5">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <span className="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                                    {m.tag}
                                  </span>
                                  <span className="text-xs font-bold text-[#0B121F]">
                                    {m.name[language]}
                                  </span>
                                </div>
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-tight ${badgeBg}`}>
                                  {score}%
                                </span>
                              </div>
                              
                              <div className="relative h-2 sm:h-2.5 w-full rounded-full bg-slate-200/60 overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${score}%` }}
                                  transition={{ duration: 1.5, delay: idx * 0.1, ease: "circOut" }}
                                  className={`h-full rounded-full ${barColorClass}`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Quick navigation pill on mobile when in modules mode */}
                      {mobilePreviewTab === 'modules' && (
                        <button
                          type="button"
                          onClick={() => setMobilePreviewTab('score')}
                          className="md:hidden mt-3 w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-xs font-bold text-[#0B121F] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>{language === 'ar' ? '← العودة للتقييم الإجمالي' : language === 'en' ? '← Back to global assessment' : '← Revenir à l\'évaluation globale'}</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>

              </div>

              {/* Clean Dissolution Fade-Out Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-40 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <button 
              onClick={onStart}
              className="w-full sm:w-auto px-8 sm:px-10 py-4.5 rounded-full bg-[#0B121F] text-white font-bold text-sm sm:text-base hover:bg-[#DF716A] hover:text-[#0B121F] transition-all hover:scale-[1.02] shadow-xl shadow-slate-300 inline-flex items-center justify-center whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{t('landing.hero.cta1')}</span>
            </button>
            <button 
              onClick={onViewMethod}
              className="w-full sm:w-auto px-8 sm:px-10 py-4.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 text-[#0B121F] font-bold text-sm sm:text-base hover:bg-white transition-all font-sans shadow-xs inline-flex items-center justify-center whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{t('landing.hero.cta2')}</span>
            </button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Diagnostic Center Section */}
        <section id="diagnostics" className="py-16 bg-slate-100/50 rounded-2xl px-8 md:px-12 border border-slate-200">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[0.65rem] font-bold tracking-[0.3em] text-[#DF716A]">{t('landing.diag.title')}</h2>
            <h3 className="text-3xl font-medium text-[#0B121F] tracking-tighter font-display">
              {t('landing.diag.subtitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {diagnosticCards.map((card) => (
              <div
                key={card.title}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#DF716A]/40 hover:shadow-xl transition-all flex flex-col justify-between text-start relative overflow-hidden"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-colors shrink-0 shadow-sm ${card.title === 'Airless Room' ? 'bg-[#DF716A]/10 text-[#DF716A] border-[#DF716A]/30' : card.color}`}>
                      <card.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-[#0B121F] tracking-tight leading-tight">{card.title}</h3>
                        {card.title === "Airless Room" ? (
                          <span className="text-[9px] font-bold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full shrink-0">
                            {t('status.available')}
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold uppercase text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full shrink-0">
                            {t('status.soon')}
                          </span>
                        )}
                      </div>
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#DF716A] block mt-0.5">
                        {card.title === "Airless Room" 
                          ? (language === 'ar' ? 'تشخيص البيئة العامة والانسداد' : language === 'en' ? 'Environment & Alignment' : 'Diagnostic Environnement & Alignement')
                          : card.title === "Burnout Barometer" 
                          ? (language === 'ar' ? 'قياس الإجهاد القيادي والإنهاك' : language === 'en' ? 'Leadership Stress & Energy' : 'Diagnostic Énergie & Charge Mentale')
                          : card.title === "Chaos Tax Calculator"
                          ? (language === 'ar' ? 'احتساب هدر القرارات والفوضى' : language === 'en' ? 'Decision Drag & Financial Waste' : 'Calculateur Coût de l\'Inefficacité')
                          : (language === 'ar' ? 'خريطة تسرب الكفاءات والإنتاجية' : language === 'en' ? 'Value & Engagement Leaks' : 'Cartographie Fuites de Valeur')}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium pt-1">{card.description}</p>
                </div>
                
                <button 
                  onClick={
                    card.title === "Airless Room" 
                      ? onViewAirlessRoom 
                      : card.title === "Burnout Barometer" 
                      ? onViewBurnoutBarometer 
                      : card.title === "Chaos Tax Calculator"
                      ? onViewChaosTaxCalculator
                      : onViewOxygenLeakMap
                  }
                  className="mt-8 px-6 py-3.5 rounded-xl text-xs font-bold uppercase transition-all tracking-wider bg-white border border-slate-300 text-black hover:bg-[#DF716A] hover:border-[#DF716A] hover:text-white w-full text-center shadow-xs cursor-pointer inline-flex items-center justify-center gap-2 shrink-0 active:scale-98"
                >
                  <span>{card.cta}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section: مسار التحول التنظيمي الشامل */}
        <section className="py-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {/* Section Header */}
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DF716A]/10 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#DF716A] border border-[#DF716A]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#DF716A]" />
              <span>
                {language === 'ar' 
                  ? 'مسار التحول التنظيمي الشامل' 
                  : language === 'en' 
                  ? 'TRANSFORMATION JOURNEY' 
                  : 'PARCOURS DE TRANSFORMATION'}
              </span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B121F] tracking-tight font-display">
              {language === 'ar' 
                ? 'رحلتك للتحول في 3 خطوات بسيطة' 
                : language === 'en' 
                ? 'Your Transformation Journey in 3 Simple Steps' 
                : 'Votre parcours de transformation en 3 étapes simples'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              {language === 'ar'
                ? 'مسار واضح ومباشر ينقلك من فهم المشكلات الهيكلية إلى التنفيذ والتطوير القيادي المستمر.'
                : language === 'en'
                ? 'A clear, direct path guiding you from root cause diagnosis to execution and leadership growth.'
                : 'Un parcours simple et direct pour passer du diagnostic à l\'action et au développement continu.'}
            </p>
          </div>

          {/* 3 Identical, Spacious, Simple Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Card 1: Understand / افهم */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#DF716A]/40 hover:shadow-md transition-all duration-300 text-start flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <span className="text-[0.7rem] font-extrabold uppercase tracking-widest text-[#DF716A] bg-[#DF716A]/10 px-3 py-1 rounded-full">
                    {language === 'ar' ? 'افهم' : language === 'en' ? 'Understand' : 'Comprendre'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B121F] tracking-tight">
                  {language === 'ar' ? 'التقرير الذكي' : language === 'en' ? 'Smart AI Report' : 'Le Rapport IA'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {language === 'ar'
                    ? 'شخّص صحة مؤسستك، وافهم الاختناقات والأسباب التي تؤثر على الأداء واتخاذ القرار.'
                    : language === 'en'
                    ? 'Diagnose your company\'s operational health and uncover bottlenecks and root causes affecting performance and decision-making.'
                    : 'Diagnostiquez la santé de votre organisation, et comprenez les goulots d\'étranglement et causes profondes qui impactent la performance.'}
                </p>
              </div>
            </div>

            {/* Card 2: Act / تحرك */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs hover:border-indigo-500/40 hover:shadow-md transition-all duration-300 text-start flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <span className="text-[0.7rem] font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {language === 'ar' ? 'تحرك' : language === 'en' ? 'Act' : 'Agir'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B121F] tracking-tight">
                  {language === 'ar' ? 'خارطة الطريق الموجهة' : language === 'en' ? 'Action Roadmap' : 'Feuille de Route'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {language === 'ar'
                    ? 'حوّل نتائج التشخيص إلى أولويات واضحة وخطوات عملية تساعدك على تحقيق أثر سريع ومستدام.'
                    : language === 'en'
                    ? 'Turn diagnostic insights into clear priorities and actionable steps that drive immediate and lasting impact.'
                    : 'Transformez les résultats du diagnostic en priorités claires et actions concrètes pour un impact rapide et durable.'}
                </p>
              </div>
            </div>

            {/* Card 3: Learn / تعلّم */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 text-start flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-start">
                  <span className="text-[0.7rem] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {language === 'ar' ? 'تعلّم' : language === 'en' ? 'Learn' : 'Apprendre'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B121F] tracking-tight">
                  {language === 'ar' ? 'مسار التعلم الذكي' : language === 'en' ? 'Smart Learning Path' : 'Parcours d\'Apprentissage'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {language === 'ar'
                    ? 'طوّر مهاراتك القيادية من خلال رحلة تعلم مخصصة مرتبطة بنتائج تشخيصك.'
                    : language === 'en'
                    ? 'Develop your leadership skills through a tailored learning journey directly connected to your diagnostic results.'
                    : 'Développez vos compétences de leadership grâce à un parcours d\'apprentissage personnalisé lié à votre diagnostic.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Playbook & Task Lists Execution Section */}
        <section className="py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div className="bg-[#0B121F] text-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden space-y-8">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#DF716A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="text-center space-y-3 relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DF716A]/20 border border-[#DF716A]/30 text-[#DF716A] text-[0.65rem] font-black uppercase tracking-widest">
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  {language === 'ar' 
                    ? 'التحول العملي: من التشخيص إلى التنفيذ' 
                    : language === 'en' 
                    ? 'EXECUTION ENGINE: PLAYBOOK & TASK LISTS' 
                    : 'DU DIAGNOSTIC À L\'EXÉCUTION'}
                </span>
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display leading-tight">
                {language === 'ar'
                  ? 'دليل العمل وقوائم المهام للتحول التنظيمي'
                  : language === 'en'
                  ? 'Actionable Playbook & Operational Task Lists'
                  : 'Le Playbook & Les Task Lists d\'Exécution'}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                {language === 'ar'
                  ? 'لا يكتفي تنفّس بتحديد مواضع الخلل؛ بل يقدم مع كل تشخيص دليل عمل تفصيلي (Playbook) وقوائم مهام وإجراءات عمليّة جاهزة للتنفيذ المباشر من قبل قيادتك وفرقك.'
                  : language === 'en'
                  ? 'Tanaffas goes beyond identifying bottlenecks: every diagnostic generates a tailored execution Playbook and task lists ready for immediate team deployment.'
                  : 'Tanaffas ne se contente pas de mesurer les écarts : chaque diagnostic débloque un Playbook sur mesure et des listes de tâches directement exécutables.'}
              </p>
            </div>

            {/* 2 Main Feature Pillar Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
              {/* Pillar 1: Playbook */}
              <div className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#DF716A]/20 text-[#DF716A] border border-[#DF716A]/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      {language === 'ar' ? 'إجراءات وقواعد' : language === 'en' ? 'Procedures & Rules' : 'Procédures & Règles'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#DF716A] transition-colors">
                      {language === 'ar' ? 'دليل العمل القيادي (Playbook)' : language === 'en' ? 'Operational Playbook' : 'Le Playbook Opérationnel'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium leading-relaxed">
                      {language === 'ar'
                        ? 'إرشادات وقواعد عمل مصممة وفق سياقك لمعالجة أسباب الانسداد واستعادة التناغم.'
                        : language === 'en'
                        ? 'Tailored procedure guidelines designed to eliminate organizational drag and realign leadership.'
                        : 'Guide d\'action personnalisé pour traiter la cause racine des blocages et restaurer l\'alignement.'}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DF716A] shrink-0 mt-0.5" />
                      <span>
                        {language === 'ar' ? 'إجراءات تشغيلية موحدة خطوة بخطوة' : language === 'en' ? 'Step-by-step standardized operational procedures' : 'Procédures opérationnelles guidées pas-à-pas'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DF716A] shrink-0 mt-0.5" />
                      <span>
                        {language === 'ar' ? 'تحديد السلوكيات والمهارات القيادية المفتاحية' : language === 'en' ? 'Key leadership habits & team alignment rituals' : 'Postures de leadership & rituels d\'alignement'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DF716A] shrink-0 mt-0.5" />
                      <span>
                        {language === 'ar' ? 'مؤشرات أداء قابلة للقياس المستمر (KPIs)' : language === 'en' ? 'Trackable organizational health KPIs' : 'Indicateurs clés (KPIs) pour mesurer le progrès'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2: Actionable Task Lists */}
              <div className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <ListTodo className="w-5 h-5" />
                    </div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      {language === 'ar' ? 'قوائم مهام الميدان' : language === 'en' ? 'Field Task Lists' : 'Listes de Tâches'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {language === 'ar' ? 'قوائم المهام وخطط الإنجاز' : language === 'en' ? 'Actionable Task Lists' : 'Task Lists & Plan d\'Action'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium leading-relaxed">
                      {language === 'ar'
                        ? 'مهام واضحة ومحددة زمنيًا لتمكين الفِرَق وتتبع تقدم الخطط التشغيلية بدقة.'
                        : language === 'en'
                        ? 'Time-bound, high-priority tasks allowing teams to execute and track progress seamlessly.'
                        : 'Plan d\'action structuré en tâches claires pour mobiliser les équipes et suivre le progrès.'}
                    </p>
                  </div>

                  {/* Simulated Task Preview Box inside Pillar 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-[#DF716A] font-bold text-[0.7rem] uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'نموذج من قائمة المهام الميدانية' : language === 'en' ? 'Sample Task List Items' : 'Exemple de Task List'}</span>
                    </div>

                    <div className="space-y-1.5 text-slate-300 font-medium pt-1">
                      <div className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-slate-800">
                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="line-through text-slate-400 text-[0.75rem]">
                          {language === 'ar' ? '72 ساعة: إلغاء لجان المصادقة الثلاثية وتفويض الصلاحيات' : language === 'en' ? '72h: Reset 3-tier validation & delegate authority' : '72h : Supprimer la double validation & déléguer'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-slate-800">
                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-[0.75rem]">
                          {language === 'ar' ? '15 يوم: اعتماد ميثاق التنسيق الداخلي والحد من الاجتماعات' : language === 'en' ? '15d: Establish internal SLA charter & prune syncs' : '15j : Valider la charte SLA inter-services'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-slate-800">
                        <div className="w-4 h-4 rounded border border-slate-600 shrink-0" />
                        <span className="text-[0.75rem] text-slate-300">
                          {language === 'ar' ? '30 يوم: تعميم دليل العمل المرجعي ومراجعة مؤشرات الأثر' : language === 'en' ? '30d: Scale Playbook guidelines across all departments' : '30j : Généraliser le Playbook Tanaffas'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="pt-2 text-center relative z-10">
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#DF716A] hover:bg-[#d65f58] text-black font-extrabold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              >
                <span>
                  {language === 'ar' 
                    ? 'ابدأ التشخيص واحصل على دليل عملك (Playbook)' 
                    : language === 'en' 
                    ? 'Start Diagnostic & Get Your Custom Playbook' 
                    : 'Lancer le diagnostic et obtenir mon Playbook'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* New Guided Roadmap Product Preview Section: خارطة الطريق الموجهة */}
        <section className="py-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#DF716A]/10 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#DF716A]">
              {language === 'ar' ? 'معاينة خطة التنفيذ الموجهة (3 مراحل)' : language === 'en' ? 'Execution Roadmap Preview (3 Tiers)' : 'Aperçu de la Feuille de Route (3 Paliers)'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B121F] tracking-tight font-display">
              {language === 'ar' ? 'خارطة الطريق الموجهة' : language === 'en' ? 'Guided Action Roadmap' : 'Feuille de Route Guidée'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              {language === 'ar' 
                ? 'معاينة استباقية لكيفية تحويل نتائج التشخيص إلى خطة تنفيذ عمليّة مقسّمة على 3 مراحل أولوية (عاجل 72 ساعة، قريب المدى 15 يوماً، ومؤطر 30 يوماً) لإعطائك فكرة واضحة عما سيقدمه التقرير النهائي لنشاطك.' 
                : language === 'en' 
                ? 'A live preview demonstrating how diagnostic findings are transformed into a 3-tier execution roadmap (72h urgent, 15d short-term, 30d medium-term), offering a direct foretaste of your full report.' 
                : 'Un aperçu en direct illustrant la conversion des résultats de diagnostic en un plan d\'exécution sur 3 paliers (72h urgent, 15j court terme, 30j moyen terme), offrant un avant-goût du rapport complet.'}
            </p>
          </div>

          {/* EXACT Dark Roadmap Card Component from ReportView with Dissolution Fade-Out Overlay */}
          <div className="relative text-start rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B121F] to-slate-950 p-4 sm:p-10 md:p-12 border border-slate-800 shadow-2xl overflow-hidden max-w-5xl mx-auto max-h-[460px] sm:max-h-[500px]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#DF716A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b border-slate-800/80 pb-4 sm:pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DF716A]/15 border border-[#DF716A]/30 text-[#DF716A] text-[0.6rem] sm:text-[0.65rem] font-black uppercase tracking-widest mb-2 sm:mb-3">
                    <Compass className="w-3.5 h-3.5" />
                    <span>
                      {language === 'ar' ? 'خارطة الطريق الموجهة (نموذج التقرير)' : language === 'en' ? 'PRIORITIZED ROADMAP (REPORT PREVIEW)' : 'FEUILLE DE ROUTE PRIORISÉE (APERÇU)'}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                    {language === 'ar' ? 'من أين تبدأ؟ (خطة عمل على 3 مراحل)' : language === 'en' ? 'Where to Start? (3-Tier Plan)' : 'Par où commencer ? (Plan en 3 paliers)'}
                  </h3>
                  <p className="text-[0.75rem] sm:text-xs md:text-sm text-slate-400 mt-1.5 sm:mt-2 font-medium max-w-2xl leading-relaxed">
                    {language === 'ar' 
                      ? 'لا يمكن للقيادة التنفيذية معالجة جميع الاختلالات دفعة واحدة. تهدف هذه الخارطة إلى توجيه التركيز القيادي نحو الإجراءات الأولى الأكثر أثراً وفق 3 أفق زمنية (72 ساعة، 15 يوماً، و30 يوماً).'
                      : language === 'en'
                      ? 'An executive cannot address all organizational bottlenecks simultaneously. Here is the 3-tier roadmap (72h, 15d, 30d) designed to trigger immediate momentum.'
                      : 'Un dirigeant ne peut pas tout traiter simultanément. Voici la feuille de route sur 3 paliers (72h, 15j, 30j) conçue pour réinjecter de l\'oxygène.'}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-slate-300 text-[0.7rem] sm:text-xs font-bold self-start md:self-auto">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DF716A]" />
                  <span>
                    {language === 'ar' ? '3 مراحل تنفيذية (72h / 15d / 30d)' : language === 'en' ? '3 Execution Tiers (72h / 15d / 30d)' : '3 Paliers (72h / 15j / 30j)'}
                  </span>
                </div>
              </div>

              {/* 3 Step Action Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pb-12">
                {/* Step 1: 72h Urgent */}
                <div className="bg-white/[0.04] border border-rose-500/30 rounded-2xl p-4 sm:p-6 relative flex flex-col justify-between space-y-4 sm:space-y-5 hover:bg-white/[0.06] transition-all">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-black text-xs sm:text-sm">
                        1
                      </span>
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider">
                        {language === 'ar' ? 'عاجل (72h)' : language === 'en' ? 'Urgent (72h)' : 'Urgent (72h)'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.6rem] sm:text-[0.65rem] font-black uppercase tracking-widest text-slate-400 block mb-0.5 sm:mb-1">
                        {language === 'ar' ? 'التعاون والثقة' : language === 'en' ? 'Collaboration & Trust' : 'Collaboration & Confiance'}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {language === 'ar' 
                          ? 'حل الاختناق الفوري وتفويض الصلاحيات' 
                          : language === 'en' 
                          ? 'Immediate Bottleneck Reset & Delegation' 
                          : 'Déblocage immédiat et délégation'}
                      </h4>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                      <div>
                        <strong className="text-rose-400 font-bold block mb-0.5 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wide">
                          {language === 'ar' ? 'الهدف الاستراتيجي' : language === 'en' ? 'Strategic Goal' : 'Objectif Stratégique'}
                        </strong>
                        <p className="text-slate-300 leading-relaxed font-medium text-[0.75rem] sm:text-xs">
                          {language === 'ar'
                            ? 'إزالة نقاط الاحتكاك المباشرة وتفويض صلاحيات الاستجابة السريعة للفرق الميدانية.'
                            : language === 'en'
                            ? 'Eliminate immediate operational drag and empower line management.'
                            : 'Supprimer les blocages directs et déléguer la validation opérationnelle.'}
                        </p>
                      </div>
                      <div className="pt-1 sm:pt-2">
                        <strong className="text-emerald-400 font-bold block mb-0.5 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wide">
                          {language === 'ar' ? 'الخطوة الأولى (24-48 ساعة)' : language === 'en' ? 'First Step (24-48h)' : 'Premier pas concret (24-48h)'}
                        </strong>
                        <p className="text-slate-300 leading-relaxed font-medium text-[0.75rem] sm:text-xs">
                          {language === 'ar' 
                            ? 'عقد اجتماع استثنائي لمدرائي القطاعات وإلغاء لجان المصادقة الثلاثية.' 
                            : language === 'en' 
                            ? 'Hold a 30-min alignment session to grant field validation authority.' 
                            : 'Organiser un point de 30 min avec les managers pour déléguer la validation.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[0.6rem] sm:text-[0.65rem] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5 text-rose-300">
                      <Zap className="w-3.5 h-3.5" />
                      {language === 'ar' ? 'تسريع الاستجابة بنسبة 45%' : language === 'en' ? '+45% execution speed' : 'Gain de 45% sur la vitesse'}
                    </span>
                  </div>
                </div>

                {/* Step 2: 15 Days Short Term */}
                <div className="bg-white/[0.04] border border-[#DF716A]/30 rounded-2xl p-4 sm:p-6 relative flex flex-col justify-between space-y-4 sm:space-y-5 hover:bg-white/[0.06] transition-all">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#DF716A]/20 text-[#DF716A] border border-[#DF716A]/30 flex items-center justify-center font-black text-xs sm:text-sm">
                        2
                      </span>
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#DF716A]/20 text-[#DF716A] border border-[#DF716A]/30 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider">
                        {language === 'ar' ? 'قريب المدى (15d)' : language === 'en' ? 'Short Term (15d)' : 'Court terme (15j)'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.6rem] sm:text-[0.65rem] font-black uppercase tracking-widest text-slate-400 block mb-0.5 sm:mb-1">
                        {language === 'ar' ? 'سرعة القرار' : language === 'en' ? 'Decision Velocity' : 'Vitesse Décisionnelle'}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {language === 'ar' 
                          ? 'إعادة هيكلة مسارات التنسيق وإلغاء الاجتماعات العقيمة' 
                          : language === 'en' 
                          ? 'Streamline Coordination & Status Syncs' 
                          : 'Fluidification du pilotage et réunions'}
                      </h4>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                      <div>
                        <strong className="text-[#DF716A] font-bold block mb-0.5 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wide">
                          {language === 'ar' ? 'الهدف الهيكلي' : language === 'en' ? 'Structural Goal' : 'Objectif Structurant'}
                        </strong>
                        <p className="text-slate-300 leading-relaxed font-medium text-[0.75rem] sm:text-xs">
                          {language === 'ar'
                            ? 'توضيح قنوات التنسيق والمسؤوليات المتقاطعة للحد من التداخل والازدواجية.'
                            : language === 'en'
                            ? 'Sharpen accountabilities and eliminate redundant operational handoffs.'
                            : 'Clarifier les périmètres et supprimer les doubles validations.'}
                        </p>
                      </div>
                      <div className="pt-1 sm:pt-2">
                        <strong className="text-emerald-400 font-bold block mb-0.5 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wide">
                          {language === 'ar' ? 'الخطوة الأولى (24-48 ساعة)' : language === 'en' ? 'First Step (24-48h)' : 'Premier pas concret (24-48h)'}
                        </strong>
                        <p className="text-slate-300 leading-relaxed font-medium text-[0.75rem] sm:text-xs">
                          {language === 'ar' 
                            ? 'صياغة ميثاق الخدمة المتبادلة (SLA) وحذف اجتماعات المتابعة الروتينية.' 
                            : language === 'en' 
                            ? 'Draft internal SLA charter between departments and prune status syncs.' 
                            : 'Rédiger une charte SLA inter-services et supprimer les réunions inutiles.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[0.6rem] sm:text-[0.65rem] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5 text-[#DF716A]">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {language === 'ar' ? 'تحسين التنسيق بنسبة 35%' : language === 'en' ? '+35% coordination efficiency' : 'Amélioration de 35% de la synergie'}
                    </span>
                  </div>
                </div>

                {/* Step 3: 30 Days Medium Term */}
                <div className="bg-white/[0.04] border border-emerald-500/30 rounded-2xl p-4 sm:p-6 relative flex flex-col justify-between space-y-4 sm:space-y-5 hover:bg-white/[0.06] transition-all">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-xs sm:text-sm">
                        3
                      </span>
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider">
                        {language === 'ar' ? 'متوسط المدى (30d)' : language === 'en' ? 'Medium Term (30d)' : 'Moyen terme (30j)'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.6rem] sm:text-[0.65rem] font-black uppercase tracking-widest text-slate-400 block mb-0.5 sm:mb-1">
                        {language === 'ar' ? 'القيادة والتوجه' : language === 'en' ? 'Leadership & Direction' : 'Leadership & Direction'}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {language === 'ar' 
                          ? 'استثمار ركيزة القوة وتعميم أدلة العمل المرجعية' 
                          : language === 'en' 
                          ? 'Leverage Benchmark Strengths Enterprise-Wide' 
                          : 'Valorisation et généralisation du modèle'}
                      </h4>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                      <div>
                        <strong className="text-emerald-400 font-bold block mb-0.5 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wide">
                          {language === 'ar' ? 'هدف التوسع والتطوير' : language === 'en' ? 'Scaling Goal' : 'Objectif de Mise à l\'Échelle'}
                        </strong>
                        <p className="text-slate-300 leading-relaxed font-medium text-[0.75rem] sm:text-xs">
                          {language === 'ar'
                            ? 'نقل الممارسات الناجحة وتعميم أدلة العمل المرجعية على كافة القطاعات.'
                            : language === 'en'
                            ? 'Codify internal best practices and scale proven leadership frameworks.'
                            : 'Formaliser les bonnes pratiques et les diffuser aux autres piliers.'}
                        </p>
                      </div>
                      <div className="pt-1 sm:pt-2">
                        <strong className="text-emerald-400 font-bold block mb-0.5 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wide">
                          {language === 'ar' ? 'الخطوة الأولى (24-48 ساعة)' : language === 'en' ? 'First Step (24-48h)' : 'Premier pas concret (24-48h)'}
                        </strong>
                        <p className="text-slate-300 leading-relaxed font-medium text-[0.75rem] sm:text-xs">
                          {language === 'ar' 
                            ? 'توثيق الممارسات المرجعية في دليل عمل موحد ونشره لكافة قادة القطاعات.' 
                            : language === 'en' 
                            ? 'Publish leadership best practice playbook across department heads.' 
                            : 'Publier le guide de référence de leadership aux responsables.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[0.6rem] sm:text-[0.65rem] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      {language === 'ar' ? 'استدامة الأثر وتعميم التميز' : language === 'en' ? 'Sustained organizational excellence' : 'Excellence opérationnelle durable'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smooth Dissolution Fade-Out Overlay over the Dark Card Container */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-[#0B121F] via-[#0B121F]/90 to-transparent pointer-events-none z-10" />

          </div>
        </section>

        {/* Section 3: مسار التعلم الذكي (Apprendre / Learn) */}
        <section className="py-8 space-y-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {/* Section Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-emerald-600 border border-emerald-500/20">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {language === 'ar' 
                  ? 'الخطوة 3: المرافقة والتطوير المستمر (تعلّم)' 
                  : language === 'en' 
                  ? 'Step 3: Continuous Executive Growth (Learn)' 
                  : 'Étape 3 : Accompagnement & Développement (Apprendre)'}
              </span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B121F] tracking-tight font-display">
              {language === 'ar' ? 'مسار التعلم الذكي' : language === 'en' ? 'Smart Personalized Learning Path' : 'Parcours d\'Apprentissage Intelligent'}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-medium leading-relaxed">
              {language === 'ar'
                ? 'بعد تحديد المشكلات واستلام خارطة الطريق، يواصل تنفّس مرافقتك أسبوعاً بأسبوع وخطوة بخطوة من خلال مسار تعلم مخصص وموجه وفق نتائج تشخيصك لضمان التحول المستدام لمؤسستك.'
                : language === 'en'
                ? 'After diagnosing bottlenecks and receiving your action roadmap, Tanaffas continuously accompanies you week by week with a personalized learning path tailored to your diagnostic results.'
                : 'Après avoir identifié les blocages et reçu votre feuille de route, Tanaffas continue de vous accompagner semaine après semaine grâce à un parcours d\'apprentissage personnalisé et ciblé selon votre diagnostic.'}
            </p>

            {/* Discrete Notice: Learning path coming soon + tailored content available today */}
            <div className="pt-2 w-full max-w-5xl mx-auto">
              <div className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-slate-100/90 border border-slate-200/80 text-slate-600 text-xs sm:text-sm font-medium text-center leading-relaxed shadow-xs">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'سيكون مسار التعلم الذكي متاحاً قريباً. حالياً، يوصي تنفّس بمحتوى معرفي مخصص لمساعدتك على تنفيذ التوصيات والاستعداد للمسار الكامل.'
                    : language === 'en'
                    ? 'The Smart Learning Path will be available soon. Currently, Tanaffas recommends tailored knowledge content to help you execute recommendations and prepare for the full path.'
                    : 'Le parcours d\'apprentissage intelligent sera bientôt disponible. Actuellement, Tanaffas recommande du contenu personnalisé pour vous aider à appliquer les recommandations et vous préparer au parcours complet.'}
                </span>
              </div>
            </div>
          </div>

          {/* Product Preview Simulation Component for Insights / Smart Learning Path */}
          <div className="relative text-start rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B121F] to-slate-950 p-4 sm:p-8 md:p-10 border border-slate-800 shadow-2xl overflow-hidden max-w-5xl mx-auto max-h-[500px] sm:max-h-[540px]">
            {/* Ambient lighting effects */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DF716A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Simulation Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div className="space-y-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-300 text-[0.65rem] sm:text-xs font-semibold">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>
                        {language === 'ar' ? 'معاينة — مثال توضيحي' : language === 'en' ? 'Preview — Illustrative example' : 'Aperçu — Exemple illustratif'}
                      </span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {language === 'ar' ? 'مسار تطوير الكفاءات القيادية والتنفيذية' : language === 'en' ? 'Executive Leadership Mastery Path' : 'Parcours de Maîtrise du Leadership'}
                  </h3>
                </div>

                {/* Overall Progress Tracker Pill */}
                <div className="shrink-0 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-start space-y-2 self-start md:self-auto min-w-[220px]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-bold flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>{language === 'ar' ? 'تقدمك في المسار' : language === 'en' ? 'Overall Progress' : 'Votre progression'}</span>
                    </span>
                    <span className="text-emerald-400 font-black text-sm">42%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[42%]" />
                  </div>
                  <div className="text-[0.65rem] text-slate-400 font-medium flex justify-between">
                    <span>{language === 'ar' ? '3 كفاءات مُكتسبة' : language === 'en' ? '3 competencies acquired' : '3 compétences développées'}</span>
                    <span>{language === 'ar' ? '7 متبقية' : language === 'en' ? '7 remaining' : '7 restantes'}</span>
                  </div>
                </div>
              </div>

              {/* 3 Skill / Competency Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
                {/* Card 1: En Cours / In Progress (72%) */}
                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition-all group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[0.6rem] font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{language === 'ar' ? 'في طور التعلم (72%)' : language === 'en' ? 'In Progress (72%)' : 'En cours (72%)'}</span>
                      </span>
                      <span className="text-slate-400 text-[0.65rem] font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>12 min</span>
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                        {language === 'ar' ? 'اتخاذ القرارات بسرعة وكفاءة' : language === 'en' ? 'Accelerate Decision Velocity' : 'Prendre des décisions plus rapidement'}
                      </h4>
                      <p className="text-[0.7rem] text-slate-400 mt-1 font-medium leading-relaxed line-clamp-2">
                        {language === 'ar' ? 'تفويض الصلاحيات الروتينية وإلغاء اختناق اللجان الثلاثية.' : language === 'en' ? 'Eliminating decision bottlenecks & delegating routine choices.' : 'Éliminer les goulots d\'étranglement décisionnels et déléguer.'}
                      </p>
                    </div>

                    {/* Formats Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-700">
                        <FileText className="w-3 h-3 text-blue-400" />
                        <span>{language === 'ar' ? 'مقالة' : language === 'en' ? 'Article' : 'Article'}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-700">
                        <Video className="w-3 h-3 text-rose-400" />
                        <span>{language === 'ar' ? 'فيديو' : language === 'en' ? 'Video' : 'Vidéo'}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-700">
                        <CheckSquare className="w-3 h-3 text-emerald-400" />
                        <span>{language === 'ar' ? 'قائمة تحقق' : language === 'en' ? 'Checklist' : 'Checklist'}</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[0.65rem] font-bold text-emerald-400">
                    <span>{language === 'ar' ? 'تابع التعلم ←' : language === 'en' ? 'Continue Path →' : 'Continuer →'}</span>
                    <span className="text-slate-500 font-mono">01/03</span>
                  </div>
                </div>

                {/* Card 2: Recommandé aujourd'hui / Recommended Today */}
                <div className="bg-slate-900/90 border border-[#DF716A]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-[#DF716A] transition-all group relative">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-[#DF716A]/20 text-[#DF716A] border border-[#DF716A]/30 text-[0.6rem] font-extrabold uppercase tracking-wider">
                        {language === 'ar' ? 'موصى به اليوم' : language === 'en' ? 'Recommended Today' : 'Recommandé aujourd\'hui'}
                      </span>
                      <span className="text-slate-400 text-[0.65rem] font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>18 min</span>
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#DF716A] transition-colors leading-snug">
                        {language === 'ar' ? 'تقليص الاجتماعات غير المجدية' : language === 'en' ? 'Prune Unnecessary Meetings' : 'Réduire les réunions inutiles'}
                      </h4>
                      <p className="text-[0.7rem] text-slate-400 mt-1 font-medium leading-relaxed line-clamp-2">
                        {language === 'ar' ? 'تحويل المتابعة الروتينية إلى مذكرات مكتوبة وتحديد المسؤوليات.' : language === 'en' ? 'Replacing routine status syncs with async memos and clear DRIs.' : 'Remplacer les réunions par des notes écrites synthétiques.'}
                      </p>
                    </div>

                    {/* Formats Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-700">
                        <Workflow className="w-3 h-3 text-amber-400" />
                        <span>{language === 'ar' ? 'إطار عمل' : language === 'en' ? 'Framework' : 'Framework'}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-700">
                        <BookOpen className="w-3 h-3 text-indigo-400" />
                        <span>{language === 'ar' ? 'دليل عملي' : language === 'en' ? 'Guide' : 'Guide'}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-700">
                        <LayoutList className="w-3 h-3 text-teal-400" />
                        <span>{language === 'ar' ? 'دراسة حالة' : language === 'en' ? 'Case Study' : 'Étude de cas'}</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[0.65rem] font-bold text-[#DF716A]">
                    <span>{language === 'ar' ? 'ابدأ الكفاءة ←' : language === 'en' ? 'Start Module →' : 'Démarrer →'}</span>
                    <span className="text-slate-500 font-mono">02/03</span>
                  </div>
                </div>

                {/* Card 3: À venir (Débloqué après progression) / Locked Step */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all opacity-80 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[0.6rem] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Lock className="w-3 h-3 text-slate-400" />
                        <span>{language === 'ar' ? 'قادم (يُفتح بعد التقدم)' : language === 'en' ? 'Upcoming (Unlocks next)' : 'À venir (Débloqué après progression)'}</span>
                      </span>
                      <span className="text-slate-500 text-[0.65rem] font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>25 min</span>
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-200 leading-snug">
                        {language === 'ar' ? 'بناء ثقافة الاستقلالية والتفويض' : language === 'en' ? 'Build Autonomous Culture' : 'Construire une culture d\'autonomie'}
                      </h4>
                      <p className="text-[0.7rem] text-slate-400 mt-1 font-medium leading-relaxed line-clamp-2">
                        {language === 'ar' ? 'تمكين القادة الميدانيين وإعادة توزيع الصلاحيات التشغيلية.' : language === 'en' ? 'Empowering line managers with structured autonomy boundaries.' : 'Responsabiliser les équipes avec des périmètres d\'autonomie.'}
                      </p>
                    </div>

                    {/* Formats Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-800">
                        <Target className="w-3 h-3 text-purple-400" />
                        <span>{language === 'ar' ? 'تمرين قيادي' : language === 'en' ? 'Exercise' : 'Exercice'}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-800">
                        <Layers className="w-3 h-3 text-sky-400" />
                        <span>{language === 'ar' ? 'نموذج جاهز' : language === 'en' ? 'Template' : 'Template'}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 text-[0.65rem] font-medium flex items-center gap-1 border border-slate-800">
                        <Users className="w-3 h-3 text-pink-400" />
                        <span>{language === 'ar' ? 'ورشة عمل' : language === 'en' ? 'Workshop' : 'Atelier'}</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[0.65rem] font-bold text-slate-500">
                    <span>{language === 'ar' ? 'يتطلب إكمال المستوى السابق' : language === 'en' ? 'Requires previous step' : 'Nécessite le niveau précédent'}</span>
                    <span className="text-slate-600 font-mono">03/03</span>
                  </div>
                </div>
              </div>

              {/* Diversity Formats Strip Banner inside simulation */}
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[0.65rem] text-slate-400 font-medium">
                <span className="text-slate-300 font-bold">{language === 'ar' ? 'تنوع صيغ التعلم في المسار:' : language === 'en' ? 'Interactive format variety:' : 'Diversité des formats du parcours :'}</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Article</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Guide</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Vidéo</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Exercice</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Checklist</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Cas pratique</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Framework</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Template</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300">Atelier</span>
              </div>
            </div>

            {/* Smooth Dissolution Fade-Out Overlay over the Dark Card Container */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 bg-gradient-to-t from-[#0B121F] via-[#0B121F]/90 to-transparent pointer-events-none z-10" />
          </div>

          {/* CTA Button under Section 3 */}
          <div className="pt-2 text-center">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#DF716A] hover:bg-[#d65f58] text-black font-extrabold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>
                {language === 'ar' 
                  ? 'ابدأ التشخيص وافتح مسار تحول مؤسستك' 
                  : language === 'en' 
                  ? 'Start Diagnostic & Unlock Your Transformation Path' 
                  : 'Lancer le diagnostic et débloquer mon parcours'}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
            </button>
          </div>
        </section>

        {/* Service Impact Section: التحول النظامي المتكامل */}
        <section id="impact" className="py-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[0.65rem] font-bold tracking-[0.3em] text-[#DF716A]">{t('landing.impact.title')}</h2>
            <h3 className="text-3xl sm:text-4xl font-medium text-[#0B121F] tracking-tighter font-display">{t('landing.impact.subtitle')}</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-start">
            {impacts.map((impact, idx) => (
              <div key={idx} className="space-y-6 bg-white p-8 rounded-xl border border-slate-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] hover:border-[#DF716A]/20 transition-all duration-700 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DF716A]/10 text-[#DF716A] border border-[#DF716A]/20 flex items-center justify-center group-hover:bg-[#DF716A] group-hover:text-white transition-all duration-300 shrink-0">
                    <impact.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0B121F] tracking-tight">{impact.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{impact.desc}</p>
                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {impact.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[0.75rem] font-medium text-[#0B121F]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DF716A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-20 text-center space-y-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0B121F] font-display leading-[1.2] text-balance"
            >
              <span className="block">{t('landing.final.title1')}</span>
              <span className="block text-[#DF716A] mt-2">{t('landing.final.title2')}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed text-balance max-w-3xl mx-auto"
            >
              {t('landing.final.desc')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <button 
                onClick={onStart}
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#0B121F] text-white font-bold text-base hover:bg-[#DF716A] hover:text-[#0B121F] transition-all hover:scale-[1.02] shadow-2xl shadow-slate-200 inline-flex items-center justify-center whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t('landing.final.cta')}</span>
              </button>
              <button 
                onClick={onViewMethod}
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white border border-slate-200 text-[#0B121F] font-bold text-base hover:bg-slate-50 hover:border-[#0B121F] transition-all shadow-xs inline-flex items-center justify-center whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t('landing.hero.cta2')}</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footnote Branding */}
        <footer id="contact" className="py-16 text-center space-y-8">
           <div className="flex justify-center items-center gap-3">
              <span className="h-[1px] w-12 bg-slate-200"></span>
              <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-slate-400 italic">Tanaffas Entreprise Intelligence</span>
              <span className="h-[1px] w-12 bg-slate-200"></span>
           </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 pt-4">
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
        </footer>
      </div>
    </div>
  );
}
