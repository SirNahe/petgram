import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery'
import { Helmet } from 'react-helmet'

export const Home = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>Petgram 🐶 - App de fotos de mascotas </title>
        <meta
          name='description'
          content='En Petgram encontrarás fotos de mascotas y animales muy bonitos'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </>
  )
}
