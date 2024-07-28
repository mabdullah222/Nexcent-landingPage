import React from 'react'

const Card = ({src,content,heading}) => {
  return (
    <div className='col-lg-3 col-sm-12 text-center'>
              <img src={src} alt="" />
              <p className='community-heading2'>{heading}</p>
              <p className='text'>{content}</p>
    </div>
  )
}

export default Card