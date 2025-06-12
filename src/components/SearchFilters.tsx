import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface SearchFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const SearchFilters = ({ onFiltersChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState({
    departure: "",
    destination: "",
    cargoType: "",
    transportType: "",
    priceRange: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const resetFilters = () => {
    const emptyFilters = {
      departure: "",
      destination: "",
      cargoType: "",
      transportType: "",
      priceRange: "",
    };
    setFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Поиск и фильтры</h3>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          <Icon name="RotateCcw" className="mr-1" size={16} />
          Сбросить
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Откуда
          </label>
          <Input
            placeholder="Город отправления"
            value={filters.departure}
            onChange={(e) => handleFilterChange("departure", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Куда
          </label>
          <Input
            placeholder="Город назначения"
            value={filters.destination}
            onChange={(e) => handleFilterChange("destination", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Тип груза
          </label>
          <Select
            onValueChange={(value) => handleFilterChange("cargoType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите тип" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Стандартный</SelectItem>
              <SelectItem value="oversized">Негабаритный</SelectItem>
              <SelectItem value="heavy">Тяжеловесный</SelectItem>
              <SelectItem value="dangerous">Опасный</SelectItem>
              <SelectItem value="food">Пищевые продукты</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Тип транспорта
          </label>
          <Select
            onValueChange={(value) =>
              handleFilterChange("transportType", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите тип" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="truck">Автомобильный</SelectItem>
              <SelectItem value="rail">Железнодорожный</SelectItem>
              <SelectItem value="air">Авиационный</SelectItem>
              <SelectItem value="sea">Морской</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Цена
          </label>
          <Select
            onValueChange={(value) => handleFilterChange("priceRange", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Диапазон цен" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="budget">До 20 ₽/км</SelectItem>
              <SelectItem value="medium">20-40 ₽/км</SelectItem>
              <SelectItem value="premium">От 40 ₽/км</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
