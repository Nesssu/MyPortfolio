import logo from './logo.svg';
import './App.css';

// This is a model that display project information that it gets as props.
function Project(props)
{
  return (
    <div>

    </div>
  )
}

// This is a model that will loop through all the projects and send the individual data to the project with props.
function Projects()
{
  return (
    <div>
      <h3>Project data displayed here</h3>
    </div>
  )
}

function App() {
  // I am not implementing a back-end for the project and thats why I don't have a database where I could store
  // all the info about the projects. This list is where I store the hardcoded project info. When I finish a new
  // project, I add it to this list and the project will be shown in the 'My Projects' page automatically.
  const PROJECT_DATA = [
    {
      name: "Test name",
      about: "Test about",
      github: "https://github.com/Nesssu/MyPortfolio/tree/main/my-portfolio",
      link: ""
    }
  ]; 

  return (
    <div className="App">

      <div className='Header'>
        <h1>My Portfolio</h1>
        <div className='NavButtonArea'>
          <div className='NavButton'>
            Home
          </div>
          <div className='NavButton'>
            Projects
          </div>
          <div className='NavButton'>
            Contact
          </div>
        </div>
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

      <Projects PROJECT_DATA={{PROJECT_DATA}} />

      <div className='DividerHeader ImageTwo'>
        <h2>Contact Me</h2>
      </div>

      <div className='ContactArea'>
        <h3>email</h3>
        <h3>maybe rough location</h3>
        <div className='LinkArea'>
          <p>link to github</p>
          <p>link to linkedin</p>
          <p>link to bitbucket maybe</p>
        </div>
      </div>

      <div className='Footer' />
    </div>
  );
}

export default App;
