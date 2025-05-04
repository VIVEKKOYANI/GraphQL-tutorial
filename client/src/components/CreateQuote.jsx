import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_QUOTE } from '../gqloperations/mutations';
import { GET_ALL_QUTOES } from '../gqloperations/queries';

function CreateQuote() {
  const [quote, setQuote] = useState("");
  const [createQuote, {loading, error, data}] = useMutation(CREATE_QUOTE, {
    refetchQueries: [
      GET_ALL_QUTOES,
      "getAllQuotes"
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        name: quote
      }
    })
  }

  if(loading)return <h1>loading</h1>

  return (
    <div className='center-wrapper'>
      <div className='my-container'>
        {error && <div className='red card-panel'>{error.message}</div>}

        {data && <div className='green card-panel'>{data.quote}</div>}
        <form onSubmit={handleSubmit}>
          <input type='text' value={quote} onChange={(e) => setQuote(e.target.value)} placeholder='write your quote here ' />
          <button className='btn green'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateQuote