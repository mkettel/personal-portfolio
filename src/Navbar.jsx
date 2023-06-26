import './stylesheets/navbar.css'

export default function Navbar() {



  return <>
    <div className="navbar-container">
      <div className="navbar-left">
        <h1>Matthew Kettelkamp</h1>
      </div>
      <div className="navbar-right">
        <a className="link-icon" href="/portal">About</a>
        <a className="link-icon" href="#projects">Projects</a>
        <a className="link-icon" href="#contact">Contact</a>
      </div>
    </div>
  </>
}
