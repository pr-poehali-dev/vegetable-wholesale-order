import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { CartItem } from './MainApp';

interface CartPageProps {
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  onCheckout: () => void;
}

const CartPage = ({ cart, updateQuantity, onCheckout }: CartPageProps) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
          <Icon name="ShoppingCart" size={64} className="text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Корзина пуста</h2>
        <p className="text-muted-foreground text-lg">Добавьте товары из каталога</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2">Корзина</h2>
        <p className="text-muted-foreground text-lg">Проверьте ваш заказ перед оформлением</p>
      </div>

      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <Card key={item.id} className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <p className="text-muted-foreground">{item.price} ₽ / {item.unit}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-10 w-10 border-2"
                  >
                    <Icon name="Minus" size={18} />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                    className="w-20 text-center border-2"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-10 w-10 border-2"
                  >
                    <Icon name="Plus" size={18} />
                  </Button>
                </div>
                <div className="text-right min-w-[120px]">
                  <p className="text-2xl font-bold text-primary">
                    {(item.price * item.quantity).toLocaleString()} ₽
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => updateQuantity(item.id, 0)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Icon name="Trash2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-primary/50 bg-card shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Итого к оплате</CardTitle>
          <CardDescription>Сумма вашего заказа</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-lg">
              <span>Товары ({cart.length} позиций):</span>
              <span className="font-semibold">{total.toLocaleString()} ₽</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Доставка:</span>
              <span className="font-semibold text-secondary">Бесплатно</span>
            </div>
            <div className="border-t-2 border-primary/20 pt-4 mt-4">
              <div className="flex justify-between text-2xl font-bold">
                <span>Итого:</span>
                <span className="text-primary">{total.toLocaleString()} ₽</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all hover:scale-105"
            onClick={onCheckout}
          >
            <Icon name="CreditCard" size={24} className="mr-2" />
            Оформить заказ
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CartPage;
