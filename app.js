const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", (req, res) => {
  const day = date.getDay();
  res.render("list", { listTitle: day, newAddedItems: items });
});

app.post("/", (req, res) => {
  const newItem = req.body.userInputItem;
  if (req.body.List === "Work List") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newAddedItems: workItems });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
