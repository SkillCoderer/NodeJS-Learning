const express = require("express");
const server = express();
const myRouter = require("./routes");
const port = 5050;

server.use(express.json());
server.use(myRouter);

server.listen(port, (err) => {
  if (err) {
    console.warn("Something went Wrong :c");
  } else {
    console.info(`Server Started at Port ${port}`);
  }
});
