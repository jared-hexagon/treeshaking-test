import React from 'react'
import Image from '../image'

export default ({ username, src }) => (
  <div>
    <Image src={src} />
    <strong>{username}</strong>
  </div>
)
