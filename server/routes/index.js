const router = require("express").Router();
const userRouter = require("./userRoutes");
const jobRouter = require("./jobRoutes");

router.use("/users", userRouter);
router.use("/jobs", jobRouter);

module.exports = router;
