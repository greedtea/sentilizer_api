// const Hapi = require('@hapi/hapi');
// const regeneratorRuntime = require("regenerator-runtime");

const express = require("express");
const app = express();
const routes = require("./routes"); // 引入路由
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000", // 允許的源
};

const init = async () => {
  app.use(cors(corsOptions)); //啟用 CORS
  app.use(express.json()); // 用於解析 JSON 主體
  app.use(express.urlencoded({ extended: true })); // 用於解析 x-www-form-urlencoded 主體
  app.use("/", routes); // 使用路由

  const port = 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
