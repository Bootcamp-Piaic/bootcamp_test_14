import './App.css';
import {Header} from './components/Header';
import {About} from './components/About';
import {Resume} from './components/Resume';
import {Portfolio} from './components/Portfolio';
import {ContactUs} from './components/ContactUs';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* owys button */}
    <Header  />
    <About />
    <Resume />
    <Portfolio/>
    <ContactUs/>
    <Footer/>
  </div>
    
  );
}

export default App;
