
import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBarComponent';
import Footer from './components/Footer';

function App() {
  return (
   <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
   </div>
  );
}

export default App;
