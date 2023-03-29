const router = require("express").Router();
const jobController = require("../controllers/jobController.js");
const { authorization } = require("../middlewares/authorization");

router.get("/", authorization, jobController.getJobs);

module.exports = router;
