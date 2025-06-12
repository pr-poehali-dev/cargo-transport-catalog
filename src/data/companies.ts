export interface Company {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  logo: string;
  specializations: string[];
  locations: string[];
  description: string;
  phone: string;
  email: string;
  website: string;
  services: string[];
  priceRange: string;
  experience: number;
}

export const companies: Company[] = [
  {
    id: 1,
    name: "ТрансЛогистик",
    rating: 4.8,
    reviewCount: 127,
    logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=100&h=100&fit=crop&crop=center",
    specializations: ["Международные перевозки", "Негабаритные грузы"],
    locations: ["Москва", "СПб", "Екатеринбург"],
    description:
      "Надежные грузоперевозки по России и СНГ. Работаем с 2010 года.",
    phone: "+7 (495) 123-45-67",
    email: "info@translogistic.ru",
    website: "translogistic.ru",
    services: ["Автоперевозки", "Железнодорожные", "Авиа"],
    priceRange: "от 15 ₽/км",
    experience: 13,
  },
  {
    id: 2,
    name: "КаргоЭкспресс",
    rating: 4.6,
    reviewCount: 89,
    logo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center",
    specializations: ["Срочная доставка", "Малотоннажные перевозки"],
    locations: ["Москва", "Нижний Новгород"],
    description: "Быстрая доставка грузов до 3 тонн по всей России.",
    phone: "+7 (495) 987-65-43",
    email: "order@cargoexpress.ru",
    website: "cargoexpress.ru",
    services: ["Автоперевозки", "Курьерская доставка"],
    priceRange: "от 25 ₽/км",
    experience: 8,
  },
  {
    id: 3,
    name: "МегаТранс",
    rating: 4.9,
    reviewCount: 203,
    logo: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&h=100&fit=crop&crop=center",
    specializations: ["Тяжеловесные грузы", "Строительная техника"],
    locations: ["Москва", "Казань", "Самара"],
    description:
      "Специализируемся на перевозке крупногабаритных и тяжеловесных грузов.",
    phone: "+7 (495) 555-12-34",
    email: "heavy@megatrans.ru",
    website: "megatrans.ru",
    services: ["Автоперевозки", "Спецтехника", "Такелаж"],
    priceRange: "от 45 ₽/км",
    experience: 15,
  },
  {
    id: 4,
    name: "РусЛогистика",
    rating: 4.7,
    reviewCount: 156,
    logo: "https://images.unsplash.com/photo-1597149133748-4bb6e40bac83?w=100&h=100&fit=crop&crop=center",
    specializations: ["Сборные грузы", "Складские услуги"],
    locations: ["СПб", "Москва", "Новосибирск"],
    description: "Полный спектр логистических услуг с собственными складами.",
    phone: "+7 (812) 234-56-78",
    email: "info@ruslogistics.ru",
    website: "ruslogistics.ru",
    services: ["Автоперевозки", "Складирование", "Упаковка"],
    priceRange: "от 18 ₽/км",
    experience: 12,
  },
  {
    id: 5,
    name: "ГлобалКарго",
    rating: 4.5,
    reviewCount: 94,
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center",
    specializations: ["Международные перевозки", "Морские контейнеры"],
    locations: ["Москва", "Владивосток", "Калининград"],
    description: "Международная логистика и таможенное оформление.",
    phone: "+7 (495) 777-88-99",
    email: "global@globalcargo.ru",
    website: "globalcargo.ru",
    services: ["Морские", "Автоперевозки", "Таможня"],
    priceRange: "от 30 ₽/км",
    experience: 18,
  },
  {
    id: 6,
    name: "СпидТранс",
    rating: 4.4,
    reviewCount: 67,
    logo: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=100&h=100&fit=crop&crop=center",
    specializations: ["Экспресс-доставка", "Документы"],
    locations: ["Москва", "СПб"],
    description: "Курьерские услуги и экспресс-доставка по городам России.",
    phone: "+7 (495) 333-22-11",
    email: "speed@speedtrans.ru",
    website: "speedtrans.ru",
    services: ["Курьерская доставка", "Автоперевозки"],
    priceRange: "от 35 ₽/км",
    experience: 6,
  },
];
