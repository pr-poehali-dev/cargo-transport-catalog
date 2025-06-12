import { useState, useMemo } from "react";
import { companies } from "@/data/companies";
import CompanyCard from "./CompanyCard";
import SearchFilters from "./SearchFilters";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const FreightCatalog = () => {
  const [filters, setFilters] = useState({
    departure: "",
    destination: "",
    cargoType: "",
    transportType: "",
    priceRange: "",
  });
  const [sortBy, setSortBy] = useState("rating");
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 6;

  const filteredAndSortedCompanies = useMemo(() => {
    let filtered = companies.filter((company) => {
      // Фильтр по городам
      if (
        filters.departure &&
        !company.locations.some((loc) =>
          loc.toLowerCase().includes(filters.departure.toLowerCase()),
        )
      ) {
        return false;
      }

      if (
        filters.destination &&
        !company.locations.some((loc) =>
          loc.toLowerCase().includes(filters.destination.toLowerCase()),
        )
      ) {
        return false;
      }

      // Фильтр по типу груза (проверяем специализации)
      if (filters.cargoType) {
        const cargoTypes = {
          oversized: "негабарит",
          heavy: "тяжелов",
          dangerous: "опасн",
          food: "пищев",
        };
        const searchTerm =
          cargoTypes[filters.cargoType as keyof typeof cargoTypes];
        if (
          searchTerm &&
          !company.specializations.some((spec) =>
            spec.toLowerCase().includes(searchTerm),
          )
        ) {
          return false;
        }
      }

      // Фильтр по типу транспорта
      if (filters.transportType) {
        const transportTypes = {
          truck: "авто",
          rail: "железнодорож",
          air: "авиа",
          sea: "морск",
        };
        const searchTerm =
          transportTypes[filters.transportType as keyof typeof transportTypes];
        if (
          searchTerm &&
          !company.services.some((service) =>
            service.toLowerCase().includes(searchTerm),
          )
        ) {
          return false;
        }
      }

      // Фильтр по цене
      if (filters.priceRange) {
        const price = parseInt(company.priceRange.match(/\d+/)?.[0] || "0");
        switch (filters.priceRange) {
          case "budget":
            if (price > 20) return false;
            break;
          case "medium":
            if (price < 20 || price > 40) return false;
            break;
          case "premium":
            if (price < 40) return false;
            break;
        }
      }

      return true;
    });

    // Сортировка
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        case "experience":
          return b.experience - a.experience;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  // Пагинация
  const totalPages = Math.ceil(
    filteredAndSortedCompanies.length / companiesPerPage,
  );
  const paginatedCompanies = filteredAndSortedCompanies.slice(
    (currentPage - 1) * companiesPerPage,
    currentPage * companiesPerPage,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Фильтры */}
        <SearchFilters onFiltersChange={setFilters} />

        {/* Заголовок и сортировка */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Транспортные компании
            </h2>
            <p className="text-gray-600">
              Найдено компаний: {filteredAndSortedCompanies.length}
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <span className="text-sm text-gray-600">Сортировать по:</span>
            <Select onValueChange={setSortBy} defaultValue="rating">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Выберите сортировку" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Рейтингу</SelectItem>
                <SelectItem value="reviews">Количеству отзывов</SelectItem>
                <SelectItem value="experience">Опыту работы</SelectItem>
                <SelectItem value="name">Названию</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Сетка компаний */}
        {paginatedCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon
              name="Search"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Компании не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <Icon name="ChevronLeft" size={16} />
              Назад
            </Button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ),
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Вперед
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreightCatalog;
