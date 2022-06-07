import React from "react";
import {useEffect} from "react"
import "./style.css";
import SearchBar from "../Searchbar/SearchBar";
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
          <p>Last updated September 30, 2021</p>
          <p>
          As a noncustodial service committed to advancing open finance, Numio
          is committed to preserving the privacy of its users. Please also
          review our Terms of Use and canary.txt.
         
           
          </p>

          <p>AGREEMENT TO TERMS</p>
          <p>
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and Numio, Inc. (“Numio“, “Company“, “we“, “us“, or “our“),
            concerning your access to and use of the https://www.numio.one
            website (“Site“), the “Numio” application (“App“) as well as any
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
            The Services provide software tools for users to access and manage
            various features and functions related to digital assets including
            tokens, cryptocurrencies, virtual currencies or any other digital
            assets you own that are supported by the Services (collectively,
            “Digital Assets”), including interfacing with third party sources
            for certain information regarding the value of Digital Assets. The
            Services do not purchase, sell, store or exchange Digital Assets. We
            do not recommend that you use the Services unless you are familiar
            with Digital Assets, Blockchain technology and can securely store
            your own private key. The App includes information about various
            Digital Assets, however, such inclusion or availability of
            information does not imply endorsement by Numio of such Digital
            Assets or any association with the operators of the Digital Assets.
            Numio includes or makes such information available for your
            convenience only. You understand and accept the inherent security
            risks of using the Internet.
          </p>
          </div>
      
        </div>
      </div>
    </>
  );
}

export default Terms;
