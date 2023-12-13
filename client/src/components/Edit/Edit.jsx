import * as postServices from "../../services/postService";
import { useNavigate, useParams } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext";
import { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/useForm";

export default function Edit() {
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

  const editPostSubmitHandler = async (values) => {
    
    try {
      await postServices.edit(postId ,values);
      navigate("/posts");
    } catch (err) {
      console.log(err);
    }

  };

  const { values, onChange, onSubmit } = useForm(editPostSubmitHandler, post);

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5">Edit Post</h1>

          <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px", marginTop: "50px" ,borderRadius: "20px" }}>
            <form onSubmit={onSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="title" style={{ color: "black" }}>
                    Title:
                  </label>
                  <input
                    value={values.title}
                    onChange={onChange}
                    name="title"
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder=""
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="imageUrl" style={{ color: "black" }}>
                    Image URL:
                  </label>
                  <input
                    value={values.imageUrl}
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
                    style={{ color: "black" }}
                  >
                    My Post:
                  </label>
                  <textarea
                  value={values.myPost}
                    onChange={onChange}
                    name="myPost"
                    className="form-control bg-light border-0 px-4 py-3"
                    rows="2"
                    placeholder=""
                  ></textarea>
                </div>
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
