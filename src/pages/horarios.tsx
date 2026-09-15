import { Clock, Star, Zap } from "lucide-react";
import { Discipline } from "../App";

interface HorariosProps {
  brandColor: string;
  activeDiscipline: Discipline;
  setActiveDiscipline: (discipline: Discipline) => void;
}

export default function Horarios({ brandColor, activeDiscipline, setActiveDiscipline }: HorariosProps) {
  const isCrossfit = activeDiscipline === "Crossfit";

  // Datos de horarios para CrossFit
  const horariosCrossfit = [
    { dia: "Lunes", slots: ["7:00", "8:15", "9:30", "10:45 (Técnica)", "16:00", "17:15", "18:30", "19:45", "21:00"] },
    { dia: "Martes", slots: ["7:00", "9:30", "10:45", "16:00", "18:30", "19:45", "21:00"] },
    { dia: "Miércoles", slots: ["7:00", "9:30", "10:45 (Técnica)", "16:00", "17:15", "18:30 (Técnica)", "19:45", "21:00"] },
    { dia: "Jueves", slots: ["7:00", "9:30", "10:45", "16:00", "18:30", "19:45", "21:00"] },
    { dia: "Viernes", slots: ["7:00", "8:15", "9:30", "10:45", "16:00", "17:15", "18:30 (Técnica)", "19:45"] },
    { dia: "Sábados", slots: ["9:00", "10:00"] },
  ];

  // Datos de horarios para Hyrox (Freerox)
  const horariosFreerox = [
    { dia: "Lunes", slots: ["9:30", "10:30", "19:00", "20:00", "21:00"] },
    { dia: "Martes", slots: ["8:30", "10:30", "11:30", "19:00", "20:00", "21:00"] },
    { dia: "Miércoles", slots: ["8:30", "11:30", "19:00", "20:00", "21:00"] },
    { dia: "Jueves", slots: ["8:30", "9:30", "10:30", "19:00", "20:00", "21:00"] },
    { dia: "Viernes", slots: ["10:30", "11:30", "19:00", "20:00"] },
    { dia: "Sábados", slots: ["9:00"] },
  ];

  // Datos de horarios para HIIT
  const horariosHiit = [
    { dia: "Lunes", slots: ["11:30", "18:00"] },
    { dia: "Martes", slots: ["9:30", "17:15","18:00"] },
    { dia: "Miércoles", slots: ["9:30", "10:30", "18:00"] },
    { dia: "Jueves", slots: ["11:30", "17:15", "18:00"] },
    { dia: "Viernes", slots: ["9:30", "18:00"] },
    { dia: "Sábados", slots: ["10:00"] },
  ];

  return (
    <div className="bg-[#121218] min-h-screen text-white">
      {/* SECCIÓN HERO CON IMAGEN Y DEGRADADO */}
      <div className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/horario.jpg" 
            alt="Freedom Horarios" 
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
            HORARIOS
          </h1>

          {/* Selector de Disciplina Sincronizado */}
          <div className="inline-flex items-center bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveDiscipline("Crossfit")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                isCrossfit ? "bg-[#8A2BE2] text-white shadow-lg shadow-purple-500/30 scale-105" : "text-gray-400 hover:text-white"
              }`}
            >
              CrossFit
            </button>
            <button
              onClick={() => setActiveDiscipline("Hyrox/Hiit")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                !isCrossfit ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/30 scale-105" : "text-gray-400 hover:text-white"
              }`}
            >
              Hyrox / HIIT
            </button>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE CONTENIDO SOBRE EL FONDO NEGRO */}
      <div className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
        {/* Renderizado de Horarios */}
        {isCrossfit ? (
          /* Tarjetas de Horarios por Día (CrossFit) */
          <div className="grid gap-6 text-left">
            {horariosCrossfit.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#181822] rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="min-w-[140px]">
                  <h3 
                    style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                    className="text-2xl tracking-wide uppercase text-gray-200"
                  >
                    {item.dia}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">Clases Disponibles</span>
                </div>

                <div className="flex flex-wrap gap-2.5 flex-1">
                  {item.slots.map((slot, sIdx) => {
                    const esTecnica = slot.includes("Técnica");
                    return (
                      <span
                        key={sIdx}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider transition-all flex items-center gap-1.5 ${
                          esTecnica 
                            ? "bg-white/10 text-white border border-white/20 shadow-sm" 
                            : "bg-[#20202C] text-gray-300 hover:text-white hover:bg-white/5 border border-white/5"
                        }`}
                      >
                        {esTecnica && <Star size={12} style={{ color: brandColor }} />}
                        {slot}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Bloques separados para Hyrox (Freerox) y HIIT uno abajo de otro */
          <div className="space-y-16">
            
            {/* BLOQUE FREEROX */}
            <div>
              <div className="text-center mb-8">
                <h3 
                  style={{ fontFamily: '"Pilot Command", sans-serif' }} 
                  className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white"
                >
                  »» <span style={{ color: brandColor }}>FREEROX</span> ««
                </h3>
              </div>

              <div className="grid gap-6 text-left">
                {horariosFreerox.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#181822] rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="min-w-[140px]">
                      <h4 
                        style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                        className="text-2xl tracking-wide uppercase text-gray-200"
                      >
                        {item.dia}
                      </h4>
                      <span className="text-xs text-gray-500 font-medium">Freerox</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5 flex-1">
                      {item.slots.map((slot, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider transition-all flex items-center gap-1.5 bg-[#20202C] text-gray-300 hover:text-white hover:bg-white/5 border border-white/5"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOQUE HIIT */}
            <div>
              <div className="text-center mb-8">
                <h3 
                  style={{ fontFamily: '"Pilot Command", sans-serif' }} 
                  className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white"
                >
                  »» <span style={{ color: brandColor }}>HIIT</span> ««
                </h3>
              </div>

              <div className="grid gap-6 text-left">
                {horariosHiit.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#181822] rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="min-w-[140px]">
                      <h4 
                        style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                        className="text-2xl tracking-wide uppercase text-gray-200"
                      >
                        {item.dia}
                      </h4>
                      <span className="text-xs text-gray-500 font-medium">HIIT</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5 flex-1">
                      {item.slots.map((slot, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider transition-all flex items-center gap-1.5 bg-[#20202C] text-gray-300 hover:text-white hover:bg-white/5 border border-white/5"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Bloque Open Box Inferior */}
        <div className="mt-12 bg-gradient-to-r from-[#181822] to-[#14141c] rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
              <Zap size={28} style={{ color: brandColor }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 style={{ fontFamily: '"Bebas Neue", sans-serif' }} className="text-3xl tracking-wide uppercase m-0">
                  Open Box
                </h4>
                <span className="text-xs text-green-400 font-sans tracking-normal bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/20">
                  Disponible
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-1">Acceso libre para entrenar a tu ritmo sin restricciones de WOD.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs md:text-sm font-semibold text-gray-300 bg-black/40 px-6 py-3.5 rounded-2xl border border-white/5 w-full md:w-auto justify-center">
            <div className="flex items-center gap-2">
              <Clock size={16} style={{ color: brandColor }} />
              <span>Mañanas: 7:00 - 13:00</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-2">
              <Clock size={16} style={{ color: brandColor }} />
              <span>Tardes: 16:00 - 22:00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}