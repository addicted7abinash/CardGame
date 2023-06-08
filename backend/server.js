const express = require("express");
const dotenv = require("dotenv").config();
const http = require("http");
const { errorHandler } = require("./middleware/errormiddleware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET, PUT");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/cards", require("./routes/cardroutes"));

app.use(errorHandler);

io.on("connection", (socket) => {
  socket.on("testEvent", function () {
    console.log("testevent received");
  });
  console.log("A user connected");
});

server.listen(port, () => console.log(`Server running at ${port}`));
