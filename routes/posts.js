const express = require("express");
const roleValidation = require("../middleware/roleValidation");
const userValidation = require("../middleware/userValidation");
const router = express.Router();
const postService = require("../services/postService");

router.get("/all", roleValidation("user"), async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", roleValidation("user"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postService.getPost(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await postService.createPost(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await postService.editPost(id, req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await postService.removePost(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
