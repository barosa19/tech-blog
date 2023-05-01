const router = require("express").Router();
const { User, Post, Comment } = require("../models/");

//Home Route that will render all Post
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    const post = postData.map((post) => post.get({ plain: true }));
    res.render("home", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Dashboard Route that will render all of the Users Post
router.get("/dashboard/:id", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.params.id },
    });
    const post = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

// localhost:3001/login
router.get("/login", async (req, res) => {
  if (req.session.loggedin) {
    // redirect to localhost:3001/
    res.redirect("/");
  }

  res.render("login");
});

module.exports = router;
