import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function Login({
    loginSubmitHandler,
}) {

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    })

  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
                <h1 className="display-5">Login</h1>

                <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px" }}>
                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="email" style={{ color: "black" }}>Email:</label>
                                    <input 
                                    type="email" 
                                    name='email' 
                                    className="form-control bg-light border-0 px-4" 
                                    onChange={onChange} 
                                    value={values.email} 
                                    style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" style={{ color: "black" }}>Password:</label>
                                    <input 
                                    type="password" 
                                    name='password' 
                                    className="form-control bg-light border-0 px-4" 
                                    onChange={onChange} 
                                    value={values.password} 
                                    style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Login</button>
                                </div>
                                <div className="col-12">
                                    <p style={{ color: "black", float: 'left'}}>If you are not registered click <Link to={'/register'} style={{ color: "blue"}}>HERE</Link>!</p>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
}
