import { Link } from "react-router-dom";
import * as postServices from "../../../services/postService";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();

  const createPostSubmitHandler = async (e) => {
    e.preventDefault();
    const postData = Object.fromEntries(new FormData(e.currentTarget));
    console.log(postData);

    try {
      await postServices.create(postData);
      navigate("/news");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5">Create Post</h1>

          <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px" }}>
            <form onSubmit={createPostSubmitHandler}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="title" style={{ color: "black" }}>
                    Title:
                  </label>
                  <input
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
                    value="Post"
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
