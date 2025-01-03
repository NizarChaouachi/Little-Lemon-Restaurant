import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Homepage from './Components/HomePage';
function App() {
  return ( <>
    <div className="header-nav-container">
      <Header />
      <Nav />
    </div>
    <Main children={<Homepage/>}/>
    <Footer />
  </>
  );
}

export default App;
