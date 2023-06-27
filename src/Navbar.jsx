import './stylesheets/navbar.css'
import { useState } from 'react'
import { Link } from 'wouter';
import {About } from './Homepage';

export default function Navbar() {



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


  </>
}
