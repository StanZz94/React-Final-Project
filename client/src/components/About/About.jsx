import styles from "./About.module.css";

export default function About() {
    return (
        <div className="container-fluid about pt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                        <img className="img-fluid mt-auto mx-auto" src="img/about.png" />
                    </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h6 className="text-primary text-uppercase">About Us</h6>
                        <h1 className="display-5">Our inspiration is to help our members to succeed in farming!</h1>
                    </div>
                    <b><p className="mb-4">Bio farming works with natural systems and processes to build optimum soil, plant and animal health, while also incorporating the best of "conventional" farming methods to maintain production levels and quality. Ultimately it also looks for outcomes in food nutrition and improved ecosystems health.</p></b>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                            <i className="fa fa-seedling display-1 text-secondary"></i>
                            <h4>From Beginner</h4>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-award display-1 text-secondary"></i>
                            <h4>To Winner!</h4>
                        </div>
                    </div>
                    <b><p className={styles.aboutP} >In our blog you can learn the best practices in bio farming!</p></b>
                </div>
            </div>
            <div className={styles.aboutDiv}>
                <h3 className={styles.aboutH3}>For some it's just work, for us it's a hobby !</h3>
            </div>
        </div>
        <div style={{height:"100px"}}></div>
    </div>
    );
  }
  

  