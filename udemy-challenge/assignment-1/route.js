
const homeRoute = (req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>Assignment - Home</title>
            </head>
            <body>
                <h1>Welcome to Node js assignment</h1>
                <form method="POST" action="/create-user">
                    <input type="text" name="username">
                    <button type="submit">Create user</button>
                </form>
            </body>
        </html>
    `);
    return res.end();
}

const usersRoute = (req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>Assignment - Users</title>
            </head>
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                </ul>
            </body>
        </html>
    `);
    return res.end();
}

const createUserRoute = (req, res) => {
    const body = [];
     req.on('data', (chunk) => {
        body.push(chunk);
        console.log(body.toString().split('=')[1]);
        
    });

    return req.on('end', () => {
        console.log('on end');
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    });
}

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url);

    if(url === '/') {
        console.log('home route');
        homeRoute(req, res);
    }
    if(url === '/users') {
        console.log('user route');
        usersRoute(req, res);
    }

    if(url === '/create-user' && method === 'POST') {
        createUserRoute(req, res);
    }
    
}


module.exports = {
    routeHandler: routeHandler
}