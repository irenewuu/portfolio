import Header from "../comps/header/Header";
import downarrow from '../assets/down-arrow.svg';

export default function Home() {
  return <div className="centered-cont">
    <Header />
    <img className="down-arrow" src={downarrow.src} />
    <h2>work in progress</h2>
  </div>
}
