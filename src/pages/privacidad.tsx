export default function Privacidad() {
  return (
    <div className="py-24 bg-[#0E0E12] min-h-screen text-gray-300">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-white mb-4">
          Política de <span className="text-purple-500">Privacidad</span>
        </h1>
        
        <p className="text-sm text-gray-400">
          Última actualización: Septiembre de 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white uppercase">1. Responsable del Tratamiento</h2>
          <p className="text-sm leading-relaxed">
            <strong>Razón Social:</strong> FREEDOM FITNESS, S.L.<br />
            <strong>CIF:</strong> B-75991810<br />
            <strong>Dirección:</strong> CL. Mecánicos, 1 - 11100 San Fernando (Cádiz)<br />
            <strong>Correo electrónico de contacto:</strong> info@freedomboxadmi.com
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white uppercase">2. Finalidad del Tratamiento de Datos</h2>
          <p className="text-sm leading-relaxed">
            En FREEDOM FITNESS, S.L. tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Trabaja con nosotros:</strong> Gestionar la recepción de currículums y la selección de personal para puestos de coach y staff.</li>
            <li><strong>Clases de Prueba / Reservas:</strong> Gestionar la reserva de plazas para las sesiones de prueba gratuitas en el box.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white uppercase">3. Legitimación</h2>
          <p className="text-sm leading-relaxed">
            La base legal para el tratamiento de tus datos es el consentimiento explícito otorgado mediante la marcación de la casilla de aceptación en cada uno de los formularios de recogida de datos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white uppercase">4. Conservación de los Datos</h2>
          <p className="text-sm leading-relaxed">
            Los datos proporcionados se conservarán mientras se mantenga la relación comercial, durante los años necesarios para cumplir con las obligaciones legales, o hasta que el usuario revoque su consentimiento o solicite la supresión de los mismos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white uppercase">5. Destinatarios</h2>
          <p className="text-sm leading-relaxed">
            No se cederán datos a terceros, salvo obligación legal. Tampoco se realizan transferencias internacionales de datos fuera de la Unión Europea.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white uppercase">6. Derechos</h2>
          <p className="text-sm leading-relaxed">
            Cualquier persona tiene derecho a obtener confirmación sobre si en FREEDOM FITNESS, S.L. estamos tratando datos personales que les conciernan. Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad de tus datos, así como la limitación u oposición a su tratamiento, enviando un correo electrónico a info@freedomboxadmi.com.
          </p>
        </section>
      </div>
    </div>
  );
}