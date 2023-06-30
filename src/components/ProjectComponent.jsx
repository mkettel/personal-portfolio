

export default function ProjectComponent() {


  const projectArray = [
    {
      id: 1,
      title: 'Surfshop',
      videoUrl: '/videos/surfshop-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Vercel']
    },
    {
      id: 2,
      title: 'Homebase',
      videoUrl: '/videos/homebase.mp4',
      lang: ['React', 'React Three Fiber', 'Vercel', 'GSAP']
    },
    {
      id: 3,
      title: '3D Resume',
      videoUrl: '/videos/3d-resume-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Vercel']
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
              <div className="screen-image">
                <video className="video-player" autoPlay muted loop src={project.videoUrl}></video>
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
