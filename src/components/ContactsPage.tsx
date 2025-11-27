import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
        <p className="text-muted-foreground text-lg">
          Свяжитесь с нами удобным для вас способом
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-2 border-primary/50 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Phone" size={24} className="text-primary" />
                Телефон
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground">Звоните с 8:00 до 20:00 ежедневно</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/50 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Mail" size={24} className="text-secondary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-secondary mb-2">info@ecoovoshi.ru</p>
              <p className="text-muted-foreground">Ответим в течение 24 часов</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/50 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-accent" />
                Адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-accent mb-2">
                г. Москва, ул. Садовая, д. 25
              </p>
              <p className="text-muted-foreground">Офис и склад (самовывоз доступен)</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" size={24} className="text-primary" />
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Пн - Пт:</span>
                <span className="text-primary">8:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Сб - Вс:</span>
                <span className="text-primary">9:00 - 18:00</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Send" size={24} className="text-primary" />
              Напишите нам
            </CardTitle>
            <CardDescription>
              Заполните форму, и мы свяжемся с вами
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="border-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Напишите ваше сообщение..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="border-2 min-h-32"
                />
              </div>
              <Button 
                type="submit"
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactsPage;
