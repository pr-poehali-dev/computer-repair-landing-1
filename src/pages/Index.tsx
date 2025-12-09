import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Диагностика",
      description: "Бесплатная диагностика в течение 30 минут"
    },
    {
      icon: "Laptop",
      title: "Ремонт ноутбуков",
      description: "Замена экранов, клавиатур, чистка от пыли"
    },
    {
      icon: "Monitor",
      title: "Ремонт ПК",
      description: "Апгрейд, сборка, настройка системы"
    },
    {
      icon: "HardDrive",
      title: "Восстановление данных",
      description: "Восстановление файлов с поврежденных носителей"
    },
    {
      icon: "Shield",
      title: "Удаление вирусов",
      description: "Полная очистка от вредоносного ПО"
    },
    {
      icon: "Zap",
      title: "Срочный ремонт",
      description: "Экспресс-ремонт за 2-4 часа"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Computer" size={28} className="text-primary" />
            <span className="text-xl font-bold text-secondary">Ремонт-23</span>
          </div>
          <a href="tel:+79649133998" className="text-primary hover:text-primary/80 transition-colors font-semibold">
            +7-964-913-39-98
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-600 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Ремонт компьютеров<br />и ноутбуков в п.Южном
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 font-medium">
              Профессиональная диагностика за 30 минут.<br />Срочный ремонт за 2-4 часа.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-semibold transition-all">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Свяжитесь с нами</h2>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку, и мы свяжемся с вами в течение 5 минут
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 animate-scale-in">
                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-secondary">Ваше имя</label>
                      <Input placeholder="Иван Иванов" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-secondary">Телефон</label>
                      <Input placeholder="+7 (999) 999-99-99" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-secondary">Описание проблемы</label>
                      <Textarea placeholder="Расскажите, что случилось с вашим устройством" className="min-h-32" />
                    </div>
                    <Button className="w-full h-12 text-base font-semibold">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="border-2">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-secondary">Телефон</h3>
                      <a href="tel:+79649133998" className="text-primary hover:underline text-lg">
                        +7-964-913-39-98
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-secondary">Email</h3>
                      <a href="mailto:kivoks@mail.ru" className="text-primary hover:underline text-lg">
                        kivoks@mail.ru
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-secondary">Адрес</h3>
                      <p className="text-muted-foreground text-lg">
                        п.Южный, ул. Изобильная, д.1<br />
                        <span className="text-sm">(район фабрики дышащих окон)</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Clock" size={24} className="text-primary" />
                      <h3 className="font-bold text-lg text-secondary">Режим работы</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 21:00<br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            © 2024 Ремонт-23. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;