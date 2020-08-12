const path = require("path");
const express = require("express");
const hbs = require("hbs");
const systemInfo = require("./src/system");


const port = process.env.PORT || 3000;
const app = express();
const publicDirectoryPath = path.join(__dirname, "./public");
const viewPath = path.join(__dirname,"./templates");
console.log(publicDirectoryPath);
app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicDirectoryPath));
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.render("index",systemInfo());
})


app.listen(port, () => {
    console.log("The app is runnig on the port " + port);
})