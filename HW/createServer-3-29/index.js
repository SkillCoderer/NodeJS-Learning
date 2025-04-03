const http = require("http");
const fs = require("fs");
const urlModule = require("url");

let server = http.createServer((req, res) => {
  let { url } = req;
  let parsedURL = urlModule.parse(url, true);
  let { pathname, query } = parsedURL;
  let { name, country } = query;
  if (pathname === "/json") {
    const movie = {
      name: "Sonic the Hedgehog 2",
      cast: ["Ben Schwartz", "Idris Elba", "Jim Carrey", "James Marsden"],
      director: "Jeff Fowler",
      releaseYear: 2022,
    };

    res.write(JSON.stringify(movie));
    res.end();
  }
  res.write("<h1>Welcome to Node JS Server</h1>");
  res.write(`Hi ${name}, you are in ${country}`);
  res.end();
});

server.listen(5050, (err) => {
  if (err) {
    console.error("Something went Wrong :c");
  } else {
    console.log("Server has Started Successfully at port 5050");
  }
});

//
