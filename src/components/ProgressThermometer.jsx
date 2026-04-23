import React from 'react';
import { motion } from 'framer-motion';

const ProgressThermometer = ({ percentage, paid }) => {
  const markers = [
    { label: '100%', value: 100, amount: '$11,795.00' },
    { label: '75%', value: 75, amount: '$8,846.25' },
    { label: '50%', value: 50, amount: '$5,897.50' },
    { label: '25%', value: 25, amount: '$2,948.75' },
    { label: '0%', value: 0, amount: '$0' },
  ];

  return (
    <div className="relative flex items-center justify-center py-12 px-4 bg-white rounded-3xl shadow-sm border border-stone-100">
      <div className="flex items-start gap-12 w-full max-w-md">
        
        {/* Thermometer Visual */}
        <div className="relative w-16 h-80 flex flex-col items-center">
          {/* Stem */}
          <div className="absolute top-0 w-8 h-72 bg-stone-100 rounded-t-full border border-stone-200 overflow-hidden shadow-inner">
            {/* Fill */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-600 to-emerald-400"
            />
            
            {/* Ticks */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 px-1">
              {[...Array(11)].map((_, i) => (
                <div key={i} className="w-full h-px bg-stone-300/50" />
              ))}
            </div>
          </div>
          
          {/* Bulb */}
          <div className="absolute bottom-0 w-16 h-16 bg-emerald-600 rounded-full border-4 border-stone-100 shadow-lg flex items-center justify-center">
             <div className="w-8 h-8 bg-emerald-500 rounded-full blur-sm animate-pulse" />
          </div>

          {/* Current Label Float */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, bottom: `calc(${percentage}% + 20px)` }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute left-full ml-4 whitespace-nowrap"
          >
            <div className="bg-amber-500 text-white font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-2">
              <span className="text-lg">{percentage}%</span>
              <span className="text-xs opacity-80">($ {paid})</span>
            </div>
            <div className="w-3 h-3 bg-amber-500 rotate-45 -ml-1.5 -mt-1.5" />
          </motion.div>
        </div>

        {/* Labels/Markers */}
        <div className="flex-1 h-72 flex flex-col justify-between py-2">
          {markers.map((marker, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="w-4 h-px bg-stone-300 group-hover:w-6 group-hover:bg-emerald-500 transition-all" />
              <div>
                <p className="text-xs font-bold text-stone-400 group-hover:text-emerald-600 transition-all uppercase tracking-tighter">
                  {marker.label} — {marker.amount}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProgressThermometer;
