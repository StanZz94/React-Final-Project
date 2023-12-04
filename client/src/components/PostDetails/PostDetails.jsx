import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as postService from "../../services/postService"

export default function PostDetails() {
    const [ post, setPost ] = useState({});
    const { postId } = useParams();

    useEffect(()=>{
        postService.getOne(postId)
        .then(setPost);
    },[postId]);

    const addCommentHandler = (e) => {

    }

  return (
    <div className="container-fluid py-5">
      <div className="container">
                <div className="mb-5">
                    <div className="row g-5 mb-5">
                        <div className="col-md-6">
                          <div>
                            <img className="img-fluid w-100" src={post.imageUrl} alt="" />
                            </div>
                        </div>
                       {/** <div class="col-md-6"> 
                            <img class="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                        </div>*/}
                    </div>
                    <h1 className="mb-4">{post.title}</h1>
                    <p style={{ color: "black" }}>{post.myPost}</p>
                </div>
                {/**<!-- Blog Detail End -->*/}

                {/**<!-- Comment List Start -->*/}
                <div className="mb-5">
                    <h2 className="mb-4">3 Comments</h2>
                    <div className="d-flex mb-4">
                      <div style={{border: '5px solid green', borderRadius: '5px', padding: '10px'}}>
                        <div className="ps-3">
                            <h6><Link to="">John Doe</Link> <small><i>01 Jan 2045</i></small></h6>
                            <p style={{ color: "black" }}>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/**<!-- Comment List End -->*/}

                {/**<!-- Comment Form Start -->*/}
                <div className="bg-primary p-5">
                    <h2 className="text-white mb-4">Leave a comment</h2>
                    <form onSubmit={addCommentHandler}>
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="comment" style={{ color: "black" }}>Comment:</label>
                                <textarea className="form-control bg-white border-0" rows="5" placeholder=""></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-secondary w-100 py-3" type="submit">Publish</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/**<!-- Comment Form End -->*/}
                </div>
            </div>
  );
}
