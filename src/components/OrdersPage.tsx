import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface OrdersPageProps {
  orders: any[];
  onTrackOrder: (orderId: number) => void;
}

const OrdersPage = ({ orders, onTrackOrder }: OrdersPageProps) => {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
          <Icon name="Package" size={64} className="text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-bold mb-2">У вас пока нет заказов</h2>
        <p className="text-muted-foreground text-lg">Оформите первый заказ в каталоге</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2">Мои заказы</h2>
        <p className="text-muted-foreground text-lg">История ваших покупок</p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Package" size={24} className="text-primary" />
                    Заказ #{order.id}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Оформлен {order.date}
                  </CardDescription>
                </div>
                <Badge className="bg-secondary text-secondary-foreground text-base px-4 py-2">
                  {order.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-primary/20 rounded-lg p-4 bg-muted/30">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="ShoppingBasket" size={18} className="mr-2 text-primary" />
                    Состав заказа:
                  </h4>
                  <div className="space-y-2">
                    {order.items.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span>{item.name} × {item.quantity} {item.unit}</span>
                        <span className="font-semibold">{(item.price * item.quantity).toLocaleString()} ₽</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t-2 border-primary/20 mt-3 pt-3 flex justify-between font-bold text-lg">
                    <span>Итого:</span>
                    <span className="text-primary">{order.total.toLocaleString()} ₽</span>
                  </div>
                </div>

                {order.courier && (
                  <div className="border-2 border-secondary/50 rounded-lg p-4 bg-secondary/10">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Icon name="Truck" size={18} className="mr-2 text-secondary" />
                      Курьер:
                    </h4>
                    <p className="text-sm">{order.courier.name}</p>
                    <p className="text-sm text-muted-foreground">{order.courier.phone}</p>
                  </div>
                )}

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 transition-all"
                  onClick={() => onTrackOrder(order.id)}
                >
                  <Icon name="MapPin" size={18} className="mr-2" />
                  Отследить доставку
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
