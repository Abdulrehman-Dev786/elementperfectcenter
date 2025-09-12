function Herosection() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* First Slide */}
        <div id="slide1" className="carousel-item active">
          <img
            src="slider-1-Joshua.jpg"
            className="d-block reveal-text w-100 h-[600px] object-cover"
            alt="First Slide"
          />
          <div className="carousel-caption w-full d-flex flex-column justify-content-center h-100 text-start">
            <h1 className=" text-5xl md:text-6xl font-serif leading-tight">
              <span className="reveal-text">OUTSOURCE SMARTER</span> <br /> <span  >GROW FASTER</span>
            </h1>
            <p className="animate-on-load mt-4 text-lg md:text-xl max-w-2xl">
              Affordable, Belize-based business support services including
              customer care, cold calling, design, bookkeeping, and automation –
              trusted by businesses across the U.S. and beyond.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#services"
                className=" reveal-text bg-orange-400 hover:bg-orange-400 text-white p-3 md:px-11 md:py-3 bordered font-semibold"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="reveal-text border-[6px] border-white hover:bg-orange-600 hover:text-white text-orange-400 md:px-14 p-3 md:py-2 font-semibold"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div id="slide2" className="carousel-item">
          <img
            src="slider-2-group-1.jpg"
            className="d-block w-100 h-[600px] overflow-hidden object-cover"
            alt="Second Slide"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start">
            <h1 className=" text-4xl md:text-6xl font-serif leading-tight">
              <span className=" reveal-text">BOOST PRODUCTIVITY</span> <br /> <span>WITH OUR TEAM</span>
            </h1>
            <p className="mt-4 animate-on-load text-lg md:text-xl max-w-2xl">
              Partner with trained professionals to scale your operations and
              achieve better efficiency in customer support and back-office
              solutions.
            </p>
            <div className="mt-6 animate-on-load flex gap-4">
              <a
                href="#services"
                className=" reveal-text bg-orange-400 hover:bg-orange-400 text-white p-3 md:px-11 md:py-3 bordered font-semibold"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="  reveal-text border-[6px] border-white hover:bg-orange-600 hover:text-white text-orange-400 md:px-14 p-3 md:py-2 font-semibold"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Herosection;
