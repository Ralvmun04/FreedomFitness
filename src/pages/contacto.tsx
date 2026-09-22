import { MapPin, Phone, Mail} from "lucide-react";

interface ContactoProps {
  brandColor: string;
}

export default function contacto({ brandColor }: ContactoProps) {
  return (
    <div 
      className="py-24 min-h-screen flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('/contactanos.webp')` }}
    >
      {/* Capa oscura superpuesta para asegurar la legibilidad del texto sobre la imagen */}
      <div className="absolute inset-0 bg-[#0E0E12]/85 backdrop-blur-sm"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 w-full relative z-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6 text-white">
            Ponte en <span style={{ color: brandColor }}>Contacto</span>
          </h2>
          <p className="text-gray-400 mb-8">
            ¿Tienes dudas sobre los entrenamientos o las plazas? Escríbenos o ven a visitarnos al box.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <MapPin size={22} style={{ color: brandColor }} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Ubicación</h4>
                <p className="text-gray-400 text-sm">CL. Mecánicos, 1 - 11100 San Fernando (Cádiz)</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <Phone size={22} style={{ color: brandColor }} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Teléfono / WhatsApp</h4>
                <p className="text-gray-400 text-sm">601 223 404</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <Mail size={22} style={{ color: brandColor }} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Email</h4>
                <p className="text-gray-400 text-sm">info@freedomboxadmi.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <svg 
                  className="w-[22px] h-[22px]" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  viewBox="0 0 24 24"
                  style={{ color: brandColor }}
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Instagram</h4>
                <a 
                  href="https://www.instagram.com/_freedombox/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 text-sm hover:text-white underline transition-colors"
                >
                  @_freedombox
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa integrado de OpenStreetMap centrado en CL. Mecánicos, 1, San Fernando */}
        <div className="bg-[#16161E]/90 p-4 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-[400px] flex flex-col">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5">
            <iframe 
              title="Ubicación Freedom Box"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-6.2045%2C36.4735%2C-6.2005%2C36.4755&amp;layer=mapnik&amp;marker=36.474555%2C-6.202587" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="pt-3 px-2 text-center">
            <a 
              href="https://www.openstreetmap.org/search?lat=36.474555&lon=-6.202587&zoom=19#map=19/36.474554/-6.202587" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white underline transition-colors"
            >
              Ver mapa más grande
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}