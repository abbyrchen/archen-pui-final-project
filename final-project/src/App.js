import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Play from './pages/play/Play';
import CustomCursor from './components/cursor/CustomCursor';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />

        <Route
          path="*"
          element={<div>Page Not Found</div>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
