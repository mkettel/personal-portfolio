

export default function ProjectComponent() {


  const projectArray = [
    {
      id: 1,
      title: 'Surfshop',
      videoUrl: '/videos/surfshop-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Blender'],
      link: "https://surf-shop-zeta.vercel.app/"
    },
    {
      id: 2,
      title: 'Homebase',
      videoUrl: '/videos/homebase.mp4',
      lang: ['React', 'React Three Fiber', 'GSAP', 'Blender'],
      link: "https://homebase-mkettel.vercel.app/"
    },
    {
      id: 3,
      title: '3D Resume',
      videoUrl: '/videos/3d-resume-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Vercel'],
      link: "https://3d-resume-six.vercel.app/"
    },
    {
      id: 4,
      title: 'Jolt',
      videoUrl: '/videos/jolt-recording.mp4',
      lang: ['React', 'Node.js', 'Firebase', 'GSAP']
    },
    {
      id: 5,
      title: 'Deepwork.',
      videoUrl: '/videos/deepwork.mp4',
      lang: ['Ruby', 'Rails', 'SASS', 'JS'],
      link: "https://deepwork-official.herokuapp.com/"
    },
    {
      id: 6,
      title: 'AVTECHDADDY',
      videoUrl: '/videos/techdaddy-video.mp4',
      lang: ['HTML', 'CSS', 'JS'],
      link: "https://av-techdaddy.vercel.app/"
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
                </div>
              ) : ( <div className="project-link-link"></div> )}
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
            </div>
          )
        })}
      </div>

  </>
}
