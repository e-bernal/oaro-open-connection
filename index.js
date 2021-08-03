let openConnection = async (event) => {
    
    let tokenFrom = event.tokenFrom;
    
    console.log(tokenFrom);
    
    var request = require('request');
    
    var options = {
        'method': 'POST',
        'url': 'https://test.common.nodalblock.com/dev/js/open-connection',
        'headers': {
            'Api-Key': 'd5735a26-23c4-44f3-8d45-82d2f05f4277'
        },
        formData: {
            'userIp': '201.157.55.68',
            'uniqid': 'agile001',
            'callback': 'https://develop.d2338pcgca4grp.amplifyapp.com/test',
            'tokenFrom': tokenFrom
        }
    };

    var formData = {
        'userIp': '201.157.55.68',
        'uniqid': 'agile001',
        'callback': 'https://develop.d2338pcgca4grp.amplifyapp.com/test',
        'tokenFrom': tokenFrom
    }

    var response = 'Lambda function';

    var req_options = {
        host: 'test.common.nodalblock.com',
        port: '443',
        path: '/dev/js/open-connection',
        method: 'POST',
        headers: {
            'Api-Key': 'd5735a26-23c4-44f3-8d45-82d2f05f4277'
        }
    }

    const req = https.request(req_options, (resp) => {
        resp.setEncoding('utf8');
        resp.on('data', (chunk) => {
            console.log('Response: ' + chunk);
        })
    })

    req.write(formData);
    req.end();

    // await request(options, function (error, resp) {
    //     console.log('errot: ' + JSON.stringify(error));
    //     console.log('resp: ' + JSON.stringify(resp.body));
    //     response = 'Hola mundo';
    //     console.log('uno');
    // });

    console.log('dos')

    //return response;
};

exports.handler = openConnection;