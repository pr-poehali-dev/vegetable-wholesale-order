import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CatalogPageProps {
  addToCart: (item: any) => void;
}

const vegetables = [
  {
    id: 1,
    name: 'Томаты',
    price: 120,
    unit: 'кг',
    description: 'Спелые красные томаты',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/1b2d98a6-4c6c-473b-b574-ca3a9d1c6c98.jpg',
    inStock: true,
    badge: 'Хит продаж'
  },
  {
    id: 2,
    name: 'Огурцы',
    price: 90,
    unit: 'кг',
    description: 'Свежие хрустящие огурцы',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/c44f9a7e-4418-46d7-9934-18a8e6107b3c.jpg',
    inStock: true,
    badge: 'Органика'
  },
  {
    id: 3,
    name: 'Перец болгарский',
    price: 150,
    unit: 'кг',
    description: 'Разноцветный сладкий перец',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/1696a41c-4352-48be-b44d-880cfc63ad20.jpg',
    inStock: true
  },
  {
    id: 4,
    name: 'Морковь',
    price: 60,
    unit: 'кг',
    description: 'Сочная сладкая морковь',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/6c83342a-7da1-4568-a479-501b042b6c55.jpg',
    inStock: true
  },
  {
    id: 5,
    name: 'Капуста белокочанная',
    price: 45,
    unit: 'кг',
    description: 'Плотная свежая капуста',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/e23d79a4-2f7a-4348-84c0-2e7035723a6a.jpg',
    inStock: true,
    badge: 'Новинка'
  },
  {
    id: 6,
    name: 'Картофель',
    price: 35,
    unit: 'кг',
    description: 'Крупный картофель для жарки',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/15535b25-c520-49af-9ab4-85c6b31cb2ae.jpg',
    inStock: true
  },
  {
    id: 7,
    name: 'Лук репчатый',
    price: 30,
    unit: 'кг',
    description: 'Золотистый репчатый лук',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/67242968-3dd6-483e-a16f-ec71c868bf96.jpg',
    inStock: true
  },
  {
    id: 8,
    name: 'Салат листовой',
    price: 180,
    unit: 'кг',
    description: 'Нежный зеленый салат',
    image: 'https://cdn.poehali.dev/projects/304929e3-49b5-428a-8c0f-3d27193ad0c9/files/1cf66b5f-37fc-4691-84e6-163ff0e6bb6b.jpg',
    inStock: true,
    badge: 'Органика'
  }
];

const CatalogPage = ({ addToCart }: CatalogPageProps) => {
  const { toast } = useToast();

  const handleAddToCart = (item: any) => {
    addToCart(item);
    toast({
      title: 'Добавлено в корзину',
      description: `${item.name} успешно добавлен в корзину`,
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Каталог свежих овощей</h2>
        <p className="text-muted-foreground text-lg">Выберите товары для оптовой закупки</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vegetables.map((vegetable) => (
          <Card 
            key={vegetable.id} 
            className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
          >
            <div className="relative">
              <img 
                src={vegetable.image} 
                alt={vegetable.name}
                className="w-full h-48 object-cover"
              />
              {vegetable.badge && (
                <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
                  {vegetable.badge}
                </Badge>
              )}
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{vegetable.name}</span>
                <Icon name="Leaf" size={20} className="text-primary" />
              </CardTitle>
              <CardDescription>{vegetable.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {vegetable.price} ₽
                </span>
                <span className="text-muted-foreground">/ {vegetable.unit}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 transition-all"
                onClick={() => handleAddToCart(vegetable)}
              >
                <Icon name="ShoppingCart" size={18} className="mr-2" />
                В корзину
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;