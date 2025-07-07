import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Wind" size={24} className="mr-2" />
              <span className="text-xl font-bold text-black">TurboVent</span>
            </div>
            <div className="flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-black transition-colors"
              >
                О компании
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Продукция
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Вентиляционные дефлекторы
              <br />
              для любых задач
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Профессиональные решения для частного и промышленного применения.
              Каминные и печные дефлекторы высокого качества.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800"
              >
                Смотреть каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-gray-50"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">О компании</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы специализируемся на производстве и поставке высококачественных
              вентиляционных дефлекторов для различных сфер применения.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Высокое качество
              </h3>
              <p className="text-gray-600">
                Все изделия соответствуют ГОСТ и имеют сертификаты качества
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600">
                Изготовление дефлекторов по индивидуальным размерам и
                требованиям
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Быстрая доставка
              </h3>
              <p className="text-gray-600">
                Оперативная доставка по всей России в кратчайшие сроки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Наша продукция
            </h2>
            <p className="text-xl text-gray-600">
              Широкий ассортимент дефлекторов для различных применений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/img/935d0c85-7d11-4281-b162-3adcef1bc155.jpg"
                    alt="Дефлектор для частного дома"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-black">
                  Дефлекторы для частных домов
                </CardTitle>
                <CardDescription>
                  Идеальное решение для вентиляции частных домов и коттеджей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 mb-4 space-y-1">
                  <li>• Диаметр: 100-300 мм</li>
                  <li>• Материал: оцинкованная сталь</li>
                  <li>• Защита от осадков</li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/img/b3be678a-fdae-46e2-8fc8-c1d170137d25.jpg"
                    alt="Промышленный дефлектор"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-black">
                  Промышленные дефлекторы
                </CardTitle>
                <CardDescription>
                  Мощные решения для промышленных объектов и производств
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 mb-4 space-y-1">
                  <li>• Диаметр: 300-1200 мм</li>
                  <li>• Усиленная конструкция</li>
                  <li>• Высокая производительность</li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/img/6354d357-ca26-49c6-bbaa-42f5b9dd3425.jpg"
                    alt="Каминный дефлектор"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-black">
                  Каминные дефлекторы
                </CardTitle>
                <CardDescription>
                  Специализированные решения для каминов и печей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 mb-4 space-y-1">
                  <li>• Жаростойкие материалы</li>
                  <li>• Защита от искр</li>
                  <li>• Улучшение тяги</li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения консультации и оформления заказа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Наши контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-black" />
                  <span className="text-gray-600">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-black" />
                  <span className="text-gray-600">info@turbovent.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3 text-black" />
                  <span className="text-gray-600">
                    г. Москва, ул. Производственная, 15
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3 text-black" />
                  <span className="text-gray-600">Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Заказать звонок
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Wind" size={24} className="mr-2" />
                <span className="text-xl font-bold">TurboVent</span>
              </div>
              <p className="text-gray-400">
                Профессиональные вентиляционные дефлекторы для частного и
                промышленного применения
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Продукция</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Дефлекторы для частных домов</li>
                <li>Промышленные дефлекторы</li>
                <li>Каминные дефлекторы</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <div className="text-gray-400 space-y-2">
                <p>+7 (495) 123-45-67</p>
                <p>info@turbovent.ru</p>
                <p>г. Москва</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TurboVent. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
