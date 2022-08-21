import '../style.css';
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import ContactUs from '../components/Contact Us/contactus';
import About from '../components/About/about';
import Terms from "../components/Terms/terms"
import ProjectsList from '../components/ProjectsList';
import Baner from '../components/Baner/baner';
import Resources from '../components/Resources/resources';
import Twitter from '../components/Twitter';
import Tokens from '../components/Tokens';
import CardDetail from "../components/CardDetail/CardDetail"
import axios from "axios";
import {
  Route,
  Routes,
} from "react-router-dom";
import { useLocation } from 'react-router';

const All = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [search_in, setSearch_in] = useState('');
  const [search_category, setSearch_category] = useState("all");
  const [networkFilter, setNetworkFilter] = useState('');
  const [results, setResults] = useState([]);
  const [feature_results, setfeature_Results] = useState([]);
  const [sidemenu, setsidemenu] = useState(false);
  const [loading_all, setloading_all] = useState(true);
  const [loading_featured, setloading_featured] = useState(true);
  const [total, settotal] = useState(0);
  const [skip, setskip] = useState(0);
  const [limit, setlimit] = useState(0);
  const [curentpage, setcurentpage] = useState(1);
  const [paginate_end, setpaginate_end] = useState(25);
  const [total_show, settotal_show] = useState(25);
  const [total_pages, settotal_pages] = useState(0);
  const [paginate_start, setpaginate_start] = useState(skip);
  const [statusValue, setStatusValue] = useState("");


  const [condition_clause, setcondition_clause] = useState({
    limit: 25, skip: 0, order: "sys_firstPublishedAt_DESC", where: {},

  });
  useEffect(() => {
    setloading_featured(true)
    getdata_featured().then((data) => {
      console.log("data in feature ", data)
      setfeature_Results(data.data.data.projectCollection.items)
      setloading_featured(false)
    })
  }, [condition_clause]);
  
  useEffect(() => {
    setloading_all(true);
    getdata_all().then((data) => {
      console.log("api cla complete ===>> ", data)

      if (data.data.data.projectCollection.skip === 0) {
        setcurentpage(1)
      }
      setskip(data.data.data.projectCollection.skip);
      setlimit(data.data.data.projectCollection.limit);
      settotal(data.data.data.projectCollection.total)
      setResults(data.data.data.projectCollection.items)
      setloading_all(false);
    });
  }, [condition_clause]);
  const show_menu = () => {
    setsidemenu(true)
  }
  const close_menu = () => {
    setsidemenu(false)
  }
  const location = useLocation();


  const getdata_featured = async () => {
    // console.log("condditon ===>> ",condition_clause)

    var graphql = {
      query: `query ($limit:Int,$skip:Int,$order:[${process.env.REACT_APP_CONTENTFUL_PROJECT}Order],$where:${process.env.REACT_APP_CONTENTFUL_PROJECT}Filter){\r\n  ${process.env.REACT_APP_CONTENTFUL_PROJECT.toLowerCase()}Collection(limit: $limit, skip: $skip,order:$order,where:$where,) {\r\n    total\r\n    skip \r\n    limit\r\n    \r\n    items {\r\n      sys{id,publishedAt,}\r\n      \r\n      name\r\n      backgroundColor\r\n      category\r\n      description\r\n      websiteLink\r\n      getStartedLink1\r\n      getStartedLink2\r\n      imageLink\r\n      linkText1\r\n      linkText2\r\n      networks\r\n      searchOn\r\n      status\r\n      statusColor\r\n      getStartedText2\r\n      getStartedText3\r\n      tooltip\r\n      twitterLink\r\n      walletAddress\r\n      featured\r\n      tokenLink\r\n      tokenStatus\r\n      tokenImageUrl\r\n      tokenTicker\r\n      googlePlay\r\n      appleStore\r\n      getStartedText1\r\n      githubLink\r\n      docsLink\r\n      explorerLink\r\n      discordLink\r\n}\r\n  }\r\n}\r\n`,
      variables: { limit: 25, skip: 0, where: { featured_exists: true, status_contains: statusValue } }
    }
    const data = await axios({
      url: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
      method: 'post',
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_CONTENTFUL_API}`
      },
      data: graphql
    });

    return data;
  }
  const getdata_all = async () => {
    // console.log("condditon ===>> ",condition_clause)

    var graphql = {
      query: `query ($limit:Int,$skip:Int,$order:[${process.env.REACT_APP_CONTENTFUL_PROJECT}Order],$where:${process.env.REACT_APP_CONTENTFUL_PROJECT}Filter){\r\n  ${process.env.REACT_APP_CONTENTFUL_PROJECT.toLowerCase()}Collection(limit: $limit, skip: $skip,order:$order,where:$where,) {\r\n    total\r\n    skip \r\n    limit\r\n    \r\n    items {\r\n      sys{id,publishedAt,}\r\n      \r\n      name\r\n      backgroundColor\r\n      category\r\n      description\r\n      websiteLink\r\n      getStartedLink1\r\n      getStartedLink2\r\n      imageLink\r\n      linkText1\r\n      linkText2\r\n      networks\r\n      searchOn\r\n      status\r\n      statusColor\r\n      getStartedText2\r\n      getStartedText3\r\n      tooltip\r\n      twitterLink\r\n      walletAddress\r\n      featured\r\n      tokenLink\r\n      tokenStatus\r\n      tokenImageUrl\r\n      tokenTicker\r\n      googlePlay\r\n      appleStore\r\n      getStartedText1\r\n      githubLink\r\n      docsLink\r\n      explorerLink\r\n      discordLink\r\n}\r\n  }\r\n}\r\n`,
      variables: condition_clause
    }
    var data_n = [];
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
  // //console.log("locationlocationlocation",location)

  return (
    <React.Fragment>

      {
        location.pathname === "/about" || location.pathname === "/contact" || location.pathname === "/carddetail" || location.pathname === "/resources" || location.pathname === "/tokens" ?
          null
          :
          <Baner condition_clause={condition_clause} setcondition_clause={setcondition_clause} setSearch={setSearch} search={search} search_category={search_category} setSearch_category={setSearch_category} search_in={search_in} setSearch_in={setSearch_in}     setFilter={setFilter} />

      }


      {/* < SearchBar/> */}

      <div className='row mt-5 space_cat'>
        {
          sidemenu ?
            //  <button className='togle_btn w-25' onClick={close_menu}>Close</button>

            <i className="fa fa-times togle_btn" onClick={close_menu}></i>
            :
            <i className="fa fa-bars togle_btn" onClick={show_menu}></i>

          //  <button className='togle_btn' onClick={show_menu}>Menu</button>
        }

        {/* <i className={sidemenu ? "fa fa-times" : "fa fa-bars"}></i> */}
        {/* <div className='col-1'></div> */}
        <div className={
          sidemenu ?
            'col-12 dive_show  '
            :
            ' col-lg-2 col-md-4 col-sm-6 dive_hide  '
        }>
          <Menu loading={loading_all} setloading={setloading_all} total={total} setcondition_clause={setcondition_clause} condition_clause={condition_clause} setFilter={setFilter} filter={filter} results={results} setResults={setResults} set_search={setSearch} search_in={search_in} setSearch_in={setSearch_in} />
        </div>

        {
          sidemenu ?
            null :
            <div className=' col-lg-10 col-md-8   col-sm-12 products_section'>

              <Routes>
                <Route path='/' element={<ProjectsList feature_results={feature_results} total_show={total_show} settotal_show={settotal_show} total_pages={total_pages} settotal_pages={settotal_pages} paginate_start={paginate_start} setpaginate_start={setpaginate_start} paginate_end={paginate_end} setpaginate_end={setpaginate_end} curentpage={curentpage} setcurentpage={setcurentpage} skip={skip} limit={limit} condition_clause={condition_clause} total={total} setcondition_clause={setcondition_clause} loading={loading_all} loading_feature={loading_featured} filter={filter} setNetworkFilter={setNetworkFilter} setFilter={setFilter} search={search} networkFilter={networkFilter} results={results} setResults={setResults} search_category={search_category} setSearch_category={setSearch_category} statusValue={statusValue} setStatusValue={setStatusValue} />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/feed' element={<Twitter />} />
                <Route path='/tokens' element={<Tokens />} />
                <Route path='/:name' element={<CardDetail condition_clause={condition_clause} setcondition_clause={setcondition_clause} setFilter={setFilter} />} />
              </Routes>

            </div>

        }

      </div>

      {/* <SearchBar setSearch={setSearch} search={search} /> */}
      {/* <NetworkFilter setNetworkFilter={setNetworkFilter} networkFilter={networkFilter} /> */}

    </React.Fragment>
  )
};

export default All;
