import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <img className="img-fluid" src="public/img/footer.png" alt="" />
    <div className="container-fluid bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-0">
          &copy;{" "}
          <Link className="text-secondary fw-bold" to="#">
            Green Blog
          </Link>
          . SoftUni ReactJS Final Project. Created by{" "}
          <Link className="text-secondary fw-bold" to="#">
            StanZz94!
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
