import './NavBar.css';
import logo from '../img/AldoBarriosDev.png';
import CartWidget from '../CartWidget/CartWidget';
function NavBar() {
  return (
    <div className="AppNavBar">
      <header className="AppNavBar-header">
        <div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="Menu">
          <ul>
            <li> <CartWidget /></li>
            <li><a href="#home">Contact</a></li>
            <li><a href="#home">Commerce</a></li>
            <li><a href="#home">Aldo Barrios</a></li>
            <li><a href="#home">Home</a></li>
            
          </ul>
         
        </div>
       
      </header>
    </div>
    
  );
}
export default NavBar;
