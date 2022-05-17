import React from 'react'
import {useState} from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import "./style.css"
import { NavLink } from "react-router-dom";
import icon1 from "../../actets/logo.png"
import { useNavigate  } from "react-router-dom";
function navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);


  return (
    <>
 <div >
 <div className='nav_top_space'></div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar top_space" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo"> */}
         <a className="nav-logo" onClick={()=>{
         navigate("/")
         }}><img src={icon1}></img></a>
            
          {/* </NavLink> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/tokens"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Tokens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/resources"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact 
              </NavLink>
            </li>
            <li className="nav-item spacing">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links add_project"
               onClick={click ? handleClick : null}
              >
                Add Project +
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
      <div className='nav_top_space'></div>
    </ div>
    </>
  )
}

export default navbar