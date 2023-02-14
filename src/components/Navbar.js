import Link from "next/link";

const Navbar = () => (
  <nav
    className='navbar navbar-expand-lg navbar-dark'
    style={{ backgroundColor: "#1e73be", color: "gold" }}
  >
    <div className='container'>
      <Link href='/'>
        <img
          src='https://cdn-bloge.nitrocdn.com/qQQRTLHOHjnlbppDkyjjLLrUuhazvTJc/assets/static/optimized/wp-content/uploads/2019/05/0d7118c912c17c64f5d4c20a7bc32e37.ITECH_logo-white.png'
          alt='Logo'
          height='50'
          className='navbar-brand'
        />
      </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mx-auto'>
          <li className='nav-item' style={{ marginRight: "30px" }}>
            <Link className='nav-link' style={{ color: "white" }} href='/'>
              Home
            </Link>
          </li>
          <li className='nav-item' style={{ marginRight: "30px" }}>
            <Link className='nav-link' style={{ color: "white" }} href='/about'>
              About Us
            </Link>
          </li>
          <li className='nav-item' style={{ marginRight: "30px" }}>
            <Link
              className='nav-link'
              style={{ color: "white" }}
              href='/services'
            >
              Services
            </Link>
          </li>
          <li className='nav-item' style={{ marginRight: "30px" }}>
            <Link
              className='nav-link'
              style={{ color: "white" }}
              href='/portfolio'
            >
              Portfolio
            </Link>
          </li>
          <li className='nav-item' style={{ marginRight: "30px" }}>
            <Link
              className='nav-link'
              style={{ color: "white" }}
              href='/contact'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className='my-2 my-lg-0'>
        <button className='btn btn-danger'>Book Appointment</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
