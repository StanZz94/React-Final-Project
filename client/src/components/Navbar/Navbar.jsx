export default function Navbar() {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <a href="index.html" class="navbar-brand d-flex d-lg-none">
            <h1 class="m-0 display-4 text-secondary"><span class="text-white">Farm</span>Fresh</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto py-0">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <a href="service.html" class="nav-item nav-link">Catalog</a>
                <a href="product.html" class="nav-item nav-link">News</a>
                <a href="#" class="nav-item nav-link">Login</a>
                <a href="#" class="nav-item nav-link">Register</a>
                <a href="#" class="nav-item nav-link">Logout</a>
                
                <a href="contact.html" class="nav-item nav-link">Contacts</a>
            </div>
        </div>
    </nav>
        </>
    )
}