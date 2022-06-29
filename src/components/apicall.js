import axios from "axios";

const [post, setpost]=useState("")
 
const getdata=async ()=>{

    data = await axios.get("https://api.contentful.com/spaces/daabvgh6kr39/entries?access_token=CFPAT-kftH_yvwaUJASmJN0gPF62A2Ctinwqc7um8weUgVTJo",{
        headers:{
            "Authorization":"Bearer CFPAT-kftH_yvwaUJASmJN0gPF62A2Ctinwqc7um8weUgVTJo"
        }
    });
    console.log("data ====>> ",data);

    // .then((Response)=>
    // setpost(Response.data))

   
    // .catch(error)

    // console.log(" callapi=================>>>>> ", response.data);
    return data;
}

// useEffect(() => {
//    getdata();
    
// }, [])

export default getdata;