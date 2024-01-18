const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
var { engine } = require("express-handlebars");

app.engine(
  ".handlebars",
  engine({
    extname: "handlebars",
    defaultLayout: "main",
    layoutDir: "views/layouts",
  })
);

app.set("view engine", "handlebars");

app.use("/", require(path.join(__dirname, "routers/blog.js")));

//start the port
app.listen(port, () => {
  console.log(`port started at ${port}`);
});
