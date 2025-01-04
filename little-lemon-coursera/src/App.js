import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './Components/HomePage';
import CallToAction from './Components/CallToAction';
import CustomersSay from './Components/CustomerSays';
import BookingPage from './Components/BookingPage';
import Specials from './Components/Specials';
import About from './Components/About';

function App() {
    return (
        <Router>
            <div className="header-nav-container">
                <Header />
                <Nav />
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Specials />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/order" element={<CallToAction />} />
                <Route path="/contact" element={<CustomersSay />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
