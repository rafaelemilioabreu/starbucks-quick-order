
import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Navbar from '../components/layout/Navbar';
import QRCodeScanner from '../components/qr-order/QRCodeScanner';
import { QrCode } from 'lucide-react';

const QROrder = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <QrCode className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Escanea el código QR de tu mesa
            </h1>
            <p className="text-lg text-muted-foreground">
              Ordena cómodamente desde tu mesa sin tener que hacer fila
            </p>
          </div>
          
          <QRCodeScanner />
          
          <div className="mt-12 bg-white p-6 rounded-xl border border-border/50 shadow-subtle max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4">¿Cómo funciona?</h2>
            <ol className="space-y-4 pl-5 list-decimal text-muted-foreground">
              <li className="pl-2">
                <span className="text-foreground font-medium">Encuentra una mesa</span>
                <p className="mt-1 text-sm">Siéntate en cualquier mesa disponible de la tienda</p>
              </li>
              <li className="pl-2">
                <span className="text-foreground font-medium">Escanea el código QR</span>
                <p className="mt-1 text-sm">Cada mesa tiene un código QR único. Escanéalo con la cámara de tu teléfono</p>
              </li>
              <li className="pl-2">
                <span className="text-foreground font-medium">Personaliza tu orden</span>
                <p className="mt-1 text-sm">Selecciona tus bebidas favoritas y personalízalas a tu gusto</p>
              </li>
              <li className="pl-2">
                <span className="text-foreground font-medium">Paga desde la app</span>
                <p className="mt-1 text-sm">Realiza el pago utilizando tu método de pago preferido</p>
              </li>
              <li className="pl-2">
                <span className="text-foreground font-medium">Recibe tu pedido en la mesa</span>
                <p className="mt-1 text-sm">Un barista te entregará tu orden directamente en tu mesa</p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default QROrder;
