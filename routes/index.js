var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

/**
 * Sample messages.
 * These are posted at the beginning of a conversation.
 */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello, World!",
    user: "Charles",
    added: new Date(),
  },
];

// Allows form values to be parsed by the request object
router.use(bodyParser.urlencoded({ extended: true }));

/* GET new message */
router.post("/", (req, res, next) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Z-Messenger",
    messages: messages,
  });
});

module.exports = router;
