import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

interface TrackingPageProps {
  order?: any;
}

const TrackingPage = ({ order }: TrackingPageProps) => {
  const [courierPosition, setCourierPosition] = useState({ lat: 55.7558, lng: 37.6173 });
  const [progress, setProgress] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setCourierPosition(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
      setProgress(prev => Math.min(prev + 1, 95));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
          <Icon name="MapPin" size={64} className="text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Нет активных доставок</h2>
        <p className="text-muted-foreground text-lg">Оформите заказ, чтобы отслеживать доставку</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2">Отслеживание доставки</h2>
        <p className="text-muted-foreground text-lg">Заказ #{order.id}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-2 border-primary/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Map" size={24} className="text-primary" />
                Карта доставки
              </CardTitle>
              <CardDescription>Курьер движется к вам</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-secondary/20 via-background to-accent/20 h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 600 500">
                    <path d="M100,100 Q200,50 300,100 T500,100" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/30" />
                    <path d="M100,200 Q200,150 300,200 T500,200" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/30" />
                    <path d="M100,300 Q200,250 300,300 T500,300" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/30" />
                    <path d="M100,400 Q200,350 300,400 T500,400" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/30" />
                  </svg>
                </div>
                
                <div className="absolute top-20 left-20 z-10 animate-pulse">
                  <div className="relative">
                    <div className="absolute inset-0 bg-destructive/30 rounded-full blur-xl w-16 h-16 -left-4 -top-4"></div>
                    <div className="relative bg-destructive text-white p-4 rounded-full shadow-2xl">
                      <Icon name="Home" size={32} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-3 py-1 rounded-lg shadow-lg border-2 border-destructive/50">
                      <span className="font-semibold text-sm">Ваш адрес</span>
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute z-10 transition-all duration-3000 ease-in-out"
                  style={{ 
                    top: `${200 + Math.sin(progress / 10) * 100}px`, 
                    left: `${150 + progress * 3}px` 
                  }}
                >
                  <div className="relative animate-bounce">
                    <div className="absolute inset-0 bg-secondary/30 rounded-full blur-xl w-20 h-20 -left-6 -top-6"></div>
                    <div className="relative bg-secondary text-white p-4 rounded-full shadow-2xl border-4 border-white">
                      <Icon name="Truck" size={32} />
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-3 py-2 rounded-lg shadow-lg border-2 border-secondary/50">
                      <span className="font-semibold text-sm">{order.courier.name}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-20 w-1 h-full border-l-4 border-dashed border-primary/30"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-secondary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Truck" size={24} className="text-secondary" />
                Статус доставки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Прогресс</span>
                  <span className="text-sm font-bold text-secondary">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
              <Badge className="w-full justify-center py-2 text-base bg-secondary text-secondary-foreground">
                {order.status}
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="User" size={24} className="text-primary" />
                Курьер
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{order.courier.name}</p>
                  <p className="text-sm text-muted-foreground">{order.courier.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Package" size={24} className="text-accent" />
                Заказ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Номер:</span>
                  <span className="font-semibold">#{order.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Дата:</span>
                  <span className="font-semibold">{order.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Позиций:</span>
                  <span className="font-semibold">{order.items.length}</span>
                </div>
                <div className="border-t-2 border-accent/20 pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Сумма:</span>
                    <span className="text-primary">{order.total.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;