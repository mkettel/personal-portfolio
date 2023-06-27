import './stylesheets/navbar.css'

export default function Navbar() {



  return <>
    <div className="header-container grey">
      <h1>Matthew Kettelkamp</h1>
    </div>
    <div className="navbar-container nav">
      <div className="nav-item blue">
        <a className="nav-link" href="/portal">about</a>
      </div>
      <div className="nav-item tiffany-blue">
        <a className="nav-link" href="/portal">skills</a>
      </div>
      <div className="nav-item purple">
        <a className="nav-link" href="/portal">projects</a>
      </div>
      <div className="nav-item chinese-violet">
        <a className="nav-link" href="/portal">contact</a>
      </div>
    </div>

    <div className="content">
      <div className="about-container .big-content">
        <div className="container-title">
          <h3>about</h3>
        </div>
      </div>
    </div>
  </>
}
