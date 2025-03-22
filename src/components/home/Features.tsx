
import { ShoppingBag, QrCode, BarChart, Clock, Award, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShoppingBag,
    title: "Pedidos anticipados",
    description: "Ordena tu café favorito antes de llegar a la tienda y evita las filas.",
    color: "bg-starbucks-green/10",
    textColor: "text-starbucks-green",
  },
  {
    icon: QrCode,
    title: "Códigos QR en mesas",
    description: "Escanea, ordena y paga desde tu mesa sin tener que formarte.",
    color: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: BarChart,
    title: "Predicción con IA",
    description: "Nuestra IA aprende tus preferencias y te recomienda bebidas personalizadas.",
    color: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description: "Reduce hasta un 50% el tiempo de espera con nuestro sistema optimizado.",
    color: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    icon: Award,
    title: "Programa de fidelidad",
    description: "Acumula puntos con cada compra y canjéalos por recompensas exclusivas.",
    color: "bg-starbucks-lightgreen",
    textColor: "text-starbucks-darkgreen",
  },
  {
    icon: Coffee,
    title: "Personalización total",
    description: "Personaliza tu bebida exactamente como te gusta, hasta el último detalle.",
    color: "bg-rose-50",
    textColor: "text-rose-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-starbucks-lightgreen/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 text-xs font-medium rounded-full bg-starbucks-lightgreen text-starbucks-darkgreen inline-block mb-4"
          >
            Características principales
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Una experiencia de café sin precedentes
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Tecnología de vanguardia para brindarte la mejor experiencia en cada visita a Starbucks
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevation transition-shadow duration-300 border border-border/40 hover-lift"
            >
              <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center mb-5`}>
                <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
