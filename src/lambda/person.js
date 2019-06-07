exports.handler = async (event, context) => {

    const redirectUrl = 'https://thispersondoesnotexist.com/image'

    return {
        statusCode: 302,
        headers: {
            Location: redirectUrl,
            'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({})
    }
}