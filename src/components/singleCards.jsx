function SingleCard({title, ImgSrc}) {
    return(
        <div className="single-card">
            <img src={ImgSrc} alt={title} />
            <h2>{title}</h2>
        </div>
    );
}
export default SingleCard;