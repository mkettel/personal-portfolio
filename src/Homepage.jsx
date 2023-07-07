import Navbar from './Navbar'
import AboutImage from './components/AboutImage'
import ProjectComponent from './components/ProjectComponent'
import ContactComponent from './components/ContactComponent'
import './stylesheets/navbar.css'
import './stylesheets/about.css'
import './stylesheets/project.css'
import './stylesheets/skills.css'
import { useState, memo, useEffect } from 'react'
import SkillComponent from './components/SkillComponent'
import ResumeComponent from './components/ResumeComponent'


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


export const About = memo(({page, setPage}) => {

  console.log(useEffect);

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content blue-grey">
        <div className="main-container">
          <div className="container-title">
            <h3>about</h3>
            <p className='top-text'>I am a software developer based in NYC who is passionate about combining the 2d with 3d and bringing creative ideas to life. </p>
            {/* <p className='label-rotate'>A life enthusiast who loves to explore.</p> */}
            <p className='spin-label'>( Spin the cube! )</p>
          </div>
          <AboutImage />
        </div>
      </div>
    </div>
  </>
})

export const Skills = memo(({page, setPage}) => {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content tiffany-blue">
        <div className="main-container-skills">
          <div className="container-title">
            <h3>skills</h3>
          </div>
          <SkillComponent />
        </div>
      </div>
    </div>
  </>
});

export const Projects = memo(({page, setPage}) => {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content purple">
        <div className="normal-container .big-content">
          <div className="project-container-title">
            <h3>projects</h3>
          </div>
          <ProjectComponent />
        </div>
      </div>
    </div>
  </>
});

export const Contact = memo(({page, setPage}) => {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content chinese-violet">
        <div className="contact-container .big-content">
          <div className="container-title">
            <h3>contact</h3>
          </div>
          <ContactComponent />
        </div>
      </div>
    </div>
  </>
});

export const Three = memo(({page, setPage}) => {

  return<>
  <div className="home-root">
      <Navbar page={page} setPage={setPage} />
      <div className="content old-rose">
        <ResumeComponent />
      </div>
    </div>
  </>
});
