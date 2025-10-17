import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Home } from '../pages/Home';


export const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route - SIN Footer */}
      <Route 
        path="/" 
        element={
          <MainLayout showFooter={false}>
            <Home />
          </MainLayout>
        } 
      />


      {/* 404 Not Found Route - CON Footer */}
      <Route 
        path="*" 
        element={
          <MainLayout showFooter={true}>
            <div className="min-h-screen bg-doom-black flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-2xl text-white/70 mb-8">Page not found</p>
                <a 
                  href="/" 
                  className="inline-block bg-doom-red hover:bg-doom-red/90 text-white font-bold py-4 px-12 text-lg tracking-wider transition-all duration-300"
                >
                  GO HOME
                </a>
              </div>
            </div>
          </MainLayout>
        } 
      />
    </Routes>
  );
};