import Navbar from './Navbar'
import './stylesheets/navbar.css'
import { useState } from 'react'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'



export default function Homepage() {

  const [page, setPage] = useState('about');
  console.log(page);

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
  console.log(page);

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content blue">
        <div className="about-container .big-content">
          <div className="container-title">
            <h3>about</h3>
          </div>
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
        <div className="about-container .big-content">
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
        <div className="about-container .big-content">
          <div className="container-title">
            <h3>projects</h3>
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
        <div className="about-container .big-content">
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
