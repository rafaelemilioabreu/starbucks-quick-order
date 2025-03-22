
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlurImage from '../ui/BlurImage';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#d4e9e2_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container px-4 md:px-6 py-16 pt-32 md:pt-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-starbucks-lightgreen text-starbucks-darkgreen inline-block"
              >
                Experiencia Renovada
              </motion.span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-none"
            >
              Tu café favorito, <br />
              <span className="text-starbucks-green">sin esperas</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Ordena por adelantado, escanea códigos QR desde tu mesa, o deja que nuestra IA prediga tu bebida favorita.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link 
                to="/mobile-order" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-starbucks-green text-white hover:bg-starbucks-green/90 transition-colors hover-lift"
              >
                Ordenar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/qr-order" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-starbucks-green text-starbucks-green hover:bg-starbucks-lightgreen/50 transition-colors hover-lift"
              >
                Escanear QR
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-elevation">
              <BlurImage
                src="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Starbucks coffee with mobile order"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-10 -right-10 md:bottom-10 md:right-10 glass rounded-xl shadow-glass p-4 max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-starbucks-green/10 flex items-center justify-center">
                    <Coffee className="h-5 w-5 text-starbucks-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Latte Grande</h3>
                    <p className="text-xs text-muted-foreground">Listo en 3 minutos</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-starbucks-lightgreen rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -z-10 bottom-12 -left-6 w-32 h-32 bg-starbucks-green/20 rounded-full opacity-60 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
