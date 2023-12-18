import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as postService from "../../services/postService"
import PostItem from "./post-item/PostItem";
import styles from "./Posts.module.css"

export default function Posts() {

  const [posts, setPosts ] = useState([]);

    useEffect(() => {
        postService.getAll()
        .then(result => setPosts(result))
        .catch((err) => {
          console.log(err)
        })
    }, []);

  return (
    <div className="container-fluid py-5">
      <h1 className={styles.postsH1}>Welcome to our Blog!</h1>
      <div className="container">
      <h2 className={styles.postsH2} >Learn tips and tricks from one of the best farmers!</h2>
      <hr style={{marginBottom:'50px'}} />
        <div className="row g-5">


         {posts.map(post => (
          <PostItem key={post._id} {...post}/>
         ))}

         {posts.length === 0 && <h3 className={styles.postsH2}>There are no posts!</h3>}

          <div className="col-12">
            <div className={styles.underPostsDiv}><h2 className={styles.underPostsText}>If you got tips and trick for sharing, dont be shy and post it ! </h2></div>
          </div>
        </div>
      </div>
    </div>
  );
}
