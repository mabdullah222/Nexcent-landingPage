import React from 'react'
import mobileLogin from "../../assets/svgs/mobile-login.svg"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
const Calender = () => {
  return (
    <div className='my-4 p-4'>
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5 col-sm-12">
                <Image src={mobileLogin} alt="mobilelogin" fluid/>
            </div>
            <div className="col-lg-7 col-sm-12 justify-content-start">
                <p className="unlock-heading">How to design your site footer like<br/><p className="unlock-heading">we did</p></p>
                
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque saepe et expedita ea dolorem nihil exercitationem assumenda sunt sequi sed excepturi aperiam voluptatibus delectus provident debitis ipsum animi aspernatur corrupti, aut consequatur accusantium nobis maxime. Necessitatibus tempora vitae est sequi iure dolorum provident maiores expedita voluptates accusantium deserunt, eum eligendi quasi, assumenda nostrum minima voluptatem, et culpa quisquam aliquid veritatis..</p>
                <Button variant="success">Learn More</Button>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Calender