const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Post successfully UPDATED" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const PostData = await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Post successfully DELETED" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
