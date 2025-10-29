import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const services = [
    { 
      name: "Гемангиомы у детей", 
      icon: "Baby", 
      description: "Диагностика и лечение младенческих гемангиом" 
    },
    { 
      name: "Сосудистые мальформации", 
      icon: "Activity", 
      description: "Венозные, артериовенозные, лимфатические" 
    },
    { 
      name: "Лазерная терапия", 
      icon: "Zap", 
      description: "Современные методы лазерного лечения" 
    },
    { 
      name: "Склеротерапия", 
      icon: "Syringe", 
      description: "Малоинвазивное лечение сосудистых образований" 
    },
    { 
      name: "Хирургическое лечение", 
      icon: "Scissors", 
      description: "Удаление сложных образований" 
    },
    { 
      name: "Консультация специалиста", 
      icon: "Stethoscope", 
      description: "Осмотр и составление плана лечения" 
    },
  ];

  const advantages = [
    { icon: "Award", title: "Экспертность", text: "Более 20 лет опыта в лечении сосудистых аномалий" },
    { icon: "Users", title: "Командная работа", text: "Мультидисциплинарный подход к каждому пациенту" },
    { icon: "Activity", title: "Современное оборудование", text: "Новейшие технологии диагностики и лечения" },
    { icon: "Heart", title: "Индивидуальный подход", text: "Персональный план лечения для каждого пациента" },
  ];

  const doctors = [
    { name: "Иванов Сергей Петрович", specialty: "Сосудистый хирург", experience: "25 лет опыта" },
    { name: "Смирнова Елена Викторовна", specialty: "Детский хирург", experience: "18 лет опыта" },
    { name: "Петров Михаил Александрович", specialty: "Интервенционный радиолог", experience: "15 лет опыта" },
  ];

  const faqItems = [
    { 
      question: "Что такое гемангиома?", 
      answer: "Гемангиома - это доброкачественная опухоль, состоящая из кровеносных сосудов. Чаще всего встречается у младенцев и может самопроизвольно регрессировать." 
    },
    { 
      question: "Какие методы лечения вы применяете?", 
      answer: "Мы используем современные методы: медикаментозная терапия, лазерное лечение, склеротерапия, хирургическое вмешательство. Метод подбирается индивидуально." 
    },
    { 
      question: "Нужна ли предварительная консультация?", 
      answer: "Да, перед началом лечения необходима консультация специалиста для оценки состояния и выбора оптимальной тактики лечения." 
    },
    { 
      question: "Болезненны ли процедуры?", 
      answer: "Большинство процедур проводятся под местной анестезией. Для детей используется седация для комфортного проведения лечения." 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="HeartPulse" className="text-primary" size={36} />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">Центр лечения гемангиом</h1>
                <p className="text-xs text-muted-foreground hidden md:block">Современная диагностика и лечение</p>
              </div>
            </div>
            <Button className="hidden md:flex bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" className="mr-2" size={16} />
              +7 (495) 000-00-00
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Современное лечение, диагностика сосудистых аномалий и гемангиом
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              В нашей клинике вы получите эффективное и профессиональное лечение гемангиом и сосудистых патологий, используем современные методы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base bg-primary hover:bg-primary/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline" className="text-base border-2">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр диагностики и лечения сосудистых аномалий</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества клиники</h2>
            <p className="text-muted-foreground text-lg">Почему пациенты выбирают нас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={advantage.icon} className="text-primary" size={36} />
                </div>
                <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-muted-foreground text-lg">Команда опытных врачей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="UserRound" className="text-primary" size={48} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                  <p className="text-primary font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground">{doctor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о лечении</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Запишитесь на консультацию</h2>
              <p className="text-muted-foreground text-lg">Мы свяжемся с вами в ближайшее время</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Адрес клиники</p>
                        <p className="text-muted-foreground">г. Москва, ул. Медицинская, д. 10</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 000-00-00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">info@hemangioma-clinic.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Clock" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                        <p className="text-muted-foreground">Сб: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Записаться на прием</h3>
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                      <input 
                        type="text" 
                        placeholder="Иван Иванов" 
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input 
                        type="email" 
                        placeholder="example@mail.ru" 
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Комментарий</label>
                      <textarea 
                        placeholder="Опишите вашу проблему" 
                        rows={4}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="HeartPulse" className="text-primary" size={32} />
                <h3 className="text-xl font-bold">Центр лечения гемангиом</h3>
              </div>
              <p className="text-sm opacity-80">Современная диагностика и лечение сосудистых аномалий</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#doctors" className="hover:text-primary transition-colors">Специалисты</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">Вопросы</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 000-00-00</li>
                <li>info@hemangioma-clinic.ru</li>
                <li>г. Москва, ул. Медицинская, д. 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm opacity-70">© 2024 Центр лечения гемангиом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
