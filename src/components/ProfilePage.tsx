import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface ProfilePageProps {
  onLogout: () => void;
}

const ProfilePage = ({ onLogout }: ProfilePageProps) => {
  const [profile, setProfile] = useState({
    name: 'Иван Петров',
    email: 'ivan@example.com',
    phone: '+7 (999) 123-45-67',
    company: 'ООО "Продукты+"',
    address: 'г. Москва, ул. Ленина, д. 10'
  });

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2">Личный кабинет</h2>
        <p className="text-muted-foreground text-lg">Управление вашим профилем</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-2 border-primary/50 hover:shadow-xl transition-all">
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon name="Package" size={32} className="text-primary" />
            </div>
            <CardTitle className="text-center text-4xl font-bold text-primary">24</CardTitle>
            <CardDescription className="text-center">Всего заказов</CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-2 border-secondary/50 hover:shadow-xl transition-all">
          <CardHeader>
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon name="TrendingUp" size={32} className="text-secondary" />
            </div>
            <CardTitle className="text-center text-4xl font-bold text-secondary">₽ 125K</CardTitle>
            <CardDescription className="text-center">Всего потрачено</CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-2 border-accent/50 hover:shadow-xl transition-all">
          <CardHeader>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon name="Award" size={32} className="text-accent" />
            </div>
            <CardTitle className="text-center text-4xl font-bold text-accent">VIP</CardTitle>
            <CardDescription className="text-center">Статус клиента</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card className="border-2 border-primary/50 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="User" size={24} className="text-primary" />
            Информация профиля
          </CardTitle>
          <CardDescription>Ваши персональные данные</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="border-2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="border-2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="border-2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Компания</Label>
              <Input
                id="company"
                value={profile.company}
                onChange={(e) => setProfile({...profile, company: e.target.value})}
                className="border-2"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Адрес доставки</Label>
            <Input
              id="address"
              value={profile.address}
              onChange={(e) => setProfile({...profile, address: e.target.value})}
              className="border-2"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Icon name="Save" size={18} className="mr-2" />
            Сохранить изменения
          </Button>
        </CardContent>
      </Card>

      <Card className="border-2 border-destructive/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Icon name="LogOut" size={24} />
            Выход из системы
          </CardTitle>
          <CardDescription>Завершить текущую сессию</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            variant="destructive" 
            className="w-full h-12 text-lg"
            onClick={onLogout}
          >
            <Icon name="LogOut" size={20} className="mr-2" />
            Выйти из аккаунта
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
