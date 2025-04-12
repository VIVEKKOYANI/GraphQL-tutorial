import React from 'react'

function Profile() {
  return (
    <div className="center-wrapper">
      <div className='my-container'>
        <div className='center-align'>
          <img className='circle' style={{border: '2px solid'}} src='https://robohash.org/ram.png?size=200x200' alt='pic' />
          <h5>Ramesh verma</h5>
          <h6>Email - abc@gmail.com</h6>
        </div>
        <blockquote>
          <h6>if it work don't touch it</h6>
        </blockquote>
        <blockquote>
          <h6>if it work don't touch it</h6>
        </blockquote>
      </div>
    </div>
  )
}

export default Profile