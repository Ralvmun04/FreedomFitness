import { Briefcase, FileText } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

interface TrabajaProps {
  brandColor: string;
}

export default function trabaja_con_nosotros({ brandColor }: TrabajaProps) {
  const [aceptadoLOPD, setAceptadoLOPD] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!aceptadoLOPD) {
      alert("Debes aceptar la política de privacidad");
      return;
    }

    const form = e.currentTarget;
    

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_TRABAJO, 
      form, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setShowPopup(true);
      form.reset();
      setAceptadoLOPD(false);
    })
    .catch((error) => {
      console.error("Error al enviar el currículum:", error);
      alert("Hubo un error al enviar la candidatura. Inténtalo de nuevo.");
    });
  };

  return (
    <div 
      className="py-24 min-h-screen flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('/trabaja_con_nosotros.jpg')` }}
    >
      {/* Capa oscura superpuesta para asegurar la legibilidad del texto sobre la imagen */}
      <div className="absolute inset-0 bg-[#0E0E12]/85 backdrop-blur-sm"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="bg-[#16161E]/90 rounded-3xl p-8 md:p-12 border border-white/10 grid md:grid-cols-2 gap-12 items-center shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-6 text-gray-300">
              <Briefcase size={14} style={{ color: brandColor }} />
              <span>Únete al Equipo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-white">
              ¿Quieres ser Coach en <span style={{ color: brandColor }}>Freedom Box</span>?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crea tu perfil profesional directamente aquí y preséntanos tu trayectoria como entrenador.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Nombre Completo</label>
              <input type="text" name="nombre" placeholder="Tu nombre y apellidos..." className="w-full bg-[#20202C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Correo Electrónico</label>
                <input type="email" name="email" placeholder="tu@email.com" className="w-full bg-[#20202C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Teléfono</label>
                <input type="tel" name="telefono" placeholder="+34 600..." className="w-full bg-[#20202C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" required />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Certificaciones / Titulaciones</label>
              <input type="text" name="titulaciones" placeholder="Ej: CrossTraining Level 1, CAFYD, Halterofilia..." className="w-full bg-[#20202C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none" required />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Experiencia previa como Coach</label>
              <textarea name="experiencia" rows={2} placeholder="Cuéntanos dónde has trabajado y cuánto tiempo..." className="w-full bg-[#20202C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none resize-none" required />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Información adicional</label>
              <textarea name="adicional" rows={2} placeholder="Comentarios adicionales, disponibilidad horaria..." className="w-full bg-[#20202C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none resize-none" />
            </div>

            {/* Casilla de aceptación LOPD obligatoria */}
            <div className="flex items-start gap-3 text-left pt-1">
              <input 
                type="checkbox" 
                id="lopd-trabaja" 
                checked={aceptadoLOPD}
                onChange={(e) => setAceptadoLOPD(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-[#20202C] text-purple-600 focus:ring-0 cursor-pointer"
                required
              />
              <label htmlFor="lopd-trabaja" className="text-xs text-gray-400 leading-normal cursor-pointer">
                He leído y acepto la <Link to="/privacidad" className="underline hover:text-white">Política de Privacidad</Link> y el tratamiento de mis datos por FREEDOM FITNESS, S.L.              </label>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white shadow-lg transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: brandColor }}
            >
              <FileText size={18} />
              Enviar Perfil Profesional
            </button>
          </form>
        </div>
      </div>

      {/* POPUP DE ÉXITO */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#16161E] border border-white/10 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl space-y-4">
            <h3 className="text-xl font-black uppercase text-white">¡Perfecto!</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Se responderá en un plazo de 7 días.</p>
            <button 
              onClick={() => setShowPopup(false)} 
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