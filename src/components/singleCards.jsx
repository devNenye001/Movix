function SingleCard({
  title = "Lamb (2021) Trailer",
  ImgSrc = "/exclusive-thumb.png",
}) {
  return (
    <div className="single-card">
      <div className="video-thumb">
        <img src={ImgSrc} alt={title} className="video-img" />
      </div>
      <h2 className="video-title">{title}</h2>
    </div>
  );
}

export default SingleCard;
