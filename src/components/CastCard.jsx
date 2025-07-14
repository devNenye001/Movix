function CastCard({ name = "Keanu Reeves", ImgSrc = "/keanu.png" }) {
  return (
    <div className="cast-card">
      <img src={ImgSrc} alt={name} className="cast-img" />
      <h3 className="cast-name">{name}</h3>
    </div>
  );
}

export default CastCard;
