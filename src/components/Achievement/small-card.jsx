import React from 'react'

const SmallCard = ({src,count,name}) => {
  return (
    <div className='d-flex flex-row'>
        <div>
            <img src={src} alt="" className='image'/>
        </div>
        <div className='d-flex flex-column justify-content-center '>
            <p className='achievement-heading'>{count}<p className='text'>{name}</p></p>
            
        </div>

    </div>
  )
}

export default SmallCard