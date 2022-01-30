const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")

router.get("/celebrities", (req, res, next) => {
    res.render("index");
  });

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", (req, res, next) => {
  Celebrity.create(req.body)
  .then(() => {
    res.redirect("/celebrities")
  })
  .catch((e) => {
    res.redirect("/new-celebrity")
  })
})


module.exports = router;