import React from 'react'

export default function GalleryImage({data}) {
  return (
    <div className='gallery-image'>
      <img src={data.image.medium} />
    </div>
  )
};
