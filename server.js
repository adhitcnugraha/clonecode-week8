import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// DB Config
const connection_url =
  "mongodb+srv://team8:team8clonecode@cluster0.y7ypahk.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url);

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB is connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("has changed on", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "got inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
      });
    } else {
      console.log("Error triggering at Pusher");
    }
  });
});
// ???

// Routes API
app.get("/", (req, res) => res.status(200).send("Your API is ready to use"));

const pusher = new Pusher({
  appId: "1519792",
  key: "c0bc7defd41eb8bdcfed",
  secret: "a3652b511d0f7f62d3a9",
  cluster: "ap1",
  useTLS: true,
});

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
