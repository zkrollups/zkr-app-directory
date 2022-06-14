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
    
    
    // You shouldn't hard-code your keys in production!
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
    AWS.config.update({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: process.env.REACT_APP_region,
    });

    const lambda = new AWS.Lambda();

    let keywords = ['weather berlin', 'news germany', 'what else', 'some keyword'];
    let promises = [];

    // for (let kw of keywords) {
        let event = { url: url };
        let params = {
            FunctionName: process.env.REACT_APP_function,
            InvocationType: "RequestResponse",
            Payload: JSON.stringify(event),
        };
        console.log(params);
        promises.push(
            invokeLambda(lambda, params)
        )
    // }

    // console.log(`Invoked ${promises.length} lambda requests!`);
    let results = await Promise.all(promises);
    let data;
    for (let result of results) {
         data= result.Payload;
        data = JSON.parse(data);
        
    }
    return data;
};


