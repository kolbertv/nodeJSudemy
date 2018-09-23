const request = require('request');
const http = require('http');
const https = require('https');

request({
    url: 'https://jsonplaceholder.typicode.com/users/2',
    json: true
}, (error, response, body) => {

    console.log(body);
});


let getJSON = (options, body) => {

    let port = options.port == 443 ? https : http;
    let req = port.request(options, (res) => {

        let output = '';
        res.setEncoding('utf8');

        res.on('data', (chunk)=>{
            output += chunk;
        });

        res.on('end', ()=>{
            let obj = JSON.parse(output);
            body(res.statusCode, obj);
        });

        req.on('error', (err)=>{
           console.log('error');

        })
    });

    req.end();
};

let options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/users/1',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    port: 443

};

getJSON(options, (statusCode, result)=>{
    console.log(result);
    console.log('status code: ' + statusCode);




});