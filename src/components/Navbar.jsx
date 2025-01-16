import "../styles/Navbar.scss"
const Navbar = () => {

  
  return (
    <nav className={`navbar flex items-center`}>
      <div className="container navbar-container w-full flex justify-between">
        <div className="brand-and-together flex items-center jusitfy-between">
          <a href="#" className="nav-brand text-white">Bloog <span className="nav-brand-dot bg-white"></span>
          </a>
          <button type="button" className="nav-show-btn text-white">
            <i className="bi bi-list"></i>
          </button>

        </div>
        <div className={`nb-menu-wrapper flex items-center`}>
          <button type="button" className="nav-hide-btn">
            <i className="bi bi-x-square"></i>
          </button>
          <ul className="nav-menu flex items-center">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Featured
                <span className="nav-linl-icon">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Archives
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            
          </ul>
          <div className="nav-btns">
            <a href="#" className="nav-btn btn">Get it now</a>
          </div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar