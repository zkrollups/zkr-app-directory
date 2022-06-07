import React from "react";
import "./abc.css";
import { FaEnvelopeOpenText, } from 'react-icons/fa';
import { FiPhoneCall, } from 'react-icons/fi';
// import logo from "../Assets/images/jitsimeet.svg";
import { Link, useHistory } from "react-router-dom";
import logo from '../../actets/logo.png'
import Logo1 from "../../actets/flogo1.png"
import Logo2 from "../../actets/flogo2.png"
import Logo3 from "../../actets/flogo3.png"
import { useNavigate  } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();




const scrolup=()=>{
  //console.log(" window.scrollTo(0, 0)")


}







  return (
    <footer class="footer-area footer--light " >
      <div class="footer-big">
        {/* <!-- start .container --> */}
        <div class="container">
          <div class="row d-flex justify-content-center ">
            {/* <div className="col-1"></div> */}
            <div class="col-12 col-lg-2 center_footer_logo">
              <div class="footer-widget">
                <div class="widget-about">
                  <img alt="" className="img2" />
               
                  <ul class="contact-details">
                    <li>
                      <span ></span> 
                      <img src={logo}/>
                      {/* <a href="tel:344-755-111">ssss</a> */}
                    </li>
                    <li>
                      {/* <span> <FaEnvelopeOpenText /></span> */}
                      {/* <a href="">
                        queries@saldiri.com
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-4 --> */}
            <div class="col-6 col-lg-2 center_footer ">
              <div class="footer-widget">
                <div class="footer-menu footer-menu--1">
                  <h4 class="footer-widget-title">Company</h4>
                  <ul>
                   
                    <li className="inner_list">
                      <Link to="#">
                       Resources
                      </Link>

                    </li>
                    <li className="inner_list">
                      <Link to="#">
                        About
                      </Link>

                    </li>

                    <li className="inner_list">
                      <Link to="#">
                     Contact  </Link>

                    </li>
                    
                   
                  
                    {/* <li>
                      <a href="#">HTML Template</a>
                    </li> */}
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-3 --> */}

            <div class="col-6 col-lg-2 center_footer flex_end_ ">
              <div class="footer-widget">
                <div class="footer-menu">
                  <h4 class="footer-widget-title">Support</h4>
                  <ul>
                    <li className="inner_list">
                      <a href="#x_start">List a Project</a>
                    </li>
                    <li className="inner_list">
                      <a href="#how_work">Partner with Us</a>
                    </li>
                    <li className="inner_list">
                      <a href="#x_Features">Contact</a>
                    </li>
                 

                    {/* <li>
                      <a href="#">Blog</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-lg-3 --> */}

            <div class="col-6 col-lg-2 center_footer ">
              <div class="footer-widget">
                <div class="footer-menu no-padding">
                  <h4 class="footer-widget-title">About</h4>
                  <ul>
                    <li className="inner_list">
                      <Link to="/terms" onClick={()=>{
                        scrolup()
                      }}>
                        Terms of Service
                      </Link>
                    </li>
                    <li className="inner_list">
                      <a href="#">Privacy Policy</a>
                    </li>
                  
                
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            <div class="col-6 col-lg-2 center_footer flex_end_ ">
              <div class="footer-widget1">
                <div class="footer-menu no-padding">
                  <h4 class="footer-widget-title">Follow US</h4>
                  <ul className="d-flex">
                    <li>
                    <img src={Logo1}/>
                    </li>
                    <li>
                    <img className="mx-3" src={Logo2}/>
                    </li>
                    <li>
                    <img src={Logo3}/>
                    </li>
                 
                    {/* <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Buyers Faq</a>
                    </li>
                    <li>
                      <a href="#">Sellers Faq</a>
                    </li> */}
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <div className="col-1"></div> */}
            {/* <!-- Ends: .col-lg-3 --> */}
          </div>
          {/* <!-- end /.row --> */}
        </div>
        {/* <!-- end /.container --> */}
      </div>

      {/* <!-- end /.footer-big --> */}

      <div class="mini-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-text copy_text">
                <p >
                Copyright @2022 
                  <a href="#"> zkRollups.xyz</a>. All rights reserved.
                  {/* <a href="https://zkRollups.xyz">SALDIRI</a> */}
                </p>
              </div>

              {/* <div class="go_top">
            <span class="icon-arrow-up"></span>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
