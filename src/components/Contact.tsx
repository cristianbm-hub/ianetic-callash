
import React, { useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white slide-in-section"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforma tu <span className="text-gradient">comunicación empresarial</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Contacta con nosotros para una demostración personalizada o para resolver cualquier duda sobre nuestras soluciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Solicita una demostración</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ianetic-500 focus:border-ianetic-500 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ianetic-500 focus:border-ianetic-500 outline-none transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ianetic-500 focus:border-ianetic-500 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ianetic-500 focus:border-ianetic-500 outline-none transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Industria
                </label>
                <select
                  id="industry"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ianetic-500 focus:border-ianetic-500 outline-none transition-all"
                >
                  <option value="">Selecciona tu industria</option>
                  <option value="restauración">Restauración</option>
                  <option value="inmobiliaria">Inmobiliaria</option>
                  <option value="médica">Sector Médico</option>
                  <option value="retail">Retail</option>
                  <option value="educación">Educación</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ianetic-500 focus:border-ianetic-500 outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tus necesidades..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-ianetic-500 text-white font-medium text-base hover:bg-ianetic-600 transition-all shadow-lg hover:shadow-xl"
              >
                Solicitar demo
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-gradient-to-br from-ianetic-500 to-ianetic-700 rounded-xl shadow-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-ianetic-100 mb-1">Teléfono</p>
                    <p className="font-medium">+34 910 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-ianetic-100 mb-1">Email</p>
                    <p className="font-medium">info@ianetic.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-ianetic-100 mb-1">Ubicación</p>
                    <p className="font-medium">Calle de la Innovación, 42</p>
                    <p>28001, Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">¿Por qué ianetic?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-ianetic-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-ianetic-600 font-bold">1</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Tecnología de vanguardia.</span> Utilizamos los modelos de IA más avanzados para una experiencia natural.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-ianetic-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-ianetic-600 font-bold">2</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Personalización completa.</span> Adaptamos cada solución a las necesidades específicas de tu negocio.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-ianetic-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-ianetic-600 font-bold">3</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Soporte continuo.</span> Nuestro equipo está disponible para ayudarte en cada paso del proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
