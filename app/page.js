import Image from "next/image";
import Explore from "./components/Explore";
import BGImg from './img/background-home-mobile.jpg'

export default function Home() {
  return (
    <section className="home" style={{backgroundImage: `url(${BGImg})`}}>
      <div className="title-div">
      <h1 className="title">So you want to travel to <span className="titleSpan">space</span></h1>  
      <p className="txt">
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!
      </p>
      </div>
      <Explore/>
    </section>
    
  );
}
