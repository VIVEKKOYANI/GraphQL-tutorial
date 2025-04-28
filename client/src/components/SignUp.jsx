import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../gqloperations/mutations';
import '../App.css'

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [signupUser, {data, loading, error}] = useMutation(SIGNUP_USER)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(formData)
  }

  if(loading) return <h1>Loading</h1>

  return (
    <div className="center-wrapper">
      <div className='my-container'>
        {error && <div className='red card-panel'>{error.message}</div>}
        {data && data.user && <div className='green card-panel'>{data.user.firstName} is SignedUp. You can login now!</div>}
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
