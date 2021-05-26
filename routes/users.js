var express = require("express");
const adminValidation = require("../middleware/adminValidation");
var router = express.Router();
const userService = require("../services/userService");

router.get("/all", adminValidation, async (req, res) => {
  try {
    const user = await userService.getAllProfiles();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userService.getProfile(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    await userService.signup(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const { id } = req.user;
    await userService.editProfile(id, req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await userService.removeProfile(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
