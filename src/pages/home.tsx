import { useState } from "react";
import { Discipline } from "../App";
import { X, Dumbbell, ShieldCheck, Flame, Coffee, ChevronLeft, ChevronRight } from "lucide-react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

interface HomeProps {
  activeDiscipline: Discipline;
  setActiveDiscipline: (discipline: Discipline) => void;
  brandColor: string;
}

const galleryImages = [
  { src: "/gimnasio.jpg", alt: "Freedom Interior" },
  { src: "/instalaciones.jpg", alt: "Sala Principal WOD" },
  { src: "/hiit.jpg", alt: "Zona Freerox" },
  { src: "/ergs.jpg", alt: "Zona Open Box" },
  { src: "/metros.jpg", alt: "+1000 m² Indoor" },
  { src: "/descanso.jpg", alt: "Freedom Rest Zone" },
];

export default function home({ activeDiscipline, setActiveDiscipline, brandColor }: HomeProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const isCrossfit = activeDiscipline === "CrossTraining";
  const [mensajePopup, setMensajePopup] = useState<string | null>(null);

  const handleReservaSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const previo = formData.get("previo") === "on";
    const bahia = formData.get("bahia") === "on";

    if (previo && !bahia) {
      setMensajePopup("¡Lo siento! No puedes reservar tu clase de prueba gratuita, pero puedes unirte a nosotros mediante drop in.");
    } else if (!previo && bahia) {
      setMensajePopup("¡Bienvenido a Freedom! Se te mandará un correo por parte de WodBuster para elegir tu horario preferente.");
    } else if (previo && bahia) {
      setMensajePopup("¡Bienvenido a Freedom! Se te mandará un correo por parte de WodBuster para elegir tu horario preferente.");
    } else if (!previo && !bahia) {
      setMensajePopup("¡Bienvenido a Freedom! Se te mandará un correo por parte de WodBuster para elegir tu horario preferente.");
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_RESERVA, 
      form, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar el correo:", error);
    });
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E12] text-white">
      {/* SECCIÓN HERO CON IMAGEN DE FONDO */}
      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 cursor-pointer"
          onClick={() => setCurrentImageIndex(0)}
        >
          <img 
            src="/gimnasio.jpg" 
            alt="Freedom Interior" 
            className="w-full h-full object-cover object-center filter brightness-40 contrast-125 hover:opacity-95 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-[#0E0E12]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-8 md:px-6 py-12 pointer-events-none">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight mb-6 drop-shadow-2xl">
            <span style={{ fontFamily: '"Pilot Command", sans-serif' }} className="text-5xl sm:text-6xl md:text-8xl tracking-wider uppercase">
              Freedom
            </span>
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light uppercase tracking-normal mb-6 drop-shadow-2xl">
            <span style={{ fontFamily: '"orbitron", sans-serif', color: brandColor }} className="transition-colors duration-300">F i t n e s s</span>
          </h1>

          <div className="inline-flex items-center bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10 mb-8 shadow-2xl pointer-events-auto">
            <button
              onClick={() => setActiveDiscipline("CrossTraining")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                isCrossfit ? "bg-[#A855F7] text-white shadow-lg shadow-purple-500/30 scale-105" : "text-gray-400 hover:text-white"
              }`}
            >
              CrossTraining
            </button>
            <button
              onClick={() => setActiveDiscipline("Freerox/Hiit")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                !isCrossfit ? "bg-[#38BDF8] text-white shadow-lg shadow-sky-500/30 scale-105" : "text-gray-400 hover:text-white"
              }`}
            >
              Freerox / HIIT
            </button>
          </div>

          <div className="bg-[#16161E]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto shadow-2xl mb-8 pointer-events-auto">
            {isCrossfit ? (
              <p>Supera tus límites con entrenamientos funcionales de alta intensidad. Desarrolla fuerza, resistencia y agilidad en una comunidad que te apoya en cada WOD.</p>
            ) : (
              <p>Combina la carrera con estaciones de ejercicio funcional. El entrenamiento definitivo para potenciar tu capacidad cardiovascular y quemar calorías al máximo.</p>
            )}
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg text-white pointer-events-auto"
            style={{ backgroundColor: brandColor }}
          >
            Reserva tu clase de prueba
          </button>
        </div>
      </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8 px-4 md:px-12">
            {/* Tarjeta Sala Principal */}
            <div className="bg-[#181822] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col group">
              <div 
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => setCurrentImageIndex(1)}
              >
                <img 
                  src="/instalaciones.jpg" 
                  alt="Sala Principal WOD" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181822] to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Dumbbell size={18} style={{ color: brandColor }} />
                    <h3 className="text-xl font-bold uppercase">Zona WOD & Rig</h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    Estructura olímpica completa con barras de dominadas, anillas y espacio diáfano optimizado para el trabajo en grupo.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta Zona Hyrox / Cardio */}
            <div className="bg-[#181822] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col group">
              <div 
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => setCurrentImageIndex(2)}
              >
                <img 
                  src="/hiit.jpg" 
                  alt="Zona Freerox" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181822] to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Flame size={18} style={{ color: brandColor }} />
                    <h3 className="text-xl font-bold uppercase">Pista Freerox & Cardio</h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    Trineos, SkiErgs, Assault Bikes y pista de césped artificial indoor específica para potencia y resistencia cardiovascular.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta Open Box y Descanso */}
            <div className="bg-[#181822] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col group">
              <div 
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => setCurrentImageIndex(3)}
              >
                <img 
                  src="/ergs.jpg" 
                  alt="Zona Open Box" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181822] to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={18} style={{ color: brandColor }} />
                    <h3 className="text-xl font-bold uppercase">Open Box & Confort</h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    Zona independiente para entrenar libremente a tu ritmo, vestuarios equipados y zona social para compartir comunidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TARJETAS INFERIORES (Metros Cuadrados y Rest Zone) */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8 px-4 md:px-0">
            {/* Metros Cuadrados */}
            <div className="bg-[#181822] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col group">
              <div 
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => setCurrentImageIndex(4)}
              >
                <img 
                  src="/metros.jpg" 
                  alt="Instalaciones Freedom Box" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181822] to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Dumbbell size={18} style={{ color: brandColor }} />
                    <h3 className="text-xl font-bold uppercase">+1000 m² Indoor</h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    Amplias instalaciones diáfanas diseñadas específicamente para acoger cómodamente clases de alta intensidad y entrenamiento libre.
                  </p>
                </div>
              </div>
            </div>

            {/* Freedom Rest Zone */}
            <div className="bg-[#181822] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col group">
              <div 
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => setCurrentImageIndex(5)}
              >
                <img 
                  src="/descanso.jpg" 
                  alt="Freedom Rest Zone" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181822] to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Coffee size={18} style={{ color: brandColor }} />
                    <h3 className="text-xl font-bold uppercase">Freedom Rest Zone</h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    Un espacio diseñado para desconectar, relajarte después de darlo todo en el WOD y equiparte con el merchandising oficial en nuestra Freedom Shop.
                  </p>
                </div>
              </div>
            </div>
          </div>

      {/* MODAL DE CARRUSEL DE FOTOS */}
      {currentImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setCurrentImageIndex(null)}
        >
          <button 
            onClick={() => setCurrentImageIndex(null)} 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-10"
          >
            <X size={24} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].alt} 
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <p className="text-white mt-4 font-bold text-sm uppercase tracking-wider bg-black/60 px-4 py-2 rounded-full border border-white/10">
              {galleryImages[currentImageIndex].alt} ({currentImageIndex + 1} / {galleryImages.length})
            </p>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {/* MODAL DE RESERVA */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16161E] border border-white/10 rounded-3xl p-8 max-w-md w-full relative text-left shadow-2xl">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-black uppercase mb-2">Reserva tu Clase Gratis</h3>
            <p className="text-gray-400 text-xs mb-6">Elige el día y prueba la experiencia Freedom Box sin compromiso.</p>
  
            <form onSubmit={handleReservaSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Nombre completo</label>
                <input type="text" name="nombre" placeholder="Tu nombre..." required className="w-full bg-[#222230] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Correo electrónico</label>
                <input type="email" name="email" placeholder="tu@email.com" required className="w-full bg-[#222230] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Teléfono</label>
                <input type="tel" name="telefono" placeholder="+34 600..." required className="w-full bg-[#222230] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="previo"
                    className="mt-0.5 w-4 h-4 rounded bg-[#222230] border-white/20 cursor-pointer accent-[#8A2BE2]"
                  />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    ¿Has practicado esta disciplina con anterioridad?
                  </span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="bahia"
                    className="mt-0.5 w-4 h-4 rounded bg-[#222230] border-white/20 cursor-pointer accent-[#8A2BE2]"
                  />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    ¿Resides en la zona de la Bahía de Cádiz?
                  </span>
                </label>

                {/* Casilla de aceptación LOPD obligatoria */}
                <label className="flex items-start gap-3 cursor-pointer group pt-1">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-0.5 w-4 h-4 rounded bg-[#222230] border-white/20 cursor-pointer accent-[#8A2BE2]"
                  />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-normal">
                    He leído y acepto la <Link to="/privacidad" className="underline hover:text-white">Política de Privacidad</Link> y el tratamiento de mis datos por FREEDOM FITNESS, S.L.                  </span>
                </label>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl font-bold text-sm uppercase text-white shadow-lg mt-4" style={{ backgroundColor: brandColor }}>
                Confirmar Reserva
              </button>
            </form>
          </div>
        </div>
      )}

      {/* POPUP DINÁMICO DE RESULTADO */}
      {mensajePopup && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16161E] border border-white/10 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl space-y-4">
            <h3 className="text-xl font-black uppercase text-white">¡Aviso importante!</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{mensajePopup}</p>
            <button 
              onClick={() => {
                setMensajePopup(null);
                setShowModal(false);
              }} 
              className="w-full py-3 rounded-xl font-bold text-sm uppercase text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: brandColor }}
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}