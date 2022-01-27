const { request, response } = require("express")
const express = require("express")

const app = express()
// set to read a request data from JSON format
app.use(express.json())

// JSON is STRING

app.post("/barang", (request, response) => {
    // store the request data
    let barang = request.body.barang
    let total = 0

    
    for (let i = 0; i < barang.length; i++) {
        total += barang[i].harga*barang[i].jumlah
    }
    let ppn = total*11/10
    // give a response data
    return response.json({
        "Total Harga" : ppn,

    })
})

app.listen(1800, () => {
    console.log(`Server run on port 1800`);
})