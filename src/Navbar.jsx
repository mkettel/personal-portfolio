import './stylesheets/navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'wouter';

export default function Navbar({page, setPage}) {

  const [active, setActive] = useState('tile-about')

  console.log(active);

  useEffect(() => {
    setActive(`tile-${page}`)
  }, [page]);



  return <>
    <div className="header-container grey">
      <h1>Matthew Kettelkamp</h1>
    </div>
    <div className="navbar-container nav">
      <div onClick={() => {setPage('about'), setActive('tile-about')}} id='tile-about' className={`nav-item ${active === 'tile-about' ? 'active' : ''} blue-grey`}>
        <a className="nav-link" >about</a>
      </div>
      <div onClick={() => {setPage('skills'), setActive('tile-skills')}} id='tile-skills' className={`nav-item ${active === 'tile-skills' ? 'active' : ''} tiffany-blue`} >
        <a className='nav-link' >skills</a>
      </div>
      <div onClick={() => setPage('projects')} id='tile-project' className="nav-item purple">
        <a className="nav-link" >projects</a>
      </div>
      <div onClick={() => setPage('contact')} id='tile-contact' className="nav-item chinese-violet">
        <a className="nav-link" >contact</a>
      </div>
      <div onClick={() => setPage('three')} id='tile-3d' className="nav-item old-rose">
        <a className="nav-link" >3D</a>
      </div>
    </div>


  </>
}
