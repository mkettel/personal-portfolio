import './stylesheets/navbar.css'
import { useState } from 'react'
import { Link } from 'wouter';

export default function Navbar() {

  const [page, setPage] = useState()


  return <>
    <div className="header-container grey">
      <h1>Matthew Kettelkamp</h1>
    </div>
    <div className="navbar-container nav">
      <div className="nav-item blue">
        <Link className="nav-link" href="/portal">about</Link>
      </div>
      <div className="nav-item tiffany-blue">
        <Link className="nav-link" href="/portal">skills</Link>
      </div>
      <div className="nav-item purple">
        <Link className="nav-link" href="/portal">projects</Link>
      </div>
      <div className="nav-item chinese-violet">
        <Link className="nav-link" href="/portal">contact</Link>
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
