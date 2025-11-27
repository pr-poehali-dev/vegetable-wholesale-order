import { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import MainApp from '@/components/MainApp';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {!isAuthenticated ? (
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <MainApp onLogout={() => setIsAuthenticated(false)} />
      )}
    </div>
  );
};

export default Index;