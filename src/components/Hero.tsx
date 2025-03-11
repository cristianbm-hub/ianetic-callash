
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Bot, MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-ianetic-200 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-ianetic-100 blur-3xl animate-float animation-delay-500"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-8 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ianetic-100 text-ianetic-700 text-sm font-medium mb-2 self-start opacity-0 animate-fadeIn">
              <Bot className="w-4 h-4 mr-2" />
              <span>Inteligencia Artificial de Vanguardia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-slideUp animate-delay-200">
              Asistentes telefónicos <span className="text-gradient">inteligentes</span> para tu negocio
            </h1>
            
            <p className="text-lg text-gray-600 opacity-0 animate-slideUp animate-delay-400 max-w-lg">
              Transforma la forma en que tu empresa gestiona las llamadas con asistentes AI personalizados, que automatizan reservas, consultas y atención al cliente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-slideUp animate-delay-600">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ianetic-500 text-white font-medium text-base hover:bg-ianetic-600 transition-all shadow-lg hover:shadow-xl"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <a 
                href="#features" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium text-base hover:bg-gray-50 transition-colors"
              >
                Conocer más
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 opacity-0 animate-slideUp animate-delay-800">
              <div className="text-center">
                <p className="text-3xl font-bold text-ianetic-600">98%</p>
                <p className="text-sm text-gray-500">Precisión en respuestas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-ianetic-600">24/7</p>
                <p className="text-sm text-gray-500">Disponibilidad</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-ianetic-600">+200</p>
                <p className="text-sm text-gray-500">Empresas confían</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="relative opacity-0 animate-slideRight animate-delay-400">
            <div className="relative z-10 glass-morphism rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-auto text-sm text-gray-500">Asistente IA</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-ianetic-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-ianetic-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm max-w-xs">
                    ¿En qué puedo ayudarle hoy?
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-ianetic-500 text-white rounded-lg rounded-tr-none p-3 text-sm max-w-xs">
                    Quisiera reservar una mesa para 4 personas este viernes a las 8 PM.
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-ianetic-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-ianetic-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm max-w-xs">
                    Perfecto. He reservado una mesa para 4 personas este viernes a las 8 PM. ¿Desea añadir alguna solicitud especial?
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-ianetic-500 text-white rounded-lg rounded-tr-none p-3 text-sm max-w-xs">
                    No, muchas gracias.
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-ianetic-400"></div>
                  <div className="w-2 h-2 rounded-full bg-ianetic-400"></div>
                  <div className="w-2 h-2 rounded-full bg-ianetic-400"></div>
                  <span className="text-xs text-gray-400">IA procesando...</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 -bottom-6 -left-6 bg-gradient-to-br from-ianetic-200 to-ianetic-50 rounded-2xl -z-10 blur-lg opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
