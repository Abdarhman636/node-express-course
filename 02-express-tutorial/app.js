const http = require('http')

const server = http.createServer((req, res) => {
    console.log('user hit the server')
    res.end('its done')
})


server.listen(5000)