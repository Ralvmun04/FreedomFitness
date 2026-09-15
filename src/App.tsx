import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Home from "./pages/home";
import Tarifas from "./pages/tarifas";
import Horarios from "./pages/horarios";
import Trabaja from "./pages/trabaja_con_nosotros";
import Contacto from "./pages/contacto";
import Privacidad from './pages/privacidad';

export type Discipline = "Crossfit" | "Hyrox/Hiit";

export default function App() {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline>("Crossfit");
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú móvil

  const isCrossfit = activeDiscipline === "Crossfit";
  const brandColor = isCrossfit ? "#8A2BE2" : "#2563EB";

  return (
    <Router>
      <div className="min-h-screen bg-[#0E0E12] text-white font-sans selection:bg-purple-500 selection:text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121218]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-16 md:h-14 flex items-center justify-center shrink-0">
                <img 
                  src="/Logo-crop.png" 
                  alt="Freedom Box Logo" 
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="flex items-center pt-1">
                <span 
                  style={{ fontFamily: '"Pilot Command", sans-serif' }} 
                  className="text-xl sm:text-2xl md:text-3xl tracking-wider uppercase leading-none text-white"
                >
                  FREEDOM
                </span>
                <span 
                  style={{ fontFamily: '"Pilot Command", sans-serif', color: brandColor }} 
                  className="text-xl sm:text-2xl md:text-3xl tracking-wider uppercase leading-none transition-colors duration-300"
                >
                  FITNESS
                </span>
              </div>
            </Link>

            {/* Menú para Escritorio */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-gray-300">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <Link to="/tarifas" className="hover:text-white transition-colors">Tarifas</Link>
              <Link to="/horarios" className="hover:text-white transition-colors">Horarios</Link>
              <Link to="/trabaja" className="hover:text-white transition-colors">Trabaja con Nosotros</Link>
              <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
            </div>

            {/* Botón Hamburguesa para Móvil */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white p-2 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú Desplegable para Móvil */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#121218] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-semibold tracking-wide uppercase text-gray-300 shadow-2xl">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Inicio</Link>
              <Link to="/tarifas" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Tarifas</Link>
              <Link to="/horarios" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Horarios</Link>
              <Link to="/trabaja" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Trabaja con Nosotros</Link>
              <Link to="/contacto" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Contacto</Link>
            </div>
          )}
        </nav>

        <div className="pt-20">
          <Routes>
            <Route path="/privacidad" element={<Privacidad />} />
            <Route 
              path="/" 
              element={<Home activeDiscipline={activeDiscipline} setActiveDiscipline={setActiveDiscipline} brandColor={brandColor} />} 
            />
            <Route 
              path="/tarifas" 
              element={
                <Tarifas 
                  brandColor={brandColor} 
                  activeDiscipline={activeDiscipline} 
                  setActiveDiscipline={setActiveDiscipline} 
                />
              } 
            />
            <Route 
              path="/horarios" 
              element={<Horarios brandColor={brandColor} activeDiscipline={activeDiscipline} setActiveDiscipline={setActiveDiscipline} />} 
            />
            <Route path="/trabaja" element={<Trabaja brandColor={brandColor} />} />
            <Route path="/contacto" element={<Contacto brandColor={brandColor} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}