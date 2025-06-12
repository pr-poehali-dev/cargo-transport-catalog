import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Company } from "@/data/companies";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Заголовок карточки */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={company.logo}
            alt={company.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {company.name}
            </h3>
            <div className="flex items-center space-x-1">
              {renderStars(company.rating)}
              <span className="text-sm text-gray-600 ml-1">
                {company.rating} ({company.reviewCount} отзывов)
              </span>
            </div>
          </div>
        </div>
        <Badge variant="secondary" className="text-green-700 bg-green-100">
          {company.experience} лет опыта
        </Badge>
      </div>

      {/* Описание */}
      <p className="text-gray-600 text-sm mb-4">{company.description}</p>

      {/* Специализации */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {company.specializations.map((spec, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {spec}
            </Badge>
          ))}
        </div>
      </div>

      {/* Услуги */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Услуги:</h4>
        <div className="flex flex-wrap gap-1">
          {company.services.map((service, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
        </div>
      </div>

      {/* Локации */}
      <div className="mb-4">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <Icon name="MapPin" size={14} />
          <span>{company.locations.join(", ")}</span>
        </div>
      </div>

      {/* Цена */}
      <div className="mb-4">
        <div className="flex items-center space-x-1">
          <Icon name="DollarSign" size={16} className="text-green-600" />
          <span className="text-lg font-semibold text-green-600">
            {company.priceRange}
          </span>
        </div>
      </div>

      {/* Контакты и кнопки */}
      <div className="border-t pt-4">
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Phone" size={14} />
            <span>{company.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Mail" size={14} />
            <span>{company.email}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" className="mr-2" size={16} />
            Позвонить
          </Button>
          <Button variant="outline" className="flex-1">
            <Icon name="MessageCircle" className="mr-2" size={16} />
            Написать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
