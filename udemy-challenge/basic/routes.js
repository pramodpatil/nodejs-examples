const fs = require('fs');

const routeHandler = (req, res) => {
    const method = req.method;
    const url = req.url;
    //process.exit();

    // routing request
    if(url === '/') {
        console.log('I am in / path');
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node js basic</title></head>');
        res.write(`<body><form method="post" action="/message">
            <input type="text" name="msg">
            <button type="submit">Send</button>
        </form></body>`);
        res.write('</html>');    
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        console.log('I in /message path');
        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
            //console.log(body.toString());
        });
        return req.on('end', () => {
            let parseData = body.toString();
            let msg = parseData.split('=')[1];

            fs.writeFile('message.txt', msg, () => {
                res.statusCode = 302;
                res.setHeader('location', '/')
                return res.end();
            })
        })
    }
}

module.exports = {
    routeHandler: routeHandler
}