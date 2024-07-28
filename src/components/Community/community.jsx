import React from 'react'
import "./community.css"
import associations from "../../assets/svgs/associations.svg"
import club from "../../assets/svgs/club.svg"
import member from "../../assets/svgs/member.svg"
import Card from './Card'
const Community = () => {
  const cards=[{src:associations,heading:"Membership Organization",content:"Our membership management software proives full automation of membership renewals"},{src:member,heading:"National Associations",content:"Our membership management software proives full automation of membership renewals"},{src:club,heading:"Clubs and Groups",content:"Our membership management software proives full automation of membership renewals"}]
  return (
    <div className='d-flex flex-column my-4'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <p className='community-heading'>Manage Your Entire Community</p>
        <p className='community-heading'>in a single System</p>
        <p className='text'>Who is Nexcent suitable for?</p>
      </div>
      <div className='container'>
        <div className='row px-4 justify-content-around'>
          {cards.map((e,index)=><Card key={index} src={e.src} heading={e.heading} content={e.content}></Card>)}
        </div>
      </div>
    </div>
  )
}

export default Community