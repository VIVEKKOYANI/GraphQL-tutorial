import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="center-wrapper">
      <div className='my-container'>
        <h5>Login!!</h5>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Link to="/signup"><p>Don't have an account ?</p></Link>
          <button className='btn #673ab7 deep-purple' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
