
import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Navbar from '../components/layout/Navbar';
import { Code } from 'lucide-react';

const Credits = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="w-16 h-16 bg-starbucks-lightgreen rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="h-8 w-8 text-starbucks-darkgreen" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Desarrolladores
            </h1>
            <p className="text-lg text-muted-foreground">
              Conoce al equipo que hizo posible esta aplicación
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-starbucks-lightgreen/20 p-6 rounded-xl shadow-sm">
                <p className="font-bold text-xl mb-1">Carlos Polanco</p>
                <p className="text-muted-foreground mb-4">23-1102</p>
                <p className="text-sm">Desarrollador Frontend</p>
              </div>
              
              <div className="bg-starbucks-lightgreen/20 p-6 rounded-xl shadow-sm">
                <p className="font-bold text-xl mb-1">Joan de Jesús</p>
                <p className="text-muted-foreground mb-4">23-1122</p>
                <p className="text-sm">Desarrollador Backend</p>
              </div>
              
              <div className="bg-starbucks-lightgreen/20 p-6 rounded-xl shadow-sm">
                <p className="font-bold text-xl mb-1">Mario Guzmán</p>
                <p className="text-muted-foreground mb-4">23-1061</p>
                <p className="text-sm">Diseñador UI/UX</p>
              </div>
              
              <div className="bg-starbucks-lightgreen/20 p-6 rounded-xl shadow-sm">
                <p className="font-bold text-xl mb-1">Rafael Abreu</p>
                <p className="text-muted-foreground mb-4">23-1058</p>
                <p className="text-sm">Ingeniero de QA</p>
              </div>
              
              <div className="bg-starbucks-lightgreen/20 p-6 rounded-xl shadow-sm">
                <p className="font-bold text-xl mb-1">Katherine Langumás</p>
                <p className="text-muted-foreground mb-4">23-1045</p>
                <p className="text-sm">Gerente de Proyecto</p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-muted-foreground">© 2023 - Proyecto académico INTEC</p>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Credits;
