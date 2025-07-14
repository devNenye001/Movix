import SingleCard from "./singleCards";

function SingleSection({ heading }) {
  return (
    <section className="exclusive-section">
      <div className="exclusive-header">
        <h1>{heading}</h1>
        <span className="see-more">See more &gt;</span>
      </div>

      <div className="exclusive-wrapper">
        <img src="/left-btn.png" alt="left" className="nav-arrow" />

        <div className="exclusive-cards">
          <SingleCard
            title="Lamb (2021) Trailer"
            ImgSrc="public/Thumbnails.png"
            
          />
          <SingleCard
            title="The Suicide Squad: John Cena Interview"
            ImgSrc="public/Thumbnails1.png"
           
          />
          <SingleCard
            title="Until There's A Home and a Child"
            ImgSrc="public/Thumbnails.png"
            
          />
        </div>

        <img src="/right-btn.png" alt="right" className="nav-arrow" />
      </div>
    </section>
  );
}

export default SingleSection;
