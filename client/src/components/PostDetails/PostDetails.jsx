import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../paths";
import * as postService from "../../services/postService";
import * as commentsService from "../../services/commentsService";
import { pathToUrl } from "../../utils/pathUtil";
import styles from "./Styles.module.css"

export default function PostDetails() {
  const navigate = useNavigate();
  const { isAuthenticated, name, lastName, _id, email} = useContext(AuthContext);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const commentOwnerEmail = email;
  const [ errors, setErrors ] = useState([]);

  {/*
  // test 404 page

  if (Math.random() < 0.5) {
    throw new Error('SOME ERRORRRRRR');
  } */}

  useEffect(() => {
    postService.getOne(postId).then(setPost);

    commentsService.getAll(postId).then(setComments);
  }, [postId]); 

  const addCommentHandler = async (values) => {
    setErrors([]);
    try{

    if(values.comment.length < 1){
      throw new Error("Cant send empthy comment !")
    }
    const newComment = await commentsService.create(
      postId,
      values.comment,
    );

    setComments((state) => [
      ...state,
      { ...newComment, owner: { name, lastName, email } },
    ]);
  } catch (error){
    setErrors([error.message]);
  }
    
  };

  const initialValue = useMemo(() => ({
      comment: '',
  }), []);

  const {values, onChange, onSubmit} = useForm(addCommentHandler, initialValue);
  const isOwner = _id === post._ownerId;

  const deletePostHandler = async () => {
    const hasConfirmed = confirm(`${name} you sure you want to delete post: "${post.title}" ?`)

    if(hasConfirmed) {
      await postService.remove(postId);
      navigate(Path.Posts);
    }
  }

  const deleteCommentHandler = async (_id) => {
    const hasConfirmed = confirm(`Are you sure you want to delete this comment ?`);

    if(hasConfirmed) {
      await commentsService.remove(_id);

      commentsService.getAll(postId).then(setComments);
    }
  }

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
                <h1 className={styles.detailsTitle}>
                  {post.title}
                </h1>
                <hr/>

                {isOwner && (
                <div style={{float:'right'}}>
                <Link to={pathToUrl(Path.EditPost, {postId})} className={styles.detailsEditBtn} ><b>Edit</b></Link>
                <button onClick={deletePostHandler} className={styles.detailsDeleteBtn} ><b>Delete</b></button>
                </div>
                )}
                <b>
                  <p style={{ color: "black" }}>
                    Author: {post.name} {post.lastName}
                  </p>
                </b>

                
                <b>
                  <span className={styles.detailsSpan}>
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

        {comments.map(({ _id, comment, owner: { name, lastName, email } }) => (
          <div key={_id} className={styles.detailsCommentDiv} >
            {(commentOwnerEmail === email || isOwner) && (
            <button onClick={(ev) => deleteCommentHandler(_id)} className={styles.detailsCommentDeleteBtn} >X</button>
            )}
            <div className="ps-3">
              <h6>
                <Link to="">
                  {name} {lastName}
                </Link>{" "}
                <small>
                  <i></i>
                </small>
              </h6>
              <span className={styles.detailsSpan}>{comment}</span>
            </div>
          </div>
        ))}

{isAuthenticated && (
            <div className="bg-primary p-5" style={{ borderRadius: "20px", marginTop: "35px"}}>
              <h2 className="text-white mb-4">Leave a comment</h2>
              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="comment" className={styles.detailsLabel} >
                      Comment:
                    </label>
                    <textarea
                      value={values.comment}
                      onChange={onChange}
                      className="form-control bg-white border-0"
                      name="comment"
                      rows="5"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div className="col-12">
                    {errors.length > 0 && <div className={styles.errorDiv}><p>{[...errors]}</p></div>}
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
