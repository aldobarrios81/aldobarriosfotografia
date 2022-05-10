function NavBar() {
  return (
    <div className="AppNavBar">
      <header className="AppNavBar-header">
        <div className="Logo">
          <img src="./img/AldoBarriosDev.png" alt="Aldo"></img>
        </div>
        <div className="Menu">
          <ul>
            <li>Inicio</li>
            <li>Aldo Barrios</li>
            <li>Galeria</li>
            <li>Contacto</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
