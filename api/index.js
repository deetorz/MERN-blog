const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const secrets = require("./secrets");
const uploadMiddleware = multer({ dest: "uploads/" });
const salt = bcrypt.genSaltSync(10);
const fs = require("fs");
const Post = require("./models/Post");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(secrets.mongoConnection);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(user);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const loginSuccess = bcrypt.compareSync(password, user.password);
  if (loginSuccess) {
    // user logged in
    jwt.sign(
      { username, id: user._id },
      secrets.jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({ id: user._id, username });
      }
    );
  } else {
    res.status(400).json("Wrong credentials.");
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.get("/profile", (req, res) => {
  // note to self: this was not working until I set the default
  // browser in vite to localhost instead of 127.0.0.1
  // I believe the issue comes from some strict header config
  // that disables cross site cookie sharing
  const { token } = req.cookies;
  jwt.verify(token, secrets.jwtSecret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/create-post", uploadMiddleware.single("image"), async (req, res) => {
  const { originalname, path } = req.file;
  const fileTypeExtension =
    originalname.split(".")[originalname.split(".").length - 1];
  const newPath = path + "." + fileTypeExtension;
  fs.renameSync(path, newPath);

  const { title, content } = req.body;
  const newPost = await Post.create({
    title,
    content,
    image: newPath,
  });
  res.json(newPost);
});

app.listen(4000);
