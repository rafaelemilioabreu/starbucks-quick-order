
import React, { useState } from 'react';
import { Map, MapPin, Search } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Datos de ejemplo de ubicaciones de Starbucks
const starbucksLocations = [
  {
    id: 1,
    name: "Starbucks Reforma",
    address: "Av. Paseo de la Reforma 222, Juárez, 06600 Ciudad de México",
    distance: "0.8 km",
    isOpen: true,
    openUntil: "22:00",
    waitTime: "~5 min"
  },
  {
    id: 2,
    name: "Starbucks Condesa",
    address: "Av. Michoacán 25, Hipódromo Condesa, 06170 Ciudad de México",
    distance: "1.2 km",
    isOpen: true,
    openUntil: "23:00",
    waitTime: "~8 min"
  },
  {
    id: 3,
    name: "Starbucks Polanco",
    address: "Av. Presidente Masaryk 61, Polanco, 11560 Ciudad de México",
    distance: "3.5 km",
    isOpen: true,
    openUntil: "21:00",
    waitTime: "~10 min"
  },
  {
    id: 4,
    name: "Starbucks Santa Fe",
    address: "Centro Comercial Santa Fe, Vasco de Quiroga 3800, Santa Fe, 05109 Ciudad de México",
    distance: "8.7 km",
    isOpen: true,
    openUntil: "22:30",
    waitTime: "~3 min"
  },
  {
    id: 5,
    name: "Starbucks Coyoacán",
    address: "Av. Miguel Ángel de Quevedo 870, Coyoacán, 04000 Ciudad de México",
    distance: "5.3 km",
    isOpen: true,
    openUntil: "21:30",
    waitTime: "~7 min"
  }
];

interface LocationSelectorProps {
  onSelectLocation: (location: typeof starbucksLocations[0]) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ onSelectLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(starbucksLocations[0]);

  const filteredLocations = starbucksLocations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectLocation = (location: typeof starbucksLocations[0]) => {
    setSelectedLocation(location);
    onSelectLocation(location);
    setIsOpen(false);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">Selecciona una ubicación</h3>
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full border rounded-lg overflow-hidden">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-muted/50">
          <div className="flex items-center space-x-3">
            <div className="bg-starbucks-green/10 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-starbucks-green" />
            </div>
            <div>
              <p className="font-medium">{selectedLocation.name}</p>
              <p className="text-xs text-muted-foreground truncate max-w-[250px]">{selectedLocation.address}</p>
            </div>
          </div>
          <div className="text-xs text-starbucks-green font-medium bg-starbucks-lightgreen/50 px-2 py-1 rounded-full">
            {selectedLocation.waitTime}
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="p-3 border-t">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por nombre o dirección"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-transparent text-sm"
              />
            </div>
            
            <div className="max-h-60 overflow-y-auto space-y-2">
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedLocation.id === location.id
                      ? "bg-starbucks-lightgreen/50 border-starbucks-green"
                      : "hover:bg-muted/30 border border-transparent"
                  }`}
                  onClick={() => handleSelectLocation(location)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-xs text-muted-foreground mt-1 truncate max-w-[250px]">{location.address}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{location.distance}</div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-muted-foreground">
                      {location.isOpen 
                        ? `Abierto hasta las ${location.openUntil}` 
                        : "Cerrado ahora"
                      }
                    </span>
                    <span className="text-starbucks-green font-medium">
                      {location.waitTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-3 pt-3 border-t">
              <button 
                className="text-sm flex items-center text-starbucks-green hover:text-starbucks-green/80 transition-colors"
                onClick={() => {}}
              >
                <Map className="h-4 w-4 mr-1" />
                Ver todas en mapa
              </button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default LocationSelector;
