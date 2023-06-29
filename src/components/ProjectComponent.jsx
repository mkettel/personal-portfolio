

export default function ProjectComponent() {


  const projectArray = [
    {
      id: 1,
      title: 'Surfshop'
    }
  ]

  return<>

      <div className="project-container">
        <div className="project-card">
          <h3>{projectArray[0].title}</h3>
        </div>
      </div>

  </>
}
