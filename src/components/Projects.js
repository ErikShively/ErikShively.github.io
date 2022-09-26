import './Projects.css'; //To replace
import './../index.css'


function Projects() {
  return (
    <div className='projects'>
      <div className='projects_grid'>
        <a className='project_link' href='https://github.com/ErikShively/PyLSB'>
        <div className='projects_grid_entry'>
          <img className='project_image' src='Python-logo-notext.svg.png' />
          <div className='project_body'>
            A Python tool to hide information in images.
          </div>
        </div>
        </a>
        <a className='project_link' href='https://github.com/ErikShively/PortfolioSite'>
        <div className='projects_grid_entry'>
          <img className='project_image' src='/logo512.png' />
          <div className='project_body'>
            A ReactJS website to augment my portfolio and showcase some web devlopment skills.
          </div>
        </div>
        </a>
        <a className='project_link' href='https://github.com/ErikShively/Py1R'>
        <div className='projects_grid_entry'>
          <img className='project_image' src='Python-logo-notext.svg.png' />
          <div className='project_body'>
            A Python implementation of the "One Rule" machine learning algorithm.
          </div>
        </div>
        </a>
        <a className='project_link' href='https://github.com/ErikShively/'>
        <div className='projects_grid_entry'>
          <img className='project_image' src='/Unofficial_JavaScript_logo_2.svg.png' />
          <div className='project_body'>
          A discord bot to dive deeper into JS and API interactions. Planned for use organizing MMO raid strategies.
          </div>
        </div>
        </a>
        <a className='project_link' href='https://github.com/ErikShively/PyVodParser'>
        <div className='projects_grid_entry'>
          <img className='project_image' src='Python-logo-notext.svg.png' />
          <div className='project_body'>
            A Python tool to extract information from fighting game videos.
          </div>
        </div>
        </a>
        <a className='project_link' href='https://github.com/ErikShively/'>
        <div className='projects_grid_entry'>
          <img className='project_image' src='/Csharp_Logo.png' />
          <div className='project_body'>
          An assortment of various coding problems done in different languages to learn them.
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
