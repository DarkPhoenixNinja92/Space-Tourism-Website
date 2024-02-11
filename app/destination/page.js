"use client";
import {useState} from 'react';
import data from '../data.json';
import MoonImg from '../img/image-moon.png'
import MarsImg from '../img/image-mars.png'
import EuropaImg from '../img/image-europa.png'
import TitanImg from '../img/image-titan.png'
import Image from 'next/image';

const Destination = () => {
    const [destination, setDestination] = useState(data.destinations[0]);
    const [destinationImg, setDestinationImg] = useState({MoonImg});
    return (
        <section className="destination">
            <h2 className="destination-title">
                <span>01
                </span>Pick your destination</h2>
            <Image src={destinationImg} alt={destination.name} width='170' height='170'/>
            <ul className='destination-list'>
                <li
                    className={`destination-itm ${destination == data.destinations[0]
                        ? 'active'
                        : ""}`}
                    onClick={() => {
                        setDestination(data.destinations[0]);
                        setDestinationImg(MoonImg)
                    }}>Moon</li>
                <li
                    className={`destination-itm ${destination == data.destinations[1]
                        ? 'active'
                        : ""}`}
                    onClick={() => {
                        setDestination(data.destinations[1]);
                        setDestinationImg(MarsImg)
                    }}>Mars</li>
                <li
                    className={`destination-itm ${destination == data.destinations[2]
                        ? 'active'
                        : ""}`}
                    onClick={() => {
                        setDestination(data.destinations[2]);
                        setDestinationImg(EuropaImg)
                    }}>Europa</li>
                <li
                    className={`destination-itm ${destination == data.destinations[3]
                        ? 'active'
                        : ""}`}
                    onClick={() => {
                        setDestination(data.destinations[3]);
                        setDestinationImg(TitanImg)
                    }}>Titan</li>
            </ul>
            <h2 className="section-title">{destination.name}</h2>
            <p className="section-txt">
                {destination.description}
            </p>
            <div className="distance">
                <h3 className="subtitle">Avg. distance</h3>
                <p className="sub-txt">{destination.distance}</p>
            </div>
            <div className="travel-time">
                <h3 className="subtitle-travel">Est. travel time</h3>
                <p className="travel-txt">{destination.travel}</p>
            </div>
        </section>
    );
}

export default Destination;