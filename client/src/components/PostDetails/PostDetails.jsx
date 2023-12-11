import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext";
import * as postService from "../../services/postService";
import * as commentsService from "../../services/commentsService";

export default function PostDetails() {
  const { isAuthenticated, name, lastName } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  if (Math.random() < 0.5) {
    throw new Error('SOME SOME SOME ERRORRRRRR');
  }

  useEffect(() => {
    postService.getOne(postId).then(setPost);

    commentsService.getAll(postId).then(setComments);
  }, [postId]); 

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData)
    const newComment = await commentsService.create(
      postId,
      formData.get("comment")
    );

    setComments((state) => [
      ...state,
      { ...newComment, owner: { name, lastName } },
    ]);
    
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mb-5">
          <div className="row g-5 mb-5">
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid w-100"
                  src={post.imageUrl}
                  style={{ borderRadius: "20px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-5">
                <h1 className="mb-4" style={{ color: "green" }}>
                  {post.title}
                </h1>
                <hr/>
                <b>
                  <p style={{ color: "black" }}>
                    Author: {post.name} {post.lastName}
                  </p>
                </b>
                <b>
                  <span style={{ color: "black", overflowWrap: "break-word" }}>
                    {post.myPost}
                  </span>
                </b>
              </div>
            </div>
          </div>

        </div>
        <hr />
        <h1 style={{ textAlign: "center" }}> Comments:</h1>
        {comments.length === 0 && (
          <h5 className="mb-4" style={{ textAlign: "center" }}>
            No Comments !
          </h5>
        )}

        {comments.map(({ _id, comment, owner: { name, lastName } }) => (
          <div
            key={_id}
            style={{
              border: "5px solid green",
              borderRadius: "5px",
              padding: "10px",
              marginTop: "15px",
              
            }}
          >
            <div className="ps-3">
              <h6>
                <Link to="">
                  {name} {lastName}
                </Link>{" "}
                <small>
                  <i></i>
                </small>
              </h6>
              <span style={{ color: "black", overflowWrap: "break-word" }}>{comment}</span>
            </div>
          </div>
        ))}

{isAuthenticated && (
            <div className="bg-primary p-5" style={{ borderRadius: "20px", marginTop: "35px"}}>
              <h2 className="text-white mb-4">Leave a comment</h2>
              <form onSubmit={addCommentHandler}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="comment" style={{ color: "black" }}>
                      Comment:
                    </label>
                    <textarea
                      className="form-control bg-white border-0"
                      name="comment"
                      rows="5"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-secondary w-100 py-3"
                      style={{ marginTop: "30px", borderRadius: "20px" }}
                      type="submit"
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
      </div>
    </div>
  );
}
