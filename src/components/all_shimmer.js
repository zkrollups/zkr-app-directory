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

const allshimmer = ({ }) => {
  return (
    <>
      <div class="v40_4201  mt-5" style={{ cursor: "pointer" }}>
        {/* first shimmer */}
        <div>
          <Shimmer className="shimerv40_4202">
          </Shimmer>
        </div>

        <br></br>

        <span>
          <Shimmer className="shimerv40_42021" height={30} width={200}>
          </Shimmer>
        </span>
      </div>

      <div>
        <Shimmer className="shimerv40_42022" height={30} width={200}>
        </Shimmer>
      </div>
    </>
  )
}
export default allshimmer;