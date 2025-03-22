
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Clock, TrendingUp, Coffee, CloudRain, ThermometerSun, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data for visualizations
const hourlyData = [
  { hour: '7 AM', americano: 12, latte: 8, cappuccino: 5, mocha: 3 },
  { hour: '8 AM', americano: 25, latte: 18, cappuccino: 12, mocha: 8 },
  { hour: '9 AM', americano: 18, latte: 22, cappuccino: 15, mocha: 10 },
  { hour: '10 AM', americano: 15, latte: 20, cappuccino: 18, mocha: 12 },
  { hour: '11 AM', americano: 10, latte: 15, cappuccino: 20, mocha: 15 },
  { hour: '12 PM', americano: 12, latte: 18, cappuccino: 22, mocha: 18 },
  { hour: '1 PM', americano: 15, latte: 20, cappuccino: 18, mocha: 22 },
  { hour: '2 PM', americano: 10, latte: 15, cappuccino: 12, mocha: 18 },
  { hour: '3 PM', americano: 8, latte: 12, cappuccino: 10, mocha: 15 },
  { hour: '4 PM', americano: 12, latte: 15, cappuccino: 8, mocha: 12 },
  { hour: '5 PM', americano: 15, latte: 20, cappuccino: 10, mocha: 8 },
  { hour: '6 PM', americano: 10, latte: 15, cappuccino: 8, mocha: 5 },
];

const popularItems = [
  { name: 'Latte Grande', value: 32 },
  { name: 'Americano Venti', value: 25 },
  { name: 'Cappuccino Grande', value: 18 },
  { name: 'Mocha Grande', value: 15 },
  { name: 'Frappuccino', value: 10 },
];

const COLORS = ['#006241', '#1e3932', '#d4e9e2', '#cba258', '#a98e63'];

const weatherData = [
  { day: 'Lun', temp: 24, orders: 120, rain: 0 },
  { day: 'Mar', temp: 25, orders: 115, rain: 0 },
  { day: 'Mie', temp: 23, orders: 105, rain: 0 },
  { day: 'Jue', temp: 20, orders: 112, rain: 1 },
  { day: 'Vie', temp: 18, orders: 130, rain: 1 },
  { day: 'Sab', temp: 23, orders: 150, rain: 0 },
  { day: 'Dom', temp: 26, orders: 125, rain: 0 },
];

// Predictions for today
const todayPredictions = [
  { time: '7-9 AM', item: 'Americano Grande', quantity: 32, trend: 'up' },
  { time: '9-11 AM', item: 'Latte Grande', quantity: 28, trend: 'up' },
  { time: '11 AM-1 PM', item: 'Cappuccino', quantity: 24, trend: 'stable' },
  { time: '1-3 PM', item: 'Mocha Frappuccino', quantity: 20, trend: 'up' },
  { time: '3-5 PM', item: 'Cold Brew', quantity: 18, trend: 'down' },
];

const PredictionDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('insights');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white rounded-xl p-6 shadow-subtle border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">Predicciones para hoy</h3>
              <p className="text-sm text-muted-foreground">
                {currentTime.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-starbucks-green">
              <Clock className="h-4 w-4" />
              <span>{currentTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {todayPredictions.map((prediction, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center p-3 border border-border/50 rounded-lg"
              >
                <div className="w-16 text-sm text-muted-foreground">{prediction.time}</div>
                <div className="flex-1 font-medium">{prediction.item}</div>
                <div className="text-lg font-semibold">{prediction.quantity}</div>
                <div className={cn(
                  "ml-3 p-1 rounded", 
                  prediction.trend === 'up' 
                    ? "bg-green-50 text-green-600" 
                    : prediction.trend === 'down' 
                      ? "bg-red-50 text-red-600" 
                      : "bg-blue-50 text-blue-600"
                )}>
                  <TrendingUp className={cn(
                    "h-4 w-4",
                    prediction.trend === 'down' && "transform rotate-180",
                    prediction.trend === 'stable' && "transform rotate-90"
                  )} />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-starbucks-lightgreen rounded-lg">
            <h4 className="font-medium text-starbucks-darkgreen">Recomendación</h4>
            <p className="text-sm text-starbucks-darkgreen/80 mt-1">
              Prepara extra Americano y Latte para la hora pico de 7-11 AM. Anticipa un 20% más de pedidos que la semana pasada.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-subtle border border-border/50">
          <h3 className="text-lg font-medium mb-4">Bebidas más populares</h3>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={popularItems}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {popularItems.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 space-y-2">
            {popularItems.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center p-2">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                <div className="flex-1 text-sm">{item.name}</div>
                <div className="font-medium">{item.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-subtle border border-border/50 overflow-hidden">
        <div className="border-b border-border/50 flex">
          <button
            className={cn(
              "px-6 py-4 text-sm font-medium transition-colors",
              activeTab === 'insights' 
                ? "text-starbucks-green border-b-2 border-starbucks-green" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
            onClick={() => setActiveTab('insights')}
          >
            Patrones por hora
          </button>
          <button
            className={cn(
              "px-6 py-4 text-sm font-medium transition-colors",
              activeTab === 'weather' 
                ? "text-starbucks-green border-b-2 border-starbucks-green" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
            onClick={() => setActiveTab('weather')}
          >
            Influencia del clima
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'insights' ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Patrones de consumo por hora</h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Últimos 30 días</span>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={hourlyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}
                      formatter={(value, name) => [`${value} pedidos`, name.charAt(0).toUpperCase() + name.slice(1)]}
                    />
                    <Bar dataKey="americano" name="Americano" fill="#006241" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="latte" name="Latte" fill="#1e3932" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="cappuccino" name="Cappuccino" fill="#d4e9e2" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="mocha" name="Mocha" fill="#cba258" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 p-4 bg-starbucks-lightgreen/50 rounded-lg">
                <div className="flex items-start">
                  <Coffee className="h-5 w-5 text-starbucks-darkgreen mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-starbucks-darkgreen">Insights para hoy</h4>
                    <p className="text-sm text-starbucks-darkgreen/80 mt-1">
                      Picos de demanda esperados entre 8-9 AM y 12-1 PM. Los Americanos son más populares en la mañana, mientras que los Mochas tienen mayor demanda en la tarde.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Influencia del clima en los pedidos</h3>
                <div className="flex items-center space-x-2 text-sm">
                  <ThermometerSun className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Última semana</span>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={weatherData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}
                      formatter={(value, name) => [
                        name === 'temp' ? `${value}°C` : name === 'orders' ? `${value} pedidos` : value,
                        name === 'temp' ? 'Temperatura' : name === 'orders' ? 'Pedidos' : name
                      ]}
                    />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="orders" 
                      name="Pedidos" 
                      stroke="#006241" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#006241" }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="temp" 
                      name="Temperatura" 
                      stroke="#cba258" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#cba258" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 p-4 bg-starbucks-lightgreen/50 rounded-lg">
                <div className="flex items-start">
                  <CloudRain className="h-5 w-5 text-starbucks-darkgreen mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-starbucks-darkgreen">Predicción basada en clima</h4>
                    <p className="text-sm text-starbucks-darkgreen/80 mt-1">
                      En días lluviosos (Jue-Vie), las bebidas calientes aumentan un 15%. Para mañana se espera temperatura de 24°C, prevé mayor demanda de bebidas frías.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionDashboard;
