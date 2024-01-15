import './stylesheets/navbar.css'
import { useState, useEffect, useRef, useContext } from 'react'
import { gsap } from 'gsap';
import { ThemeContext } from './ThemeContext';

export default function Navbar({page, setPage, mousePosition, setMousePosition}) {

  const [active, setActive] = useState('')

  useEffect(() => {
    setActive(`tile-${page}`)
  }, [page]);

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return <>
    <div className="header-container grey">
      {/* <div className="follower" style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: `translate(-50%, -50%)`,
        position: 'fixed',
        backgroundColor: 'red'
      }}></div> */}
      <h1 drag dragConstraints={{ left: -5, right: 200, top: 30, bottom: 10 }} dragElastic={.7} >Matthew Kettelkamp</h1>
      <div className="link-box">
        <a href="https://www.linkedin.com/in/matthew-kettelkamp/" target='_blank'>LinkedIn</a>
        <a href="https://github.com/mkettel" target='_blank'>Github</a>
        <a href="mailto:mattkettelkamp@gmail.com">Email</a>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      </div>
    </div>
    <nav>
      <div className="navbar-container nav" >
        <div onClick={() => {setActive('tile-about'), setPage('about')}} id='tile-about' className={`nav-item ${active === 'tile-about' ? 'active' : 'none'} blue-grey`} >
          <a className="nav-link" >about</a>
        </div>
        <div onClick={() => {setActive('tile-projects'), setPage('projects')}} id='tile-projects' className={`nav-item ${active === 'tile-projects' ? 'active' : 'none'} purple`}>
          <a className="nav-link" >projects</a>
        </div>
        <div onClick={() => {setActive('tile-skills'), setPage('skills')}} id='tile-skills' className={`nav-item ${active === 'tile-skills' ? 'active' : 'none'} tiffany-blue`}>
          <a className='nav-link' >skills</a>
        </div>
        <div onClick={() => {setActive('tile-contact'), setPage('contact')}} id='tile-contact' className={`nav-item ${active === 'tile-contact' ? 'active' : 'none'} chinese-violet`}>
          <a className="nav-link black" >contact</a>
        </div>
        <div onClick={() => {setActive('tile-three'), setPage('three')}} id='tile-three' className={`nav-item ${active === 'tile-three' ? 'active' : 'none'} old-rose`}>
          <a className="nav-link black" >resume</a>
        </div>
      </div>
    </nav>

  </>
}
