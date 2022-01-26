import Header from "../comps/header/Header";

export default function Home() {
  return <div className="centered-cont">
    <Header />
    {/* <div className="recent-works-cont"> */}
    <div className="page-info-cont">
      <h3>My Recent Works</h3>
        <div className="recent-works">
          <div className="lg-recent-work">
            <img src="" />
          </div>
          <div className="sm-recent-work">
            <img src="" />
          </div>
        </div>
        <div className="recent-works">
          <div className="lg-recent-work">
            <img src="" />
          </div>
          <div className="sm-recent-work">
            <img src="" />
          </div>
        </div>
    </div>
  </div>
}
