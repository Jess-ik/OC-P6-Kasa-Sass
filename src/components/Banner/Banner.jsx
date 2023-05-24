function Banner(props) {

  return (
    <div className="banner">
      <div className="banner-title">
        <h1>{props.title}</h1>
      </div>
      <div className="banner-img">
        <img src={props.src} alt={props.alt} />
      </div>


    </div>
  );
}

export default Banner;
