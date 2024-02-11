import LaunchVehicle from '../img/image-launch-vehicle-landscape.jpg'
import Image from "next/image";

const Technology = () => {
    return (
        <section className="technology">
            <h2 className="technology-title">
                <span>03
                </span>Space Launch 101</h2>
            <Image
                className='launch-img'
                src={LaunchVehicle}
                width='375'
                height='170'
                alt='launch vehicle'/>
            <div className="launch-btn-div">
                <button className='launch-btn active-launch-btn'>1</button>
                <button className='launch-btn'>2</button>
                <button className='launch-btn'>3</button>
            </div>
            <div className="terminology-div">
                <h3 className="terminology-title">THE TERMINOLOGY…</h3>
                <p className="terminology-name">launch vehicle</p>
            </div>
            <p className="technology-txt">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres
                tall, it's quite an awe-inspiring sight on the launch
            </p>
        </section>
    );
}

export default Technology;