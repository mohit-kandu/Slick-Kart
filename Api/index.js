const express = require('express')

const app = express()
const jsonData = require('./Content2.json')



app.get('/', (req, res) => {
    res.json({ success: true, data: { "name": "value" } })

})
app.get('/api/v1', (req, res) => {
    res.json({ success: true, data: data })

})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})