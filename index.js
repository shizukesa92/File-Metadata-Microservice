const express = require("express");
const route = require("./server/routes/router");

const app = express();

app.use("/", route);

app.listen(process.env.PORT || 3000);
