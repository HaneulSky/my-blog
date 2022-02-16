const express = require("express");
const router = express.Router({mergeParams: true});

router.use("/auth", require("./auth.routes"));
router.use("/articles", require("./article.routes"));

module.exports = router;
