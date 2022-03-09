//* EXPRESS APP SETUP
const express = require("express");
const { connectDB } = require("./server/util/connect");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const app = express();
const PORT = process.env.PORT || 3000;

//* NEXT APP SETUP
//! imports tools from the next library
const next = require("next");
//! find out if this is a dev or production build
const dev = process.env.NODE_ENV !== "production";
//! creates a project with dev error templates
const nextApp = next({ dev });
//! import req handlers for the server
const handler = nextApp.getRequestHandler();

//* MIDDLEWARES
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

const authMiddleware = require("./server/middleware/authMiddleware");

//*ROUTERS
const userRoutes = require("./server/routes/userRoutes");
const authRoutes = require("./server/routes/authRoutes");
const uploadRoutes = require("./server/routes/uploadRoutes");
const searchRoutes = require("./server/routes/search");
const postRoutes = require("./server/routes/posts");
const profileRoutes = require("./server/routes/profile");
const { Socket } = require("socket.io-client");

//? alternative way to route if you prefer
// app.use("/api/v1/user", require('./server/routes/userRoutes'));
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/uploads", uploadRoutes);
app.use("/api/v1/search", searchRoutes);
app.use("/api/v1/posts", authMiddleware, postRoutes);
app.use("/api/v1/profile", authMiddleware, profileRoutes);

//*SOCKETS
const io = require("socket.io")(Server);

io.on("connect", (socket) => {
  //testing
  //socket.on('ping', (data) => {
  // console.log(data)
  // })

  socket.on("join", async ({ userId }) => {
    const users = await addUser(userId, socket.id);
    console.log(users);

    setInterval(() => {
      socket.emit("connectedUsers", {
        users: users.filter((user) => user.userId !== userId),
      });
    }, 10000);
  });

  socket.on("loadMessages", async ({ userId, messagesWith }) => {
    const { chat, error } = await loadMessages(userId, messagesWith);

    !error
      ? socket.emit("messagesLoaded", { chat })
      : socket.emit("noChatFound");
  });

  socket.on("sendNewMsg", async ({ userId, msgSendToUserId, msg }) => {
    const { newMsg, error } = await sendMsg(userId, msgSendToUserId, msg);
    const receiverSocket = findConnectedUser(msgSendToUserId);

    if (receiverSocket) {
      // WHEN YOU WANT TO SEND MESSAGE TO A PARTICULAR SOCKET
      io.to(receiverSocket.socketId).emit("newMsgReceived", { newMsg });
    }
    //
    else {
      await setMsgToUnread(msgSendToUserId);
    }

    !error && socket.emit("msgSent", { newMsg });
  });

  socket.on("deleteMsg", async ({ userId, messagesWith, messageId }) => {
    const { success } = await deleteMsg(userId, messagesWith, messageId);

    if (success) socket.emit("msgDeleted");
  });

  socket.on(
    "sendMsgFromNotification",
    async ({ userId, msgSendToUserId, msg }) => {
      const { newMsg, error } = await sendMsg(userId, msgSendToUserId, msg);
      const receiverSocket = findConnectedUser(msgSendToUserId);

      if (receiverSocket) {
        // WHEN YOU WANT TO SEND MESSAGE TO A PARTICULAR SOCKET
        io.to(receiverSocket.socketId).emit("newMsgReceived", { newMsg });
      }
      //
      else {
        await setMsgToUnread(msgSendToUserId);
      }

      !error && socket.emit("msgSentFromNotification");
    }
  );

  socket.on("disconnect", () => removeUser(socket.id));
});

connectDB();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening @ ${PORT}`);
  });
});
