const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API is Running"));

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/Views/index.html");
});

app.get("/SAB", (req, res) => res.send("SAB"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on Port: " + PORT));
