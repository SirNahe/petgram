import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Network error: Failed to fetch</p>

  return <ListOfPhotoCards {...data} />
}

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {renderProp}
  </Query>
)
