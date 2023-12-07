import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Home() {
  return (
    <div>
    <div className="container-fluid bg-testimonial py-5 my-5" style={{ width: "auto",height: "600px",marginTop: '-25px'}}>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="" style={{backgroundColor: ' #198a2e', borderRadius: "20px", width:'500px'}}>
                   <h1 style={{textAlign: "center", color: "#ffad00", fontFamily: "cursive"}}>Welcome To Our<br/> GREEN Forum !</h1>
                </div>
            </div>
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
                <h3 className="text-white mb-3">Still Not A Member ?</h3>
                <p className="text-white">
                  If you want to join our community <br/> click <Link className="text-white fw-bold" to={Path.Register}>
                  Here !
                </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5"
                style={{ height: "300px" }}
              >
                <h3 className="text-white mb-3">To Our Blog !</h3>
                <p className="text-white">
                  If you want to visite our blog click <Link className="text-white fw-bold" to={Path.Posts}>
                  Here !
                </Link>
                </p>
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
            <h6 className="text-primary text-uppercase">Articles</h6>
            <h1 className="display-5">Latest From Our Blog Post</h1>
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
