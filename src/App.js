
import './App.css';
import {Our} from './ourservice';
import { Testimonials } from './testimonials';
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Our/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
