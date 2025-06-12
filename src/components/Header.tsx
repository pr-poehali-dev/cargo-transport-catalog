import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Icon name="Truck" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900">
              ГрузоКаталог
            </span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Кнопки для десктопа */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Вход
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" size="sm">
              Разместить заявку
            </Button>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Каталог
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Услуги
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                О нас
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Контакты
              </a>
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="outline" size="sm">
                  Вход
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600" size="sm">
                  Разместить заявку
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
