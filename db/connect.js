/**
 * 该文件负责连接数据库
 */

const mongoose = require("mongoose");

// 定义链接数据库字符串
// const dbURL = "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_NAME;  // 本地数据库
const dbURL = process.env.DB_URL  // 外部数据库 mongodb atlas

// 连接
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// 监听
mongoose.connection.on("connected", function () {
  console.log(`coderstation 数据库已经连接...`);
});
