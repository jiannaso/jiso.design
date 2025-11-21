import '../App.css';
import Sidebar from './sidebar';
import Header from './header';
import Playground from './playground';
import About from './about';
// import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import flower from '../media/flower.jpeg';
import Projects from './projects';

function Home() {
  return (
    <div className="App" style={{backgroundImage: flower, backgroundSize: "cover",}}>
      <Header pos={"absolute"} blend={'difference'}/>
      {/* <Sidebar /> */}
      <Playground />
      <About />
      <Projects />
    </div>
  );
}

export default Home;