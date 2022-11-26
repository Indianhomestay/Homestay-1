import './App.css';
import About from './Components/About/About';
import Carousel from './Components/Carousel/Carousel';
import Header1 from './Components/Header1/Header1';
import Header2 from './Components/Header2/Header2';
import Number from './Components/Number/Number';

function App() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Carousel />
      <About />
      <Number />
    </div>
  );
}

export default App;
