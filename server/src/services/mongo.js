const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://orion:test1234@nasa-api.s8d50.mongodb.net/?retryWrites=true&w=majority&appName=nasa-api";

// Event listeners for connection
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
