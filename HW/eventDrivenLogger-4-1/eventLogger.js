const { emit } = require("process");
const fs = require("fs");

const eventEmitter = require("events").EventEmitter;
const EEI = new eventEmitter();

EEI.on("info", (msg) => {
  const logMsg = `[Info] - ${msg}`;
  console.log(logMsg);
  fs.appendFile("info.txt", logMsg, (err) => {
    if (err) {
      console.error("Error Occured");
    } else {
      console.log("Working Successfully");
    }
  });
});
EEI.on("warn", (msg) => {
  const logMsg = `[Warn] - ${msg}`;
  console.warn(logMsg);
  fs.appendFile("warn.txt", logMsg, (err) => {
    if (err) {
      console.error("Error Occured");
    } else {
      console.log("Working Successfully");
    }
  });
});
EEI.on("error", (msg) => {
  const logMsg = `[Error] - ${msg}`;
  console.error(logMsg);
  fs.appendFile("error.txt", logMsg, (err) => {
    if (err) {
      console.error("Error Occured");
    } else {
      console.log("Working Successfully");
    }
  });
});

EEI.emit("info", "Info Logged");
EEI.emit("warn", "Warning!");
EEI.emit("error", "Error Occuring");
