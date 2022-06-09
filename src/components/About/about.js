import React from "react";
import { useEffect } from "react";
import "./style.css";
import SearchBar from "../Searchbar/SearchBar";
import Person1 from "../../actets/UxpOYFku_400x400 1.png"
import Person2 from "../../actets/Mask group.png"
import Tweter from "../../actets/flogo1.png"
import Linkind from "../../actets/linkd.png"
function About({ setSearch, search, setSearch_category, search_category }) {
  return (
    <>
      <div className="container-fluied">
        <div className="main_wrap_about">
          <div className="fist_card_wrap">
            <p className="fist_heading my-5">Our Goal</p>

            <div className="card_goal">
              <p className="goal_text">
                “Our goal is simple: to aggregate any and every project building
                zkRollups, building on zkRollups, and building for zkRollups. By
                making these projects easy to find via an intuitive directory,
                we will promote adoption of this world-changing tech.”
              </p>
            </div>
          </div>

          <div className="About_us_wrap ">
            <div className=" row">
              <div className="text_wrap">
                <h6 className="about_heading">About Us</h6>
                <p className="about_text">
                  Jason Garland and Joel Kite are Co-Founders of Numio and have
                  been building on zkRollup technology since 2020.
                </p>
              </div>
              <div className="  card_wrap ">
         
                <div className="user_card ">
                  <div className="img_wrap_p">
                    <img className="img_cl" src={Person1}></img>

                  </div>
                  <div  className="name_wrap ">
                    <h6 className="text-center person_name">Joel Kite</h6>
                    <div className="d-flex justify-content-center  ">
                      <img className="mx-1" src={Tweter}></img>
                      <img className="mx-1" src={Linkind}></img>
                    </div>

                  </div>
                
                </div>
               
                <div className="user_card   ">
                  <div className="img_wrap_p">
                    <img className="img_cl" src={Person2}></img>

                  </div>
                  <div  className="name_wrap ">
                    <h6 className="text-center person_name">Joel Kite</h6>
                    <div className="d-flex justify-content-center  ">
                      <img className="mx-1" src={Tweter}></img>
                      <img className="mx-1" src={Linkind}></img>
                    </div>

                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
