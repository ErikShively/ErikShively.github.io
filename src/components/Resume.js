import './Resume.css';
import './../index.css'

function Resume() {
  return (
    <div className='resume'>
      <object className="resume_view" data="/resume_erik_shively_fall2022.pdf" type="application/pdf"/>
    </div>
  );
}

export default Resume;
