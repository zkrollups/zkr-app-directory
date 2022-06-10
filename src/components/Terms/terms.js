import React from "react";
import {useEffect} from "react"
import "./style.css";

function Terms({ setSearch, search, setSearch_category, search_category }) {

  useEffect(() => {
    // window.scrollTo(0, 0)
    //console.log("useEffectuseEffectuseEffect")
    scroll()
  }, [])
  

  const scroll=()=>{

    // window.scroll(0,findPos(document.getElementById("scrol")));
    document.querySelector('#scrol').scrollIntoView({
        behavior: 'smooth'
      });
  }

  return (
    <>
      <div className="container-fluied" id="scrol">
        <div className="main_wrap_term mt-4">
          <h2 className="about_haeading">Terms of Use</h2>
          <div className="textall">
          <p>Last updated June 7, 2022</p>
          <p>
          As an educational service committed to advancing open finance adoption, zkRollups
          is committed to preserving the privacy of its users. Please also
          review our Terms of Use.
         
           
          </p>

          <p>AGREEMENT TO TERMS</p>
          <p>
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and zkRollups.xyz ("zkRollups", “Company“, “we“, “us“, or “our“),
            concerning your access to and use of the https://www.zkRollups.xyz
            website (“Site“), the “zkRollups” application (“App“) as well as any
            other digital services, media form, media channel, mobile website or
            mobile application related, linked, or otherwise connected thereto
            (collectively, the “Services”). You agree that by accessing the
            Services, you have read, understood, and agreed to be bound by all
            of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS
            OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES
            AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p>
            THESE TERMS AND CONDITIONS ARE SUBJECT TO CHANGE WITHOUT NOTICE,
            FROM TIME TO TIME IN OUR SOLE DISCRETION.
          </p>
          <p>
            The Services provide software tools for users to find and learn about
            various applications and tools related to digital assets including
            tokens, cryptocurrencies, and virtual currencies. The projects listed
            here are crowdsourced and nothing on this site constitutes an endorsement.  
            The use of any of these services may result in the loss or theft of funds.
            The App includes information about various
            Digital Assets, however, such inclusion or availability of
            information does not imply endorsement by zkRollups of such Digital
            Assets or any association with the operators of the Digital Assets.
            zkRollups includes or makes such information available for your
            convenience only. You understand and accept the inherent security
            risks of using the Internet, new technology, and blockchain applications.
          </p>
          </div>
      
        </div>
      </div>
    </>
  );
}

export default Terms;
