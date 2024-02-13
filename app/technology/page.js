"use client";
import {useState} from 'react';
import data from '../data.json';
import LaunchVehicle from '../img/image-launch-vehicle-landscape.jpg'
import SpaceCapsule from '../img/image-space-capsule-landscape.jpg'
import SpacePort from '../img/image-spaceport-portrait.jpg'
import Image from "next/image";

const Technology = () => {
    const [technology, setTechnology] = useState(data.technology[0]);
    const [technologyImg, setTechnologyImg] = useState({LaunchVehicle});
    return (
        <section className="technology">
            <h2 className="technology-title">
                <span>03
                </span>Space Launch 101</h2>
            <Image
                className='launch-img'
                src={technologyImg}
                width='375'
                height='170'
                alt={technology.name}/>
            <div className="launch-btn-div">
                <button className={`launch-btn ${technology == data.technology[0]
                        ? 'active-launch-btn'
                        : ""}`} onClick={() => {
                            setTechnology(data.technology[0]);
                            setTechnologyImg(LaunchVehicle)
                        }}>1</button>
                <button className={`launch-btn ${technology == data.technology[1]
                        ? 'active-launch-btn'
                        : ""}`} onClick={() => {
                            setTechnology(data.technology[1]);
                            setTechnologyImg(SpaceCapsule)
                        }}>2</button>
                <button className={`launch-btn ${technology == data.technology[2]
                        ? 'active-launch-btn'
                        : ""}`} onClick={() => {
                            setTechnology(data.technology[2]);
                            setTechnologyImg(SpacePort)
                        }}>3</button>
            </div>
            <div className="terminology-div">
                <h3 className="terminology-title">THE TERMINOLOGY…</h3>
                <p className="terminology-name">{technology.name}</p>
            </div>
            <p className="technology-txt">
                {technology.description}
            </p>
        </section>
    );
}

export default Technology;