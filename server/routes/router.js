const express = require("express");
const path = require("path");

const app = express();

module.exports = () => {
	app.use(express.static("./dist/client")); // Use dist and not client because server renders dist

	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "./dist/client/index.html")); // Cannot use render for html unlike pug etc
	});
};
