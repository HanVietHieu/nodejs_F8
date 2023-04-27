const express = require("express");
const app = express();
const port = 3000; // muốn run ở cái port nào , cổng nào
//get được hiểu là định nghĩa cái Route
app.get("/", (req, res) => {
  const a = 1;
  const b = 2;
  const c = a + b;

  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
