import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px" }}>
                  <h3 className="text-white">Organic Vegetables</h3>
                  <h1 className="display-1 text-white mb-md-4">
                    Organic Vegetables For Healthy Life
                  </h1>
                  <Link to="" className="btn btn-primary py-md-3 px-md-5 me-3">
                    Explore
                  </Link>
                  <Link to="" className="btn btn-secondary py-md-3 px-md-5">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px" }}>
                  <h3 className="text-white">Organic Fruits</h3>
                  <h1 className="display-1 text-white mb-md-4">
                    Organic Fruits For Better Health
                  </h1>
                  <Link to="" className="btn btn-primary py-md-3 px-md-5 me-3">
                    Explore
                  </Link>
                  <Link to="" className="btn btn-secondary py-md-3 px-md-5">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-6">
              <div
                className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5"
                style={{ height: "300px" }}
              >
                <h3 className="text-white mb-3">Organic Vegetables</h3>
                <p className="text-white">
                  Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo
                  dolor, amet lorem diam no duo sed dolore amet diam
                </p>
                <Link className="text-white fw-bold" to="">
                  Read More<i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5"
                style={{ height: "300px" }}
              >
                <h3 className="text-white mb-3">Organic Fruits</h3>
                <p className="text-white">
                  Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo
                  dolor, amet lorem diam no duo sed dolore amet diam
                </p>
                <Link className="text-white fw-bold" to="">
                  Read More<i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase">Our Blog</h6>
            <h1 className="display-5">Latest Articles From Our Blog Post</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                <Link className="blog-overlay" to="">
                  <h4 className="text-white">
                    Lorem elitr magna stet eirmod labore amet
                  </h4>
                  <span className="text-white fw-bold">Jan 01, 2050</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                <Link className="blog-overlay" to="">
                  <h4 className="text-white">
                    Lorem elitr magna stet eirmod labore amet
                  </h4>
                  <span className="text-white fw-bold">Jan 01, 2050</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                <Link className="blog-overlay" to="">
                  <h4 className="text-white">
                    Lorem elitr magna stet eirmod labore amet
                  </h4>
                  <span className="text-white fw-bold">Jan 01, 2050</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
