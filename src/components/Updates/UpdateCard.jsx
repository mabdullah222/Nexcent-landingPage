import { Image } from 'react-bootstrap'
import React from 'react'

const UpdateCard = ({src,message}) => {
  return (
    <div className='d-flex flex-column col-sm-12 col-md-4' style={{position:'relative',marginBottom:"60px"}}>
        <Image fluid rounded src={src}></Image>
        <div className='message text-center align-self-center p-3'>
            <p className='text'>{message}</p>
            <p className='text-green'>ReadMore</p>
        </div>
    </div>
  )
}

export default UpdateCard