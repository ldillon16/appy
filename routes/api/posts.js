const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Post = require("../../models/Post");

// Validation
const validatePostInput = require("../../validation/post");

// @route   GET api/posts/test
// @desc    tests post route
// @access  public
router.get("/test", (req, res) => res.json({ msg: "Posts Works!!" }));

// @route   POST api/posts
// @desc    Create post
// @access  private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValis } = validatePostInput(req.body);

    // Check validation
    if (!isValid) {
      // if any errors, send 400 with errors obj
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.name,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
