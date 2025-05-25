import express, { NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "../routes/user.route";
import blogRouter from "../routes/blog.route";
import bodyParser from "body-parser";
import categoryRouter from "../routes/category.route";
import responseTime from "response-time";

dotenv.config();

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next: NextFunction
) {
  next();
}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: 1024 * 1024 * 50 }));
app.use(loggerMiddleware);
app.use(responseTime());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/categories", categoryRouter);

app.use("/uploads", express.static("uploads"));
app.use(
  "/resources/static/images/thumbnails/cars",
  express.static("resources/static/images/thumbnails/cars")
);
app.use(
  "/resources/static/images/thumbnails/blogs",
  express.static("resources/static/images/thumbnails/blogs")
);
app.use(
  "/resources/static/images/users/avatars",
  express.static("resources/static/images/users/avatars")
);

app.set("view engine", "ejs");

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
});
