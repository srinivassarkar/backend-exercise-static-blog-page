// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// //creating a middleware
// app.use("/:age", (req, res, next) => {
//   //check condition
//   if (req.params.age < 18) {
//     res.redirect("/fail");
//   }
//   next();
// });


// //redirect page if condition fail
// app.get("/fail", (req, res) => {
//   res.send("You are too young to access this site!");
// });


// //home page --> url check
// app.get("/:age", (req, res) => {
//   res.send(`You are ${req.params.age}`);
// });


// //start the port
// app.listen(port, () => {
//   console.log(`port started at ${port}`);
// });
