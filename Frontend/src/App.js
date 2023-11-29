import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>

      <Routes>

        <Route path='/home' element={<Homepage/>}/>
        <Route path='/register' element={<h1>Register</h1>}/>

      </Routes>

    </Router>
  );
}

export default App;
