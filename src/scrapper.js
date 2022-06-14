var AWS = require('aws-sdk');
const fs = require('fs');

const invokeLambda = (lambda, params) => new Promise((resolve, reject) => {
    lambda.invoke(params, (error, data) => {
        if (error) {
            reject(error);
        } else {
            resolve(data);
        }
    });
});

export const main = async (url) => {
    
    let region = "us-east-1";
    let functionURN = process.env.AWS_FUNCTION_URN;
    
    // You shouldn't hard-code your keys in production!
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
    AWS.config.update({
        accessKeyId: "AKIA2TOLBBQW6C3HGEUK",
        secretAccessKey: "te1LIhMQgtzCNKFTomdX8jrv9dloZz23Kj7JFzKm",
        region: region,
    });

    const lambda = new AWS.Lambda();

    let keywords = ['weather berlin', 'news germany', 'what else', 'some keyword'];
    let promises = [];

    // for (let kw of keywords) {
        let event = { url: url };
        let params = {
            FunctionName: "tweeter_scrapper",
            InvocationType: "RequestResponse",
            Payload: JSON.stringify(event),
        };
        console.log(params);
        promises.push(
            invokeLambda(lambda, params)
        )
    // }

    // console.log(`Invoked ${promises.length} lambda requests!`);

    var start = new Date();
    let results = await Promise.all(promises);
    var end = new Date() - start;

    console.log(`invokeLambda() in region ${region} took ${end/1000} seconds`);
    let data;
    for (let result of results) {
         data= result.Payload;
        data = JSON.parse(data);
        
    }
    return data;
};


