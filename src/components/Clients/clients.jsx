import React from 'react'
import "./clients.css"
import client1 from "../../assets/svgs/client1.svg"
import client2 from "../../assets/svgs/client2.svg"
import client3 from "../../assets/svgs/client3.svg"
import client4 from "../../assets/svgs/client4.svg"
import client5 from "../../assets/svgs/client5.svg"
import client6 from "../../assets/svgs/client6.svg"
import client7 from "../../assets/svgs/client7.svg"

const Client = () => {
  return (
    <div className='d-flex flex-column py-4'>
      <div className='d-flex flex-column align-items-center client-sect-1'>
        <p className='font-weight-bold'>Our Clients</p>
      <p className='text-center'>We have been working with some fortune 500+ clients</p>
      </div>
      <div className='d-flex flex-row justify-content-around flex-wrap client-sect-2'>
        <img src={client1} alt="" />
        <img src={client2} alt="" />
        <img src={client3} alt="" />
        <img src={client4} alt="" />
        <img src={client5} alt="" />
        <img src={client6} alt="" />
        <img src={client7} alt="" />
      </div>
    </div>
  )
}

export default Client