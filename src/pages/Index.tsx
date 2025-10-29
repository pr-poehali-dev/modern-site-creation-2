import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const services = [
    { 
      name: "Младенческие гемангиомы", 
      icon: "Baby", 
      description: "Диагностика и наблюдение. Терапия пропранололом. Склеротерапия и лазеротерапия." 
    },
    { 
      name: "Сосудистые мальформации", 
      icon: "Activity", 
      description: "Венозные, артерио-венозные, лимфатические, капиллярные мальформации" 
    },
    { 
      name: "Лимфатические мальформации", 
      icon: "Droplet", 
      description: "Склеротерапия, хирургическое лечение комбинированных форм" 
    },
    { 
      name: "Склеротерапия", 
      icon: "Syringe", 
      description: "Малоинвазивное лечение венозных и лимфатических мальформаций" 
    },
    { 
      name: "Лазерная терапия", 
      icon: "Zap", 
      description: "Лечение поверхностных сосудистых образований импульсным лазером" 
    },
    { 
      name: "Хирургическое лечение", 
      icon: "Scissors", 
      description: "Удаление глубоких и комбинированных сосудистых образований" 
    },
  ];

  const advantages = [
    { 
      icon: "Award", 
      title: "Экспертный центр", 
      text: "Единственный в России центр, специализирующийся на сосудистых аномалиях" 
    },
    { 
      icon: "Users", 
      title: "Мультидисциплинарная команда", 
      text: "Детские хирурги, интервенционные радиологи, дерматологи работают вместе" 
    },
    { 
      icon: "Hospital", 
      title: "Современное оборудование", 
      text: "УЗИ экспертного класса, импульсный лазер, МРТ диагностика" 
    },
    { 
      icon: "Heart", 
      title: "Индивидуальный подход", 
      text: "Персональный план лечения на основе международных протоколов" 
    },
  ];

  const doctors = [
    { 
      name: "Шавров Артём Александрович", 
      specialty: "Детский хирург, д.м.н.", 
      experience: "Руководитель центра, 20 лет опыта",
      description: "Специалист по лечению младенческих гемангиом и сосудистых мальформаций"
    },
    { 
      name: "Дроздова Мария Владимировна", 
      specialty: "Детский хирург, к.м.н.", 
      experience: "15 лет опыта",
      description: "Эксперт по склеротерапии и хирургическому лечению"
    },
    { 
      name: "Иванов Дмитрий Сергеевич", 
      specialty: "Интервенционный радиолог", 
      experience: "12 лет опыта",
      description: "Специалист по эндоваскулярным вмешательствам"
    },
  ];

  const pathologies = [
    {
      title: "Младенческие гемангиомы",
      description: "Доброкачественные сосудистые опухоли, появляющиеся в первые недели жизни",
      symptoms: ["Быстрый рост в первые месяцы", "Красное или синюшное образование", "Выступает над кожей"],
      treatment: "Терапия пропранололом, склеротерапия, лазеротерапия"
    },
    {
      title: "Венозные мальформации",
      description: "Врожденные аномалии развития венозных сосудов",
      symptoms: ["Синюшное мягкое образование", "Увеличение при наклоне", "Боль и отек"],
      treatment: "Склеротерапия, хирургическое удаление"
    },
    {
      title: "Лимфатические мальформации",
      description: "Врожденные кисты лимфатической системы",
      symptoms: ["Мягкое образование", "Медленный рост", "Увеличение при ОРВИ"],
      treatment: "Склеротерапия, хирургическое лечение"
    },
    {
      title: "Капиллярные мальформации",
      description: "Винные пятна и другие сосудистые пятна на коже",
      symptoms: ["Красное или розовое пятно", "Присутствует с рождения", "Не выступает над кожей"],
      treatment: "Импульсная лазерная терапия"
    },
  ];

  const treatmentSteps = [
    {
      step: "1",
      title: "Первичная консультация",
      description: "Осмотр специалиста, УЗИ исследование, постановка диагноза",
      icon: "ClipboardList"
    },
    {
      step: "2",
      title: "Обследование",
      description: "МРТ с контрастом, дополнительные анализы при необходимости",
      icon: "ScanSearch"
    },
    {
      step: "3",
      title: "План лечения",
      description: "Консилиум специалистов, выбор оптимальной тактики",
      icon: "FileText"
    },
    {
      step: "4",
      title: "Лечение",
      description: "Медикаментозная терапия, склеротерапия, лазер или операция",
      icon: "Pill"
    },
    {
      step: "5",
      title: "Наблюдение",
      description: "Контрольные осмотры, оценка результатов, коррекция терапии",
      icon: "Eye"
    },
  ];

  const faqItems = [
    { 
      question: "Чем отличается гемангиома от сосудистой мальформации?", 
      answer: "Гемангиома - это доброкачественная опухоль, которая растет в первые месяцы жизни и обычно регрессирует к 5-7 годам. Сосудистая мальформация - это порок развития сосудов, который присутствует с рождения и не исчезает самостоятельно, требует лечения." 
    },
    { 
      question: "Всегда ли нужно лечить младенческую гемангиому?", 
      answer: "Нет, около 70% гемангиом не требуют лечения и регрессируют самостоятельно. Лечение показано при быстром росте, расположении на лице, в области глаз, рта, носа, при изъязвлении или больших размерах образования." 
    },
    { 
      question: "Что такое склеротерапия и как она проводится?", 
      answer: "Склеротерапия - это введение специального препарата в сосудистое образование, который вызывает склеивание стенок сосудов. Процедура проводится под УЗИ-контролем под общей анестезией. Обычно требуется несколько сеансов с интервалом 2-3 месяца." 
    },
    { 
      question: "Безопасна ли терапия пропранололом?", 
      answer: "Пропранолол - золотой стандарт лечения младенческих гемангиом, одобрен FDA и безопасен при правильном назначении. Лечение проводится под контролем кардиолога с регулярными обследованиями. Начинается в стационаре под наблюдением." 
    },
    { 
      question: "Остаются ли рубцы после лечения?", 
      answer: "Склеротерапия и лазерная терапия малоинвазивны и обычно не оставляют рубцов. При хирургическом лечении врачи используют косметические швы, рубцы со временем становятся малозаметными. Окончательный результат оценивается через 6-12 месяцев." 
    },
    { 
      question: "Как записаться на консультацию?", 
      answer: "Позвоните по телефону +7 (495) 967-00-00 или оставьте заявку на сайте. Необходимо иметь при себе: свидетельство о рождении, полис ОМС, СНИЛС. Желательно принести результаты предыдущих обследований (УЗИ, МРТ)." 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <Icon name="HeartPulse" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  Центр лечения гемангиом
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">и сосудистых аномалий</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#pathologies" className="text-sm font-medium hover:text-primary transition-colors">Патологии</a>
              <a href="#treatment" className="text-sm font-medium hover:text-primary transition-colors">Лечение</a>
              <a href="#doctors" className="text-sm font-medium hover:text-primary transition-colors">Врачи</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Вопросы</a>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden md:flex bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (495) 967-00-00
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">Экспертный центр диагностики и лечения</p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Современное лечение гемангиом и сосудистых аномалий
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Мультидисциплинарная команда специалистов. Малоинвазивные методы лечения. Международные протоколы. Наблюдение и терапия любых сосудистых образований у детей и взрослых.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base bg-primary hover:bg-primary/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="text-base border-2">
                <Icon name="FileQuestion" className="mr-2" size={20} />
                Получить консультацию
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-secondary" size={20} />
                <span>Более 5000 пациентов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-secondary" size={20} />
                <span>Работаем с ОМС</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-secondary" size={20} />
                <span>Стационар одного дня</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Направления лечения</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр диагностики и лечения сосудистых образований
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pathologies" className="py-16 md:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Какие патологии мы лечим</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Диагностика и лечение всех типов сосудистых образований
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pathologies.map((pathology, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{pathology.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{pathology.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Признаки:</p>
                    <ul className="space-y-1">
                      {pathology.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="Dot" className="text-secondary mt-0.5 shrink-0" size={20} />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="font-semibold text-sm mb-1">Методы лечения:</p>
                    <p className="text-sm text-secondary">{pathology.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="treatment" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Этапы лечения</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Пошаговый процесс диагностики и терапии
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {treatmentSteps.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <Card className="flex-1 border-2 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                        <Icon name={item.icon} className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground text-lg">Почему семьи выбирают наш центр</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform">
                  <Icon name={advantage.icon} className="text-primary" size={36} />
                </div>
                <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-muted-foreground text-lg">Команда врачей экспертного уровня</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2">
                <CardContent className="p-6">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                    <Icon name="UserRound" className="text-primary" size={56} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                  <p className="text-primary font-semibold mb-1 text-sm">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-3">{doctor.experience}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{doctor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-muted-foreground text-lg">Ответы на важные вопросы о лечении</p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-xl px-6">
                  <AccordionTrigger className="text-left text-base font-bold hover:text-primary py-5 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись на консультацию</h2>
              <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Контакты</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Телефон регистратуры</p>
                        <p className="text-lg font-bold text-primary">+7 (495) 967-00-00</p>
                        <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Адрес</p>
                        <p className="text-muted-foreground">Москва, Ломоносовский проспект, д. 2, стр. 1</p>
                        <p className="text-sm text-muted-foreground mt-1">ДГКБ им. Башляевой</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">hemangioma@dgkb.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                        <Icon name="Clock" className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб: 10:00 - 15:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-lg bg-white">
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
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input 
                        type="email" 
                        placeholder="example@mail.ru" 
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Возраст пациента</label>
                      <select className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                        <option>0-1 год</option>
                        <option>1-3 года</option>
                        <option>3-7 лет</option>
                        <option>7-14 лет</option>
                        <option>Старше 14 лет</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Краткое описание проблемы</label>
                      <textarea 
                        placeholder="Опишите жалобы, когда появилось образование" 
                        rows={3}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Info" className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Важная информация</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Icon name="FileCheck" size={20} />
                  Что взять на консультацию
                </h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Свидетельство о рождении / паспорт</li>
                  <li>• Полис ОМС и СНИЛС</li>
                  <li>• Результаты УЗИ, МРТ (если есть)</li>
                  <li>• Фото образования в динамике</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Icon name="Shield" size={20} />
                  Лечение по ОМС
                </h4>
                <p className="text-sm opacity-90">
                  Все виды диагностики и лечения доступны по полису ОМС для жителей Москвы и регионов РФ. Платные услуги - только по желанию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary p-2 rounded-xl">
                  <Icon name="HeartPulse" className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Центр лечения гемангиом</h3>
                  <p className="text-sm opacity-80">и сосудистых аномалий</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed max-w-md">
                Единственный в России специализированный центр по диагностике и лечению всех типов сосудистых образований у детей и взрослых.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#pathologies" className="hover:text-primary transition-colors">Патологии</a></li>
                <li><a href="#treatment" className="hover:text-primary transition-colors">Этапы лечения</a></li>
                <li><a href="#doctors" className="hover:text-primary transition-colors">Специалисты</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">Вопросы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 967-00-00</li>
                <li>hemangioma@dgkb.ru</li>
                <li className="pt-2">Москва, Ломоносовский пр., 2/1</li>
                <li>ДГКБ им. Башляевой</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
              <p>© 2024 Центр лечения гемангиом. Все права защищены.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
