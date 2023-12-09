import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Minting from './Components/Minting';
import Roadmap from './Components/Roadmap';
import Map from './Components/Map';
import Faq from './Components/Faq';
import Team from './Components/Team';
import Footersec from './Components/Footersec';

function App() {
  return (
    <div>
      <Header />
      <Minting />
      <Map />
      <Roadmap />
      <Faq/>
      <Team/>
      <Footersec/>
    </div>
  );
}

export default App;
