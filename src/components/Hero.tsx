import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Найдите надежную
            <span className="text-orange-400"> транспортную компанию</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Каталог проверенных перевозчиков с реальными отзывами и прозрачными
            ценами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Icon name="Search" className="mr-2" size={20} />
              Найти перевозчика
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Plus" className="mr-2" size={20} />
              Разместить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
