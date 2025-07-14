function Ratings({ rating = "86.0/100", tomatoRating = "97%" }) {

  const Style = {

    rating: {
      width: "184px",
      height: "17px",
      display: "flex",
      justifyContent: "space-between",
      color: "white",
      fontWeight: "Lighter",
      fontSize: "12px",
      fontFamily: "Work Sans",
    },

    IMDB: {
      width: "111px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    tomatoes: {
      width: "65px",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
    },

    img: {
      marginRight: "8px",
    }
  }
  return (
    <>
      <div className="ratings" style={Style.rating}>
        <div className="IMDB" style={Style.IMDB}>
          <img src="/IMDB.png" alt="IMDB" style={Style.img}/>
          <p>{rating}</p>
        </div>
        <div className="tomatoes" style={Style.tomatoes}>
          <img src="/tomatoes.png" alt="tomato" style={Style.img}/>
          <p>{tomatoRating}</p>
        </div>
      </div>
    </>
  );
}

export default Ratings;
