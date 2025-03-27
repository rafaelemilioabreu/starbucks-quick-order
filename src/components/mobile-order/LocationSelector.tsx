
import React, { useState } from 'react';
import { Map, MapPin, Search } from 'lucide-react';

// Datos de ejemplo de ubicaciones de Starbucks en República Dominicana
const starbucksLocations = [
  {
    id: 1,
    name: "Starbucks Blue Mall",
    address: "Av. Winston Churchill, Blue Mall, Santo Domingo",
    distance: "0.8 km",
    isOpen: true,
    openUntil: "22:00",
    waitTime: "~5 min"
  },
  {
    id: 2,
    name: "Starbucks Ágora Mall",
    address: "Av. John F. Kennedy, Ágora Mall, Santo Domingo",
    distance: "1.2 km",
    isOpen: true,
    openUntil: "23:00",
    waitTime: "~8 min"
  },
  {
    id: 3,
    name: "Starbucks Sambil",
    address: "Av. John F. Kennedy, Centro Comercial Sambil, Santo Domingo",
    distance: "3.5 km",
    isOpen: true,
    openUntil: "21:00",
    waitTime: "~10 min"
  },
  {
    id: 4,
    name: "Starbucks Downtown Center",
    address: "Av. 27 de Febrero, Downtown Center, Santo Domingo",
    distance: "4.7 km",
    isOpen: true,
    openUntil: "22:30",
    waitTime: "~3 min"
  },
  {
    id: 5,
    name: "Starbucks Galería 360",
    address: "Av. John F. Kennedy, Galería 360, Santo Domingo",
    distance: "5.3 km",
    isOpen: true,
    openUntil: "21:30",
    waitTime: "~7 min"
  },
  {
    id: 6,
    name: "Starbucks Punta Cana",
    address: "BlueMall Puntacana, Bulevar Turístico del Este, Punta Cana",
    distance: "198 km",
    isOpen: true,
    openUntil: "22:00",
    waitTime: "~4 min"
  },
  {
    id: 7,
    name: "Starbucks Santiago",
    address: "Av. 27 de Febrero, Colinas Mall, Santiago",
    distance: "155 km",
    isOpen: true,
    openUntil: "21:00",
    waitTime: "~6 min"
  }
];

interface LocationSelectorProps {
  onSelectLocation: (location: typeof starbucksLocations[0]) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ onSelectLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);

  const filteredLocations = starbucksLocations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectLocation = (location: typeof starbucksLocations[0]) => {
    setSelectedLocationId(location.id);
    onSelectLocation(location);
  };

  return (
    <div className="w-full">
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
      
      <div className="max-h-72 overflow-y-auto space-y-2">
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedLocationId === location.id
                ? "bg-starbucks-lightgreen/50 border border-starbucks-green"
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
  );
};

export default LocationSelector;
