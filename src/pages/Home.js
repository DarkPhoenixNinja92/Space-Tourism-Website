import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return(
    <div className='cover'>
        <h3 className='travel'>So, you want to travel to</h3>
        <h1 className='title'>Space</h1>
        <p className='para'>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
  </p>
  <div className='explore-outer hide'>
    bob
  </div>
  <Link to='/destination'>
  <div className='explore'>
    <h2>Explore</h2>
  </div>
  </Link>
    </div>
    );
  }

export default Home;