// import
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// app config
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

//db config
const connection_url =
  "mongodb+srv://team8:team8clonecode@cluster0.y7ypahk.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url);

// ???

// api routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err); // INTERNAL SERVER ERROR
    } else {
      res.status(200).send(data); // OK
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err); // INTERNAL SERVER ERROR
    } else {
      res.status(201).send(`New messages was created: \n ${data}`); // CREATED OK
    }
  });
});

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));

// module.exports = router;
