const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("We are home");
});

module.exports = router;
