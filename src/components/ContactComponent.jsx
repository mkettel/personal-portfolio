import { useRef, useState } from 'react'
import '../stylesheets/contact.css'

import { Preload, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'
import ContactScene from '../three/ContactScene'
import Placeholder from '../three/Placeholder'


export default function ContactComponent() {

  const formRef = useRef();

  // State Variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to server or perform other actions here

    // Clear form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleButtonClick = () => {
    formRef.current.dispatchEvent(new Event("submit"));
  };

  return <>
    <div className="contact-layout">
      <div className="contact-form">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-field">
            <label className='input-label' htmlFor="name">Name:</label>
            <input
            className='input-general'
            placeholder='Matt'
            type="text"
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
          </div>
          <div className="input-field">
            <label className='input-label' htmlFor="email">Email:</label>
            <input
            className='input-general'
              placeholder='mattkettelkamp@gmail.com'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label className='input-label' htmlFor="phone">Phone:</label>
            <input
              placeholder='563-650-9916'
              className='input-general'
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label className='input-label' htmlFor="message">Message:</label>
            <textarea
            placeholder='Howdy! I have a cool idea, lets collaborate!'
            className='input-general'
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="button-div" type='submit' >
            <div className='input-button'>Send</div>
            <div className='input-button'>Send</div>
            <div className='input-button'>Send</div>
            <div className='input-button'>Send</div>
          </button>
        </form>
      </div>
      <div className="contact-link-bucket">
      </div>
    </div>
    <div className='small-canvas'>
        <Canvas>
        <PerspectiveCamera position={[0, 0, 0]} >
          <OrbitControls />
          {/* <Sky distance={450000} sunPosition={[0, -1, 0]} inclination={0} azimuth={0.25} /> */}
          <Suspense fallback={<Placeholder scale={3} position={[0, 0, 0]} rotation={[0, .6, 0]} />}>
            <ContactScene />
          </Suspense>
          </PerspectiveCamera>
        </Canvas>
      </div>

  </>
}
