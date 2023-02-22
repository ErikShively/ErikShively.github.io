import './Home.css';
import './../index.css'
import { Link } from 'react-router-dom';

function Btn(name, path){
  return(
    <Link to = {path}>
      <button className='landing-btn'>{name}</button>
    </Link>
  );
}

function Home() {
  const btn_names = ["About", "Projects", "Resume", "Contact"];
  const btn_paths = ["/about", "/projects", "/resume", "/contact"];
  var btns = [];
  if(btn_names.length == btn_paths.length){
    for(var i = 0; i< btn_names.length; i++){
      btns.push(Btn(btn_names[i], btn_paths[i]));
    }
  }
  return (
    <div className='home'>
      <div className='landing' >
        <div className='title'>
          <h1 className='title-text'>Hey, I'm Erik</h1>
        </div>
        <div className='btn-group'>
          {btns}
        </div>
      </div>
    </div>
  );
}

export default Home;
