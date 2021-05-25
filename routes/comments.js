const express = require("express");
const router = express.Router();
const commentService = require("../services/commentService");

router.get("/all", async (req, res) => {
  try {
    const comments = await commentService.getAllComments();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentService.getComment(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    await commentService.addComment(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await commentService.removeComment(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
