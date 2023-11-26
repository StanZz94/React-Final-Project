import { Link } from "react-router-dom";

export default function NewsItem({
    title,
    imageUrl,

}){
 return(
    <div className="col-md-4">
            <div className="blog-item position-relative overflow-hidden">
              <img className="img-fluid" src={imageUrl} alt="" />
              <Link className="blog-overlay" to="">
                <h4 className="text-white">
                  {title}
                </h4>
                <span className="text-white fw-bold">data</span>
              </Link>
            </div>
          </div>
 )
}