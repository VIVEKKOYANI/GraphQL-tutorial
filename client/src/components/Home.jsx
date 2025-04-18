import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_QUTOES } from '../gqloperations/queries'

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUTOES);
  console.log("data", data)
  if (loading) return <h1>loading...</h1>
  if (error) {
    console.log("error", error.message);

  }
  return (
    <div className='center-wrapper'>
      <div className="my-container">
        {data?.quotes?.map((quote) => {
          return (
            <blockquote>
              <h6>{quote.name}</h6>
              <p className="right-align">~{quote.by.firstName}</p>
            </blockquote>
          )
        })}
      </div>
    </div>
  )
}