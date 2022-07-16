import "./style.css";
import React, { useState, useEffect } from "react";
import { Loader, } from "semantic-ui-react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Twitter, } from "grommet-icons";
import globe from "../../actets/globe.png";
import cardpic1 from "../../actets/Frame 28.png";
import cardpic2 from "../../actets/Group 141.png";
import cardpic3 from "../../actets/Group 141 (1).png";
import Leftarow from "../../actets/left.png";
import cardpic2logo from "../../actets/ethereum-eth-logo 1.png";
import LastCard1 from "../../actets/Group 135.png";
import LastCard2 from "../../actets/Group 138.png";
import LastCard3 from "../../actets/Group 138 (1).png";
import Tweet from "../../actets/icons8-retweet-24 (1).png";
import Like from "../../actets/icons8-heart-24 (1).png";
import Reply from "../../actets/icons8-twitter-reply-16.png";
import { projects } from "../../data/data";
import { useParams } from "react-router-dom";
import { Button, } from "grommet";
import { useNavigate } from "react-router-dom";
import { main } from '../../scrapper';
import { Image, Shimmer } from 'react-shimmer'



export const Carddetailshimmer = ({
}) => {
  return (
    <>

      <div className="col-lg-6 col-md-12 col-sm-12 d-flex ">
        <div>
          <Shimmer width={400} height={300}></Shimmer>
        </div>
        {/* <!-- leftside --> */}
        <div>


          <Shimmer className="shimer1" width={350} height={130}></Shimmer>

          <br></br>



          <Shimmer className="shimer2" width={350} height={150}></Shimmer>

        </div>



      </div>
      {/* <!-- bottom --> */}
      <br></br>
      <div row d-flex justify-content-space-between>
        <div >
          <Shimmer width={300} height={100}></Shimmer>
        </div>

        <div className="lastshimer">
          <Shimmer width={300} height={100}></Shimmer>
        </div>
        <br></br>
        <div >
          <Shimmer width={300} height={100}></Shimmer>
        </div>
      </div>
    </>
  )
}

// export default Carddetailshimmer ;
