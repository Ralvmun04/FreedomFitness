import { Discipline } from "../App";

interface TarifasProps {
  activeDiscipline: Discipline;
  setActiveDiscipline: (discipline: Discipline) => void;
  brandColor: string;
}

export default function tarifas({ activeDiscipline, setActiveDiscipline }: TarifasProps) {
  const isCrossfit = activeDiscipline === "CrossTraining";

  return (
    <div className="bg-[#121218] min-h-screen text-white">
      {/* SECCIÓN HERO CON IMAGEN Y DEGRADADO */}
      <div className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/fondo-tarifas.webp" 
            alt="Freedom Tarifas" 
            className="w-full h-full object-cover object-center filter brightness-40 contrast-125"
          />
          {/* Degradado para fundir la imagen hacia el color negro corporativo de abajo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-[#121218]/60 to-transparent" />
        </div>

        {/* TÍTULO Y SWITCH EN EL HERO */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20 pb-12">
          <h1 
            style={{ fontFamily: '"Pilot Command", sans-serif' }} 
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-8 drop-shadow-2xl text-white"
          >
            TARIFAS
          </h1>

          {/* SWITCH DE DISCIPLINA */}
          <div className="inline-flex items-center bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveDiscipline("CrossTraining")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                isCrossfit ? "bg-[#8A2BE2] text-white shadow-lg shadow-purple-500/30 scale-105" : "text-gray-400 hover:text-white"
              }`}
            >
              CrossTraining
            </button>
            <button
              onClick={() => setActiveDiscipline("Freerox/Hiit")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                !isCrossfit ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/30 scale-105" : "text-gray-400 hover:text-white"
              }`}
            >
              Freerox / HIIT
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { days: "2 Días / Semana", price: isCrossfit ? "50€" : "40€", desc: isCrossfit ? "+1 clase de técnica." : "" },
            { days: "3 Días / Semana", price: isCrossfit ? "55€" : "45€", desc: isCrossfit ? "+1 clase de técnica." : "" },
            { days: "4 Días / Semana", price: isCrossfit ? "60€" : "50€", desc: isCrossfit ? "+1 clase de técnica." : "" }
          ].map((plan, idx) => (
            <div 
              key={idx}
              className="bg-[#181822] rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between shadow-2xl"
            >
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">{plan.days}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                <div className="text-4xl font-black mb-6">
                  {plan.price} <span className="text-xs text-gray-500 font-normal">/ mes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <div 
            className="bg-[#181822] rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between w-full md:w-[calc(33.333%-1.33rem)] shadow-2xl"
          >
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">{isCrossfit ? "Ilimitado Full Box" : "5 Días / Semana"}</h3>
              <p className="text-gray-400 text-sm mb-6">{isCrossfit ? "Acceso total a todas las clases y zona de Open Box." : ""}</p>
              <div className="text-4xl font-black mb-6">
                {isCrossfit ? "65€" : "55€"} <span className="text-xs text-gray-500 font-normal">/ mes</span>
              </div>
            </div>
          </div>
          <div 
            className="bg-[#181822] rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between w-full md:w-[calc(33.333%-1.33rem)] shadow-2xl"
          >
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">{isCrossfit ? "Bonos de Clases" : "Full Week"}</h3>
              <div className="text-3xl font-black mb-6">
                60€ <span className="text-xs text-gray-400 font-normal">{isCrossfit ? "/ 10 clases" : "/ mes"}</span><br/>
                {isCrossfit ? "35€" : ""} <span className="text-xs text-gray-400 font-normal">{isCrossfit ? "/ 5 clases" : ""}</span><br/>
                {isCrossfit ? "10€" : ""} <span className="text-xs text-gray-400 font-normal">{isCrossfit ? "/ drop in" : ""}</span>
              </div>
            </div>
          </div>
          <div 
            className="bg-[#181822] rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between w-full md:w-[calc(33.333%-1.33rem)] shadow-2xl"
          >
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Full Open</h3>
              <p className="text-gray-400 text-sm mb-6">Disponibilidad total de toda la zona de open.</p>
              <div className="text-4xl font-black mb-6">
                55€ <span className="text-xs text-gray-500 font-normal">/ mes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}