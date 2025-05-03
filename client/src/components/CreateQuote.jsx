import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_QUOTE } from '../gqloperations/mutations';

function CreateQuote() {
  const [quote, setQuote] = useState("");
  const [createQuote, {loading, error, data}] = useMutation(CREATE_QUOTE);

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        name: quote
      }
    })
  }

  if(loading)return <h1>loading</h1>

  if(error){
    console.log(error.message);
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