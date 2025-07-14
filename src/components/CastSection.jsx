import CastCard from  "./CastCard";

function CastSection() {
  return (
    <section className="cast-section">
      <div className="cast-header">
        <h1>Featured Casts</h1>
        <span className="see-more">See more &gt;</span>
      </div>

      <div className="cast-wrapper">
        <img src="/left-btn.png" alt="left" className="nav-arrow" />
        
        <div className="cast-cards">
          <CastCard name="Keanu Reeves"  ImgSrc="public/cast1.png" />
          <CastCard name="Ryan Reynolds" ImgSrc="public/cast2.png" />
          <CastCard name="Timothée Chalamet"  ImgSrc="public/cast3.png" />
          <CastCard name="Chloë Grace Moretz"  ImgSrc="public/cast4.png" />
        </div>

        <img src="/right-btn.png" alt="right" className="nav-arrow" />
      </div>
    </section>
  );
}

export default CastSection;
