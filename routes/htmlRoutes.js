// htmlRoutes.js

const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

// Route to serve the landing page (index.html)
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
