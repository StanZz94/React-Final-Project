import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-0">
          &copy;{" "}
          <Link className="text-secondary fw-bold" to="#">
            Green Blog
          </Link>
          . All Rights Reserved. Designed by{" "}
          <Link className="text-secondary fw-bold" to="#">
            StanZz94!
          </Link>
        </p>
      </div>
    </div>
  );
}
