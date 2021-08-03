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

    let response;

    request(options, function (error, resp) {
        if (error) {
            response = {
                statusCode: 400,
                body: error
            }
        };
        response = {
            statusCode: 200,
            body: resp.body
        }
    });
    
    return response;
};

exports.handler = openConnection;