

export default function ProjectComponent() {


  const projectArray = [
    {
      id: 1,
      title: 'Surfshop',
      videoUrl: '/videos/surfshop-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Blender'],
      link: "https://surf-shop-zeta.vercel.app/",
      gh: 'https://github.com/mkettel/SurfShop',
      desc: 'Using React Three Fiber, this is a small ongoing project where the user can customize a surfboard. I built the model using Blender, and I based the shape around my favorite Santa Monica surfboard company, Crescent Shapes. There will be more features and boards coming soon!'
    },
    {
      id: 2,
      title: 'Homebase',
      videoUrl: '/videos/homebase.mp4',
      lang: ['React', 'React Three Fiber', 'GSAP', 'Blender'],
      link: "https://homebase-mkettel.vercel.app/",
      gh: 'https://github.com/mkettel/HomeBase',
      desc: 'I built this knowledgebase website using React, React Three Fiber. I made the model of the house using Blender. The house is interactive, where you can click on components of the scene to be taken to pages with their corresponding videos. The videos are further filtered by each season of the year.'
    },
    {
      id: 3,
      title: '3D Resume',
      videoUrl: '/videos/3d-resume-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Vercel'],
      link: "https://3d-resume-six.vercel.app/",
      gh: 'https://github.com/mkettel/3d-resume',
      desc: 'Inspired by my job search, I got tired of seeing normal pdf resumes so I decided I would make a 3D version of my current resume to add a bit more flair. When you click on the resume you get a closer view and can click outside of it to navigate the scene as you please.'
    },
    {
      id: 4,
      title: 'Jolt',
      videoUrl: '/videos/jolt-recording.mp4',
      lang: ['React', 'Node.js', 'Firebase', 'GSAP'],
      gh: 'https://github.com/mkettel/Jolt',
      desc: 'Working with a client who is a 3rd grade teacher, I built a chrome extension that has a library of carefully curated short form videos that can be selected and placed into the teachers curriculum. They are sorted by topic and utilizes firebase for the backend.'
    },
    {
      id: 5,
      title: 'Deepwork.',
      videoUrl: '/videos/deepwork.mp4',
      lang: ['Ruby', 'Rails', 'SASS', 'JS'],
      link: "https://deepwork-official.herokuapp.com/",
      gh: 'https://github.com/SkiltonJ/Deepwork.',
      desc: "Deepwork was created through the never-ending pursuit of a perfect space for focus. The goal is to provide the user with a scene that makes them feel zoned-in and ready to get work done. You get a timer to keep track of your time spent on a topics of your choice so you can reflect on the work you have done... or haven't"

    },
    {
      id: 6,
      title: 'AVTECHDADDY',
      videoUrl: '/videos/techdaddy-video.mp4',
      lang: ['HTML', 'CSS', 'JS'],
      link: "https://av-techdaddy.vercel.app/",
      gh: 'https://github.com/mkettel/AV-TECHDADDY',
      desc: 'This was my first knowledge base site that I built. It was used at Vail Health Hospital to organize all of the technical equipment used within the operating room. The user can search by doctor, vendor or equipment type. paired with carefully placed QR codes and corresponding site ID tags, the user gets a thoughtfully curated experience during high-stress time-sensitve times in the OR.'
    },


  ]
  console.log(projectArray.map((project) => {
    project
  }));
  return<>

      <div className="project-container">
        {projectArray.map((project) => {
          return (
            <div key={project.id} className="project-card">
              <div className="project-title">
                <h2>{project.title}</h2>
              </div>
              {project.link ? (
                <div className="project-link-link">
                  <a target="_blank" href={project.link}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a target="_blank" href={project.gh}>
                  <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              ) : (
              <div className="project-link-link">
                <a target="_blank" href={project.gh}>
                  <i class="fa-brands fa-github"></i>
                  </a>
              </div> )}
              <div className="screen-image">
                <video className="video-player" playsInline autoPlay muted loop src={project.videoUrl}></video>
              </div>
              <div className="screen-overlay"></div>
              <div className="project-lang">
              {project.lang.map((lang) => {
                return (
                  <p>{lang}</p>
                )
              })}
              </div>
              <div className="project-desc">
               <p>{project.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

  </>
}
