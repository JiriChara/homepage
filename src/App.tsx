import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import MainRoutes from './components/MainRoutes';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />

        <MainRoutes />

        <Footer />
      </div>
    </HelmetProvider>
  );
}
