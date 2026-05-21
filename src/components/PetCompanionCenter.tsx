import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Circle, Calculator } from 'lucide-react';
import { PET_CARE_TASKS } from '../data/petData';
import { PetCareTask } from '../types';

export default function PetCompanionCenter() {
  const [activePetType, setActivePetType] = useState<'Dog' | 'Cat' | 'Bird' | 'Rabbit' | 'Exotic'>('Dog');
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});
  
  // Age calculator states
  const [calcPetType, setCalcPetType] = useState<'Dog' | 'Cat' | 'Bird' | 'Rabbit'>('Dog');
  const [calcAge, setCalcAge] = useState<number>(3);
  const [humanAgeResult, setHumanAgeResult] = useState<number>(28);
  const [lifeStage, setLifeStage] = useState<string>('Adult');

  const filteredTasks = PET_CARE_TASKS.filter(task => task.petType === activePetType);

  const toggleTask = (taskId: string) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const calculateHumanAge = (type: 'Dog' | 'Cat' | 'Bird' | 'Rabbit', age: number) => {
    if (age <= 0) return { humanAge: 0, stage: 'Newborn' };
    
    let humanAge = 0;
    let stage = 'Adult';

    switch (type) {
      case 'Cat':
        if (age === 1) humanAge = 15;
        else if (age === 2) humanAge = 24;
        else humanAge = 24 + (age - 2) * 4;
        
        if (age < 1) stage = 'Kitten';
        else if (age < 3) stage = 'Junior';
        else if (age < 11) stage = 'Adult';
        else if (age < 15) stage = 'Senior';
        else stage = 'Geriatric';
        break;

      case 'Dog':
        // Standard medium dog approximation
        if (age === 1) humanAge = 15;
        else if (age === 2) humanAge = 24;
        else humanAge = 24 + (age - 2) * 5;

        if (age < 1) stage = 'Puppy';
        else if (age < 2) stage = 'Junior';
        else if (age < 7) stage = 'Adult';
        else if (age < 11) stage = 'Senior';
        break;

      case 'Rabbit':
        if (age === 1) humanAge = 16;
        else if (age === 2) humanAge = 21;
        else humanAge = 21 + (age - 2) * 6;

        if (age < 1) stage = 'Kit (Baby)';
        else if (age < 2) stage = 'Adolescent';
        else if (age < 5) stage = 'Adult';
        else stage = 'Senior / Elderly';
        break;

      case 'Bird':
        // Approximation for medium companion bird (parakeet/cockatiel)
        if (age === 1) humanAge = 12;
        else humanAge = 12 + age * 3.5;

        if (age < 1) stage = 'Fledgling';
        else if (age < 3) stage = 'Young Adult';
        else if (age < 12) stage = 'Mature Adult';
        else stage = 'Senior Avian';
        break;
    }

    return { humanAge: Math.round(humanAge), stage };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const { humanAge, stage } = calculateHumanAge(calcPetType, calcAge);
    setHumanAgeResult(humanAge);
    setLifeStage(stage);
  };

  const completedCount = filteredTasks.filter(t => checkedTasks[t.id]).length;
  const progressPercent = filteredTasks.length > 0 
    ? Math.round((completedCount / filteredTasks.length) * 100) 
    : 0;

  return (
    <div className="rounded-2xl border-2 border-slate-100 bg-white p-6 shadow-xl" id="pet-companion-center">
      <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center border-b border-slate-100 pb-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-black uppercase tracking-tight text-slate-900 md:text-xl">
            <Sparkles className="h-5 w-5 text-amber-500 fill-amber-300 animate-pulse" />
            Interactive Companion Portal
          </h2>
          <p className="text-xs text-slate-500 font-medium">Daily veterinary checklists & specialized physical calculation tools</p>
        </div>
        <span className="rounded-full bg-emerald-100 text-emerald-800 px-3.5 py-1 text-xs font-black uppercase tracking-wider">
          ACTIVE TRACKING SESSIONS
        </span>
      </div>

      {/* Tabs list of Pet Types */}
      <div className="mb-5 flex flex-wrap gap-1.5 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
        {(['Dog', 'Cat', 'Bird', 'Rabbit', 'Exotic'] as const).map(pet => (
          <button
            key={pet}
            onClick={() => setActivePetType(pet)}
            className={`flex-1 min-w-[70px] text-center px-3 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all duration-150 ${
              activePetType === pet
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pet}s
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Daily Checklist Column (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">
              Daily & Weekly Care Routines ({activePetType}s)
            </h3>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              {completedCount}/{filteredTasks.length} Done
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-250">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
            {filteredTasks.map((task) => {
              const isChecked = !!checkedTasks[task.id];
              return (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border-2 transition-all cursor-pointer hover:bg-slate-50 ${
                    isChecked 
                      ? 'bg-emerald-50/50 border-emerald-200' 
                      : 'bg-white border-slate-150'
                  }`}
                >
                  <button className="shrink-0 mt-0.5 text-emerald-600">
                    {isChecked ? (
                      <CheckCircle2 className="h-5 w-5 fill-emerald-100" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-300" />
                    )}
                  </button>
                  <div className="space-y-0.5 text-left">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black uppercase tracking-wide leading-none ${isChecked ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {task.task}
                      </span>
                      <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-slate-100 border text-slate-500">
                        {task.frequency}
                      </span>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isChecked ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>
                      {task.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Calculation Column (5 cols) */}
        <div className="md:col-span-5 bg-slate-900 text-white rounded-2xl p-5 border-2 border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5 mb-3">
              <Calculator className="h-4 w-4" />
              Pet Age-to-Human Calculator
            </h3>
            <p className="text-[10px] text-slate-300 font-semibold leading-relaxed mb-4">
              A dog's or cat's year is not simply 7 human years. Veterinarians use non-linear metabolic scaling to map aging cycles.
            </p>

            <form onSubmit={handleCalculate} className="space-y-3">
              <div>
                <label className="block text-[9px] font-black uppercase text-slate-400 tracking-wider mb-1">Select Companion Type</label>
                <select
                  value={calcPetType}
                  onChange={(e) => setCalcPetType(e.target.value as any)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white uppercase tracking-wider font-bold focus:border-amber-400 focus:outline-none"
                >
                  <option value="Dog">Dog (Standard)</option>
                  <option value="Cat">Feline (Cat)</option>
                  <option value="Rabbit">Lagomorph (Rabbit)</option>
                  <option value="Bird">Avian (Bird)</option>
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase text-slate-400 tracking-wider mb-1">Chronological Age ({calcAge} Years)</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={calcAge}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setCalcAge(val);
                    const { humanAge, stage } = calculateHumanAge(calcPetType, val);
                    setHumanAgeResult(humanAge);
                    setLifeStage(stage);
                  }}
                  className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-semibold text-slate-500 mt-1">
                  <span>1 Year</span>
                  <span>10 Years</span>
                  <span>20 Years</span>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 space-y-3 text-center">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Equivalent Human Lifespan</span>
              <span className="text-4xl font-black text-amber-400 font-mono tracking-tight">{humanAgeResult}</span>
              <span className="text-xs font-black uppercase tracking-wider text-white ml-2">years old</span>
            </div>

            <div className="inline-block bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded">
              STAGE: {lifeStage}
            </div>

            <p className="text-[10px] text-slate-400 font-semibold leading-relaxed text-left">
              {lifeStage === 'Senior' || lifeStage === 'Geriatric' || lifeStage === 'Senior / Elderly' || lifeStage === 'Senior Avian' ? (
                "⭐️ Senior companions require twice-yearly blood panels, joint care supplements (glucosamine/chondroitin), and adjusted caloric formulas."
              ) : lifeStage === 'Puppy' || lifeStage === 'Kitten' || lifeStage === 'Kit (Baby)' || lifeStage === 'Fledgling' ? (
                "⭐️ Early development stages require socialization indexes, full core vaccinations, and high phosphorus limits for healthy bone growth."
              ) : (
                "⭐️ Adults thrive on rigorous physical structure, preventative dental scraping, and moisture-balanced dietary portions."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
