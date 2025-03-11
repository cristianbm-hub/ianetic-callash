
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-gradient">ianetic</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Transformamos la comunicación empresarial con asistentes telefónicos IA que automatizan tareas, mejoran la experiencia del cliente y optimizan recursos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-ianetic-100 hover:text-ianetic-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-ianetic-100 hover:text-ianetic-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-ianetic-100 hover:text-ianetic-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-ianetic-100 hover:text-ianetic-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-ianetic-600 transition-colors">Asistentes telefónicos</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-ianetic-600 transition-colors">Gestión de reservas</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-ianetic-600 transition-colors">Soluciones inmobiliarias</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-ianetic-600 transition-colors">Soporte técnico 24/7</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-ianetic-600 transition-colors">Integración multi-idioma</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-ianetic-600 transition-colors">Sobre nosotros</a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-600 hover:text-ianetic-600 transition-colors">Casos de éxito</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-ianetic-600 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-ianetic-600 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-ianetic-600 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ianetic. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-gray-500 hover:text-ianetic-600 transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-ianetic-600 transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-ianetic-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
