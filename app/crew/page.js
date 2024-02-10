import Doug from '../img/image-douglas-hurley.png'
import Image from 'next/image';

const Crew = () => {
    return (
        <section className="crew">
            <h2 className="crew-title">
                <span>02
                </span>Meet your crew</h2>
            <Image className='crew-member-img' src={Doug} width='177.12' height='222' alt='Douglas Hurley'/>
            <div className="person">
                <h3 className='crew-member-title'>commander</h3>
                <p className='crew-member-name'>Douglas Hurley</p>
            </div>
            <p className="crew-txt">
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and
                former NASA astronaut. He launched into space for the third time as commander of
                Crew Dragon Demo-2.
            </p>
        </section>
    );
}

export default Crew;