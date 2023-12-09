import { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Name: 'name',
    LastName: 'lastName',
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeatPassword',
}

export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Name]: '',
        [RegisterFormKeys.LastName]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
    })

  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
                <h1 className="display-5">Register</h1>

                <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px", borderRadius: "20px" }}>
                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="name" style={{ color: "black"}}>Name:</label>
                                    <input type="text" name="name" className="form-control bg-light border-0 px-4" placeholder="" onChange={onChange} style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                <label htmlFor="lastName" style={{ color: "black"}}>Last Name:</label>
                                    <input type="text" name="lastName" className="form-control bg-light border-0 px-4" placeholder="" onChange={onChange} style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                <label htmlFor="email" style={{ color: "black"}}>Email:</label>
                                    <input type="email" name="email" className="form-control bg-light border-0 px-4" placeholder="" onChange={onChange} style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                <label htmlFor="password" style={{ color: "black"}}>Password:</label>
                                    <input type="password" name="password" className="form-control bg-light border-0 px-4" onChange={onChange} placeholder="" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                <label htmlFor="repeatPassword" style={{ color: "black"}}>Repeat Password:</label>
                                    <input type="password" name="repeatPassword" className="form-control bg-light border-0 px-4" onChange={onChange} placeholder="" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" style={{marginTop: "30px", borderRadius: "20px"}} type="submit">Register</button>
                                </div>
                                <div className="col-12">
                                    <p style={{ color: "black", float: 'left', marginTop: "20px"}}>Already registered? Click <Link to={'/login'} style={{ color: "blue"}}>HERE</Link>!</p>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
}
