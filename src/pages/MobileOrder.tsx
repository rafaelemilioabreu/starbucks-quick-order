
import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Navbar from '../components/layout/Navbar';
import MobileOrderForm from '../components/mobile-order/MobileOrderForm';
import { Coffee, MapPin, Code } from 'lucide-react';

const MobileOrder = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-16 h-16 bg-starbucks-lightgreen rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="h-8 w-8 text-starbucks-darkgreen" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Personaliza y ordena tu café
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Crea tu pedido a la medida, paga en línea y recógelo sin esperar en fila
            </p>
            <div className="flex items-center justify-center text-sm text-starbucks-darkgreen">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Selecciona una ubicación para recoger tu pedido</span>
            </div>
          </div>
          
          <MobileOrderForm />
          
          {/* Developer Credits Section */}
          <div className="mt-20 mb-10 border-t pt-8">
            <div className="flex items-center justify-center text-starbucks-darkgreen mb-4">
              <Code className="h-5 w-5 mr-2" />
              <h2 className="text-xl font-semibold">Desarrollado por</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto text-center">
              <div className="bg-starbucks-lightgreen/30 px-5 py-3 rounded-lg">
                <p className="font-medium">Carlos Polanco</p>
                <p className="text-sm text-muted-foreground">23-1102</p>
              </div>
              <div className="bg-starbucks-lightgreen/30 px-5 py-3 rounded-lg">
                <p className="font-medium">Joan de Jesús</p>
                <p className="text-sm text-muted-foreground">23-1122</p>
              </div>
              <div className="bg-starbucks-lightgreen/30 px-5 py-3 rounded-lg">
                <p className="font-medium">Mario Guzmán</p>
                <p className="text-sm text-muted-foreground">23-1061</p>
              </div>
              <div className="bg-starbucks-lightgreen/30 px-5 py-3 rounded-lg">
                <p className="font-medium">Rafael Abreu</p>
                <p className="text-sm text-muted-foreground">23-1058</p>
              </div>
              <div className="bg-starbucks-lightgreen/30 px-5 py-3 rounded-lg">
                <p className="font-medium">Katherine Langumás</p>
                <p className="text-sm text-muted-foreground">23-1045</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default MobileOrder;
