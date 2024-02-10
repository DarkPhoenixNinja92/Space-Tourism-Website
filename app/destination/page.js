import MoonImg from '../img/image-moon.png'
import Image from 'next/image';

const Destination = () => {
    return (
        <section className="destination">
            <h2 className="destination-title"><span>01 </span>Pick your destination</h2>
            <Image src={MoonImg} alt="Moon" width='170' height='170'/>
            <ul className='destination-list'>
                <li className='destination-itm active'>Moon</li>
                <li className='destination-itm'>Mars</li>
                <li className='destination-itm'>Europa</li>
                <li className='destination-itm'>Titan</li>
            </ul>
            <h2 className="section-title">Moon</h2>
<p className="section-txt">
    See our planet as you’ve never seen it before. A perfect relaxing trip away to
    help regain perspective and come back refreshed. While you’re there, take in
    some history by visiting the Luna 2 and Apollo 11 landing sites.
</p>
<div className="distance">
    <h3 className="subtitle">Avg. distance</h3>
<p className="sub-txt">384,400 km</p>
</div>
<div className="travel-time">
    <h3 className="subtitle-travel">Est. travel time</h3>
    <p className="travel-txt">3 days</p>
</div>
        </section>
    );
}

export default Destination;