//To start server, type 'node Server.js' into the terminal

const http = require('http')
const port = 3000

const server = http.createServer(function(req, res) {

})

server.listen(port, function(error) {
    //If there's an error print error message otherwise print listening on port number
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})