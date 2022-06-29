import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getdata } from "../data/data";
import { useNavigate } from "react-router-dom";
import dropdown_image from "../actets/dropdown.svg";
import "./style.css";
import Pagination from "@mui/material/Pagination";
import { Dropdown, Menu } from "semantic-ui-react";
import { Twitter, } from "grommet-icons";
import { Image, Shimmer } from 'react-shimmer'

import globe from "../actets/globe.png";
import {
  Button,
} from "grommet";
export const Carddetailshimmer = ({
}) => { return (
      <>
      
<div className="d-flex ">

<Shimmer className="shimerv1" width={"33vw"} height={"21vw"}></Shimmer>

<div>
 <div>
 <Shimmer className="shimerv2"  width={"30vw"} height={"7vw"}></Shimmer>
 </div>
 <br></br>
<div>
 <Shimmer className="shimerv3"  width={"30vw"} height={"12vw"}></Shimmer>

</div>
</div>
</div>



{/* <!-- bottom --> */}
<br></br>
<div row d-flex justify-content-space-between>
<div >
<Shimmer className="shimerv4" width={"30vw"} height={"8vw"}></Shimmer>
</div>
<br></br>
<div >
<Shimmer className="shimerv4" width={"30vw"} height={"8vw"}></Shimmer>
</div>
</div>
</>
)
}
export default Carddetailshimmer;