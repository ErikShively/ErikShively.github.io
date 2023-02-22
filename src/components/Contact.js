import './Contact.css';
import './../index.css'


function Contact() {
  return (
    <div className='contact'>
      <div className='contact_title'>
        <h1 className='contact_title_text'>Contact Me</h1>
        </div>
      <div className='contact_body'>
        LinkedIn: <a href="https://www.linkedin.com/in/erikshively">ErikShively</a>
        <br/>
        Github: <a href="https://www.github.com/erikshively">ErikShively</a>
        <br/>
        Email: <a href='mailto:shivelyer@gmail.com'>ShivelyEr@gmail.com</a>
      </div>
    </div>
  );
}

export default Contact;
