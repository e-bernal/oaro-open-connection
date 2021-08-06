const querystring = require('querystring');
const https = require('https');

const formData = {
    userIp: "201.157.55.68",
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
        res.setEncoding('utf8');
        var result = '';
        res.on('data', (d) => {
            result += d;
        });
        
        res.on('end', function () {
            resolve(JSON.parse(result));
        });
        
        res.on('error', function (err) {
            console.log(err);
        })
    });
    
    req.on('error', (e) => {
        reject(e.message);
    });
    
    req.write(data);
    
    req.end();
})

exports.handler = async (event) => {    
    formData['uniqid'] = event.id;
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