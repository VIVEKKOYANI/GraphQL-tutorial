import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function SignUp() {
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
        <h5>SignUp!!</h5>
        <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='First Name'
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            placeholder='Last Name'
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
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
          <Link to="/login"><p>Already have an account ?</p></Link>
          <button className='btn #673ab7 deep-purple' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
