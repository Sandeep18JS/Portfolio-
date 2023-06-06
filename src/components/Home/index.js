import './index.scss'
import photo from '../../assets/images/image6.png'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
  
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi <br />I'm
            <span className="name-highlight"> Sandeep,</span><br />
           Web Developer.
          </h1>
          <br />
          <h2>Front end developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
         
          
  
        </div>
        <img className='image' alt='mypic' src ={photo} style={{opacity: 0.65}}></img>
      </div>
  
    );
  };
  
  
  
  export default Home;