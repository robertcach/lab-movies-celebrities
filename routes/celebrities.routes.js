const express = require("express");
const router = express.Router();

// Requier celebrity model
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/celebrities", { celebrities })
    })
    .catch((e) => console.log(e))
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