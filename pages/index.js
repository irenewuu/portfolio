import Header from "../comps/header/Header";
import downarrow from '../assets/down-arrow.svg';

export default function Home() {
  return <div className="centered-cont">
    <Header />
    <img className="down-arrow" src={downarrow.src} />
    <div className="full-width-cont border">
      <h3>My Recent Works</h3>

    </div>
  </div>
}
