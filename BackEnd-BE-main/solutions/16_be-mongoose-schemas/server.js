import express from "express";
const app = express();
const port = 5002;
import cors from "cors";
import usersRouter from "./routes/usersRouter.js";
import articlesRouter from "./routes/articlesRouter.js";
import mongoose from "mongoose";

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/**MONGODB CONNECTION */
const strConn = "mongodb://localhost:27017/mongo_ex";
mongoose
  .connect(strConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connection to cloud database established!"))
  .catch((err) => console.log("[ERROR] DB Connection failed", err));

/**EXPRESS MIDDLEWARE */
app.use(express.json());
app.use(cors());

/**ROUTES */
app.use("/users", usersRouter);
app.use("/articles", articlesRouter);

/**ERROR HANDLING */
app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
