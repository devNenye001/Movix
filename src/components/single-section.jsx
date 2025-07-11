import SingleCard from "./singleCards";

function singleSection({ heading }) {
  return (
    <>
      <header>
        <h1>{heading}</h1>
        <span>See more &gt;</span>
      </header>
      <div className="single-section">
        <img src="/left-btn.png" alt="" />
        <div className="single-cards">
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
        <img src="/right-btn.png" alt="" />
      </div>
    </>
  );
}
export default singleSection;
