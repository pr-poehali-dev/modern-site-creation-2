import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const categories = [
    { name: "Кирпич", icon: "Box", description: "Керамический и силикатный" },
    { name: "Цемент", icon: "Package", description: "М400, М500, ПЦ" },
    { name: "Пиломатериалы", icon: "TreeDeciduous", description: "Доска, брус, вагонка" },
    { name: "Сухие смеси", icon: "Boxes", description: "Штукатурка, шпаклевка" },
    { name: "Металлопрокат", icon: "Ruler", description: "Арматура, уголок, лист" },
    { name: "Сыпучие материалы", icon: "Mountain", description: "Песок, щебень, керамзит" },
  ];

  const advantages = [
    { icon: "Truck", title: "Доставка по городу", text: "Собственный автопарк" },
    { icon: "Shield", title: "Гарантия качества", text: "Работаем с проверенными производителями" },
    { icon: "Clock", title: "Быстрая отгрузка", text: "Материалы в наличии на складе" },
    { icon: "HandshakeIcon", title: "Оптовым покупателям", text: "Специальные условия и скидки" },
  ];

  const faqItems = [
    { question: "Как оформить заказ?", answer: "Позвоните нам или оставьте заявку на сайте. Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей." },
    { question: "Какие способы оплаты доступны?", answer: "Принимаем наличный и безналичный расчет. Для юридических лиц работаем по договору с отсрочкой платежа." },
    { question: "Сколько стоит доставка?", answer: "Стоимость доставки рассчитывается индивидуально в зависимости от объема заказа и адреса. По городу от 500 рублей." },
    { question: "Есть ли скидки?", answer: "Да, для постоянных клиентов и при заказе больших объемов предоставляются скидки до 15%." },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Warehouse" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-foreground">СтройБаза</h1>
                <p className="text-xs text-muted-foreground">Стройматериалы оптом и в розницу</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Вопросы</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" className="mr-2" size={16} />
              Позвонить
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Стройматериалы с доставкой по выгодным ценам
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Большой выбор качественных материалов для строительства и ремонта. Работаем с 2010 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Посмотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Icon name="Calculator" className="mr-2" size={20} />
                Расчет материалов
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={category.icon} className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground">
              Мы предлагаем качественные стройматериалы по справедливым ценам с 2010 года
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Доставка и оплата</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Truck" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Доставка</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>Собственный автопарк</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>Доставка в день заказа</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>Разгрузка манипулятором</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>По городу и области</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="CreditCard" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Оплата</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>Наличный расчет</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>Безналичный перевод</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>Оплата картой</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5" size={16} />
                          <span>Отсрочка для юр. лиц</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Частые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-sm text-muted-foreground">г. Москва, ул. Строительная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">info@stroybaza.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
                      <p className="text-sm text-muted-foreground">Сб-Вс: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Оставьте заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Телефон" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Комментарий" 
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm opacity-80">© 2024 СтройБаза. Все права защищены.</p>
            <p className="text-xs opacity-60 mt-2">Стройматериалы оптом и в розницу</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
