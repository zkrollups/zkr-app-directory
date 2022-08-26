import React, { useState, useEffect } from "react";
import "./style.css";
import { Loader, } from "semantic-ui-react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Twitter, } from "grommet-icons";
import discord from "../../actets/discordlogo.png";
import globe from "../../actets/globe.png";
import cardpic1 from "../../actets/Frame 28.png";
import cardpic2 from "../../actets/Group 141.png";
import cardpic3 from "../../actets/Group 141 (1).png";
import cardpic4 from "../../actets/GitHublogo.png";
import cardpic5 from "../../actets/docslogo.png";
import cardpic6 from "../../actets/explorerlogo.png";
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
import { Carddetailshimmer } from '../carddetail_shimmer'
import MetaTags from "react-meta-tags";

// import axios from "axios";
var AWS = require('aws-sdk');
function CardDetail({
  setFilter, setcondition_clause, condition_clause
}) {

  const navigate = useNavigate();

  const [card_data, setResults] = useState(null);

  const [result1, setresult1] = useState("");
  const [result2, setresult2] = useState("");
  const params = useParams();
  //const [card_dataa, setResults] = useState([]);

  // const [nodata, setnodata] = useState(false)

  const [loading, setloading] = useState(true)
  const [loading_single, setloadingloading_single] = useState(true)
  const getdata_single = async (name) => {
    // console.log("condditon ===>> ",condition_clause)

    var graphql = {
      query: `query ($limit:Int,$skip:Int,$order:[${process.env.REACT_APP_CONTENTFUL_PROJECT}Order],$where:${process.env.REACT_APP_CONTENTFUL_PROJECT}Filter){\r\n  ${process.env.REACT_APP_CONTENTFUL_PROJECT.toLowerCase()}Collection(limit: $limit, skip: $skip,order:$order,where:$where,) {\r\n    total\r\n    skip \r\n    limit\r\n    \r\n    items {\r\n      sys{id,publishedAt,}\r\n      \r\n      name\r\n      backgroundColor\r\n      category\r\n      description\r\n      websiteLink\r\n      getStartedLink1\r\n      getStartedLink2\r\n      imageLink\r\n      linkText1\r\n      linkText2\r\n      networks\r\n      searchOn\r\n      status\r\n      statusColor\r\n      getStartedText2\r\n      getStartedText3\r\n      tooltip\r\n      twitterLink\r\n      walletAddress\r\n      featured\r\n      tokenLink\r\n      tokenStatus\r\n      tokenImageUrl\r\n      tokenTicker\r\n      googlePlay\r\n      appleStore\r\n      getStartedText1\r\n      githubLink\r\n      docsLink\r\n      explorerLink\r\n      discordLink\r\n}\r\n  }\r\n}\r\n`,
      variables: { limit: 1, skip: 0, where: { "name": name } }

    }

    // var data_n =[];
    const data = await axios({
      url: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
      method: 'post',
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_CONTENTFUL_API}`
      },
      data: graphql
    });


    // axios.post(`https://graphql.contentful.com/content/v1/spaces/daabvgh6kr39/`,graphql,{
    //     headers:{
    //         "Authorization":"Bearer lsyCtIMQzYCyw6c6Apn2SH52v8OAk8kJfFcVEAlQpL8"
    //     }
    // });
    // console.log("data in all.jss ===>> ",data)
    // for(var i=0;i<data.data.items.length;i++){
    //     const d = data.data.items[i].fields
    //     const key =Object.keys(d)
    //     var project_single={}
    //     for(var j =0;j<key.length;j++){
    //         project_single[key[j]]=d[key[j]]['en-US']
    //     }
    //     data_n.push(project_single)
    //     // console.log("keys===>> ",)
    // }
    // console.log("Proojects========>> ",data_n)
    // setprojects(data_n)
    // return data_n;
    // for
    // console.log("data ====>> ",data);

    // .then((Response)=>
    // setpost(Response.data))


    // .catch(error)

    // console.log(" callapi=================>>>>> ", response.data);
    return data;
  }
  useEffect(() => {
    if (card_data) {
      scroll();
    }
  }, [card_data])
  useEffect(() => {
    //console.log("card_datacard_data======in use effcet======>>>>m>>>", card_data);

    // //console.log(
    //   "location.statelocation.state===========>>>>>>",
    //   location.state,
    //   card_data
    // );
    // if (!card_data) {
    //   //console.log("if condtion true");
    //   navigate("/");

    // }

    //console.log("projects count", projects.length)
    setloadingloading_single(true)
    getdata_single(params.name.replaceAll("-", " ")).then((data) => {
      console.log("data in single ", data)
      // data.data.data.zkrolupCollection.items
      if (data.data.data.projectCollection.items.length > 0) {
        setloadingloading_single(false)
        setResults(data.data.data.projectCollection.items[0])

        Get_tweets(data.data.data.projectCollection.items[0].twitterLink)
        if (data.data.data.projectCollection.items[0].walletAddress) {
          setresult1(data.data.data.projectCollection.items[0].walletAddress.substring(1, 6));
          setresult2(data.data.data.projectCollection.items[0].walletAddress.substring(8, 12));
        } 
      }
      else {
        setResults(null)
        setloadingloading_single(false)
      }


    })
    // if(projects.length>0 ){
    //   for(var i=0; i<projects.length;i++){
    //     if( projects[i].name.toLowerCase()===params.name.toLowerCase().replaceAll("-", " ") )
    //     {
    //       // //console.log("current data ",projects[i])
    //       setResults(projects[i])
    //       Get_tweets(projects[i].twitterLink)

    //       setresult1(projects[i].wallet_address.substring(1, 6));
    //       setresult2(projects[i].wallet_address.substring(8, 12));
    //       break
    //     }
    //   }
    // }


  }, []);


  const [tweets, settweets] = useState([]);
  //console.log("tweetstweets", tweets);
  const baseUrl = process.env.REACT_APP_TWEETER_BASE_URL

  //console.log("process.env.REACT_APP_TWEETER_BASE_URL",process.env.REACT_APP_TWEETER_BASE_URL)
  const Get_tweets = async (link) => {
    var data = await main(link);
    setloading(false)
    if (data.data) {
      settweets(data.data);
    }
  };

  const scroll = () => {

    // window.scroll(0,findPos(document.getElementById("scrol")));
    document.querySelector('#scrol').scrollIntoView({
      behavior: 'smooth'
    });
  }
console.log(
  "card_datacard_data=====in use effcet======>>>>>>>",
  card_data
);

  //useEffect(() => {
  //console.log("useEffectuseEffectuseEffect=>>>>>>>>>>>>") },[] )


  //   const params = useParams()
  // //console.log("nameeeeeeeeeeeeeeeeeeee===>>>>>>>>>",params.name)

  return loading_single ? (
    <Carddetailshimmer />
  ) : card_data ? (
    <>
      <MetaTags>
        <meta name="description" content={card_data.description} />
        <meta name="description" content={card_data.name} />
        <meta
          name="keywords"
          content={`${card_data.name},${card_data.description}`}
        />
        {card_data.imageLink
          .replace("url('", "")
          .replace("')", "")
          .includes("http") ? (
          <meta
            property="og:image"
            content={card_data.imageLink.replace("url('", "").replace("')", "")}
          />
        ) : (
          <meta
            property="og:image"
            content={`https://www.zkrollups.xyz/${card_data.imageLink
              .replace("url('", "")
              .replace("')", "")}`}
          />
        )}{" "}
      </MetaTags>

      <div className="container-fluied " id="scrol">
        <div className="row fist_wrap_  mt-4">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center ">
            <div
              className="card_wrap_"
              style={{ background: card_data.backgroundColor }}
            >
              <div
                className="logo_"
                style={{ "background-color": card_data.statusColor }}
              >
                <p className="logo_text">{card_data.status}</p>
              </div>
              <div
                className="cardimg"
                style={{ backgroundImage: card_data.imageLink }}
              ></div>
              {/* <img className="cardimg" src={Cardimg}></img> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="car_logo_wrap">
              <div>
                <span className="zkr_heading">{card_data.name}</span>
                <p className="network_text">
                  Network: {card_data.networks.join(", ")}
                </p>
              </div>

              <div className="links_ d-flex">
                {card_data.discordLink ? (
                  <Button
                    icon={
                      <img
                        color="white"
                        src={discord}
                        width={"23px"}
                        height={"23px"}
                        alt="Discord Link"
                      />
                    }
                    hoverIndicator
                    href={card_data.discordLink}
                    target="_blank"
                  />
                ) : null}
                <Button
                  icon={
                    <Twitter color="white" width={"23px"} height={"23px"} />
                  }
                  hoverIndicator
                  href={card_data.twitterLink}
                  target="_blank"
                />
                <Button
                  icon={
                    <img
                      color="white"
                      src={globe}
                      width={"23px"}
                      height={"23px"}
                      alt="website link"
                    />
                  }
                  hoverIndicator
                  href={card_data.websiteLink}
                  target="_blank"
                />
              </div>
            </div>
            <div className="pt-5">
              <p className="card_descrip display_linebreak ">
                {card_data.description}
              </p>
              {/* 
              <p className="card_descrip">
                zkSync is a mission-driven project. Its purpose is to break
                financial barriers and enhance world’s freedom — by accelerating
                the mass adoption of public blockchains. We take this mission to
                heart: check out our public Team Handbook
              </p>
              <p className="card_descrip">
                While healthy pragmatism is necessary to move fast, zkSync will
                never betray the ethos of crypto.
              </p> */}
            </div>
          </div>
          {/* <div className="col-2 "></div> */}
        </div>

        <div className="second_card_wrap mt-5 pt-5">
          <div className="">
            <div
              className={
                card_data.websiteLink
                  ? "type_card mx-3 d-flex justify-content-evenly align-items-center"
                  : "type_card2 mx-3 d-flex justify-content-evenly align-items-center "
              }
              onClick={() => {
                // if(card_data.websiteLink  )
                //  {
                // window.open(card_data.websiteLink , "_blank")
                setcondition_clause({
                  ...condition_clause,
                  where: {
                    searchOn_contains_all: card_data.searchOn,
                  },
                  skip: 0,
                });
                // setFilter(card_data.searchOn)
                navigate("/");
                //  }

                // navigate("/");
              }}
            >
              <div className="col-3">
                <div className="">
                  {" "}
                  <img src={cardpic1} alt=""></img>
                </div>
              </div>
              <div className="col-3 ">
                <div className="">
                  <h6 className="type_text_">Type</h6>
                  {card_data.category.map((value) => (
                    <span>{value.toUpperCase()}</span>
                  ))}
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end ">
                <div className="">
                  {card_data.websiteLink ? (
                    <img src={Leftarow} alt=""></img>
                  ) : null}
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          <div className="">
            <div
              className={
                card_data.getStartedLink1
                  ? "type_card  mx-3 d-flex justify-content-evenly align-items-center"
                  : "type_card2 mx-3 d-flex justify-content-evenly align-items-center  "
              }
              onClick={() => {
                if (card_data.getStartedLink1) {
                  window.open(card_data.getStartedLink1, "_blank");
                }
              }}
            >
              <div className="col-3 ">
                <div>
                  {card_data.tokenStatus ? (
                    card_data.tokenStatus === "Has" ? (
                      <div
                        className="imge_back"
                        style={{ backgroundImage: card_data.tokenImageUrl }}
                      ></div>
                    ) : (
                      <div
                        className="imge_back"
                        style={{ backgroundImage: `url(${cardpic2})` }}
                      ></div>
                    )
                  ) : (
                    <div
                      className="imge_back"
                      style={{ backgroundImage: `url(${cardpic2})` }}
                    >
                      <img src={cardpic2logo} alt=""></img>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-3 ">
                <div className="">
                  <h6 className="type_text_">Token</h6>
                  <span>
                    {card_data.tokenStatus
                      ? card_data.tokenStatus === "Has"
                        ? card_data.tokenTicker
                        : "Token Expected"
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end ">
                <div className="">
                  {card_data.getStartedLink1 ? (
                    <img src={Leftarow} alt=""></img>
                  ) : null}
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          <div className="">
            <div
              className="type_card mx-3 d-flex justify-content-evenly align-items-center"
              onClick={() => {
                window.open(card_data.getStartedLink2, "_blank");
              }}
            >
              <div className="col-3 ">
                <div className="">
                  {" "}
                  <img src={cardpic3} alt=""></img>
                </div>
              </div>
              <div className="col-3 ">
                <div className="">
                  <h6 className="type_text_">Address</h6>
                  {result1 ? (
                    <p className="addres_text">
                      {result1}....{result2}
                    </p>
                  ) : (
                    <p>N/A</p>
                  )}
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end ">
                <div className="">
                  <img src={Leftarow} alt=""></img>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>

          <div className="">
            {card_data.githubLink ? (
              <div
                className="type_card mx-3 d-flex justify-content-evenly align-items-center"
                onClick={() => {
                  window.open(card_data.githubLink, "_blank");
                }}
              >
                <div className="col-3 ">
                  <div className="">
                    {" "}
                    <img src={cardpic4} alt=""></img>
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="">
                    <h3 className="">GitHub</h3>
                    {/* {result1 ?
                    (
                      <p className="addres_text">{result1}....{result2}</p>
                    )
                    :(
                      <p>N/A</p>
                    )
                  } */}
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end ">
                  <div className="">
                    <img src={Leftarow} alt=""></img>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>

          <div className="">
            {card_data.docsLink ? (
              <div
                className="type_card mx-3 d-flex justify-content-evenly align-items-center"
                onClick={() => {
                  window.open(card_data.docsLink, "_blank");
                }}
              >
                <div className="col-3 ">
                  <div className="">
                    {" "}
                    <img src={cardpic5} alt=""></img>
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="">
                    <h3 className="">Docs</h3>
                    {/* {result1 ?
                    (
                      <p className="addres_text">{result1}....{result2}</p>
                    )
                    :(
                      <p>N/A</p>
                    )
                  } */}
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end ">
                  <div className="">
                    <img src={Leftarow} alt=""></img>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>

          <div className="">
            {card_data.explorerLink ? (
              <div
                className="type_card mx-3 d-flex justify-content-evenly align-items-center"
                onClick={() => {
                  window.open(card_data.explorerLink, "_blank");
                }}
              >
                <div className="col-3 ">
                  <div className="">
                    {" "}
                    <img src={cardpic6} alt=""></img>
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="">
                    <h3 className="">Explorer</h3>
                    {/* {result1 ?
                    (
                      <p className="addres_text">{result1}....{result2}</p>
                    )
                    :(
                      <p>N/A</p>
                    )
                  } */}
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end ">
                  <div className="">
                    <img src={Leftarow} alt=""></img>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>
        </div>

        <div className="last_wrap row margin_left_ ml-5">
          <div className=" col-sm-12 col-md-12 col-lg-12 col-xl-7 ">
            <h2 className="mb-5">Getting Started</h2>
            <div className="brige_wrap mt-3 ">
              {card_data.getStartedText1 ? (
                <React.Fragment>
                  <div className="brige_card row card_div">
                    <div className="col-2 circle_no">
                      <img src={LastCard1} alt=""></img>
                    </div>
                    <div className="col-6">
                      <p className="brige_text"> {card_data.getStartedText1}</p>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      <a
                        href={card_data.getStartedLink1}
                        className="brige_btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {card_data.linkText1}
                      </a>
                    </div>
                  </div>

                  <div className="brige_card row card_div">
                    <div className="col-2">
                      <img src={LastCard2} alt=""></img>
                    </div>
                    <div className="col-6">
                      <p className="brige_text"> {card_data.getStartedText2}</p>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      {card_data.linkText2 && card_data.getStartedLink2 ? (
                        <a
                          href={card_data.getStartedLink2}
                          className="dapp_btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          {card_data.linkText2}
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="brige_card row">
                    <div className="col-2">
                      <img src={LastCard3} alt=""></img>
                    </div>
                    <div className="col-10">
                      <p className="brige_text">
                        {" "}
                        {card_data.getStartedText3}{" "}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <h3>Coming Soon!</h3>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 d-flex ">
            <div className="w-100">
              <h2 className="mb-5"> {card_data.name} Latest</h2>

              <div className="update">
                {!loading ? (
                  tweets.length > 0 ? (
                    tweets.map((item, index) => {
                      return (
                        <>
                          <div
                            className={
                              index === 0 ? "d-flex  tweet_first" : "d-flex  "
                            }
                          >
                            <div className="col-3 logo_wrap">
                              <img className="" src={item.image} alt=""></img>
                            </div>

                            <div className="col-8">
                              <div className="d-flex">
                                <span>{item.date}</span>
                              </div>

                              <p className="update_text ">{item.description}</p>
                              <div className="marginclass d-flex">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={Reply}
                                    className="mx-2 reply_logo"
                                    alt="replies"
                                  ></img>
                                  {item.comments}
                                </div>
                                <div className="mx-2 d-flex align-items-center">
                                  <img
                                    src={Tweet}
                                    className="mx-2"
                                    alt="retweets"
                                  ></img>
                                  {item.retweet}
                                </div>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={Like}
                                    className="mx-2"
                                    alt="likes"
                                  ></img>
                                  {item.likes}
                                </div>
                              </div>

                              {/* ========= */}
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="loder_wrap">
                        <h3>Sorry No Data Found</h3>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="d-flex justify-content-center align-content-center">
                    <div className="loder_wrap">
                      <Loader size="massive" active inline="centered" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <> No data found </>
  );
}

export default CardDetail;
