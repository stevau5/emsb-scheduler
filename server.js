const express = require("express");
const bodyParser = require("body-parser");
const xlsx = require("xlsx");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => res.send("API is Running"));

// SAB ROUTE
app.get("/SAB", (req, res) => {
  res.sendFile(__dirname + "/Views/index.html");
});

app.post("/generateSAB", (req, res) => {
  res.send("Shit works man");

  const teacherName = req.body.tn;
  const startDate = req.body.sd;
  const endDate = req.body.ed;

  const sd = new Date(startDate);
  sd.setDate(sd.getDate() + 1);
  const ed = new Date(endDate);
  ed.setDate(ed.getDate() + 1);

  const dates = [];

  for (; sd.getTime() < ed.getTime() + 1; sd.setDate(sd.getDate() + 7)) {
    dates.push(sd.toDateString());
  }
  var wb = xlsx.readFile("./SAB-Template.xlsx");
  var ws = wb.Sheets["Starting a Business"];

  //data[6]["__EMPTY_3"] = "1234567";
  //var worksheet = xlsx.utils.json_to_sheet(data);

  //const workbook = xlsx.utils.book_new();
  //xlsx.utils.book_append_sheet(workbook, worksheet, "SAB");
  //xlsx.writeFile(workbook, "generatedSAB.xlsx");
});

// Prof Sales Route
app.get("/SAB", (req, res) => res.send("SAB"));

// Server Config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on Port: " + PORT));
