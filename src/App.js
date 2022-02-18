import { BrowserRouter, Router, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Navbar from './components/Navbar';

function App() {
  return (
  
    <BrowserRouter>
    <Navbar />
      <Link>
        <Router component={Home} path='/' exact />
        <Router component={About} path='/about'/>
        <Router component={Project} path='/project'/>
      </Link>
    </BrowserRouter>
  
  );
}

export default App;
