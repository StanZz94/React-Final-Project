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
    <div className="container-fluid py-5">
      <div className="container">
                <div className="mb-5">
                    <div className="row g-5 mb-5">
                        <div className="col-md-6">
                            <img className="img-fluid w-100" src={post.imageUrl} alt="" />
                        </div>
                       {/** <div class="col-md-6"> 
                            <img class="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                        </div>*/}
                    </div>
                    <h1 className="mb-4">{post.title}</h1>
                    <p>{post.MyPost}</p>
                </div>
                {/**<!-- Blog Detail End -->*/}

                {/**<!-- Comment List Start -->*/}
                {/**<div class="mb-5">
                    <h2 class="mb-4">3 Comments</h2>
                    <div class="d-flex mb-4">
                        <img src="img/user.jpg" class="img-fluid" style="width: 45px; height: 45px;">
                        <div class="ps-3">
                            <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                            <button class="btn btn-sm btn-primary">Reply</button>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <img src="img/user.jpg" class="img-fluid" style="width: 45px; height: 45px;">
                        <div class="ps-3">
                            <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                            <button class="btn btn-sm btn-primary">Reply</button>
                        </div>
                    </div>
                    <div class="d-flex ms-5 mb-4">
                        <img src="img/user.jpg" class="img-fluid" style="width: 45px; height: 45px;">
                        <div class="ps-3">
                            <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                            <button class="btn btn-sm btn-primary">Reply</button>
                        </div>
                    </div>
                </div>*/}
                {/**<!-- Comment List End -->*/}

                {/**<!-- Comment Form Start -->*/}
                <div className="bg-primary p-5">
                    <h2 className="text-white mb-4">Leave a comment</h2>
                    <form>
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="comment" style={{ color: "black" }}>Comment:</label>
                                <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{height: "55px;"}} />
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
