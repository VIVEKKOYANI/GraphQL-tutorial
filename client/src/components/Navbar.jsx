import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-wrapper #673ab7 deep-purple">
        <Link to="/" className="brand-logo">Quote App</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {token ?
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/create">Create</Link></li>
              <li><button className='red btn' onClick={() => {
                localStorage.removeItem("token");
                navigate('/login')
              }}></button></li>
            </> :
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar