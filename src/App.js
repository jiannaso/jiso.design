import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Playground from './components/playground';
// import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Playground />  
    </div>
  );
}

export default App;
