import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Church, 
  MapPin, 
  Phone, 
  Landmark, 
  Copy, 
  CheckCircle2, 
  Mail, 
  TrendingUp, 
  Target, 
  Heart,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import ProgressThermometer from './components/ProgressThermometer';

const App = () => {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Campaign Data
  const goal = 11795.00;
  const paid = 1677.50;
  const balance = 10117.50;
  const percentage = ((paid / goal) * 100).toFixed(1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center p-1 overflow-hidden border border-stone-100">
              <img src="/assets/logo.png" alt="Church Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-tight tracking-tight transition-colors ${
                scrolled ? 'text-emerald-900' : 'text-white'
              }`}>
                MABELREIGN SOUTH
              </h1>
              <p className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                scrolled ? 'text-stone-500' : 'text-emerald-100/80'
              }`}>SDA Church</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 mr-8">
            <a href="#progress" className={`text-sm font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-white'}`}>Progress</a>
            <a href="#vision" className={`text-sm font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-white'}`}>The Vision</a>
            <a href="#donate" className={`text-sm font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-white'}`}>Ways to Give</a>
          </div>

          <a 
            href="#donate" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-600/20 flex items-center gap-2 group transform active:scale-95"
          >
            <Heart size={18} className="group-hover:fill-current transition-all" />
            Support Vision
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/vision_after.png" 
            alt="Future Sanctuary" 
            className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/50 to-stone-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
              Campaign 2026
            </span>
            <h2 className="text-6xl md:text-8xl font-serif font-extrabold mb-8 leading-[0.95] tracking-tighter">
              RESTORE. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">REBUILD.</span> <br/>
              RENEW.
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50/90 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Building a permanent home for worship, community, and growth. Join us in securing the land for our future sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="#progress" className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-all shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1">
                Track Our Progress
              </a>
              <a href="#donate" className="bg-emerald-800/40 backdrop-blur-md border-2 border-amber-500 text-amber-400 px-10 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-emerald-950 transition-all shadow-xl transform hover:-translate-y-1">
                Donate Today
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </header>

      {/* Stats Dashboard */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-24">
        
        {/* Stat Cards */}
        <div id="progress" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div {...fadeInUp} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:bg-emerald-50 transition-colors" />
            <Target className="text-emerald-700 mb-6 relative z-10" size={40} />
            <p className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2 relative z-10">The Goal</p>
            <p className="text-5xl font-serif font-black text-emerald-900 relative z-10">${goal.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-emerald-900 p-10 rounded-[2.5rem] shadow-2xl shadow-emerald-900/20 text-white relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <TrendingUp size={200} />
            </div>
            <Heart className="text-amber-400 mb-6" size={40} />
            <p className="text-emerald-200/60 font-bold uppercase tracking-widest text-xs mb-2">Paid So Far</p>
            <p className="text-5xl font-serif font-black text-white">${paid.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-bold">
              <TrendingUp size={16} />
              <span>{percentage}% of target reached</span>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:bg-amber-50 transition-colors" />
            <Landmark className="text-amber-600 mb-6 relative z-10" size={40} />
            <p className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2 relative z-10">Balance Owed</p>
            <p className="text-5xl font-serif font-black text-stone-800 relative z-10">${balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
          </motion.div>
        </div>

        {/* Thermometer Section */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 leading-tight">
                Visualizing Our <br/>
                <span className="text-amber-600">Growth Journey</span>
              </h3>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Every contribution brings us closer to the tip. We are currently tracking our 2026 pledge milestones. Watch the thermometer rise as we rebuild together.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Phase 1: Land Acquisition", status: "In Progress", color: "text-emerald-600" },
                  { label: "Phase 2: Foundation Laying", status: "Upcoming", color: "text-stone-400" },
                  { label: "Phase 3: Structural Build", status: "Upcoming", color: "text-stone-400" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-emerald-500 animate-pulse' : 'bg-stone-200'}`} />
                    <span className="font-bold text-stone-800 flex-1">{item.label}</span>
                    <span className={`text-xs font-black uppercase tracking-tighter ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <ProgressThermometer percentage={percentage} paid={paid.toLocaleString()} />
            </motion.div>
          </div>
        </section>

        {/* Vision Gallery */}
        <section id="vision" className="mb-32 scroll-mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-4">The Vision</h3>
            <p className="text-stone-500 max-w-2xl mx-auto italic">"And let them make me a sanctuary; that I may dwell among them." — Exodus 25:8</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="group relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/assets/vision_before.png" alt="Before" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full w-max mb-4">The Beginning</span>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">Our Current Stand</h4>
                <p className="text-stone-300">The sacred ground where our journey starts.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/assets/vision_after.png" alt="After" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent flex flex-col justify-end p-12">
                <span className="bg-amber-500 text-emerald-950 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full w-max mb-4">The Promise</span>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">Future Sanctuary</h4>
                <p className="text-emerald-100/80">A permanent home for generations to come.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Donation Portal */}
        <section id="donate" className="scroll-mt-32">
          <div className="bg-emerald-900 rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden shadow-3xl shadow-emerald-950/40">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-3 mb-8 bg-emerald-800/50 p-4 rounded-3xl border border-emerald-700">
                  <div className="bg-amber-500 p-3 rounded-2xl text-emerald-900">
                    <Landmark size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Bank Transfer</h4>
                    <p className="text-emerald-300 text-sm uppercase tracking-widest font-bold">Secure Direct Deposit</p>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2">Institution</p>
                      <p className="text-3xl font-serif font-bold">CBZ Bank</p>
                    </div>
                    <div>
                      <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2">Account Name</p>
                      <p className="text-3xl font-serif font-bold">Mabelreign South Church</p>
                    </div>
                    <div>
                      <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2">Branch Location</p>
                      <p className="text-3xl font-serif font-bold">Avondale</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">Account Number</p>
                    <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                      <div className="flex-1 bg-emerald-950/50 border-2 border-emerald-700/50 rounded-3xl px-8 py-6 text-4xl md:text-5xl font-mono tracking-tighter text-amber-400 flex items-center justify-center sm:justify-start">
                        61291540013
                      </div>
                      <button 
                        onClick={() => copyToClipboard('61291540013')}
                        className={`px-10 rounded-3xl font-bold transition-all duration-500 flex items-center justify-center gap-3 text-lg ${
                          copied 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-amber-500 text-emerald-950 hover:bg-amber-400 hover:scale-[1.02]'
                        }`}
                      >
                        {copied ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                        {copied ? 'Copied!' : 'Copy Number'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div className="bg-emerald-800/40 backdrop-blur-xl rounded-[3rem] p-10 border border-emerald-700/50 h-full flex flex-col justify-between">
                  <div>
                    <h5 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-amber-400">
                      <Mail size={28} />
                      In-Person Giving
                    </h5>
                    <p className="text-emerald-100/70 leading-relaxed mb-8">
                      You can also use the standard Tithe and Offering envelopes during our weekly services.
                    </p>
                    <div className="bg-emerald-950/50 p-6 rounded-2xl border-l-4 border-amber-500">
                      <p className="text-xs text-amber-500 font-black uppercase tracking-widest mb-1">Important Note</p>
                      <p className="font-bold text-lg">Please write "Church Stand" clearly on the envelope.</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-emerald-700/50">
                    <p className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-4">Support Contact</p>
                    <div className="flex items-center gap-4 group">
                      <div className="bg-emerald-900 p-3 rounded-xl text-amber-500 group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                      </div>
                      <span className="text-2xl font-bold tracking-tight">+263 77 236 6160</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <img src="/assets/logo.png" alt="Logo" className="w-12 h-12 grayscale brightness-50" />
                <h6 className="font-serif font-bold text-2xl text-emerald-900">Mabelreign South SDA</h6>
              </div>
              <p className="text-stone-500 max-w-sm mb-8 leading-relaxed">
                Dedicated to restoring, rebuilding, and renewing our faith community through faith and collective action.
              </p>
              <div className="flex items-center gap-2 text-stone-400 text-sm">
                <MapPin size={16} />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
            
            <div>
              <h6 className="font-bold text-stone-900 mb-8 uppercase tracking-widest text-xs">Quick Links</h6>
              <ul className="space-y-4 text-stone-500 font-medium">
                <li><a href="#progress" className="hover:text-emerald-700 transition-colors">Campaign Progress</a></li>
                <li><a href="#vision" className="hover:text-emerald-700 transition-colors">The Vision</a></li>
                <li><a href="#donate" className="hover:text-emerald-700 transition-colors">How to Support</a></li>
              </ul>
            </div>

            <div>
              <h6 className="font-bold text-stone-900 mb-8 uppercase tracking-widest text-xs">Contact</h6>
              <ul className="space-y-4 text-stone-500 font-medium">
                <li className="flex items-center gap-2"><Phone size={16} /> +263 77 236 6160</li>
                <li className="flex items-center gap-2"><Mail size={16} /> info@mabelreignsouth.org</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-200 gap-8 text-stone-400 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Mabelreign South SDA Church. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      `}</style>

    </div>
  );
};

export default App;
