import "./unlock.css"
import mobile from "../../assets/svgs/mobile.svg";
import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
const Unlock = () => {
  return (
    <div className="container">
        <div className="row py-7">
            <div className="col-lg-6 col-sm-12 justify-content-end">
                <Image src={mobile} alt="mobile" fluid/>
            </div>
            <div className="col-lg-6 col-sm-12 justify-content-start">
                <p className="unlock-heading">The Unseen of Spending three<br/><p className="unlock-heading">years at Pixelgrade</p></p>
                
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore dolorem sequi neque recusandae itaque autem laboriosam veniam mollitia? Aspernatur animi, est ipsa dicta itaque explicabo maxime dolore reiciendis distinctio facere, quidem facilis, debitis vero.</p>
                <Button variant="success">Learn More</Button>
            </div>
        </div>

    </div>
  )
}

export default Unlock