import React from "react";
import Image from "react-bootstrap/Image";
import Tesla from "../../assets/svgs/tesla.svg";

import client1 from "../../assets/svgs/client1.svg";
import client2 from "../../assets/svgs/client2.svg";
import client3 from "../../assets/svgs/client3.svg";
import client4 from "../../assets/svgs/client4.svg";
import client5 from "../../assets/svgs/client5.svg";
import client6 from "../../assets/svgs/client6.svg";
import client7 from "../../assets/svgs/client7.svg";
const Customer = () => {
  return (
    <div className="bg-silver px-5 py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-lg-5">
            <Image src={Tesla} rounded fluid></Image>
          </div>
          <div className="col-sm-12 col-lg-7">
            <div className="d-flex flex-column">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                beatae sunt odit veritatis sed corporis eum deleniti consectetur
                fugit rerum distinctio tenetur velit officiis suscipit
                inventore, earum non explicabo repellendus commodi nesciunt.
                Beatae sequi consequatur omnis, totam sapiente enim voluptatem
                voluptate non qui porro, autem debitis amet natus provident
                facilis, doloribus nulla ea ipsam laudantium labore obcaecati
                suscipit corrupti dolore. Recusandae, laboriosam autem vel eaque
                aperiam rerum ut, iure laborum ratione explicabo minima animi
                dolorem. Quis vel odio cum placeat doloribus excepturi
                voluptatem culpa repellat, ad dolorum distinctio natus
                voluptates.
              </p>
              <p className="text-green">Tim Smith</p>
              <p className="text">British Dragon Board Racing Assoication</p>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <Image fluid src={client1} alt="" />
                <Image fluid src={client2} alt="" />
                <Image fluid src={client3} alt="" />
                <Image fluid src={client4} alt="" />
                <Image fluid src={client5} alt="" />
                <Image fluid src={client6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
