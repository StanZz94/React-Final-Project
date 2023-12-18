import * as postServices from "../../services/postService";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext";
import { useContext, useState } from "react";
import styles from "./Create.module.css";

export default function Create() {
  const { name, lastName} = useContext(AuthContext);
  const [errors, setErrors]= useState([]);
  const [values, setValues] = useState({title:'',imageUrl:'',myPost:''})
  const navigate = useNavigate();

  const createPostSubmitHandler = async (e) => {
    e.preventDefault();
    setErrors([]);
    const postData = Object.fromEntries(new FormData(e.currentTarget));
    postData.name = name;
    postData.lastName = lastName;

    try {
      if(postData.title === '' || postData.imageUrl === '' || postData.myPost === ''){
        throw new Error('All fields are required');
      }

      await postServices.create(postData);
      navigate("/posts");
    } catch (error) {
      setErrors(error.message);
    }
  };

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    setErrors([]);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5">Create Post</h1>

          <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px", marginTop: "50px" ,borderRadius: "20px" }}>
            <form onSubmit={createPostSubmitHandler}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="title" className={styles.createLabels}>
                    Title:
                  </label>
                  <input
                    name="title"
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder=""
                    onChange={onChange}
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="imageUrl" className={styles.createLabels}>
                    Image URL:
                  </label>
                  <input
                    name="imageUrl"
                    type="text"
                    onChange={onChange}
                    className="form-control bg-light border-0 px-4"
                    placeholder=""
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="myPost"
                    id="myPost"
                    className={styles.createLabels}
                  >
                    My Post:
                  </label>
                  <textarea
                  onChange={onChange}
                    name="myPost"
                    className="form-control bg-light border-0 px-4 py-3"
                    rows="2"
                    placeholder=""
                  ></textarea>
                </div>
                {errors.length > 0 && (<div className={styles.errorDiv}><b>{errors}</b></div>)}
                <div className="col-12">
                  <input
                    className="btn btn-secondary w-100 py-3"
                    type="submit"
                    value="Post"
                    style={{marginTop: "30px" ,borderRadius: "20px"}}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
