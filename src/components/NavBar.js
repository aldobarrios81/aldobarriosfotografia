import './NavBar.css';
function NavBar() {
  return (
    <div className="AppNavBar">
      <header className="AppNavBar-header">
        <div className="Menu">
          <ul>
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
