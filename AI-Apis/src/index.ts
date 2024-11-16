import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db";
import appRouterV1 from "./routes/v1";
import GlobalErrorHandler from "./middleware/GlobalErrorHandler";

config(); //loads the environment variable in process.env by parsing the .env file
const app = express();
// const errorHandler=new GlobalErrorHandler();

const port = process.env.PORT;
if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

app.use(express.json()); //used for the parsing the json formatted data in post request
app.use(cookieParser()); //used to parse the cookies

app.use("/v1", appRouterV1);

// app.use(errorHandler.handleError);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("App is listening at port " + port);
    });
  })
  .catch((e) => {
    console.error("Failed to start App or DB connection failed: ", e);
    process.exit();
  });
