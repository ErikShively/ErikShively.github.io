import './Resume.css'; //To replace
import './../index.css'

function Resume() {
  return (
    <div className='resume'>
      {/* <img src="/logo512.png"></img> */}
      {/* <a href="/ResumeErikShively.pdf" download="ResumeErikShively.pdf">download</a> */}
      <object className="resume_view" data="/ResumeErikShively.pdf" type="application/pdf" width="800" height="500"/>
    </div>
  );
}

export default Resume;
