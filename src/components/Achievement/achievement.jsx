import "./achievement.css"
import people from "../../assets/svgs/people.svg"
import payments from "../../assets/svgs/payments.svg"
import smallClub from "../../assets/svgs/small-club.svg"
import event from "../../assets/svgs/event.svg"
import SmallCard from "./small-card"
import React from 'react'

const Achievement = () => {
    const smallCards=[{count:"2,245,341",name:"Member",src:people},{count:"46,328",name:"Clubs",src:smallClub},{count:"828,867",name:"Event Bookings",src:event},{count:"1,926,436",name:"Payments",src:payments}]
  return (
    <div className="bg-silver my-5 p-5">
        <div className="container">
        <div className="row">
            <div className="col-sm-12 col-lg-6">
                <p className="unlock-heading">Helping a local<br/><p className="text-green">buisness reinvent itself</p><p className="text">We reached here with our hardword and dedication</p></p>
            </div>
            <div className="col-sm-12 col-lg-6">
                <div className="row">
                    {smallCards.slice(0,2).map((e,index)=><div className="col-6"><SmallCard src={e.src} count={e.count} name={e.name}></SmallCard></div>)}
                </div>
                <div className="row">
                    {smallCards.slice(2,4).map((e,index)=><div className="col-6"><SmallCard src={e.src} count={e.count} name={e.name}></SmallCard></div>)}
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Achievement