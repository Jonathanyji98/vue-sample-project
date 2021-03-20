import { OwnerService } from './src/services/OwnerService.ts'

//To start server, type 'node Server.js' into the terminal
const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

app.listen(port, (error) => {
    //If there's an error print error message otherwise print listening on port number
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log(`Server is listening at http://localhost:${port}`)
    }
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// middleware that is specific to this router
router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

app.get('/', (req, res) => {
    res.send("Hello World home page")
})

app.get('/about', (req, res) => {
    res.send("Hello World about page")
})


app.post('/', function(req, res) {
    //Check if all fields are provided and are valid
    if (!req.body.name || !req.address || !req.phoneNumber || !req.time) {
        res.status(400)
        res.json({ message: "Bad Request" })
    } else {
        var newId = OwnerService.data.length() + 1

        OwnerService.data.push({
            id: newId,
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            time: req.body.time
        });
    }

    res.json({ message: "New data added" + "ID: " + newId })

})