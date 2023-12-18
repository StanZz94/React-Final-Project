import * as postServices from "../../services/postService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState , useContext} from "react";
import {AuthContext} from "../../contexts/authContext";
import styles from "./Styles.module.css"


export default function Edit() {
    const { name, lastName} = useContext(AuthContext);
    const [errors, setErrors ] = useState("")
  const [post, setPost] = useState({
    title:'',
    imageUrl:'',
    myPost:'',
  });
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    postServices.getOne(postId)
        .then(result => {
            setPost(result);
        })
  },[postId]);

  const editPostSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));
    values.name = name;
    values.lastName = lastName;

    try {

      if(values.title === '' || values.imageUrl === '' || values.myPost === ''){
        throw new Error('All fields are required');
      }

      await postServices.edit(postId ,values);
      navigate("/posts");
    } catch (err) {
      setErrors(err.message)
    }

  };

  const onChange = (e) => {
    setPost(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5">Edit Post</h1>

          <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px", marginTop: "50px" ,borderRadius: "20px" }}>
            <form onSubmit={editPostSubmitHandler}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="title" className={styles.createLabels}>
                    Title:
                  </label>
                  <input
                    value={post.title}
                    onChange={onChange}
                    name="title"
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder=""
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="imageUrl" className={styles.createLabels}>
                    Image URL:
                  </label>
                  <input
                    value={post.imageUrl}
                    onChange={onChange}
                    name="imageUrl"
                    type="text"
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
                  value={post.myPost}
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
                    value="Edit"
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
