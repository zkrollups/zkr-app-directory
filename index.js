const express = require('express');
const path = require('path');
const fs = require("fs"); 
require('dotenv').config();
// const { getPostById } = require('./stub/posts');
const app = express();
const axios = require('axios').default;
const PORT = process.env.PORT || 3000;
console.log("dir ",__dirname)
const indexPath  = path.resolve(__dirname, 'build', 'index.html');

const getdata_single = async (name) => {
    console.log("name in data single ",name)
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



    return data.data.data.projectCollection.items.length>0?data.data.data.projectCollection.items[0]:null;
  }
app.use(express.static(
    path.resolve(__dirname, 'build'),
    { maxAge: '30d' },
));
// here we serve the index.html page


app.get('/:name', (req, res, next) => {
    // res.sendFile(indexPath)
    // console.log("params --->> ",req.params,"\n--------------------------------")
    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            // console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const postId = req.params.name;
        var post;
        console.log("post id ",postId=="like_button.js")
 
        if (postId && postId!="like_button.js" && postId != "resources" & postId != "about" && postId != "contact" && postId != "terms" && postId!="feed" && postId!="tokens"){
            post  = await getdata_single(postId);
        }
        if(post){
            const replacer1 = new RegExp('zkRollup Directory', 'g')
            const replacer2 = new RegExp('Directory of Ethereum zkRollup ecosystem participants, including ZK rollups, wallets, dapps, NFTs, and infra projects building on zkSync, StarkNet, and more.', 'g')
            const replacer3 = new RegExp('https://www.zkrollups.xyz/summary_large_image.png?', 'g')
            htmlData = htmlData.replace(
                "<title>zkRollup Directory</title>",
                `<title>${post.name} - zkRollup Director</title>`
            )
            .replace(replacer1, `${post.name} - zkRollup Director`)
            .replace(replacer2, post.description)
 
            .replace(replacer3, post.imageLink
            .replace("url('", "")
            .replace("')", "")
            .includes("http") ?post.imageLink.replace("url('", "").replace("')", ""):"https://zkrollups.xyz/"+post.imageLink
            .replace("url('", "")
            .replace("')", ""))
        }
     

        return res.send(htmlData);
    });
});
// app.get('/', (req, res, next) => {
//     res.sendFile(indexPath)
  
// });
// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});