import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">О компании ЭкоОвощи</h2>
        <p className="text-muted-foreground text-lg">
          Ваш надежный партнер в оптовых поставках свежих овощей
        </p>
      </div>

      <div className="mb-12">
        <img 
          src="https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/439c47a9-ce0a-4e49-8cd4-98d0bce8728c.jpg"
          alt="Свежие овощи"
          className="w-full h-64 object-cover rounded-2xl shadow-2xl border-4 border-primary/20"
        />
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <Card className="border-2 border-primary/50">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-primary">ЭкоОвощи</strong> — это современная компания, специализирующаяся 
              на оптовых поставках свежих органических овощей для ресторанов, кафе, 
              супермаркетов и других предприятий общественного питания.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Мы работаем напрямую с фермерскими хозяйствами и тщательно отбираем 
              только лучшую продукцию, выращенную без использования вредных химикатов 
              и пестицидов.
            </p>
            <p className="text-lg leading-relaxed">
              Наша миссия — сделать здоровое питание доступным для каждого, обеспечивая 
              быструю и надежную доставку свежих овощей по всему городу.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-2 border-primary/50 hover:shadow-xl transition-all text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Leaf" size={40} className="text-primary" />
            </div>
            <CardTitle className="text-primary">100% Органика</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Все наши овощи выращены без химии и ГМО
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/50 hover:shadow-xl transition-all text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Truck" size={40} className="text-secondary" />
            </div>
            <CardTitle className="text-secondary">Быстрая доставка</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Доставляем свежие овощи в течение 2-4 часов
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent/50 hover:shadow-xl transition-all text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={40} className="text-accent" />
            </div>
            <CardTitle className="text-accent">Гарантия качества</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Возврат или замена товара при любых претензиях
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Icon name="TrendingUp" size={28} className="text-primary" />
            Наши достижения
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Видов овощей</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
