import './New_Homepage.css'
import {useState} from 'react';
function Overview(){
    return(
        <div className='overview'>
            <h1>Hi, I'm Erik</h1>
            <p>I'm an MST Computer Science Graduate, QA Engineer and aspriring developer. 
                I mostly develop in Java professionally, but I use C#, C++, Python and JS on personal projects. Check out the projects tab for more information
                on what I'm working on.</p>
            <h1>Education and Experience</h1>
            <p>B.S. Computer Science from MST</p>
            <p>Quality Assurance Engineer at Panera Bread 2021 - Present</p>
            <h1>Interests</h1>
            <p>Outside of software, I'm a big fan of rotary wing aviation, and I've even logged some flight hours. I've also traveled for competitive video games.</p>
            <h1>About this site</h1>
            <p>This is the second iteration of this portfolio site, refined by condensing relevant information into a single page. The content is actively being written,
                and a developer blog is in the works. Stay tuned!
            </p>
            </div>
    )
}
function Resume(){
    return(
        <div className='overview'>
            <h1>Resume</h1>
            <object className="resume_view" data="/ResumeErikShively.pdf" type="application/pdf" width="100%" height="70%" aria-label='Resume Embed'/>
        </div>
    )
}
function Projects(){
    return(
        <div className='overview'>
            <h1>Projects</h1>
            Github: <a href="https://www.github.com/erikshively">ErikShively</a>
        </div>

    )
}
function Contact(){
    return(
        <div className='overview'>
            <h1>Contact</h1>
        LinkedIn: <a href="https://www.linkedin.com/in/erikshively">ErikShively</a>
        <br/>
        Email: <a href='mailto:contact@erikshively.dev'>contact@erikshively.dev</a>
        </div>
    )
}
function Blog(){
    return(
        <div className='overview'>
            <h1>Blog</h1>
            <p>Under construction</p>
        </div>
    )
}
export default function Homepage(){
    const [content, setContent] = useState(0);
    const handleContent = (currentContent)=>{
        setContent(currentContent);
    }
    const content_list = [<Overview/>, <Resume/>, <Projects/>, <Contact/>, <Blog/>]
    return(
        <div className="background">
            <div className="homepage"> 
                <div className="header">
                    <img className="header-headshot" src="/headshot.PNG"></img>
                </div>
                <div className="menu">
                    <button onClick={()=>{handleContent(0)}}><span>Overview</span></button>
                    <button onClick={()=>{handleContent(1)}}><span>Resume</span></button>
                    <button onClick={()=>{handleContent(2)}}><span>Projects</span></button>
                    <button onClick={()=>{handleContent(3)}}><span>Contact</span></button>
                    <button onClick={()=>{handleContent(4)}}><span>Blog</span></button>
                </div>
                <div className="content">
                    {content_list[content]}
                </div>
            </div>
        </div>
    );
}