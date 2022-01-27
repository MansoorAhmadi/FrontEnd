//importing express 
const express = require('express')

//using the framework
const app = express()

//to get the body using arrow function
app.get('/', (req, res) => {
    // res.status(200).send('<h1>Hello World</h1>')
    res.status(200).json({
        msg: '<h1>Hello JSON</h1>'
    })
})

//to make the interaction between the front and get request, we need an app listener. 
app.listen(5000, () => {
    console.log('server running on http://localhost:5000')
})