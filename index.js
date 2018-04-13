const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer();

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
	return (!req.file) ? res.end(JSON.stringify({
		name: null,
		size: null
	})) : res.end(JSON.stringify({
		name: req.file.originalname,
		size: req.file.size
	}));
});

app.use(express.static("./dist/client")); // Use dist and not client because server renders dist

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./dist/client/index.html")); // Cannot use render for html unlike pug etc
});

app.listen(process.env.PORT || 3000);
