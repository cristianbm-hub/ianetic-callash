
import React, { useEffect, useRef } from 'react';
import { Utensils, Building, Stethoscope, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="case-studies"
      ref={sectionRef}
      className="py-20 bg-white slide-in-section"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aplicaciones por <span className="text-gradient">industria</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Descubre cómo nuestros asistentes telefónicos IA están transformando diferentes sectores empresariales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case Study 1 - Restaurants */}
          <div className="overflow-hidden rounded-xl shadow-lg group hover-lift">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-ianetic-400/20 to-ianetic-900/60"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute left-6 bottom-6 flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-ianetic-600" />
                </div>
                <h3 className="text-xl font-bold text-white">Restaurantes</h3>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <p className="text-gray-600 mb-6">
                Automatiza las reservas de mesas, gestiona pedidos a domicilio y responde a consultas sobre el menú, horarios o eventos especiales.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Reservas de mesas automáticas</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Pedidos a domicilio sin errores</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Información actualizada del menú</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#contact" className="inline-flex items-center text-ianetic-600 font-medium text-sm group">
                  Ver demostración
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Case Study 2 - Real Estate */}
          <div className="overflow-hidden rounded-xl shadow-lg group hover-lift">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-ianetic-400/20 to-ianetic-900/60"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute left-6 bottom-6 flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Building className="w-5 h-5 text-ianetic-600" />
                </div>
                <h3 className="text-xl font-bold text-white">Inmobiliarias</h3>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <p className="text-gray-600 mb-6">
                Responde a consultas sobre propiedades disponibles, programa visitas y recopila información de posibles compradores o arrendatarios.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Consultas detalladas de propiedades</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Programación de visitas sin conflictos</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Captación de leads cualificados</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#contact" className="inline-flex items-center text-ianetic-600 font-medium text-sm group">
                  Ver demostración
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Case Study 3 - Healthcare */}
          <div className="overflow-hidden rounded-xl shadow-lg group hover-lift">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-ianetic-400/20 to-ianetic-900/60"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute left-6 bottom-6 flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-ianetic-600" />
                </div>
                <h3 className="text-xl font-bold text-white">Sector Médico</h3>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <p className="text-gray-600 mb-6">
                Gestiona citas médicas, recordatorios, consultas frecuentes y realiza triage inicial para dirigir pacientes adecuadamente.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Programación de citas optimizada</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Recordatorios automáticos</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ianetic-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">Triage inicial eficiente</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#contact" className="inline-flex items-center text-ianetic-600 font-medium text-sm group">
                  Ver demostración
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-ianetic-50 to-ianetic-100 rounded-2xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ianetic-200 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-ianetic-300 rounded-full -ml-20 -mb-20 opacity-30"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Y muchas más aplicaciones para tu industria
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              Nuestro equipo de expertos puede personalizar asistentes telefónicos IA para cualquier sector empresarial, adaptados a tus necesidades específicas.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ianetic-500 text-white font-medium text-base hover:bg-ianetic-600 transition-all shadow-lg hover:shadow-xl"
            >
              Consulta para tu industria
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
