
import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import { ArrowRight, Coffee, CookingPot, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlurImage from '../components/ui/BlurImage';

const Index = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        
        {/* Showcase Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-starbucks-lightgreen text-starbucks-darkgreen inline-block mb-4">
                  Ordena desde tu móvil
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Ordena por adelantado y evita las filas
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Personaliza tu bebida, programa la hora de recogida y paga desde la aplicación. Recibe notificaciones sobre el estado de tu pedido y acumula puntos de fidelidad.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-starbucks-lightgreen w-8 h-8 rounded-full flex items-center justify-center">
                      <Coffee className="h-4 w-4 text-starbucks-darkgreen" />
                    </div>
                    <div>
                      <h3 className="font-medium">Personalización completa</h3>
                      <p className="text-muted-foreground text-sm">Ajusta cada detalle de tu bebida según tus preferencias.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-starbucks-lightgreen w-8 h-8 rounded-full flex items-center justify-center">
                      <CookingPot className="h-4 w-4 text-starbucks-darkgreen" />
                    </div>
                    <div>
                      <h3 className="font-medium">Preparación anticipada</h3>
                      <p className="text-muted-foreground text-sm">Tu bebida comienza a prepararse justo a tiempo para tu llegada.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-starbucks-lightgreen w-8 h-8 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-starbucks-darkgreen" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ahorra tiempo</h3>
                      <p className="text-muted-foreground text-sm">Entra, recoge tu pedido y sal en menos de un minuto.</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/mobile-order" 
                  className="inline-flex items-center text-starbucks-green hover:text-starbucks-darkgreen transition-colors font-medium"
                >
                  Ordenar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elevation h-[500px]">
                  <BlurImage
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1337&q=80"
                    alt="Mobile ordering"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-starbucks-lightgreen rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -z-10 top-12 -left-6 w-24 h-24 bg-starbucks-green/20 rounded-full opacity-60 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* QR Code Section */}
        <section className="py-24 bg-starbucks-lightgreen/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elevation h-[500px]">
                  <BlurImage
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
                    alt="QR code on table"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-starbucks-lightgreen rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -z-10 bottom-12 -right-6 w-24 h-24 bg-starbucks-green/20 rounded-full opacity-60 blur-xl"></div>
              </div>
              
              <div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 inline-block mb-4">
                  Escanea y ordena
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Escanea el código QR de tu mesa
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Encuentra una mesa, escanea el código QR y ordena sin tener que hacer fila. Tus bebidas serán entregadas directamente a tu mesa.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center">
                      <QrCode className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Fácil y rápido</h3>
                      <p className="text-muted-foreground text-sm">Escanea, ordena y paga en menos de un minuto.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center">
                      <CookingPot className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Servicio a la mesa</h3>
                      <p className="text-muted-foreground text-sm">Tus bebidas llegan directamente a tu mesa.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Sin esperar en fila</h3>
                      <p className="text-muted-foreground text-sm">Disfruta de tu visita sin perder tiempo en filas.</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/qr-order" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  Probar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer CTA */}
        <section className="py-20 bg-starbucks-darkgreen text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
              Disfruta de la nueva experiencia Starbucks
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Descubre todas las formas en que hemos rediseñado la experiencia en nuestras tiendas para ofrecerte mayor comodidad, personalización y velocidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/mobile-order" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-white text-starbucks-darkgreen hover:bg-white/90 transition-colors hover-lift"
              >
                Ordenar ahora
              </Link>
              <Link 
                to="/qr-order" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-white text-white hover:bg-white/10 transition-colors hover-lift"
              >
                Escanear QR
              </Link>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-white border-t border-border/40">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-starbucks-green flex items-center justify-center">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-xl tracking-tight">Starbucks</span>
              </div>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-end">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Términos y condiciones</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacidad</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ayuda</a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Starbucks Coffee Company. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default Index;
