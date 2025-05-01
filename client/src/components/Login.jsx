import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNIN_USER } from '../gqloperations/mutations';
import '../App.css'

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [signinUser, {error, data, loading}] = useMutation(SIGNIN_USER)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser({
      variables: {userSignin : formData}
    })
  }

  if(loading){
    return <h1>loading</h1>
  }

  if(data){
    localStorage.setItem("token", data.user.token);
    navigate('/');
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
