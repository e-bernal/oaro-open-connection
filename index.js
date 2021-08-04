const querystring = require('querystring');
const https = require('https');

const formData = {
    userIp: "201.157.55.68",
    uniqid: "agile001",
    callback: "https://develop.d2338pcgca4grp.amplifyapp.com/test"
};

const options = {
    hostname: 'test.common.nodalblock.com',
    port: 443,
    path: '/dev/js/open-connection',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Api-Key': 'd5735a26-23c4-44f3-8d45-82d2f05f4277'
    }
}

const doRequest = (data) => new Promise((resolve, reject) => {
    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        res.setEncoding('utf8');
        var result = '';
        res.on('data', (d) => {
            result += d;
            //process.stdout.write(d);
        });
        
        res.on('end', function () {
            console.log('result: ' + result);
            resolve(JSON.parse(result));
        });
        
        res.on('error', function (err) {
            console.log(err);
        })
    });
    
    req.on('error', (e) => {
        console.log(e)
        reject(e.message);
    });
    
    console.log(data);
    
    req.write(data);
    
    req.end();
})

exports.handler = async (event) => {
    console.log('tokenFrom = ' + event.token)
    
    formData['tokenFrom'] = event.token;
    
    var response;
    await doRequest(querystring.stringify(formData))
    .then((result) => {
        response = result;
    })
    .catch((err) => {
        response = err;
    })
    
    return response;
};