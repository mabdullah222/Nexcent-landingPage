import React from 'react'
import UpdateCard from './UpdateCard'
import cp1 from "../../assets/images/cp1.jpeg"
import cp2 from "../../assets/images/cp2.jpeg"
import cp3 from "../../assets/images/cp3.jpeg"
import "./update.css"

const Update = () => {
    const updates=[{message:"Creating Streamlined Safeguarding processes with OneRen",src:cp1},{message:"What are your safeguarding responsibiltes and how can you handle them",src:cp2},{message:"Revamping the membership Model with Triathion Australia",src:cp3}]
  return (
    <div className='d-flex flex-column px-4 mt-3 align-items-center margin-bottom'>
        <div className='text-center d-flex flex-column align-items-center col-md-5'>
            <p className='unlock-heading'>Caring is the new Marketing</p>
            <p className='text text-center'>The Nexcent blog is the best place to read about the Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat adipisci dolor porro sapiente molestias qui repellat reiciendis. Ullam expedita eaque vitae quo soluta hic quae?</p>
        </div>
        <div className='container'>
            <div className='row justify-content-around'>
                {updates.map((e,index)=>{return <UpdateCard key={index} src={e.src} message={e.message}></UpdateCard>})}
            </div>
        </div>
    </div>
  )
}

export default Update