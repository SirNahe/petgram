import React from 'react'
import { Helmet } from 'react-helmet'

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Petgram 🐶 - 404 </title>
      </Helmet>
      <h1>Esta página no existe.</h1>
    </>
  )
}
