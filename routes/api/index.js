const router = require("express").Router();
const usersRoutes = require("./users-routes");
const thoughtsRoutes = require("./thoughts-routes");

router.use("/users", usersRoutes);
router.use("/thoguths", thoughtsRoutes);

module.exports = router;
