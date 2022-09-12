import './Destination.css';
import Moon from '../images/destination/image-moon.png';
import { Link } from 'react-router-dom';

const Destination = () => {
    return (
    <div className="data-set">
        <div className="left">
        <h1 className="title"><span>01</span> Pick Your Destination</h1>
        <img src={Moon}/>
        </div>
        <div className='right'>
            <ul>
                <li>Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Titan</li>
            </ul>
            <h2 className='location'>Moon</h2>
            <p className='descr'>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.
            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <div className='info'>
                <div className='distance'>
                <h3 className='dist-title'>Avg. Distance</h3>
                <p className='dist'>384,400 KM</p>
                </div>
                <div className='travel'>
                    <h3 className='travel-title'>Est. Travel Time</h3>
                    <p className='travel-para'>3 Days</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Destination;