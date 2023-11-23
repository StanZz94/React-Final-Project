import { Link } from "react-router-dom";

export default function News(){
    return(
        <div className="container py-5">
        <div className="row g-5">
            {/* Blog list Start  */}
            <div className="col-lg-8">
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                            <Link className="blog-overlay" to="">
                                <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span className="text-white fw-bold">Jan 01, 2050</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <nav aria-label="Page navigation">
                          <ul className="pagination pagination-lg justify-content-center m-0">
                            <li className="page-item disabled">
                              <Link className="page-link rounded-0" to="#" aria-label="Previous">
                                <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                              </Link>
                            </li>
                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item">
                              <Link className="page-link rounded-0" to="#" aria-label="Next">
                                <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Blog list End  */}

            {/* Sidebar Start  */}
            <div className="col-lg-4">
                {/* Search Form Start  */}
                <div className="mb-5">
                    <div className="input-group">
                        <input type="text" className="form-control p-3" placeholder="Keyword" />
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
                {/* Search Form End  */}

                {/* Image Start  */}
                <div className="mb-5">
                    <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
                </div>
                {/* Image End  */}

            </div>
            {/* Sidebar End  */}
        </div>
    </div>
    )
}