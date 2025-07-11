import NavBar from "../components/NavBar";
import Ratings from "../components/ratingCard";

function Home() {
  return (
    <>
        <section className="hero">
            <NavBar/>
            <div className="hero2">
                <div className="hero-text">
                <h1>John Wick 3 : <br /> Parabellum</h1>
                <Ratings/>
                <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <button className="btn">
                    <img src="/play.png" alt="" />
                    Watch Now</button>  
            </div>
            <img src="/PaginationBox.png" alt="" />
            </div>
        </section>
    
    </>
  );
}
export default Home;