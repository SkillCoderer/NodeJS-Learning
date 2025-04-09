const getStudent = (req, res) => {
  res.send("Data Fetched");
};

const createStudent = (req, res) => {
  res.send("Student Created");
};

const getEvent = (req, res) => {
  res.send("Event Retrieved");
};

const emitEvent = (req, res) => {
  res.send("Event Emitted");
};

module.exports = {
  getStudent,
  createStudent,
  getEvent,
  emitEvent,
};
