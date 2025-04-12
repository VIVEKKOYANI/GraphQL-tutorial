import React, { useState } from 'react'

function CreateQuote() {
  const [quote, setQuote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='center-wrapper'>
      <div className='my-container'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={quote} onChange={(e) => setQuote(e.target.value)} placeholder='write your quote here ' />
          <button className='btn green'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateQuote