
import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Navbar from '../components/layout/Navbar';
import { Coffee, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "¿Cómo funciona el sistema de pedidos móviles?",
    answer: "Nuestro sistema de pedidos móviles te permite personalizar y ordenar tu bebida favorita a través de la aplicación. Puedes pagar en línea y pasar a recoger tu pedido directamente en la barra, sin hacer fila."
  },
  {
    question: "¿Puedo programar mi pedido para un horario específico?",
    answer: "¡Sí! Al momento de realizar tu pedido, puedes seleccionar la opción 'Programar para más tarde' y elegir el horario que más te convenga para recoger tu bebida."
  },
  {
    question: "¿Cómo funciona el sistema de códigos QR en las mesas?",
    answer: "Cada mesa de nuestras tiendas cuenta con un código QR único. Al escanearlo con tu teléfono, podrás acceder al menú completo y realizar tu pedido directamente desde tu mesa, sin necesidad de hacer fila en la barra."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito/débito, PayPal, Apple Pay, Google Pay y efectivo en tienda. Todos los pagos en línea están protegidos con las más altas medidas de seguridad."
  },
  {
    question: "¿Cómo puedo acumular puntos de fidelidad?",
    answer: "Cada vez que realizas un pedido a través de nuestra aplicación o escaneando los códigos QR, automáticamente acumulas puntos de fidelidad que podrás canjear por bebidas gratuitas, descuentos y promociones exclusivas."
  },
  {
    question: "¿Qué sucede si hay un error en mi pedido?",
    answer: "Si hay algún error en tu pedido, por favor acércate a la barra con tu recibo o confirmación de pedido y nuestros baristas resolverán el problema inmediatamente, ofreciéndote una nueva bebida correcta sin costo adicional."
  },
  {
    question: "¿Puedo personalizar mi bebida con opciones no listadas en el menú?",
    answer: "¡Absolutamente! En la sección de personalización puedes ajustar los ingredientes a tu gusto. Si deseas una personalización muy específica que no encuentras en las opciones, puedes añadir una nota especial en tu pedido."
  },
  {
    question: "¿Mis datos personales están seguros?",
    answer: "Sí, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de nivel bancario para proteger toda tu información personal y detalles de pago. Nunca compartimos tus datos con terceros sin tu consentimiento expreso."
  }
];

const FAQ = () => {
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
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-subtle p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <MapPin className="h-6 w-6 text-starbucks-green" />
              <span>¿Necesitas más ayuda?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Si no encuentras respuesta a tu pregunta, contáctanos directamente:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-starbucks-lightgreen/50 p-6 rounded-xl">
                <h3 className="font-medium text-lg mb-2">Servicio al cliente</h3>
                <p className="text-starbucks-darkgreen">contacto@starbucks.com</p>
                <p className="text-starbucks-darkgreen">01-800-STARBUCKS</p>
              </div>
              <div className="bg-starbucks-lightgreen/50 p-6 rounded-xl">
                <h3 className="font-medium text-lg mb-2">Horario de atención</h3>
                <p className="text-starbucks-darkgreen">Lunes a Viernes: 8am - 8pm</p>
                <p className="text-starbucks-darkgreen">Sábado y Domingo: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default FAQ;
