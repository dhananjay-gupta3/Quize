
import { Link, Route, Routes,useNavigate } from 'react-router-dom';
import './App.css';
import QuizApp from './QuizApp';
import Navigate from './Navigate';
import Home from './Home';
function App() {
  

  return (
    <div >
   <Navigate />
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/form' element={<QuizApp/>} />
    </Routes>
     
    </div>
  );
}

export default App;
