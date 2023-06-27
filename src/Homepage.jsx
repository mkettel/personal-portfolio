import Navbar from './Navbar'
import './stylesheets/navbar.css'
import { useState } from 'react'



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
  }

}



export function About({page, setPage}) {
  console.log(page);

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content">
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
      <div className="content">
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
      <div className="content">
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
      <div className="content">
        <div className="about-container .big-content">
          <div className="container-title">
            <h3>contact</h3>
          </div>
        </div>
      </div>
    </div>
  </>
}
