import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const services = [
    { 
      name: "Младенческие гемангиомы", 
      icon: "Baby", 
      description: "Лазерное и медикаментозное лечение (пропранолол). Амбулаторный подбор терапии бета-блокаторами." 
    },
    { 
      name: "Венозные мальформации", 
      icon: "Activity", 
      description: "Склеротерапия, эндоваскулярное лечение, хирургическое удаление" 
    },
    { 
      name: "Лимфатические мальформации", 
      icon: "Droplet", 
      description: "Склерозирование лимфангиом, комбинированное лечение" 
    },
    { 
      name: "Капиллярные мальформации", 
      icon: "Hexagon", 
      description: "Лазерное лечение 'винных пятен', сосудистых звёздочек, розацеа" 
    },
    { 
      name: "Флебология", 
      icon: "Zap", 
      description: "Эндоваскулярное лечение варикоза, лазерная флебология, трофические язвы" 
    },
    { 
      name: "Лазерная косметология", 
      icon: "Sparkles", 
      description: "Омоложение, удаление пигментации, рубцов, эпиляция, татуаж" 
    },
  ];

  const advantages = [
    { 
      icon: "Award", 
      title: "Единственный центр в России", 
      text: "Специализируемся на всех видах врожденной и приобретенной сосудистой патологии" 
    },
    { 
      icon: "Users", 
      title: "Мультидисциплинарная команда", 
      text: "Сосудистые хирурги, детские хирурги, дерматологи, флебологи, лазерологи" 
    },
    { 
      icon: "Microscope", 
      title: "Научная работа", 
      text: "Правообладатели 3 патентов в области лечения сосудистой патологии" 
    },
    { 
      icon: "Globe", 
      title: "Международный опыт", 
      text: "Стажировки в США, обмен опытом с лучшими специалистами мира" 
    },
    { 
      icon: "Zap", 
      title: "Современное оборудование", 
      text: "Vbeam Candela, Cutera Excel V, ILOODA FRAXIS для лечения детей и взрослых" 
    },
    { 
      icon: "Heart", 
      title: "Более 5000 пациентов", 
      text: "Ежегодно помогаем пациентам из всех регионов России и зарубежья" 
    },
  ];

  const doctors = [
    { 
      name: "Романов Дмитрий Вячеславович", 
      specialty: "Руководитель центра", 
      experience: "28 лет опыта",
      qualifications: [
        "Сосудистый хирург высшей категории",
        "Детский хирург, лазерный хирург",
        "Член ISSVA (международная организация)",
        "Автор 3 патентов, соавтор книги"
      ]
    },
    { 
      name: "Рахимов Амриддин Равшанович", 
      specialty: "Сосудистый хирург", 
      experience: "15+ лет опыта",
      qualifications: [
        "Ангиохирург, лазерный хирург",
        "Врач УЗИ",
        "Специалист по гемангиомам",
        "Микрохирургические операции"
      ]
    },
    { 
      name: "Сафин Динар Адхамович", 
      specialty: "Детский хирург", 
      experience: "12+ лет опыта",
      qualifications: [
        "Сосудистый хирург",
        "Лазерный хирург, врач УЗИ",
        "Работа с детьми любого возраста",
        "Склеротерапия, эндоваскулярные операции"
      ]
    },
  ];

  const pathologies = [
    {
      title: "Младенческие гемангиомы",
      description: "Доброкачественные сосудистые опухоли, появляющиеся в первые недели жизни. Быстрый рост в первые месяцы.",
      methods: ["Пропранолол (Гемангиол)", "Лазерная терапия Vbeam", "Склеротерапия", "Комбинированное лечение"],
      icon: "Baby"
    },
    {
      title: "Венозные мальформации",
      description: "Врожденные аномалии венозных сосудов. Синюшные образования, увеличение при наклоне.",
      methods: ["Склеротерапия под УЗИ", "Эндоваскулярное лечение", "Терапия Сиролимусом", "Хирургическое удаление"],
      icon: "Activity"
    },
    {
      title: "Лимфатические мальформации",
      description: "Врожденные кисты лимфатической системы. Мягкие образования с медленным ростом.",
      methods: ["Склерозирование", "Терапия Сиролимусом", "Микрохирургическое удаление", "Комбинированный подход"],
      icon: "Droplet"
    },
    {
      title: "Капиллярные мальформации",
      description: "Винные пятна, сосудистые звёздочки, розацеа. Красные или розовые пятна на коже.",
      methods: ["Импульсный лазер Vbeam", "Лазер Cutera Excel V", "Курсовое лечение", "Поддерживающая терапия"],
      icon: "Hexagon"
    },
    {
      title: "Синдром Клиппель-Треноне",
      description: "Комплексная врожденная аномалия: сосудистые пятна, варикоз, увеличение конечности.",
      methods: ["Склеротерапия варикоза", "Лазерная терапия пятен", "Компрессионная терапия", "Мультидисциплинарный подход"],
      icon: "Zap"
    },
    {
      title: "Артерио-венозные мальформации",
      description: "Патологическое соединение артерий и вен. Требует высокотехнологичного лечения.",
      methods: ["Эмболизация", "Склеротерапия", "Микрохирургия", "Интервенционная радиология"],
      icon: "Radio"
    },
  ];

  const methods = [
    {
      name: "Лазерная терапия",
      description: "Импульсные лазеры Vbeam Candela и Cutera Excel V для лечения сосудистых образований",
      features: ["Без разрезов", "Минимальная травма", "Быстрое восстановление", "Высокая точность"],
      icon: "Zap",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Склеротерапия",
      description: "Введение склерозанта под УЗИ-контролем для склеивания патологических сосудов",
      features: ["УЗИ-контроль", "Малоинвазивность", "Амбулаторно", "Без общего наркоза (у взрослых)"],
      icon: "Syringe",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Медикаментозная терапия",
      description: "Терапия пропранололом при гемангиомах, Сиролимусом при мальформациях",
      features: ["Амбулаторное лечение", "Контроль кардиолога", "Высокая эффективность", "Минимум побочных эффектов"],
      icon: "Pill",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Хирургическое лечение",
      description: "Микрохирургические операции при сложных и комбинированных формах патологии",
      features: ["Микрохирургия", "Современное оборудование", "Косметические швы", "Стационар одного дня"],
      icon: "Scissors",
      color: "from-red-500 to-orange-500"
    },
  ];

  const locations = [
    {
      name: "Основной филиал",
      address: "ул. Нижняя Первомайская, д. 43",
      metro: "м. Первомайская (5 минут пешком)",
      schedule: "Ежедневно 09:00 - 18:00",
      icon: "Building2"
    },
    {
      name: "Второй филиал",
      address: "Покровский бульвар, д. 8, стр. 1",
      metro: "м. Чистые пруды",
      schedule: "Ежедневно 09:00 - 18:00",
      icon: "Hospital"
    },
    {
      name: "Партнёрская клиника",
      address: "Коровинское шоссе, д. 9, корп. 2",
      metro: "Клиника доктора Матара",
      schedule: "По записи",
      icon: "MapPin"
    },
  ];

  const faqItems = [
    { 
      question: "Чем отличается гемангиома от сосудистой мальформации?", 
      answer: "Гемангиома - это доброкачественная сосудистая опухоль, которая растёт в первые месяцы жизни и обычно регрессирует к 5-7 годам. Сосудистая мальформация - это врождённый порок развития сосудов, который присутствует с рождения, не исчезает самостоятельно и требует лечения." 
    },
    { 
      question: "Всегда ли нужно лечить младенческую гемангиому?", 
      answer: "Нет, около 70% гемангиом регрессируют самостоятельно без лечения. Лечение показано при быстром росте, расположении на лице (особенно в области глаз, носа, рта), изъязвлении, больших размерах или риске осложнений. Решение принимается индивидуально после осмотра специалиста." 
    },
    { 
      question: "Что такое пропранолол и безопасен ли он?", 
      answer: "Пропранолол (Гемангиол) - золотой стандарт лечения младенческих гемангиом, одобрен FDA. Это бета-блокатор, который останавливает рост опухоли и способствует её регрессу. Лечение проводится под контролем кардиолога, начинается в стационаре. При правильном назначении препарат безопасен." 
    },
    { 
      question: "Как проводится склеротерапия?", 
      answer: "Склеротерапия - это введение специального препарата (склерозанта) в сосудистое образование, который вызывает склеивание стенок патологических сосудов. Процедура проводится под УЗИ-контролем для точности. Детям - под общей анестезией, взрослым возможна местная. Обычно требуется 2-4 сеанса с интервалом 2-3 месяца." 
    },
    { 
      question: "Болезненны ли лазерные процедуры?", 
      answer: "Современные импульсные лазеры (Vbeam, Cutera Excel V) имеют систему охлаждения кожи, что значительно снижает дискомфорт. Детям до 3 лет процедуры проводятся под лёгкой седацией или местной анестезией. Взрослые переносят процедуру хорошо, ощущения сравнимы с лёгкими щелчками резинкой." 
    },
    { 
      question: "Остаются ли рубцы после лечения?", 
      answer: "Лазерная терапия и склеротерапия - малоинвазивные методы, которые не оставляют разрезов и рубцов. При хирургическом лечении наши врачи используют микрохирургические техники и косметические швы. Рубцы со временем становятся практически незаметными. Окончательный результат оценивается через 6-12 месяцев после лечения." 
    },
    { 
      question: "Работаете ли вы с пациентами из других регионов?", 
      answer: "Да, мы принимаем пациентов из всех регионов России и зарубежья. Предлагаем удалённые консультации по фото и видео (WhatsApp, телемедицина). Можем составить план лечения дистанционно, а затем провести необходимые процедуры за 1-2 визита. Врачи на связи 24/7 для контроля терапии." 
    },
    { 
      question: "Сколько стоит консультация и лечение?", 
      answer: "Первичная консультация (очная или удалённая) - от 3500 руб. Стоимость лечения зависит от типа патологии, размера образования и выбранного метода. Точную цену озвучит врач после осмотра. Многие процедуры доступны по ОМС. Финансовые вопросы не должны быть препятствием - мы всегда найдём решение." 
    },
  ];

  const achievements = [
    { number: "5000+", label: "пациентов ежегодно", icon: "Users" },
    { number: "28", label: "лет опыта руководителя", icon: "Award" },
    { number: "3", label: "уникальных патента", icon: "FileCheck" },
    { number: "10+", label: "специалистов в команде", icon: "Stethoscope" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-xl shadow-md">
                <Icon name="HeartPulse" className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  Центр сосудистой патологии
                </h1>
                <p className="text-xs text-muted-foreground">"Гемангиома"</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#pathologies" className="text-sm font-medium hover:text-primary transition-colors">Патологии</a>
              <a href="#methods" className="text-sm font-medium hover:text-primary transition-colors">Методы</a>
              <a href="#doctors" className="text-sm font-medium hover:text-primary transition-colors">Врачи</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden md:flex bg-secondary hover:bg-secondary/90 shadow-md">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (499) 704-03-02
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,136,204,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,20,91,0.08),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white rounded-full shadow-md border-2 border-primary/20">
              <Icon name="Award" className="text-primary" size={20} />
              <p className="text-sm font-bold text-primary">Единственный специализированный центр в России</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Лечение гемангиом и сосудистых мальформаций
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Мультидисциплинарная команда экспертов. Международные стандарты лечения. Современное лазерное оборудование Vbeam Candela и Cutera Excel V.
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
              Более 5000 пациентов ежегодно. Работаем с младенческими гемангиомами, венозными, лимфатическими и капиллярными мальформациями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-base bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="text-base border-2 hover:bg-primary/5 shadow-md">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Онлайн-консультация
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Icon name="Clock" className="text-secondary" size={18} />
                <span className="font-medium">Работаем ежедневно</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Icon name="Shield" className="text-secondary" size={18} />
                <span className="font-medium">Лицензированная клиника</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Icon name="Plane" className="text-secondary" size={18} />
                <span className="font-medium">Пациенты из всех регионов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={item.icon} className="text-white" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{item.number}</div>
                <div className="text-sm md:text-base opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Направления лечения</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр диагностики и лечения врождённой и приобретённой сосудистой патологии
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 group bg-gradient-to-br from-white to-muted/30">
                <CardContent className="p-7">
                  <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={service.icon} className="text-white" size={30} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-muted/40 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground text-lg">Почему нам доверяют семьи со всей России</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                  <Icon name={advantage.icon} className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pathologies" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Какие патологии мы лечим</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Специализируемся на всех типах сосудистых образований у детей и взрослых
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {pathologies.map((pathology, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-secondary to-secondary/80 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                      <Icon name={pathology.icon} className="text-white" size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{pathology.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{pathology.description}</p>
                  <div>
                    <p className="font-semibold text-sm mb-3 text-primary">Методы лечения:</p>
                    <ul className="space-y-2">
                      {pathology.methods.map((method, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle2" className="text-secondary mt-0.5 shrink-0" size={16} />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Методы лечения</h2>
            <p className="text-muted-foreground text-lg">Современные малоинвазивные технологии</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {methods.map((method, index) => (
              <Card key={index} className="border-2 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${method.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <Icon name={method.icon} size={36} />
                      </div>
                      <h3 className="text-2xl font-bold">{method.name}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{method.description}</p>
                  </div>
                  <div className="p-7">
                    <div className="grid grid-cols-2 gap-4">
                      {method.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-600 shrink-0" size={18} />
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-muted-foreground text-lg">Команда врачей международного уровня</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 bg-white">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Icon name="UserRound" className="text-primary" size={64} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center text-foreground">{doctor.name}</h3>
                  <p className="text-primary font-semibold mb-1 text-center">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-5 text-center">{doctor.experience}</p>
                  <div className="space-y-2">
                    {doctor.qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Award" className="text-secondary mt-0.5 shrink-0" size={16} />
                        <span className="text-xs text-muted-foreground leading-relaxed">{qual}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">и ещё 7+ специалистов в нашей команде</p>
            <Button variant="outline" className="border-2">
              <Icon name="Users" className="mr-2" size={18} />
              Посмотреть всех врачей
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                  <p className="text-sm font-bold text-primary">Современное оборудование</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Лучшие лазеры для лечения сосудистой патологии</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border-2">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Icon name="Zap" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Vbeam Candela</h4>
                      <p className="text-sm text-muted-foreground">Импульсный лазер для лечения гемангиом и капиллярных мальформаций</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border-2">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Icon name="Sparkles" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Cutera Excel V</h4>
                      <p className="text-sm text-muted-foreground">Универсальный лазер для сосудистых и пигментных образований</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border-2">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Icon name="Flame" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">ILOODA FRAXIS</h4>
                      <p className="text-sm text-muted-foreground">Фракционный лазер для лечения рубцов и омоложения</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl border-2 border-primary/20">
                <Icon name="Microscope" className="text-primary mb-6" size={56} />
                <h3 className="text-2xl font-bold mb-4">Научная работа</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Icon name="FileCheck" className="text-secondary mt-1 shrink-0" size={20} />
                    <span className="text-sm">3 патента на методы лечения гемангиом и мальформаций</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="BookOpen" className="text-secondary mt-1 shrink-0" size={20} />
                    <span className="text-sm">Книга "Сосудистые мальформации" (OZON, ЯндексМаркет)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Globe" className="text-secondary mt-1 shrink-0" size={20} />
                    <span className="text-sm">Стажировки в Laser & Skin Surgery Center of New York</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Award" className="text-secondary mt-1 shrink-0" size={20} />
                    <span className="text-sm">Члены международной организации ISSVA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-muted-foreground text-lg">Ответы на важные вопросы о диагностике и лечении</p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 border-2 rounded-2xl px-7 hover:bg-muted/50 transition-colors">
                  <AccordionTrigger className="text-left text-base font-bold hover:text-primary py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 md:py-24 bg-gradient-to-br from-muted/40 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Наши филиалы</h2>
              <p className="text-muted-foreground text-lg">3 клиники в Москве для вашего удобства</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {locations.map((location, index) => (
                <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-7">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                      <Icon name={location.icon} className="text-primary" size={30} />
                    </div>
                    <h3 className="font-bold text-lg mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-secondary mt-1 shrink-0" size={18} />
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Train" className="text-secondary mt-1 shrink-0" size={18} />
                        <p className="text-sm text-muted-foreground">{location.metro}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Clock" className="text-secondary mt-1 shrink-0" size={18} />
                        <p className="text-sm text-muted-foreground">{location.schedule}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 shadow-xl bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Контакты и запись</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-4 rounded-xl shrink-0">
                        <Icon name="Phone" className="text-primary" size={26} />
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Телефоны клиники</p>
                        <p className="text-xl font-bold text-primary mb-1">+7 (499) 704-03-02</p>
                        <p className="text-lg font-bold text-primary">+7 (903) 231-01-03</p>
                        <p className="text-sm text-muted-foreground mt-2">Ежедневно с 09:00 до 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-4 rounded-xl shrink-0">
                        <Icon name="MessageCircle" className="text-primary" size={26} />
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Онлайн-консультации</p>
                        <p className="text-muted-foreground text-sm">WhatsApp, Телемедицина</p>
                        <p className="text-muted-foreground text-sm">Удалённые консультации для иногородних</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-4 rounded-xl shrink-0">
                        <Icon name="Headphones" className="text-primary" size={26} />
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Врачи на связи 24/7</p>
                        <p className="text-muted-foreground text-sm">Контроль лечения в любое время</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-xl bg-gradient-to-br from-white to-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Онлайн-запись</h3>
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
                      <input 
                        type="text" 
                        placeholder="Иван Иванов" 
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Тип патологии</label>
                      <select className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                        <option>Младенческая гемангиома</option>
                        <option>Венозная мальформация</option>
                        <option>Лимфатическая мальформация</option>
                        <option>Капиллярная мальформация (винное пятно)</option>
                        <option>Не знаю / нужна диагностика</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Возраст пациента</label>
                      <select className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                        <option>0-6 месяцев</option>
                        <option>6-12 месяцев</option>
                        <option>1-3 года</option>
                        <option>3-7 лет</option>
                        <option>7-14 лет</option>
                        <option>14-18 лет</option>
                        <option>Старше 18 лет</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Комментарий</label>
                      <textarea 
                        placeholder="Кратко опишите проблему, когда появилось образование" 
                        rows={3}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 shadow-lg" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Отправляя заявку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Info" className="mx-auto mb-6" size={56} />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Важная информация для пациентов</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border-2 border-white/20 text-left">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                  <Icon name="FileCheck" size={24} />
                  Что взять на консультацию
                </h4>
                <ul className="space-y-2 opacity-95">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Паспорт / свидетельство о рождении</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Полис ОМС (если есть)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Результаты УЗИ, МРТ (если проводились)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Фото образования в разные периоды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Выписки от других специалистов</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border-2 border-white/20 text-left">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                  <Icon name="Globe" size={24} />
                  Для иногородних пациентов
                </h4>
                <ul className="space-y-2 opacity-95">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Удалённая консультация по фото и видео</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Составление плана лечения онлайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Процедуры за 1-2 визита в клинику</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Дистанционный контроль лечения 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="mt-1 shrink-0" size={18} />
                    <span>Помощь в организации визита в Москву</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary p-3 rounded-xl shadow-lg">
                  <Icon name="HeartPulse" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Центр сосудистой патологии</h3>
                  <p className="text-sm opacity-80">"Гемангиома"</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed max-w-md mb-5">
                Единственный в России специализированный мультидисциплинарный медицинский центр по лечению всех видов врождённой и приобретённой сосудистой патологии у детей и взрослых.
              </p>
              <p className="text-xs opacity-70">Основан в 2019 году • Лицензированная клиника</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Разделы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги и направления</a></li>
                <li><a href="#pathologies" className="hover:text-primary transition-colors">Патологии</a></li>
                <li><a href="#methods" className="hover:text-primary transition-colors">Методы лечения</a></li>
                <li><a href="#doctors" className="hover:text-primary transition-colors">Наши врачи</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты и запись</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" className="mt-0.5 shrink-0" size={16} />
                  <div>
                    <div>+7 (499) 704-03-02</div>
                    <div>+7 (903) 231-01-03</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" className="mt-0.5 shrink-0" size={16} />
                  <span>Москва, ул. Нижняя Первомайская, 43</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Clock" className="mt-0.5 shrink-0" size={16} />
                  <span>Ежедневно 09:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
              <p>© 2019-2024 Центр сосудистой патологии "Гемангиома". Все права защищены.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition-colors">Лицензии</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
