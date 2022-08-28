import './App.css';
import {
          BrowserRouter,
          Routes,
          Route,
        } from "react-router-dom"; 
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Header from './layouts/header';
import Footer from './layouts/footer';
;


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
