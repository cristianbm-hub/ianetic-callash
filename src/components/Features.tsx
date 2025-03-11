
import React, { useEffect, useRef } from 'react';
import { MessageCircle, Calendar, PhoneCall, Bot, Building, HeadphonesIcon, Mic, Zap, Clock, Languages, CheckCircle2 } from 'lucide-react';

const Features = () => {
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
      id="features" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 slide-in-section"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-ianetic-100 text-ianetic-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            <span>Características Principales</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluciones <span className="text-gradient">inteligentes</span> para la comunicación empresarial
          </h2>
          
          <p className="text-gray-600 text-lg">
            Nuestros asistentes telefónicos con IA están diseñados para transformar la forma en que tu negocio gestiona las llamadas y mejora la experiencia del cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-lift">
            <div className="w-12 h-12 rounded-full bg-ianetic-100 flex items-center justify-center mb-6">
              <PhoneCall className="w-6 h-6 text-ianetic-600" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Asistentes telefónicos IA</h3>
            
            <p className="text-gray-600 mb-4">
              Automatiza la atención telefónica con asistentes que entienden el lenguaje natural y mantienen conversaciones fluidas.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Comprensión contextual avanzada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Respuestas personalizadas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Voz natural y expresiva</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-lift">
            <div className="w-12 h-12 rounded-full bg-ianetic-100 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-ianetic-600" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Gestión de reservas</h3>
            
            <p className="text-gray-600 mb-4">
              Sistema completo para gestionar reservas de mesas, citas y servicios con confirmaciones automáticas.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Sincronización con calendarios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Recordatorios automáticos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Gestión de cancelaciones</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-lift">
            <div className="w-12 h-12 rounded-full bg-ianetic-100 flex items-center justify-center mb-6">
              <Building className="w-6 h-6 text-ianetic-600" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Soluciones inmobiliarias</h3>
            
            <p className="text-gray-600 mb-4">
              Asistentes especializados para responder consultas sobre propiedades y programar visitas a inmuebles.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Información detallada de propiedades</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Agenda de visitas automatizada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Seguimiento a clientes potenciales</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-lift">
            <div className="w-12 h-12 rounded-full bg-ianetic-100 flex items-center justify-center mb-6">
              <HeadphonesIcon className="w-6 h-6 text-ianetic-600" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Soporte técnico 24/7</h3>
            
            <p className="text-gray-600 mb-4">
              Asistentes que resuelven problemas técnicos comunes y escalan a agentes humanos cuando es necesario.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Resolución de problemas comunes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Transferencia inteligente a humanos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Seguimiento de tickets</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-lift">
            <div className="w-12 h-12 rounded-full bg-ianetic-100 flex items-center justify-center mb-6">
              <Mic className="w-6 h-6 text-ianetic-600" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Reconocimiento avanzado</h3>
            
            <p className="text-gray-600 mb-4">
              Sistema de reconocimiento de voz que entiende acentos, dialectos y expresiones coloquiales con alta precisión.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Adaptación a diferentes acentos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Comprensión contextual</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Precisión superior al 98%</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover-lift">
            <div className="w-12 h-12 rounded-full bg-ianetic-100 flex items-center justify-center mb-6">
              <Languages className="w-6 h-6 text-ianetic-600" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Multilingüe</h3>
            
            <p className="text-gray-600 mb-4">
              Asistentes que hablan múltiples idiomas, permitiendo atender a clientes internacionales sin barreras lingüísticas.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Más de 20 idiomas disponibles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Traducción en tiempo real</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-ianetic-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Adaptación cultural</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block glass-morphism rounded-xl p-6 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Todo integrado en una solución completa</h3>
            <p className="text-gray-600 mb-6">
              Nuestra plataforma se integra fácilmente con tus sistemas existentes, ofreciendo una transición sencilla hacia la automatización inteligente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-ianetic-50 px-4 py-2 rounded-full text-sm text-ianetic-700">CRM</div>
              <div className="bg-ianetic-50 px-4 py-2 rounded-full text-sm text-ianetic-700">ERP</div>
              <div className="bg-ianetic-50 px-4 py-2 rounded-full text-sm text-ianetic-700">Calendarios</div>
              <div className="bg-ianetic-50 px-4 py-2 rounded-full text-sm text-ianetic-700">Centralitas</div>
              <div className="bg-ianetic-50 px-4 py-2 rounded-full text-sm text-ianetic-700">API personalizadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
