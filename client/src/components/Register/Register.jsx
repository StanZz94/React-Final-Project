import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
                <h1 className="display-5">Register</h1>

                <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px" }}>
                        <form>
                            <div className="row g-3">
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Name" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Last Name" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control bg-light border-0 px-4" placeholder="Email" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <input type="password" className="form-control bg-light border-0 px-4" placeholder="Password" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <input type="password" className="form-control bg-light border-0 px-4" placeholder="Repeat Password" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Register</button>
                                </div>
                                <div className="col-12">
                                    <p style={{ color: "black"}}>Already registered? Click <Link to={'/register'} style={{ color: "blue"}}>HERE</Link>!</p>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
}
