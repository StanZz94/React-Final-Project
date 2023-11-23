import { Link } from "react-router-dom";

export default function Create() {
  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
                <h1 className="display-5">Create Post</h1>

                <div className="bg-primary h-100 p-5" style={{ maxWidth: "600px" }}>
                        <form>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="title" style={{ color: "black" }}>Title:</label>
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="image" style={{ color: "black" }}>Image URL:</label>
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="" style={{ height: "55px" }} />
                                </div>
                                <div class="col-12">
                                    <label htmlFor="myPost" style={{ color: "black" }}>My Post:</label>
                                    <textarea class="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Post</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  );
}
