
import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBarComponent';

function App() {
  return (
   <div>
    <NavBar/>
    <Outlet/>
   </div>
  );
}

export default App;
