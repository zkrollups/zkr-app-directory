import axios from "axios";

export const projects =[];
export const getdata=async (limit=25,skip=0)=>{

    var data_n =[];
    const data = await axios.get(`https://api.contentful.com/spaces/daabvgh6kr39/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&limit=${limit}&skip=${skip}`,{
        headers:{
            "Authorization":`Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
        }
    });
    console.log("data===>> ",data)
    for(var i=0;i<data.data.items.length;i++){
        const d = data.data.items[i].fields
        const key =Object.keys(d)
        var project_single={}
        for(var j =0;j<key.length;j++){
            project_single[key[j]]=d[key[j]]['en-US']
        }
        data_n.push(project_single)
        // console.log("keys===>> ",)
    }
    console.log("Proojects========>> ",data_n)
    // setprojects(data_n)
    return data_n;

    return data;
}
