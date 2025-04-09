const { emit } = require("process");
const fs = require("fs");

const eventEmitter = require("events").EventEmitter;
const EEI = new eventEmitter();

EEI.on("info", (msg) => {
  const timestamp = new Date().toISOString();
  const logMsg = `[Info] - ${msg} @ ${timestamp}\n`;
  console.log(logMsg);
  fs.appendFile("logs.txt", logMsg, (err) => {
    if (err) {
      console.error("Error Occured");
    } else {
      console.log("Working Successfully");
    }
  });
});
EEI.on("warn", (msg) => {
  const timestamp = new Date().toISOString();
  const logMsg = `[Warn] - ${msg} @ ${timestamp}\n`;
  console.warn(logMsg);
  fs.appendFile("logs.txt", logMsg, (err) => {
    if (err) {
      console.error("Error Occured");
    } else {
      console.log("Working Successfully");
    }
  });
});
EEI.on("error", (msg) => {
  const timestamp = new Date().toISOString();
  const logMsg = `[Error] - ${msg} @ ${timestamp}\n`;
  console.error(logMsg);
  fs.appendFile("logs.txt", logMsg, (err) => {
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
