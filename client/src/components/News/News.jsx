import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as postServices from "../../../services/postService"
import NewsItem from "./news-item/NewsItem";

export default function News() {
  const [posts, setPosts ] = useState([]);

    useEffect(() => {
        postServices.getAll()
        .then(result => setPosts(result))
    }, [])

  return (
    <div className="container-fluid py-5">
      <h1 style={{color: 'green', textAlign: 'center', marginBottom: '50px'}}>Welcome to our blog!</h1>
      <div className="container">
        {/* Blog list Start  */}
        <div className="row g-5">


         {posts.map(post => (
          <NewsItem key={post._id} {...post}/>
         ))}

         {posts.length === 0 && <h3 style={{color: 'green', textAlign: 'center', marginBottom: '50px'}}>There are no posts yet!</h3>}

          <div className="col-12">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-lg justify-content-center m-0">
                <li className="page-item disabled">
                  <Link
                    className="page-link rounded-0"
                    to="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                      <i className="bi bi-arrow-left"></i>
                    </span>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link rounded-0"
                    to="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Blog list End  */}

      {/* Sidebar Start  */}
      {/* Search Form Start  
                <div className="mb-5">
                    <div className="input-group">
                        <input type="text" className="form-control p-3" placeholder="Keyword" />
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
                 Search Form End  */}

      {/* Image Start  
                <div className="mb-5">
                    <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
                </div>
                 Image End  */}
      {/* Sidebar End  */}
    </div>
  );
}
