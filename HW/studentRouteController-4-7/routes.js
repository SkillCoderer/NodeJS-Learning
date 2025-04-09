const router = require("express").Router();

const {
  getStudent,
  createStudent,
  getEvent,
  emitEvent,
} = require("./controllers");

router.get("/student", getStudent);
router.post("/student", createStudent);

router.get("/event", getEvent);
router.post("/event", emitEvent);

module.exports = router;
