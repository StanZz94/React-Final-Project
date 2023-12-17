import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import  {AuthContext}  from "../../contexts/authContext";
import styles from "./Styles.module.css"

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, errors, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    })

  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px"}}>
                <h1 className="display-5">Login</h1>

                <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px", borderRadius: "20px"}}>
                        <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="email" className={styles.loginLabel}>Email:</label>
                                    <input 
                                    type="email" 
                                    name='email' 
                                    className="form-control bg-light border-0 px-4" 
                                    onChange={onChange} 
                                    value={values.email} 
                                    style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className={styles.loginLabel}>Password:</label>
                                    <input 
                                    type="password" 
                                    name='password' 
                                    className="form-control bg-light border-0 px-4" 
                                    onChange={onChange} 
                                    value={values.password} 
                                    style={{ height: "55px" }} />
                                </div>
                                {errors.length == 0 ? null : errors.map((error, index) => <div className={styles.errorDiv} key={index}><b>{error}</b></div>)}
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" style={{marginTop: "30px" ,borderRadius: "20px"}} type="submit">Login</button>
                                </div>
                                <div className="col-12">
                                    <p className={styles.loginP}>If you are not registered click <Link to={'/register'} style={{ color: "blue"}}>HERE</Link>!</p>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
}
