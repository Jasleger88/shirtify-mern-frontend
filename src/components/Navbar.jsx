import {Link, useLocation} from "react-router-dom"
import {useEffect, useState } from "react"
import { toast } from "react-toastify"


const Navbar = () => {
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn]= useState(localStorage.getItem('token'))
    
    useEffect(() =>{
    setIsLoggedIn(localStorage.getItem('token'))
    }, [location])
    
    function logout() {
      toast.success(`Thank you for visiting!`)
      setIsLoggedIn(false)
      localStorage.removeItem('token')
    }

  

    return <nav className="navbar">
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
           <Link to="/" className="button is-link is-outlined">Home</Link>
           <Link to="/shirts/browse" className="button is-light">Browse</Link>
           {!isLoggedIn &&<Link to="/auth/signup" className="button is-light">Signup</Link>}
           {!isLoggedIn &&<Link to="/auth/login" className="button is-light">Login</Link>}
           {isLoggedIn &&<Link to="/shirts/design" className="button is-light">Design Shirt</Link>}
            {isLoggedIn &&<Link to="/wishlist" className="button is-light">Wishlist</Link>}
            {isLoggedIn &&<button className="button" onClick={logout}>Logout</button>}
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar


