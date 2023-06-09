import './App.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb'


// This is a model that display project information that it gets as props.
function Project(props)
{
  return (
    <div className='ProjectArea'>
      <div className='ProjectBackground'>
        <div className='ProjectHeaderArea'>
          <h3>{props.name}</h3>
        </div>
        <div className='ProjectAboutArea'>
          <p>{props.about}</p>
        </div>
      </div>
      <div className='ProjectLinksBackground'>
        <a href={props.github}><FaGithubSquare className='GithubIcon' /></a>
        {props.link !== "" && <a href={props.link}><TbWorldWww className='LinkIcon' /></a>}
      </div>
    </div>
  )
}

// This is a model that will loop through all the projects and send the individual data to the project with props.
function Projects(props)
{
  return (
    <div className='ProjectsBackground'>
      {
        props.PROJECT_DATA.map((item, index) => (
          <Project name={item["name"]} about={item["about"]} github={item["github"]} link={item["link"]} />
        ))
      }
      
    </div>
  )
}

function App() {
  // I am not implementing a back-end for the project and thats why I don't have a database where I could store
  // all the info about the projects. This list is where I store the hardcoded project info. When I finish a new
  // project, I add it to this list and the project will be shown in the 'My Projects' page automatically.
  const PROJECT_DATA = [
    {
      name: "My Portfolio",
      about: `This is the website that you arecurrently in. If you want, you can inspect the source code of this project from the link below.`,
      github: "https://github.com/Nesssu/MyPortfolio",
      link: ""
    },
    {
      name: "Advanced Web Applications Project",
      about : `This is a project that I did for my University course called 'Advanced Web Applications'.
      The course was a course about full-stack programming where we made front-ends with React and back-ends with Node.JS and Express.
      In this project we had to create a smaller version of StackOverflow. You can inspect the source code from the GitHub link below.
      There is also instructions on how to run the project on your local machine. I don't have the project running currently anywhere.`,
      github: "https://github.com/Nesssu/AdvancedWebProject",
      link: ""
    }
  ]; 

  return (
    <div className="App">

      <div className='Header'>
        <h1>My Portfolio</h1>
      </div>

      <div className='AboutArea'>
        <h3>Name</h3>
        <p>me</p>
        <p>school</p>
        <p>experience</p>
      </div>

      <div className='DividerHeader ImageOne'>
        <h2>My Projects</h2>
      </div>

      <Projects PROJECT_DATA={PROJECT_DATA} />

      <div className='DividerHeader ImageTwo'>
        <h2>Contact Me</h2>
      </div>

      <div className='ContactArea'>
        <p className='ContactAreaText'>You can contact me at: <span className='NormalText'>nessu.kangashaka@gmail.com</span></p>
        <div className='LinkArea'>
          <a href='https://github.com/Nesssu'><FaGithubSquare className='GithubIcon' /></a>
          <a href='https://www.linkedin.com/in/nestori-kangashaka-230941163/'><FaLinkedin className='LinkedinIcon' /></a>
        </div>
      </div>

      <div className='Footer'>
        <h3>Copyright 2023</h3>
      </div>
    </div>
  );
}

export default App;
