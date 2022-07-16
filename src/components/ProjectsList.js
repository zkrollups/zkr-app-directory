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
import Featureshimmer from './featureshimmer';
import AllShimmer from './all_shimmer';

const ProjectsList = ({
  setNetworkFilter,
  filter,
  setFilter,
  search,
  networkFilter,
  results,
  setResults,
  search_category,
  loading_feature,
  loading,
  setcondition_clause,
  condition_clause,
  skip, limit, curentpage, setcurentpage, paginate_end, setpaginate_end, paginate_start, setpaginate_start, total_pages, settotal_pages, total_show, settotal_show,
  total, feature_results
}) => {
  // const defaultState = Object.keys(projects).map(key => {//console.log(projects[key]); return projects[key]}).flat();
  // //console.log("filterfilterfilterfilter===>> ", filter.length, search.length);

  const navigate = useNavigate();
  const [tokenfilter, settokenfilter] = useState("all");

  const [date, setdateadded] = useState("all");
  const [projects, setprojects] = useState([]);
  // const [total_show, settotal_show] = useState(25);
  // const [total_pages, settotal_pages] = useState(0);
  // const [paginate_start, setpaginate_start] = useState(skip);



  var colors = ["#36368F", "#6C6DD6", "#EB5600", "#2D2F4B", "#F1F1F0"];

  const options2 = [
    { key: 0, text: "Token Status", value: "all" },
    { key: 1, text: "Has", value: "Has" },
    { key: 2, text: "Expected", value: "Expected" },
    // { key: 3, text: 'Choice 3', value: 3 },
  ];

  const options3 = [
    { key: 1, text: "25", value: 25 },
    { key: 2, text: "50", value: 50 },
    { key: 3, text: "75", value: 75 },
    { key: 3, text: "100", value: 100 },
  ];
  const options4 = [
    { key: 1, text: "New To Old", value: "sys_firstPublishedAt_DESC" },
    { key: 2, text: "Old To New", value: "sys_firstPublishedAt_ASC" },
  ];
  const options = [
    { key: 0, text: "Networks", value: "all" },
    { key: 1, text: "Aztec", value: "aztec" },
    { key: 2, text: "Loopring", value: "loopring" },
    { key: 3, text: "Polygon Hermez", value: "polygonhermez" },
    { key: 4, text: "Polygon Miden", value: "polygonmiden" },
    { key: 5, text: "Polygon Zero", value: "polygonzero" },
    { key: 6, text: "StarkEx", value: "starkex" },
    { key: 7, text: "StarkNet", value: "starknet" },
    { key: 8, text: "ZKSpace", value: "zkspace" },
    { key: 9, text: "zkSync", value: "zksync" },

  ];

  //   var  data = results.filter((obj, pos, arr) => {
  //         return arr
  //           .map(mapObj => mapObj.name)
  //           .indexOf(obj.name) == pos;
  //       });

  //  //console.log("datadatadata",results);
  useEffect(() => {
    // getdata(projects,setprojects);
    if (total > 0) {
      console.log("totlal ====> ", total)
      settotal_pages(Math.ceil(total / total_show));
      // item_slect("notmove",{"text":total_show,"value":total_show});
    }

  }, [results]);

  // useEffect(() => {
  //   console.log(
  //     "i am inside  networkFilternetworkFilter filter==> ",
  //     networkFilter
  //   );
  //   if (search.length && networkFilter.length) {
  //     setResults(
  //       projects
  //         .filter((project) => {
  //           return (
  //             project.name.toLowerCase().includes(search.toLowerCase()) &&
  //             (search_category !== "all"
  //               ? project.searchOn.indexOf(search_category) >= 0
  //               : true)
  //           );
  //         })
  //         .filter(
  //           (project) =>
  //             project.networks.includes(networkFilter) || !networkFilter.length
  //         )
  //     );
  //   } else if (search.length) {
  //     // //console.log('search cat =-===>> ',search_category)
  //     // //console.log("i am in simple search ")
  //     setFilter(search_category === "all" ? "" : search_category);
  //     setResults(
  //       projects.filter((project) => {
  //         //console.log("condition ===========>>>> ");
  //         return (
  //           project.name.toLowerCase().includes(search.toLowerCase()) &&
  //           (search_category !== "all"
  //             ? project.searchOn.indexOf(search_category) >= 0
  //             : true)
  //         );
  //       })
  //     );
  //   } else if (networkFilter.length) {
  //     setResults(
  //       projects.filter(
  //         (project) =>
  //           project.networks.includes(networkFilter) || !networkFilter.length
  //       )
  //     );
  //   } else if (!search.length && filter.length) {
  //     setResults(
  //       projects.filter((project) => project.searchOn.indexOf(filter) >= 0)
  //     );
  //   } else {
  //     setResults(projects);
  //   }
  //   // //console.log("i am inside the search filter====>>>  ",results);
  // }, [search, networkFilter, search_category,]);

  // useEffect(() => {
  //   console.log("o am in project loop")
  //   if (filter.length && !search.length) {
  //     if(Array.isArray(filter)){
  //       //console.log("array======>> ",filter)
  //       setResults(
  //         projects.filter((project) =>{
  //           var flag=false;
  //           for(var i=0;i<project.searchOn.length;i++){
  //             if(filter.indexOf(project.searchOn[i])>=0){
  //               flag=true;
  //               break;
  //             }
  //           }
  //           return flag;
  //         })
  //        )}
  //     else{
  //     setResults(
  //       projects.filter((project) => project.searchOn.indexOf(filter) >= 0)
  //     );
  //     }
  //   }
  //   // else if (filter.length && search.length){

  //   //   setResults(
  //   //   projects.filter((project) => ((project.search_on.indexOf(filter) >= 0)&& (project.name.toLowerCase().includes(search.toLowerCase())))))
  //   // }

  //   // if(!filter.length && search.length){
  //   //   setResults(
  //   //     projects.filter((project) => (( (search_category != "all"
  //   //     ? project.search_on.indexOf(search_category) >= 0
  //   //     : true))&& (project.name.toLowerCase().includes(search.toLowerCase())))))
  //   // }
  //   else if (!filter.length && !search.length) {
  //     setResults(projects);
  //   }

  // }, [filter,]);

  const show_more_data = () => {
    // numberOfItems=numberOfItems+6
    setnum(num + 32);
    // //console.log("number=========>>>>>>>>>>OfItems",num,results.length )
  };

  const [showmore, setshowmore] = useState(false);

  const [num, setnum] = useState(40);
  const [num2, setnum2] = useState(3);
  // //console.log("numberOfInumnum ==========numtems",num,"dddd",results.length )
  // var numberOfItems =showmore ? results.length : 6
  // //console.log("chk arry showmore",showmore,"results",results.length,"numberOfItemsfilter",num)

  // =================pagination===========
  const [dropvalue, setdropvalue] = useState("all");

  const token_slect = (e, result) => {
    const { text, value } = result;
    const where_pre = condition_clause['where']
    if (value !== "all") {
      where_pre['tokenStatus_contains'] = value
      setcondition_clause(
        {
          ...condition_clause,
          where: where_pre,
          limit: total_show,
          skip: 0
        }
      )
    } else {
      if (where_pre.hasOwnProperty('tokenStatus_contains')) {
        delete where_pre['tokenStatus_contains']
        setcondition_clause(
          {
            ...condition_clause,
            where: where_pre,
            limit: total_show,
            skip: 0
          }
        )
      }

    }
    console.log("datain condition ", condition_clause['where']['tokenStatus_contains']);
    settokenfilter(value)

  };
  const sort_slect = (e, result) => {
    const { text, value } = result;
    setcondition_clause(
      {
        ...condition_clause,
        order: value,
        limit: total_show,
        skip: 0
      }
    )

  };

  const network_slect = (e, result) => {
    const { text, value } = result;
    const where_pre = condition_clause['where']

    if (value !== "all") {
      where_pre['networks_contains_all'] = [value]
      setcondition_clause(
        {
          ...condition_clause,
          where: where_pre,
          limit: total_show,
          skip: 0
        }
      )
    } else {
      if (where_pre.hasOwnProperty('networks_contains_all')) {
        delete where_pre['networks_contains_all']
        setcondition_clause(
          {
            ...condition_clause,
            where: where_pre,
            limit: total_show,
            skip: 0
          }
        )
      }

    }
    setdropvalue(value);
    //console.log("setNetworkFiltersetNetworkFilter up", value, text, result);
  };

  const item_slect = (e, result) => {
    const { text, value } = result;

    //console.log(text, "item_slect up", value);
    settotal_show(value);
    const total_ = Math.ceil(total / value);
    settotal_pages(total_);

    setcurentpage(1);
    setpaginate_start(0);
    setpaginate_end(value);
    setcondition_clause(

      {
        ...condition_clause,
        limit: value,
        skip: 0
      }
    )
    if (e != "notmove") {
      scroll();
    }
  };

  const paginationhandler = (event, val) => {
    //console.log("Page changes ");

    if (curentpage < val) {
      const end = val * total_show;
      const start = val * total_show - total_show;

      setpaginate_start(start);
      setpaginate_end(end);
      setcondition_clause(

        {
          ...condition_clause,
          limit: total_show,
          skip: start
        }
      )
    } else {
      const v = paginate_start - total_show * (curentpage - val);
      setpaginate_start(v);
      setpaginate_end(total_show * val);
      setcondition_clause(

        {
          ...condition_clause,
          limit: total_show,
          skip: v
        }
      )
      //console.log("else condtion");
    }
    console.log(
      "after pagination start ",
      paginate_start,
      " pagination end ",
      paginate_end
    );
    setcurentpage(val);
    scroll();
  };
  // ======================

  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [curtop];
    }
  }
  const scroll = () => {
    // window.scroll(0,findPos(document.getElementById("scrol")));
    document.querySelector("#scrol").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment className="main_product">
      {filter.length > 0 || search.length > 0 ? (
        <div className="row  my-3 container" id="scrol">
          <div className="col ffff ">
            <h6 className=" showi">
              Showing : {filter === "" ? "All" : Array.isArray(filter) ? filter.join(",") : filter.toUpperCase()}
            </h6>
          </div>


          <div className="col bbbb ">
            <Menu compact className="drop_main">
              <Dropdown
                upward={false}
                options={options4}
                value={condition_clause['order']}
                onChange={(e, result) => sort_slect(e, result)}
                item
              />
            </Menu>
            <Menu compact className="drop_main">
              <Dropdown
                upward={false}
                options={options2}
                value={condition_clause['where'].hasOwnProperty('tokenStatus_contains') ? condition_clause['where']['tokenStatus_contains'] : 'all'}
                onChange={(e, result) => token_slect(e, result)}
                item
              />
            </Menu>
            <Menu compact className="drop_main">
              <Dropdown
                upward={false}
                options={options}
                value={condition_clause['where'].hasOwnProperty('networks_contains_all') ? condition_clause['where']['networks_contains_all'][0] : 'all'}
                onChange={(e, result) => network_slect(e, result)}
                item
              />
            </Menu>
          </div>

        </div>
      ) : (
        <>
          <div className="row  my-3 fe_wrap container">
            <div className="col-  ffff ">
              <h2 className="m-2">Featured</h2>
            </div>
            <div className="col-  bbbb ">
              <Menu compact className="drop_main">
                <Dropdown
                  upward={false}
                  options={options4}
                  value={condition_clause['order']}
                  onChange={(e, result) => sort_slect(e, result)}
                  item
                />
              </Menu>

              <Menu compact className="drop_main ml-2">
                <Dropdown
                  upward={false}
                  options={options2}
                  value={condition_clause['where'].hasOwnProperty('tokenStatus_contains') ? condition_clause['where']['tokenStatus_contains'] : 'all'}
                  onChange={(e, result) => token_slect(e, result)}
                  item
                />
              </Menu>

              <Menu compact className="drop_main">
                <Dropdown
                  upward={false}
                  value={condition_clause['where'].hasOwnProperty('networks_contains_all') ? condition_clause['where']['networks_contains_all'][0] : 'all'}
                  options={options}
                  onChange={(e, result) => network_slect(e, result)}
                  item
                />
              </Menu>
            </div>
          </div>

          <div className="row show_cards container">
            {/* comment heere */}
            {
              loading_feature ? <>
                <div className="row show_cards container">
                  {[1, 2, 3,].map(() => (<Featureshimmer></Featureshimmer>))}
                </div>
              </> :
                feature_results.map((item, idx) => (

                  <div
                    class="v40_4201_up  col-5 mt-5"
                    style={{ cursor: "pointer" }}
                    onClick={() => {



                      navigate(`/${item.name.replaceAll(" ", "-")}`, { state: item });





                    }}
                  >
                    <div class="v40_4202_up" style={{ background: item.backgroundColor }}>
                      {
                        item.status === "TESTNET" ? <div class="v40_123">
                          <span class="v40_4212" style={{ "background-color": item.statusColor }}>
                            {item.status}
                          </span>
                        </div> : <div class="v40_4211">
                          <span class="v40_4212" style={{ "background-color": item.statusColor }}>
                            {item.status}
                          </span>
                        </div>
                      }

                      <div className="card_imge my-2 p-2" height={"15px"} style={{ backgroundImage: item.imageLink }}>
                      </div>
                      <div className="d-flex main_category">
                        {item.searchOn.length > 2 ?
                          item.searchOn.map((value) => (
                            <div class="v40_4213_up">
                              <span class="v40_4214">{value.toUpperCase()}</span>
                            </div>
                          )) :

                          item.searchOn.slice(0, 2).map((value) => (
                            <div class="v40_4213_up">
                              <span class="v40_4214">{value.toUpperCase()}</span>
                            </div>
                          ))

                        }
                      </div>
                      <div class="v40_4215">
                        <div class="v40_4216"></div>
                        <div class="v40_4217"></div>
                      </div>
                    </div>
                    {/* <div className='row'>
                          <span class="v40_4218">{item.name}</span>
                 
                          <div>
                              <Button icon={<Twitter color="white" width={"18"} height={"18"} />} hoverIndicator href={item.twitterLink} target="_blank" />
                              <Button icon={<Language color="white"  width={"18"} height={"18"} />} hoverIndicator href={item.websiteLink} target="_blank" />
                          </div>
                      </div> */}
                    <div className="d-flex foter_wrap">
                      <div className="card_title">
                        <span class="v40_4218">{item.name}</span>
                      </div>
                      <div className="links">
                        <Button
                          icon={
                            <Twitter color="white" width={"23px"} height={"23px"} />
                          }
                          hoverIndicator
                          href={item.twitterLink}
                          target="_blank"
                        />
                        <Button
                          icon={
                            <img
                              color="white"
                              src={globe}
                              width={"23px"}
                              height={"23px"}
                              alt=""
                            />
                          }
                          hoverIndicator
                          href={item.websiteLink}
                          target="_blank"
                        />
                      </div>
                    </div>
                    <br></br>
                    <span class="v40_4220">
                      Network: {item.networks.join(", ")}
                    </span>
                    <br />
                    <span class="v40_4219">
                      Token:{" "}
                      {item.tokenStatus
                        ? item.tokenStatus === "Has"
                          ? item.tokenTicker
                          : "Token Expected"
                        : "N/A"}
                    </span>
                  </div>
                ))
            }


          </div>
        </>
      )}

      {filter.length > 0 || search.length > 0 ? null : (
        <div className="row  " id="scrol">
          <div className="col-6 ffff">
            <h2 className="">
              Showing : {filter === "" ? "All" : filter.toUpperCase()}
            </h2>

          </div>
          <div className="col-6 bbbb"></div>
        </div>
      )}

      {/* <Box className="custom-scrollbar  " direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true"  style={{ zoom: "0.92" }}> */}

      {/* <div className='v40_4293'> */}


      {

        loading ?
          <>
            <div className="row show_cards container">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (<AllShimmer></AllShimmer>))}
            </div>
          </> :
          results.length > 0 ? <div className="row show_cards container">
            {results.map((item, idx) => (

              <div class="v40_4201  mt-5" style={{ cursor: "pointer" }} onClick={() => {
                navigate(`/${item.name.replaceAll(" ", "-")}`);
              }}
              >
                <div class="v40_4202" style={{ backgroundColor: item.backgroundColor }}>
                  {item.status === "TESTNET" ? (
                    <div class="v40_4211_ten">
                      <span
                        class="v40_4212"
                        style={{ "background-color": item.statusColor }}

                      >
                        {item.status}{" "}
                      </span>
                    </div>
                  ) : (
                    <div class="v40_4211">
                      <span
                        class="v40_4212"
                        style={{ "background-color": item.statusColor }}
                      >
                        {item.status}{" "}
                      </span>
                    </div>
                  )}

                  {/* <div class="v40_4211" ><span class="v40_4212"  style={{"background-color":item.statusColor}}>{item.status} </span></div> */}
                  <div
                    className="card_imge my-2 p-2"
                    height={"15px"}
                    style={{ backgroundImage: item.imageLink }}
                  ></div>
                  <div className="d-flex main_category">

                    {item.searchOn.length < 3 ?
                      item.searchOn.map((value) => (
                        <div class="v40_4213">
                          <span class="v40_4214">{value.toUpperCase()}</span>
                        </div>
                      )) :

                      item.searchOn.slice(0, 2).map((value) => (
                        <div class="v40_4213">
                          <span class="v40_4214">{value.toUpperCase()}</span>
                        </div>
                      ))

                    }

                  </div>

                  <div></div>
                  <div class="v40_4215">
                    <div class="v40_4216"></div>
                    <div class="v40_4217"></div>
                  </div>
                </div>
                {/* <div className='row'>
                            <span class="v40_4218">{item.name}</span>

                            <div>
                                <Button icon={<Twitter color="white" width={"18"} height={"18"} />} hoverIndicator href={item.twitterLink} target="_blank" />
                                <Button icon={<Language color="white"  width={"18"} height={"18"} />} hoverIndicator href={item.websiteLink} target="_blank" />
                            </div>
                        </div> */}
                <div className="d-flex foter_wrap">
                  <div class="card_title">
                    <span class="v40_4218">{item.name}</span>
                  </div>

                  <div className="links_">
                    <Button
                      icon={
                        <Twitter color="white" width={"23px"} height={"23px"} />
                      }
                      hoverIndicator
                      href={item.twitterLink}
                      target="_blank"
                    />
                    <Button
                      icon={
                        <img
                          color="white"
                          src={globe}
                          width={"23px"}
                          height={"23px"}
                          alt=""
                        />
                      }
                      hoverIndicator
                      href={item.websiteLink}
                      target="_blank"
                    />
                  </div>
                </div>
                <br></br>
                <span class="v40_4220">Network: {item.networks.join(", ")}</span>
                <br />
                <span class="v40_4219">
                  Token:{" "}
                  {item.tokenStatus
                    ? item.tokenStatus === "Has"
                      ? item.tokenTicker
                      : "Token Expected"
                    : "N/A"}
                </span>
              </div>
            ))}
          </div> : <h4 class="no_product">No Data found</h4>}

      {/* </div> */}

      {/* </Box> */}

      {total > total_show ? (
        <div className="more_wrap ">
          <div className="row">
            <div className="col-lg-3 col-md-12 col- sm-12 ax d-flex align-items-center">
              <span className="pagination_name ">
                {" "}
                Showing: {paginate_start + 1}-{paginate_end} of {total}
              </span>
            </div>
            <div className="col-lg-6 col-md-12 col- sm-12 ab d-flex justify-content-center align-content-center">
              <Pagination
                shape="rounded"
                defaultPage={1}
                page={curentpage}
                count={total_pages}
                onChange={paginationhandler}
              />
            </div>
            <div className=" w22_wrap  col-lg-3 col-md-12 ac col- sm-12 ">
              <Menu compact>
                <Dropdown
                  value={total_show}
                  options={options3}
                  onChange={(e, result) => item_slect(e, result)}
                  item
                  icon={
                    <img src={dropdown_image} width={"9px"} height={"6px"} alt="" />
                  }
                />
              </Menu>
            </div>
          </div>
        </div>
      ) : null}




      {
        results.length > 8 ?
          null
          :
          <div className="aaaaa p-5 m-5"></div>
      }
    </React.Fragment>
  );
};
ProjectsList.propTypes = {
  filter: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  networkFilter: PropTypes.string.isRequired,
};

export default ProjectsList;
