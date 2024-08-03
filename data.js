

const express = require("express");
const cors=require ('cors')
const app = express();
const xlsx=require('xlsx');
const wb=xlsx.readFile('teams.xlsx');
const ws=wb.Sheets["teams"];
let data=xlsx.utils.sheet_to_json(ws);
app.use(cors());
const PORT = process.env.PORT || 3030;


  app.get('/teams', function (req, res) {
    res.send(data)});


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});