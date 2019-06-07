import http from 'http';

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
exports.handler = (event, context, callback) => {
    console.log('queryStringParameters', event.queryStringParameters)
    var buffers = []
    http.get('http://thispersondoesnotexist.com/image', (res) => {
        res.on('end', function () {
            callback(null, {
                // return null to show no errors
                statusCode: 200, // http status code
                body: buffers,
            })
        })

        res.on('data', function (data) {
            buffers.push(data)
        })
    });

}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum