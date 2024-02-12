"use client";
import {useState} from 'react';
import data from '../data.json';
import Doug from '../img/image-douglas-hurley.png'
import Mark from '../img/image-mark-shuttleworth.png'
import Victor from '../img/image-victor-glover.png'
import Anousheh from '../img/image-anousheh-ansari.png'
import Image from 'next/image';

const Crew = () => {
    const [crewMember, setcrewMember] = useState(data.crew[0]);
    const [crewMemberImg, setcrewMemberImg] = useState({Doug});
    return (
        <section className="crew">
            <h2 className="crew-title">
                <span>02
                </span>Meet your crew</h2>
            <Image className='crew-member-img' src={crewMemberImg} width='177.12' height='222' alt={crewMember.name}/>
            <div className="img-border">a</div>
            <div className="crew-btn-div">
                <button className={`crew-btn ${crewMember == data.crew[0]
                        ? 'active-btn'
                        : ""}`} onClick={() => {
                            setcrewMember(data.crew[0]);
                            setcrewMemberImg(Doug)
                        }}></button>
                <button className={`crew-btn ${crewMember == data.crew[1]
                        ? 'active-btn'
                        : ""}`} onClick={() => {
                            setcrewMember(data.crew[1]);
                            setcrewMemberImg(Mark)
                        }}></button>
                <button className={`crew-btn ${crewMember == data.crew[2]
                        ? 'active-btn'
                        : ""}`} onClick={() => {
                            setcrewMember(data.crew[2]);
                            setcrewMemberImg(Victor)
                        }}></button>
                <button className={`crew-btn ${crewMember == data.crew[3]
                        ? 'active-btn'
                        : ""}`} onClick={() => {
                            setcrewMember(data.crew[3]);
                            setcrewMemberImg(Anousheh)
                        }}></button>
            </div>
            <div className="person">
                <h3 className='crew-member-title'>{crewMember.role}</h3>
                <p className='crew-member-name'>{crewMember.name}</p>
            </div>
            <p className="crew-txt">
                {crewMember.bio}
            </p>
        </section>
    );
}

export default Crew;