import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CatalogPage from './CatalogPage';
import CartPage from './CartPage';
import OrdersPage from './OrdersPage';
import TrackingPage from './TrackingPage';
import ProfilePage from './ProfilePage';
import AboutPage from './AboutPage';
import ContactsPage from './ContactsPage';

interface MainAppProps {
  onLogout: () => void;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  image: string;
}

const MainApp = ({ onLogout }: MainAppProps) => {
  const [currentPage, setCurrentPage] = useState('catalog');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(i => i.id !== id));
    } else {
      setCart(prev => prev.map(i => 
        i.id === id ? { ...i, quantity } : i
      ));
    }
  };

  const placeOrder = () => {
    const newOrder = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toLocaleDateString('ru-RU'),
      status: 'В пути',
      courier: {
        name: 'Иван Петров',
        phone: '+7 (999) 123-45-67',
        lat: 55.7558,
        lng: 37.6173
      }
    };
    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setCurrentPage('tracking');
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderPage = () => {
    switch(currentPage) {
      case 'catalog':
        return <CatalogPage addToCart={addToCart} />;
      case 'cart':
        return <CartPage cart={cart} updateQuantity={updateQuantity} onCheckout={placeOrder} />;
      case 'orders':
        return <OrdersPage orders={orders} onTrackOrder={(orderId) => setCurrentPage('tracking')} />;
      case 'tracking':
        return <TrackingPage order={orders[0]} />;
      case 'profile':
        return <ProfilePage onLogout={onLogout} />;
      case 'about':
        return <AboutPage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <CatalogPage addToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card border-b-2 border-primary/20 shadow-lg backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Leaf" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">ЭкоОвощи</h1>
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Button
                variant={currentPage === 'catalog' ? 'default' : 'ghost'}
                onClick={() => setCurrentPage('catalog')}
                className="whitespace-nowrap"
              >
                <Icon name="ShoppingBasket" size={18} className="mr-2" />
                Каталог
              </Button>
              <Button
                variant={currentPage === 'cart' ? 'default' : 'ghost'}
                onClick={() => setCurrentPage('cart')}
                className="relative whitespace-nowrap"
              >
                <Icon name="ShoppingCart" size={18} className="mr-2" />
                Корзина
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
              <Button
                variant={currentPage === 'orders' ? 'default' : 'ghost'}
                onClick={() => setCurrentPage('orders')}
                className="whitespace-nowrap"
              >
                <Icon name="Package" size={18} className="mr-2" />
                Заказы
              </Button>
              <Button
                variant={currentPage === 'profile' ? 'default' : 'ghost'}
                onClick={() => setCurrentPage('profile')}
                className="whitespace-nowrap"
              >
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <footer className="bg-card border-t-2 border-primary/20 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Icon name="Leaf" size={24} className="mr-2 text-primary" />
                ЭкоОвощи
              </h3>
              <p className="text-muted-foreground">
                Оптовая продажа свежих органических овощей с доставкой по городу
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentPage('catalog')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Каталог товаров
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  О компании
                </button>
                <button 
                  onClick={() => setCurrentPage('contacts')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Контакты
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={18} className="mr-2" />
                  info@ecoovoshi.ru
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainApp;
