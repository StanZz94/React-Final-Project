import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
                <h1 className="display-5">Login</h1>

                <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px" }}>
                        <form>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="email" style={{ color: "black" }}>Email:</label>
                                    <input type="email" className="form-control bg-light border-0 px-4" placeholder="" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" style={{ color: "black" }}>Password:</label>
                                    <input type="password" className="form-control bg-light border-0 px-4" placeholder="" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Login</button>
                                </div>
                                <div className="col-12">
                                    <p style={{ color: "black", floaf: 'left'}}>If you are not registered click <Link to={'/register'} style={{ color: "blue"}}>HERE</Link>!</p>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
}
