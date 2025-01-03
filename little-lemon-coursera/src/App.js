import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Main from './Components/Main';
function App() {
  return ( <>
    <div className="header-nav-container">
      <Header />
      <Nav />
    </div>
    <Main />
    <Footer />
  </>
  );
}

export default App;
