import React from 'react'
import { Anchor, Image, LoadingImage } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)

export const LoadingCategory = () => (
  <Anchor>
    <LoadingImage />
  </Anchor>
)
