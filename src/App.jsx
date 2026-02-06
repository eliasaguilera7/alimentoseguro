import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ClipboardCheck, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  Clock, 
  Heart, 
  Droplets, 
  Leaf, 
  GraduationCap, 
  Scale, 
  Settings, 
  Search, 
  Instagram, 
  Facebook,
  Bug,
  Database,
  Beaker,
  Truck,
  Building2,
  AlertCircle,
  Star
} from 'lucide-react';

// Paleta oficial del logo de Alimento Seguro
const COLORS = {
  blue: '#0081C9',      // Azul institucional
  green: '#34B334',     // Verde (Inocuidad)
  orange: '#F58220',    // Naranja (Innovación)
  lightGreen: '#8DC63F', // Verde claro
  white: '#FFFFFF',
  gray: '#F9FAFB',
  dark: '#0B0F1A'
};

// --- COMPONENTE DE NAVEGACIÓN ---
const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Capacitaciones', id: 'capacitaciones' },
    { name: 'Registros', id: 'registros' },
    { name: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-1.5' : 'bg-white/95 backdrop-blur-md py-2.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveSection('inicio')}>
            <img
              src={`${import.meta.env.BASE_URL}images/logoremoved.png`}
              alt="Alimento Seguro Consultores"
              className="h-12 md:h-14 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className="text-sm font-bold hover:opacity-70 px-1.5 py-0.5 relative group transition-colors"
                style={{ color: activeSection === link.id ? COLORS.blue : '#4B5563' }}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ backgroundColor: COLORS.blue }}></span>
              </button>
            ))}
            <button
              onClick={() => setActiveSection('contacto')}
              style={{ backgroundColor: COLORS.blue }}
              className="text-white px-5 py-2 rounded-lg text-sm font-black shadow-lg hover:brightness-110 uppercase tracking-wider transition-all transform active:scale-95"
            >
              Presupuesto
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden absolute w-full bg-white transition-all duration-300 shadow-xl overflow-hidden ${isOpen ? 'max-h-[480px] border-b border-gray-100' : 'max-h-0'}`}>
        <div className="px-4 py-5 space-y-2">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { setActiveSection(link.id); setIsOpen(false); }}
              className="block w-full text-left text-lg font-black px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              style={{ color: activeSection === link.id ? COLORS.blue : '#4B5563' }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// --- SECCIÓN HERO (BANNER PRINCIPAL) ---
const Hero = ({ onCtaClick }) => (
  <section id="inicio" className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-slate-900">
    {/* Imagen de fondo a pantalla completa */}
    <div className="absolute inset-0 z-0">
      <img
        src={`${import.meta.env.BASE_URL}images/hero.png`}
        alt="Consultoría de Calidad Alimentaria"
        className="w-full h-full object-cover opacity-60" // <-- TRANSPARENCIA del fondo (0 a 100)
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div> 
      {/* ^^^ Este overlay también oscurece (transparencia del negro: /90 y /40) */}
    </div>

    {/* Logo decorativo lado derecho (watermark) */}
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden lg:flex items-center pr-2 xl:pr-6">
      <img
        src={`${import.meta.env.BASE_URL}images/logoalimentos2.png`}
        alt=""
        aria-hidden="true"
        className="w-[720px] xl:w-[880px] 2xl:w-[980px] h-auto object-contain opacity-70"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-44 md:pt-32">
      <div className="max-w-3xl text-left animate-in fade-in slide-in-from-left duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-white/20 bg-white/10 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: COLORS.green }}></div>
          <span className="text-xs font-black uppercase tracking-widest text-white">Aliados Estratégicos</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
          Soluciones para la <br />
          <span style={{ color: COLORS.blue }} className="brightness-125 uppercase tracking-tight">Gestión de Calidad</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-medium">
          Respaldo estratégico para empresas industriales, gastronómicas y hoteleras. 
          Optimizamos procesos y abrimos nuevos mercados con estándares nacionales e internacionales.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button
            onClick={() => onCtaClick('servicios')}
            style={{ backgroundColor: COLORS.blue }}
            className="px-10 py-5 rounded-2xl text-white font-black text-base md:text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group"
          >
            Servicios Técnicos
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onCtaClick('contacto')}
            className="px-10 py-5 rounded-2xl border-2 border-white text-white font-black text-base md:text-lg hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-3"
          >
            Solicitar Consultoría <Phone size={22} />
          </button>
        </div>
      </div>
    </div>

    {/* Indicador visual de desplazamiento */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </section>
);

// --- SECCIÓN NOSOTROS ---
const About = () => {
  const values = [
    { name: 'Ética', icon: ShieldCheck },
    { name: 'Confianza', icon: Heart },
    { name: 'Integridad', icon: Award },
    { name: 'Excelencia', icon: Star },
    { name: 'Responsabilidad', icon: Clock },
    { name: 'Trabajo en Equipo', icon: Users },
    { name: 'Flexibilidad', icon: Settings }
  ];

  return (
    <section id="nosotros" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Compromiso con la <span style={{ color: COLORS.blue }}>Excelencia</span></h2>
          <div className="h-1.5 w-24 mx-auto rounded-full flex overflow-hidden">
             <div className="h-full w-full" style={{ backgroundColor: COLORS.blue }}></div>
          </div>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            "Demuestre su compromiso con la seguridad alimentaria". Con nuestros servicios en calidad e inocuidad 
            optimizamos procesos, reducimos riesgos y ayudamos a cumplir con estándares nacionales e internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-4" style={{ color: COLORS.blue }}>
              <div className="p-3 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform"><Leaf size={32} /></div> Nuestra Misión
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "Trabajar con las empresas gastronómicas, hoteleras, industriales y comerciales en la gestión de sistemas 
              de inocuidad y calidad, proporcionando seguridad a la empresa y reconocimiento del consumidor, convirtiéndonos en aliados estratégicos."
            </p>
          </div>
          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-4" style={{ color: COLORS.green }}>
              <div className="p-3 bg-green-50 rounded-2xl group-hover:scale-110 transition-transform"><Droplets size={32} /></div> Nuestra Visión
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Posicionarnos como el equipo de profesionales de referencia en Paraguay para soluciones integrales de gestión de inocuidad y calidad de alimentos.
            </p>
          </div>
        </div>

        {/* Trayectoria */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 mb-16">
          <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: COLORS.blue }}>
            Trayectoria
          </h3>
          <p className="text-gray-600 font-medium leading-relaxed">
            • Años de experiencia del equipo: profesionales con 25 y 30 años de experiencia en la industria alimentaria.
            Especialistas en cada uno de los servicios.
          </p>
        </div>

        {/* Franja visual de compromiso (sin card, sin títulos) */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group rounded-[2rem] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/compromiso1.jpeg`}
                alt="Compromiso con la excelencia"
                className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group rounded-[2rem] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/compromiso2.jpeg`}
                alt="Compromiso con la excelencia"
                className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {values.map((v, i) => (
            <div key={i} className="px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 font-black text-sm uppercase tracking-widest text-gray-500 hover:scale-105 hover:text-blue-600 transition-all flex items-center gap-3">
              <v.icon size={20} style={{ color: i % 2 === 0 ? COLORS.blue : COLORS.green }} />
              {v.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Bloque breve de información (Seguridad Alimentaria)
const FoodSafetyBrief = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
        <ShieldCheck size={18} style={{ color: COLORS.blue }} />
        <span className="text-[11px] font-black uppercase tracking-[0.35em] text-gray-600">
          Seguridad Alimentaria
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/5">
          <h3 className="text-3xl md:text-4xl font-black leading-tight mb-5">
            Inocuidad que impulsa la competitividad
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            En mercados exigentes, las empresas necesitan procesos claros, medibles y confiables para garantizar alimentos seguros. Diseñamos, mejoramos y mantenemos sistemas de gestión que convierten la inocuidad en una ventaja real.
          </p>

          {/* mosaico 2x2: inocuo1, inocuo2, lavado2, lacteos */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/inocuo1.jpeg`}
                alt="Buenas prácticas de inocuidad"
                className="w-full h-36 md:h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/inocuo2.jpeg`}
                alt="Controles de inocuidad"
                className="w-full h-36 md:h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/lavado2.jpeg`}
                alt="Lavado de superficies"
                className="w-full h-36 md:h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/lacteos.jpeg`}
                alt="Control de lácteos"
                className="w-full h-36 md:h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {['ISO 22000', 'BRC', 'IFS', 'GlobalG.A.P.', 'HACCP'].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-[11px] font-black uppercase tracking-widest text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Aseguramiento de la Inocuidad', icon: CheckCircle2, color: COLORS.blue },
            { title: 'Cumplimiento Normativo', icon: Scale, color: COLORS.green },
            { title: 'Satisfacción del Cliente', icon: Heart, color: COLORS.orange },
            { title: 'Procesos Unificados', icon: Settings, color: COLORS.blue },
            { title: 'Reducción de Riesgos', icon: AlertCircle, color: COLORS.green },
            { title: 'Trazabilidad Optimizada', icon: Database, color: COLORS.orange },
          ].map((card, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${card.color}20`, color: card.color }}>
                  <card.icon size={22} />
                </div>
                <h4 className="font-black text-sm uppercase tracking-widest text-gray-800">
                  {card.title}
                </h4>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Impacto directo en control, eficiencia y confianza a lo largo de toda la cadena de valor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- SECCIÓN SERVICIOS ---
const Services = () => {
  const sections = [
    {
      title: 'Programas de Prerrequisitos (PPR)',
      icon: Settings,
      color: COLORS.blue,
      desc: 'Nuestra primera barrera para el control de riesgos inherentes al proceso.',
      items: [
        { text: 'POES: Saneamiento Estandarizado', icon: Droplets },
        { text: 'BPM: Buenas Prácticas de Manufactura', icon: Users },
        { text: 'MIP: Manejo Integrado de Plagas', icon: Bug },
        { text: 'Control de Alérgenos y Químicos', icon: AlertCircle },
        { text: 'Trazabilidad y Recogida de Producto', icon: Database },
        { text: 'Control del Agua y Mantenimiento', icon: Droplets }
      ]
    },
    {
      title: 'Auditorías e Inspecciones',
      icon: Search,
      color: COLORS.green,
      desc: 'Revisión sistemática para evaluar el cumplimiento de normas vigentes.',
      items: [
        { text: 'Auditorías Internas', icon: ClipboardCheck },
        { text: 'Controles Oficiales (RE / BPM)', icon: Scale },
        { text: 'Validación de Sistemas HACCP', icon: ShieldCheck },
        { text: 'Auditorías ISO 22000, BRC, IFS', icon: Award },
        { text: 'Homologación de Proveedores', icon: Truck },
        { text: 'Auditorías de Diagnóstico Inicial', icon: Search }
      ]
    },
    {
      title: 'Consultoría Estratégica',
      icon: Users,
      color: COLORS.orange,
      desc: 'Soluciones efectivas integrándonos como parte de su equipo de trabajo.',
      items: [
        { text: 'Implementación HACCP / FSSC 22000', icon: Settings },
        { text: 'Gestión de Crisis Alimentarias', icon: AlertCircle },
        { text: 'Asesoría a Cadenas de Distribución', icon: Building2 },
        { text: 'Estrategias de Reducción de Riesgos', icon: ShieldCheck },
        { text: 'Optimización de Procesos y Costos', icon: Star },
        { text: 'Apoyo a Hoteles y Gastronomía', icon: Building2 }
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Servicios <span style={{ color: COLORS.blue }}>Técnicos</span></h2>
          <div className="h-1.5 w-24 mx-auto rounded-full flex overflow-hidden">
             <div className="h-full w-1/3" style={{ backgroundColor: COLORS.blue }}></div>
             <div className="h-full w-1/3" style={{ backgroundColor: COLORS.green }}></div>
             <div className="h-full w-1/3" style={{ backgroundColor: COLORS.orange }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((s, idx) => (
            <div key={idx} className="bg-gray-50 p-10 rounded-[3rem] border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:-translate-y-2 transition-transform" style={{ backgroundColor: s.color }}>
                <s.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight">{s.title}</h3>
              <p className="text-gray-500 mb-8 font-medium text-sm leading-relaxed">{s.desc}</p>
              <ul className="space-y-4">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-bold text-gray-700 group/item">
                    <div className="p-1.5 rounded-lg bg-white shadow-sm mt-0.5 group-hover/item:scale-110 transition-transform">
                        <item.icon size={14} style={{ color: s.color }} className="shrink-0" />
                    </div>
                    <span className="group-hover/item:text-gray-900 transition-colors leading-tight">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SECCIÓN CAPACITACIONES ---
const Training = () => {
  const modules = [
    { name: 'Buenas Prácticas de Manipulación', icon: Users },
    { name: 'Alergias e Intolerancias', icon: AlertCircle },
    { name: 'HACCP e ISO 22000', icon: ShieldCheck },
    { name: 'Etiquetado de Alimentos', icon: FileText },
    { name: 'Limpieza y Desinfección', icon: Droplets },
    { name: 'Food Defense', icon: ShieldCheck },
    { name: 'Trazabilidad Industrial', icon: Database },
    { name: 'Manejo de Plagas (MIP)', icon: Bug },
    { name: 'Microbiología Aplicada', icon: Beaker },
    { name: 'Higiene Personal', icon: Users }
  ];

  return (
    <section id="capacitaciones" className="py-24" style={{ backgroundColor: COLORS.blue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Izquierda: Texto + Info + Módulos */}
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Formación del Personal: <span style={{ color: COLORS.orange }}>Clave del Éxito</span>
            </h2>
            <p className="text-blue-50 text-xl mb-12 leading-relaxed opacity-90 font-medium">
              Invertir en capacitación es fundamental para obtener resultados. Desarrollamos programas didácticos a medida con profesionales habilitados por el MSP y BS.
            </p>
            
            {/* Tarjetas Metodología y Flexibilidad */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/10 border border-white/20 p-8 rounded-[2rem] backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4 text-orange-400">
                  <Star size={24} />
                  <h4 className="font-black text-white uppercase text-xs tracking-widest">Metodología</h4>
                </div>
                <p className="text-sm text-blue-100 font-medium leading-relaxed">Charlas, ejercicios didácticos, prácticas in situ y casos reales de discusión.</p>
              </div>
              <div className="bg-white/10 border border-white/20 p-8 rounded-[2rem] backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4 text-orange-400">
                  <Clock size={24} />
                  <h4 className="font-black text-white uppercase text-xs tracking-widest">Flexibilidad</h4>
                </div>
                <p className="text-sm text-blue-100 font-medium leading-relaxed">Nos adaptamos a las fechas y horarios operativos de su empresa.</p>
              </div>
            </div>

            {/* Lista de Módulos */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative text-gray-900">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                  <div className="w-2 h-10 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  Módulos Destacados
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modules.map((m, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-blue-50 hover:border-blue-100 transition-all cursor-default">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                        <m.icon size={16} />
                      </div>
                      <span className="text-xs font-black text-gray-700 uppercase tracking-tight leading-tight">{m.name}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          {/* Derecha: Solo fotos (Mosaico) */}
          <div className="sticky top-24">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group rounded-2xl overflow-hidden mt-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/capacitacion1.jpeg`}
                  alt="Capacitación 1"
                  className="w-full h-40 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden mt-12">
                <img
                  src={`${import.meta.env.BASE_URL}images/capacitacion2.jpeg`}
                  alt="Capacitación 2"
                  className="w-full h-40 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden -mt-12">
                <img
                  src={`${import.meta.env.BASE_URL}images/capacitacion3.jpeg`}
                  alt="Capacitación 3"
                  className="w-full h-40 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden mt-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/capacitacion4.jpeg`}
                  alt="Capacitación 4"
                  className="w-full h-40 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- SECCIÓN REGISTROS ---
const Registrations = () => {
  return (
    <section id="registros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[4.5rem] p-10 lg:p-20 relative overflow-hidden border border-gray-100 shadow-sm">
          <div className="relative z-10 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Trámites y <br/> <span style={{ color: COLORS.green }}>Registros Sanitarios</span></h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                Gestión profesional ante DINAVISA, SENACSA y otros entes de control para asegurar la legalidad operativa de sus productos.
              </p>
              <div className="space-y-4">
                {[
                  { text: 'Registro de Establecimiento (R.E.)', icon: Building2 },
                  { text: 'Sanitarios de Productos (R.S.P.A.)', icon: Beaker },
                  { text: 'Registro Nacional de Envases (RNE)', icon: Database },
                  { text: 'Certificación BPM / BPA', icon: Award },
                  { text: 'Habilitación de Transportes', icon: Truck }
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 font-bold text-gray-800 hover:translate-x-2 transition-transform group">
                    <div className="p-2 rounded-xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <t.icon size={20} />
                    </div>
                    {t.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                <div className="p-10 bg-white rounded-[3.5rem] shadow-sm border border-gray-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5"><Search size={80} /></div>
                  <h4 className="font-black text-xl mb-6" style={{ color: COLORS.blue }}>Gestión DINAVISA / INAN</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed font-medium text-sm">Realizamos el seguimiento riguroso de cada expediente hasta la concesión definitiva de los documentos legales.</p>
                  <div className="flex flex-wrap gap-3">
                    {['DINAVISA', 'SENACSA', 'MSP y BS', 'INAN'].map((tag, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-500 border border-gray-100">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-10 bg-white rounded-[3.5rem] shadow-sm border border-gray-100 border-l-[12px] group" style={{ borderLeftColor: COLORS.orange }}>
                  <h4 className="font-black text-xl mb-6">Habilitaciones SENACSA</h4>
                  <p className="text-gray-600 leading-relaxed font-medium text-sm">Gestión de registro de firma, empresa y habilitación de depósitos. Seguimiento integral hasta la concesión del documento.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SECCIÓN CONTACTO ---
const Contact = () => {
  const staff = [
    { name: 'Patricia Nuñez', tel: '0984 218 241', wa: '595984218241' },
    { name: 'Lorena Blasco', tel: '0981 426 827', wa: '595981426827' },
    { name: 'Ada Valiente', tel: '0981 160 036', wa: '595981160036' }
  ];

  return (
    <section id="contacto" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none">
              Aliados en <br />
              <span style={{ color: COLORS.blue }}>Crecimiento</span>
            </h2>
            <p className="text-gray-400 text-xl mb-14 leading-relaxed max-w-lg font-medium">
              Los resultados de nuestros clientes son nuestros resultados. Apuntamos a la excelencia en cada proceso llevado a cabo.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                  <MapPin size={32} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2">Dirección Central</h4>
                  <p className="text-gray-400 font-medium">Cassianoff 527 esquina Lillo, Asunción, Paraguay</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                  <Phone size={32} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-center font-black text-xl mb-8 uppercase tracking-widest text-xs opacity-50">
                    Nuestros Especialistas
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {staff.map((s, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 px-6 py-5 rounded-[2rem] hover:bg-white/10 transition-all group w-full text-center"
                      >
                        <div className="font-bold text-gray-300 group-hover:text-white transition-colors leading-snug">
                          {s.name}
                        </div>
                        <div
                          className="mt-2 font-black text-lg sm:text-xl tabular-nums tracking-tight"
                          style={{ color: COLORS.green }}
                        >
                          {s.tel}
                        </div>

                        <a
                          href={`https://wa.me/${s.wa}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
                          style={{ backgroundColor: COLORS.green }}
                        >
                          <Phone size={16} />
                          WhatsApp
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[4.5rem] shadow-2xl text-gray-900 border-[14px] border-gray-100">
            <div className="mb-12">
              <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter" style={{ color: COLORS.blue }}>
                Consultoría
              </h3>
              <p className="text-gray-500 font-bold text-lg leading-tight">
                Analizamos su caso y proyectamos soluciones técnicas inmediatas.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 block ml-4">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-blue-100 outline-none font-bold"
                    placeholder="Razón Social"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 block ml-4">Rubro</label>
                  <input
                    type="text"
                    className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-blue-100 outline-none font-bold"
                    placeholder="Rubro de la empresa"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 block ml-4">Email</label>
                <input type="email" className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-blue-100 outline-none font-bold" placeholder="correo@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 block ml-4">Mensaje</label>
                <textarea rows="4" className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-blue-100 outline-none font-bold resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
              </div>
              <button type="button" style={{ backgroundColor: COLORS.blue }} className="w-full py-6 rounded-[2.5rem] text-white font-black text-xl shadow-2xl hover:brightness-110 active:scale-95 transition-all uppercase tracking-[0.2em] mt-4">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 90;
    const bodyTop = document.body.getBoundingClientRect().top;
    const elTop = el.getBoundingClientRect().top;
    const pos = elTop - bodyTop - offset;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-500 py-24 relative overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-gray-900 pb-20">
          <div className="max-w-md">
            {/* Logo en footer */}
            <div className="mb-10">
              <img
                src={`${import.meta.env.BASE_URL}images/logoremoved.png`}
                alt="Alimento Seguro Consultores"
                className="h-20 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="sr-only">ALIMENTO SEGURO CONSULTORES</span>
            </div>

            <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8">
              Referencia nacional en Paraguay para la gestión técnica de inocuidad y calidad de alimentos. Inocuidad que genera competitividad.
            </p>
            <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/alimento_seguro_consultores/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/5 shadow-lg"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/alimentoseguropy/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/5 shadow-lg"
                >
                  <Facebook size={24} />
                </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.5em] mb-10 opacity-30">Secciones</h4>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
                <li><button onClick={() => scrollToId('inicio')} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Inicio</button></li>
                <li><button onClick={() => scrollToId('nosotros')} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Nosotros</button></li>
                <li><button onClick={() => scrollToId('servicios')} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Servicios</button></li>
                <li><button onClick={() => scrollToId('capacitaciones')} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Capacitaciones</button></li>
                <li><button onClick={() => scrollToId('registros')} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Registros</button></li>
                <li><button onClick={() => scrollToId('contacto')} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Contacto</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.5em] mb-10 opacity-30">Asunción</h4>
              <p className="text-sm font-bold text-gray-400 leading-relaxed uppercase tracking-widest italic">
                  Cassianoff 527 esq. Lillo<br/>
                  Paraguay
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.5em] text-gray-700">
            © 2026 Alimento Seguro Consultores · Todos los derechos reservados
          </p>
        </div>

        {/* Última línea propia (dos líneas centradas) */}
        <div className="mt-10 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-600">
            Desarrollado por
          </p>
          <a
            href="https://tuwebpy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
          >
            TuWebPy
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Ensure assets work under GitHub Pages base path (e.g. /alimentoseguro/)
  const ASSET_BASE = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    // Helpful to see in DevTools console on GitHub Pages
    console.log('[App] mounted', { BASE_URL: import.meta.env.BASE_URL, location: window.location.href });
  }, []);

  useEffect(() => {
    const el = document.getElementById(activeSection);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero onCtaClick={setActiveSection} />
      <About />
      <FoodSafetyBrief />
      <Services />
      <Training />
      <Registrations />
      <Contact />
      <Footer />

      {/* Botón flotante WhatsApp (Colores del logo) */}
      <a
        href="https://wa.me/595984218241"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: COLORS.green }}
        className="fixed bottom-10 right-10 text-white p-6 rounded-[2.8rem] shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center border-4 border-white group"
      >
        <Phone size={36} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-5 transition-all duration-700 font-black whitespace-nowrap text-sm uppercase tracking-[0.3em]">Contáctenos</span>
      </a>
    </div>
  );
}