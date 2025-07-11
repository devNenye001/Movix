import MovieCard from "./MovieCard";

function movieSection({ heading }) {
  return (
    <>
      <header>
        <h1>{heading}</h1>
        <span>See more &gt;</span>
      </header>
      <div className="movie-section">
        <img src="/left-btn.png" alt="" />
        <div className="movie-cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <img src="/right-btn.png" alt="" />
      </div>
    </>
  );
}
export default movieSection;
