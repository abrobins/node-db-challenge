const express = require("express");

const Schemes = require("./db-scheme.js");

const router = express.Router();

router.get("/", (req, res) => {
  Schemes.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  Schemes.addResource(req.body)
    .then(resource => {
      res.status(200).json({ resource });
    })
    .catch(error => {
      res.status(500).json({ error: "Couldn't add new resource" });
    });
});

module.exports = router;
