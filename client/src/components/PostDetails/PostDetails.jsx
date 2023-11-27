import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as postService from "../../../services/postService"

export default function PostDetails() {
    const [ post, setPost ] = useState({});
    const { postId } = useParams();
    useEffect(()=>{
        postService.getOne(postId)
        .then(setPost);
    },[postId]);

  return (
    <div className="mb-5">
      <div className="row g-5 mb-5">
        <div className="col-md-6">
          <img className="img-fluid w-100" src={post.imageUrl} alt="" />
        </div>
      </div>
      <h1 className="mb-4">
        {post.title}
      </h1>
      <p>
        {post.myPost}
      </p>
    </div>
  );
}
