
import { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, CoffeeIcon, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const QRCodeScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [tableNumber, setTableNumber] = useState<number | null>(null);
  
  const startScanning = () => {
    setIsScanning(true);
    // Simulate QR code scan after 2 seconds
    setTimeout(() => {
      setIsScanning(false);
      setScanned(true);
      setTableNumber(12); // Simulated table number
    }, 2000);
  };
  
  const resetScanner = () => {
    setScanned(false);
    setTableNumber(null);
  };
  
  return (
    <div className="max-w-md mx-auto">
      {!scanned ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-subtle border border-border/50"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-starbucks-lightgreen rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="h-8 w-8 text-starbucks-darkgreen" />
            </div>
            <h2 className="text-xl font-semibold">Escanea el código QR</h2>
            <p className="text-muted-foreground mt-2">
              Encuentra el código QR en tu mesa y escanéalo para ordenar sin levantarte
            </p>
          </div>
          
          <div className={cn(
            "w-full aspect-square rounded-lg overflow-hidden relative mb-6",
            isScanning ? "border-2 border-dashed border-starbucks-green/70 p-1" : "bg-muted"
          )}>
            {isScanning ? (
              <div className="w-full h-full relative flex items-center justify-center bg-black">
                <video 
                  className="w-full h-full object-cover opacity-70"
                  autoPlay
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-starbucks-green/80 rounded-lg relative">
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-0.5 bg-starbucks-green" 
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                  Buscando código QR...
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground p-4">
                <QrCode className="h-10 w-10 mb-4" />
                <p className="text-center text-sm">Presiona el botón para activar la cámara y escanear</p>
              </div>
            )}
          </div>
          
          <button
            onClick={startScanning}
            disabled={isScanning}
            className={cn(
              "w-full py-3 px-4 rounded-xl flex items-center justify-center space-x-2 font-medium transition-colors",
              isScanning 
                ? "bg-muted text-muted-foreground cursor-not-allowed" 
                : "bg-starbucks-green hover:bg-starbucks-green/90 text-white"
            )}
          >
            {isScanning ? (
              <>
                <Search className="h-5 w-5 animate-pulse" />
                <span>Escaneando...</span>
              </>
            ) : (
              <>
                <QrCode className="h-5 w-5" />
                <span>Escanear código QR</span>
              </>
            )}
          </button>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              También puedes ingresar manualmente el número de mesa
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-starbucks-lightgreen rounded-xl p-6 shadow-subtle"
        >
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
              <CoffeeIcon className="h-6 w-6 text-starbucks-green" />
            </div>
            <button 
              onClick={resetScanner}
              className="rounded-full p-2 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="text-center mt-4 mb-6">
            <h2 className="text-2xl font-semibold text-starbucks-darkgreen">
              ¡Código escaneado!
            </h2>
            <p className="mt-2 text-starbucks-darkgreen/80">
              Mesa #{tableNumber}
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6">
            <p className="text-sm text-starbucks-darkgreen">
              Ahora puedes ordenar directamente desde tu mesa sin levantarte. Tus bebidas serán entregadas directamente a la mesa #{tableNumber}.
            </p>
          </div>
          
          <button
            onClick={() => window.location.href = "/mobile-order?table=" + tableNumber}
            className="w-full py-3 px-4 rounded-xl bg-starbucks-green hover:bg-starbucks-green/90 text-white font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <CoffeeIcon className="h-5 w-5" />
            <span>Ordenar ahora</span>
          </button>
          
          <div className="mt-4 p-3 bg-white/50 rounded-lg flex items-center justify-between">
            <div className="text-xs text-starbucks-darkgreen">¿Necesitas ayuda?</div>
            <button className="text-xs font-medium text-starbucks-green hover:underline">
              Llamar a un barista
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QRCodeScanner;
