import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Navbar from './components/Navbar';

// for showing toast messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* Admin routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/edit/:id' element={<AdminEditProduct/>}/>
      </Routes>

    </Router>
  );
}

export default App;
