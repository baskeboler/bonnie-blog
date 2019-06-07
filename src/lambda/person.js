// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
exports.handler = async (event, context, callback) => {
    console.log('queryStringParameters', event.queryStringParameters)
    const r = await fetch('http://thispersondoesnotexist.com/image');

    callback(null, {
        // return null to show no errors
        statusCode: 200, // http status code
        body: r.body,
    })
}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum