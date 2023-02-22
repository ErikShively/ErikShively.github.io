import './About.css';
import './../index.css'


function About() {
  return (
    <div>
    <div className='about'>
         <div className='about_title'>
           <h1 className='about_title-text'>About Me</h1>
         </div>
         <div className='about_image_container'>
          <img className='about_image' src="/headshot.PNG"/>
          </div>
         <div className='about_body'>
          <p>Hi, my name is Erik Shively, and I'm 2020 MST Computer Science graduate.
            I routinely work with Java, and I have a bit of experience with C++ and Python.
            I'm also familiar with C#, SQL, HTML and CSS while learning ReactJS.
            On the more personal side, I'm a big fan of fighting games, and I've actually
            travelled for tournaments. I'm also a very big fan of cooking. My interests are
            starting to reflect in the projects that I do, so stay tuned.
          </p>
         </div>
       </div>
    
    <div className='about'>
         <div className='about_site_title'>
           <h1 className='about_title-text'>About This Site</h1>
         </div>
         <div className='about_body'>
          <p>
            This site is a simple static site built with HTML, CSS and a bit of ReactJS,
            and I started work on it to get a footing in web development. If you look
            through the source code, I've done a few things to mess around and tinker a bit,
            just to get familiar with different ways to do things.
          </p>
         </div>
       </div>
       </div>
  );
}

export default About;
