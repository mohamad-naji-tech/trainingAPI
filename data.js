//const express = require('express')
//const app = express()

//app.get('/', function (req, res) {
 // res.send('Hello World')
//})

//app.listen(3000)
const express = require("express");
const cors=require ('cors')
const app = express();
const xlsx=require('xlsx');
const wb=xlsx.readFile('teams.xlsx');
const ws=wb.Sheets["teams"];
let data=xlsx.utils.sheet_to_json(ws);
app.use(cors());
const PORT = process.env.PORT || 3030;

//app.get('/', function (req, res) {
  //res.send('Hello World')})
  app.get('/students', function (req, res) {
    res.send(data)});
// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});