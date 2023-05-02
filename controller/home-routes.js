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

//Route that will render one Post
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk({
      where: { user_id: req.params.id },
      include: [{model: Comment}]
    });
    const post = postData.get({ plain: true });
    res.render("post", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Dashboard Route that will render all of the users post
router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    const post = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route that will render one of the users post 
router.get("/dashboard/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk({
      where: { id: req.params.id },
    });
    const post = postData.get({ plain: true });
    res.render("mypost", { post });
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
