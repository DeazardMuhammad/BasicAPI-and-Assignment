const express = require("express")
const app = express()
let data = [
    {nis:101, nama:"Adinda", alamat:"Araya"},
    {nis:102, nama:"Andika", alamat:"Sawojajar"},
    {nis:103, nama:"Suji", alamat:"Araya"},
    {nis: 104, nama: "Deazard", alamat: "Sawojajar"},
    {nis: 105, nama: "Airuy", alamat: "Sawojajar"},
    {nis: 106, nama: "Bashar", alamat: "Srengat"},
    {nis: 107, nama: "Izzet", alamat: "Ngawi"},
    {nis: 108, nama: "Calwa", alamat: "Trenggalek"},
    {nis: 109, nama: "Rama", alamat: "Tulungagung"},
    {nis: 110, nama: "Oka", alamat: "Tulungagung"}
]

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/data", (request, response) => {
    let keyword = request.body.keyword
    let jumlah_data = 0, hasil = []
    for (let i = 0; i < data.length; i++) {
    if (keyword == data[i].nis || keyword == data[i].nama || keyword == data[i].alamat) {
        hasil.push(
            data[i]
        )
    }        
    }

    return response.json({
        "Jumlah_Data" : jumlah_data,
        "Hasil" : hasil
    })
})
app.listen(800, () => {
    console.log(`Server run on port 800`);
})