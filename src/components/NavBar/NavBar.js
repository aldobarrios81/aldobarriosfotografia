import './NavBar.css';
import logo from '../images/AldoBarriosDev.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className="AppNavBar">
      <header className="AppNavBar-header">
      <div>
          { <img src={logo} className="logo" alt="logo" /> }
        </div>
        <div className="Menu">
          <ul>
            <li> <CartWidget /></li>
            {/* <li><a href="#home">Contact</a></li> */}
           <Link to="/Cart" ><li>Cart</li></Link>
           <Link to="/About" ><li>About</li></Link>
           <Link to="/" ><li>Home</li></Link>
          </ul>
        </div>
      </header>
    </div>
    
  );
}
export default NavBar;
