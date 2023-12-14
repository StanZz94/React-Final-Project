import { Link } from "react-router-dom";
import Path from "../../paths";

import * as postService from "../../services/postService"
import { useEffect, useState } from "react";
import LatestPost from "./LatestPost/LatestPost";

export default function Home() {

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    postService.getLatest()
    .then(result => setLatest(result));
  }, []);

  return (
    <div>
    <div className="container-fluid bg-testimonial py-5 my-5" style={{ width: "auto",height: "600px"}}>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="" style={{backgroundColor: ' #198a2e', borderRadius: "20px", width:'500px'}}>
                   <h1 style={{textAlign: "center", color: "#FF9933", fontFamily: "cursive"}}>Welcome To Our<br/> GREEN Forum !</h1>
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
            <h1 className="display-5">Latests Posts From Our Blog !</h1>
          </div>
          <div className="row g-5">
          {latest.map(post => <LatestPost key={post._id} {...post} />)}
          {!latest.length && <h3 style={{color: 'green', textAlign: 'center', marginBottom: '50px'}}>There are no posts!</h3>}
          </div>
        </div>
      </div>
      </div>
  );
}
