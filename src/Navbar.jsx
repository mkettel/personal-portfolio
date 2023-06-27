import './stylesheets/navbar.css'
import { useState } from 'react'
import { Link } from 'wouter';

export default function Navbar({page, setPage}) {



  return <>
    <div className="header-container grey">
      <h1>Matthew Kettelkamp</h1>
    </div>
    <div className="navbar-container nav">
      <div className="nav-item blue">
        <a onClick={() => setPage('about')} className="nav-link" >about</a>
      </div>
      <div className="nav-item tiffany-blue">
        <a onClick={() => setPage('skills')} className="nav-link" >skills</a>
      </div>
      <div className="nav-item purple">
        <a onClick={() => setPage('projects')} className="nav-link" >projects</a>
      </div>
      <div className="nav-item chinese-violet">
        <a onClick={() => setPage('contact')} className="nav-link" >contact</a>
      </div>
      <div className="nav-item chinese-violet">
        <Link className="nav-link" href="/portal">3D</Link>
      </div>
    </div>


  </>
}
