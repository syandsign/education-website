const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-gelap sticky-top">
    <div className="container">
      <a className="navbar-brand" href="/blogs">The Academy</a>

      <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="iconify bar-icon" data-icon="fa-solid:bars" data-inline="false"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Course List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Event</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        .bg-gelap {
          background-color: rgb(20, 20, 20);
        }
      `}
    </style>
  </nav>
)

export default Navbar