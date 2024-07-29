const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://orion:WAA7rkvRn2FQ8yQA@nasa-project.erojgpe.mongodb.net/nasa?retryWrites=true&w=majority&appName=nasa-project";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB is connected!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  // await mongoose.connect(MONGO_URL, {
  //   useNewUrlParser: true,
  //   useFindAndModify: false,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true,
  // });
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
