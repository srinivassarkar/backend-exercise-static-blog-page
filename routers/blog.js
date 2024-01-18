const express = require("express");
const path = require("path");
const router = express.Router();
const blogs = require("../data/blogData");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/blog", (req, res) => {
  res.render("blogHome", { blogs: blogs });
});

router.get("/blogPost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  res.render("blogPage", { title: myBlog[0].title, content: myBlog[0].content });
});

module.exports = router;
