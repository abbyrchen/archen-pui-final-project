import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/About';
import Play from './pages/Play';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home.jsx" element={<Home />} />
        <Route path="/play.jsx" element={<Play />} />
        <Route path="/about.jsx" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
