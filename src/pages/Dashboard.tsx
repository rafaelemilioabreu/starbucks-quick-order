
import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Navbar from '../components/layout/Navbar';
import PredictionDashboard from '../components/ai-prediction/PredictionDashboard';
import { BarChart3 } from 'lucide-react';

const Dashboard = () => {
  return (
    <PageTransition>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Dashboard de predicciones
            </h1>
            <p className="text-lg text-muted-foreground">
              Visualiza patrones de consumo y predicciones basadas en inteligencia artificial
            </p>
          </div>
          
          <PredictionDashboard />
          
          <div className="mt-12 bg-white p-6 rounded-xl border border-border/50 shadow-subtle max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">¿Cómo utilizamos la IA?</h2>
            <p className="text-muted-foreground mb-6">
              Nuestro sistema de predicción utiliza algoritmos avanzados de aprendizaje automático para analizar datos históricos, patrones climáticos, y tendencias de consumo. Esto nos permite:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800 mb-2">Optimización de inventario</h3>
                <p className="text-sm text-purple-700">
                  Anticipamos la demanda para reducir desperdicios y garantizar disponibilidad de productos.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800 mb-2">Mejora de tiempos</h3>
                <p className="text-sm text-purple-700">
                  Preparamos ingredientes con anticipación durante horas pico para reducir tiempos de espera.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800 mb-2">Personalización</h3>
                <p className="text-sm text-purple-700">
                  Ofrecemos recomendaciones personalizadas basadas en preferencias y hábitos de los clientes.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800 mb-2">Adaptación continua</h3>
                <p className="text-sm text-purple-700">
                  Nuestros modelos aprenden constantemente y mejoran con cada interacción y nuevo dato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Dashboard;
