import './stylesheets/navbar.css'
import { useState } from 'react'
import { Link } from 'wouter';

export default function Navbar({page, setPage}) {

  const [active, setActive] = useState(false)

  const activeClick = () => {
    setActive(prevClicked => !prevClicked)
  }


  return <>
    <div className="header-container grey">
      <h1>Matthew Kettelkamp</h1>
    </div>
    <div className="navbar-container nav">
      <div onClick={() => setPage('about')} className="nav-item blue">
        <a className="nav-link" >about</a>
      </div>
      <div onClick={() => setPage('skills')} className="nav-item tiffany-blue" >
        <a className='nav-link' >skills</a>
      </div>
      <div onClick={() => setPage('projects')} className="nav-item purple">
        <a className="nav-link" >projects</a>
      </div>
      <div onClick={() => setPage('contact')} className="nav-item chinese-violet">
        <a className="nav-link" >contact</a>
      </div>
      <div onClick={() => setPage('three')} className="nav-item old-rose">
        <a className="nav-link" >3D</a>
      </div>
    </div>


  </>
}
