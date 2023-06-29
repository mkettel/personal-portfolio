import Navbar from './Navbar'
import AboutImage from './AboutImage'
import './stylesheets/navbar.css'
import './stylesheets/about.css'
import './stylesheets/project.css'
import { useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from "gsap";



export default function Homepage() {

  const [page, setPage] = useState('about');

  if (page === 'about') {
    return <About page={page} setPage={setPage} />
  } else if (page === 'skills') {
    return <Skills page={page} setPage={setPage} />
  } else if (page === 'projects') {
    return <Projects page={page} setPage={setPage} />
  } else if (page === 'contact') {
    return <Contact page={page} setPage={setPage} />
  } else if (page === 'three') {
    return <Three page={page} setPage={setPage} />
  }

}



export function About({page, setPage}) {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content blue-grey">
        <div className="main-container">
          <div className="container-title">
            <h3>about</h3>
            <p>I am a software developer who is passionate about combining the 2d with 3d and bringing creative ideas to life </p>
            <p className='label-rotate'>A life enthusiast who loves to explore physically and technically.</p>
            <p>( Spin the cube! )</p>
          </div>
          <AboutImage />
        </div>
      </div>
    </div>
  </>
}

export function Skills({page, setPage}) {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content tiffany-blue">
        <div className="main-container">
          <div className="container-title">
            <h3>skills</h3>
          </div>
        </div>
      </div>
    </div>
  </>
}

export function Projects({page, setPage}) {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content purple">
        <div className="main-container .big-content">
          <div className="container-title">
            <h3>projects</h3>
          </div>
          <div className="project-container">
            <div className="project-card">
              <h3>Project 1</h3>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
            </div>
            <div className="project-card">
              <h3>Project 4</h3>
            </div>
            <div className="project-card">
              <h3>Project 5</h3>
            </div>
            <div className="project-card">
              <h3>Project 6</h3>
            </div>
            <div className="project-card">
              <h3>Project 7</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}


export function Contact({page, setPage}) {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content chinese-violet">
        <div className="main-container .big-content">
          <div className="container-title">
            <h3>contact</h3>
          </div>
        </div>
      </div>
    </div>
  </>
}

export function Three({page, setPage}) {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content chinese-violet">
        <div className='small-canvas'>
          <Canvas>
          <OrbitControls />

            <mesh>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>

        </Canvas>
        </div>
      </div>
    </div>
  </>
}
