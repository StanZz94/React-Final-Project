export default function Navbar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex d-lg-none">
            <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About us</a>
                <a href="service.html" className="nav-item nav-link">Catalog</a>
                <a href="product.html" className="nav-item nav-link">News</a>
                <a href="#" className="nav-item nav-link">Login</a>
                <a href="#" className="nav-item nav-link">Register</a>
                <a href="#" className="nav-item nav-link">Logout</a>
                
                <a href="contact.html" className="nav-item nav-link">Contacts</a>
            </div>
        </div>
    </nav>
        </>
    )
}