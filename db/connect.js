/**
 * 该文件负责连接数据库
 */

const mongoose = require("mongoose");

// 定义链接数据库字符串
// const dbURL = "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_NAME;

// 连接
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// 监听
mongoose.connection.on("connected", function () {
  console.log(`coderstation 数据库已经连接...`);
});
