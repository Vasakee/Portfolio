import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './Components/Main';
import About from './Components/About';
import Connect from './Components/Connect';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Main />} />
       <Route path='/about' element={<About />} />
       <Route path='./connect' element={<Connect />} />
       <Route path='/projects' element={<Projects />} />
       <Route path='/skills' element={<Skills />} />
     </Routes> 
    </div>
  );
}

export default App;
