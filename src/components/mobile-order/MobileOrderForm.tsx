
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, ChevronDown, Plus, Minus, Clock, CreditCard } from 'lucide-react';
import BlurImage from '../ui/BlurImage';

const coffeeOptions = [
  {
    id: 'latte',
    name: 'Latte',
    description: 'Espresso con leche vaporizada',
    price: 45,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso con leche vaporizada y espuma',
    price: 48,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso con agua caliente',
    price: 35,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Espresso con chocolate y leche vaporizada',
    price: 52,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  }
];

const sizes = [
  { id: 'tall', name: 'Tall', oz: '12oz', price: 0 },
  { id: 'grande', name: 'Grande', oz: '16oz', price: 5 },
  { id: 'venti', name: 'Venti', oz: '20oz', price: 10 }
];

const milkOptions = [
  { id: 'regular', name: 'Regular', price: 0 },
  { id: 'skim', name: 'Descremada', price: 0 },
  { id: 'almond', name: 'Almendra', price: 8 },
  { id: 'oat', name: 'Avena', price: 8 },
  { id: 'soy', name: 'Soya', price: 8 }
];

const MobileOrderForm = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(coffeeOptions[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [selectedMilk, setSelectedMilk] = useState(milkOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));
  
  const totalPrice = (selectedCoffee.price + selectedSize.price + selectedMilk.price) * quantity;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setOrderSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setOrderSuccess(false), 3000);
    }, 1000);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {orderSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-starbucks-lightgreen p-8 rounded-2xl text-center"
        >
          <div className="w-20 h-20 bg-starbucks-green rounded-full flex items-center justify-center mx-auto mb-6">
            <Coffee className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-darkgreen">¡Pedido enviado con éxito!</h2>
          <p className="text-lg mb-6 text-starbucks-darkgreen/80">
            Tu {selectedCoffee.name} estará listo en aproximadamente 5-7 minutos.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 text-starbucks-darkgreen">
            <Clock className="h-5 w-5 mr-2" />
            <span>Tiempo estimado: 5-7 min</span>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Selecciona tu café</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coffeeOptions.map((coffee) => (
                  <div
                    key={coffee.id}
                    className={`border rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-subtle ${
                      selectedCoffee.id === coffee.id
                        ? 'ring-2 ring-starbucks-green'
                        : 'ring-1 ring-border'
                    }`}
                    onClick={() => setSelectedCoffee(coffee)}
                  >
                    <div className="h-32 relative">
                      <BlurImage
                        src={coffee.image}
                        alt={coffee.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="font-medium">{coffee.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{coffee.description}</div>
                      <div className="mt-2 text-sm font-medium">${coffee.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Personaliza tu orden</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Tamaño</label>
                  <div className="grid grid-cols-3 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                          selectedSize.id === size.id
                            ? 'bg-starbucks-lightgreen border-starbucks-green text-starbucks-darkgreen'
                            : 'border-border hover:border-starbucks-green/50'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        <span className="font-medium">{size.name}</span>
                        <span className="text-xs text-muted-foreground mt-1">{size.oz}</span>
                        {size.price > 0 && (
                          <span className="text-xs mt-1">+${size.price}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de leche</label>
                  <div className="relative">
                    <select
                      className="w-full rounded-lg border-border p-3 bg-white appearance-none pr-10"
                      value={selectedMilk.id}
                      onChange={(e) => {
                        const selected = milkOptions.find(milk => milk.id === e.target.value);
                        if (selected) setSelectedMilk(selected);
                      }}
                    >
                      {milkOptions.map((milk) => (
                        <option key={milk.id} value={milk.id}>
                          {milk.name} {milk.price > 0 ? `(+$${milk.price})` : ''}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-subtle">
              <h3 className="text-xl font-medium mb-4">Resumen del pedido</h3>
              
              <div className="flex items-center justify-between py-3 border-b border-border/40">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
                    <BlurImage
                      src={selectedCoffee.image}
                      alt={selectedCoffee.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{selectedCoffee.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedSize.name}, Leche de {selectedMilk.name}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-border hover:bg-muted transition-colors"
                      onClick={decrementQuantity}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="mx-3 font-medium">{quantity}</span>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-border hover:bg-muted transition-colors"
                      onClick={incrementQuantity}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-medium">${(selectedCoffee.price + selectedSize.price + selectedMilk.price).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="py-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Impuestos</span>
                  <span>${(totalPrice * 0.16).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/40 flex justify-between font-medium">
                <span>Total</span>
                <span>${(totalPrice * 1.16).toFixed(2)}</span>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">¿Cuándo quieres recoger tu pedido?</label>
                <div className="relative">
                  <select className="w-full rounded-lg border-border p-3 bg-white appearance-none pr-10">
                    <option>Lo antes posible (5-7 minutos)</option>
                    <option>En 15 minutos</option>
                    <option>En 30 minutos</option>
                    <option>En 1 hora</option>
                    <option>Programar para más tarde</option>
                  </select>
                  <ChevronDown className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground" />
                </div>
              </div>
              
              <button
                type="submit"
                className="mt-6 w-full flex items-center justify-center space-x-2 bg-starbucks-green hover:bg-starbucks-green/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                <CreditCard className="h-5 w-5" />
                <span>Pagar y ordenar ahora</span>
              </button>
            </div>
            
            <div className="bg-starbucks-lightgreen rounded-xl p-4 flex items-center">
              <div className="rounded-full bg-starbucks-green/10 p-2 mr-4">
                <Clock className="h-5 w-5 text-starbucks-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-starbucks-darkgreen">Tiempo estimado de preparación</p>
                <p className="text-xs text-starbucks-darkgreen/80">5-7 minutos después de realizar tu pedido</p>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default MobileOrderForm;
