import { Route, Routes } from 'react-router-dom';
import Fab from './components/Fab';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import GalleryPage from './pages/GalleryPage';
import UploadPage from './pages/UploadPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
