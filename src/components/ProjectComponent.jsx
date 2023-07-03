

export default function ProjectComponent() {


  const projectArray = [
    {
      id: 1,
      title: 'Surfshop',
      videoUrl: '/videos/surfshop-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Blender'],
      link: "https://surf-shop-zeta.vercel.app/",
      gh: 'https://github.com/mkettel/SurfShop'
    },
    {
      id: 2,
      title: 'Homebase',
      videoUrl: '/videos/homebase.mp4',
      lang: ['React', 'React Three Fiber', 'GSAP', 'Blender'],
      link: "https://homebase-mkettel.vercel.app/",
      gh: 'https://github.com/mkettel/HomeBase'
    },
    {
      id: 3,
      title: '3D Resume',
      videoUrl: '/videos/3d-resume-vid.mp4',
      lang: ['React', 'React Three Fiber', 'Vercel'],
      link: "https://3d-resume-six.vercel.app/",
      gh: 'https://github.com/mkettel/3d-resume'
    },
    {
      id: 4,
      title: 'Jolt',
      videoUrl: '/videos/jolt-recording.mp4',
      lang: ['React', 'Node.js', 'Firebase', 'GSAP'],
      gh: 'https://github.com/mkettel/Jolt'
    },
    {
      id: 5,
      title: 'Deepwork.',
      videoUrl: '/videos/deepwork.mp4',
      lang: ['Ruby', 'Rails', 'SASS', 'JS'],
      link: "https://deepwork-official.herokuapp.com/",
      gh: 'https://github.com/SkiltonJ/Deepwork.'

    },
    {
      id: 6,
      title: 'AVTECHDADDY',
      videoUrl: '/videos/techdaddy-video.mp4',
      lang: ['HTML', 'CSS', 'JS'],
      link: "https://av-techdaddy.vercel.app/",
      gh: 'https://github.com/mkettel/AV-TECHDADDY'
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
            </div>
          )
        })}
      </div>

  </>
}
