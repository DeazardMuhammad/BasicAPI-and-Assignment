// load library express
const { response } = require("express")
let express = require("express")
const { status } = require("express/lib/response")

// inisiasi objek baru dari express 
let app = express()

// endpoint pertama kita
app.get("/test", (request, response) => {
    let kata = 'Be Your Self and Never Surrender'
    return response.json({
         message: kata,
         nama : "Deazard",
         age: 16
    })
})

// endpoint kedua: hitung bmi
// request data: tinggi, berat
// response data: nilai  bmi dan status bmi

// setting agar dapat membaca data request 
// dengan format json
app.use(express.json())
app.post("/bmi", (request,response) =>{
    // tampung data tinggi dan berat
    let tinggi = request.body.tinggi 
    let berat = request.body.berat

    let bmi = berat / (tinggi * tinggi)

    let status = null

    if (bmi<18.5) {
        status = `Gizi Buruk`
    } else if(bmi >=18.5 && bmi <15){
        status = `Ideal`
    }else if(bmi >=25 && bmi <30){
        status = `Berat Lebih`
    }else if(bmi >=30){
        status = `Obesitas`
    }
    return response.json({
        nilai: bmi,
        status: status
    })
})
// endpoint ketiga (request with GET method)
app.get("/profile/:nama/:usia",(request, response) => {
    // tampung data yang dikirimkan
    let nama = request.params.nama
    let usia = request.params.usia 

    let status = null
    
    if (usia < 10) {
        status = `bocil`
    } else if (usia >=10 && usia <=20) {
        status = `remaja`
    }else if (usia >=20 && usia <=50) {
        status = `dewasa`
    }else if (usia >50) {
        status = `tua`
    }

    return response.json({
        message: `Saya ${nama} adalah ${status}`
    })
})

app.listen(8000, () => {
    console.log('server run on port 8000');
})


