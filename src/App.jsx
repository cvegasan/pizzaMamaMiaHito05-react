import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


// Componentes LOGIN y REGISTRO
import Home from './Pages/Home';
import Login from './Pages/FormLogin';
import Register from './Pages/FormRegistro';
import Pizza from './Pages/Pizza';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';

//React Router DOM
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';



function App() {
  return (
    //App.jsx se mostrarán los componentes Navbar, Home y Footer

  <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route path="/pizzaMamaMiaHito05-react" element={<Home/>} />
            <Route path="/pizzaMamaMiaHito05-react/register" element={<Register/>} />
            <Route path="/pizzaMamaMiaHito05-react/login" element={<Login/>} />
            <Route path="/pizzaMamaMiaHito05-react/pizza/p001" element={<Pizza/>} />
            <Route path="/pizzaMamaMiaHito05-react/profile" element={<Profile/>} />
            <Route path="/pizzaMamaMiaHito05-react/cart" element={<Cart/>} />

            <Route path='/pizzaMamaMiaHito05-react/404' element={<NotFound/>} />
            <Route path='*' element={<Navigate replace to='/pizzaMamaMiaHito05-react/404'/>} />
          </Routes>
        <Footer></Footer>
  </BrowserRouter>
  )
}
export default App;
