import { Server } from "Socket.IO";

const users = [];

const addUser = async (userId, socketId) => {
  const user = users.find((user) => user.userId === userId);

  if (user && user.socketId === socketId) {
    return users;
  }
  //
  else {
    if (user && user.socketId !== socketId) {
      await removeUser(user.socketId);
    }

    const newUser = { userId, socketId };

    users.push(newUser);

    return users;
  }
};

const removeUser = async (socketId) => {
  const indexOf = users.map((user) => user.socketId).indexOf(socketId);

  await users.splice(indexOf, 1);

  return;
};

const sendMsg = (msg) => {
  if (socket.current) {
    socket.current.emit("sendNewMsg", {
      userId: user._id,
      msgSendToUserId: openChatId.current,
      msg,
    });
  }
};

const findConnectedUser = (userId) =>
  users.find((user) => user.userId === userId);

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
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
  }

  res.end();
};

export default SocketHandler;
