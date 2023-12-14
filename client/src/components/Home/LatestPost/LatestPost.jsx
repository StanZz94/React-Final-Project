import { Link } from "react-router-dom"
import Path from "../../../paths"
import { pathToUrl } from "../../../utils/pathUtil"

export default function LatestPost({imageUrl, title, _id}) {
    return (
        <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src={imageUrl} alt="" />
                <Link className="blog-overlay" to={pathToUrl(Path.PostDetails, {postId: _id})}>
                  <h4 className="text-white">
                    {title}
                  </h4>
                  
                </Link>
              </div>
            </div>
    )
}