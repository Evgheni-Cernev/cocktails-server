const express = require("express");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.single("file"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.file);
    res.json({ message: "Successfully uploaded files" });
}
app.listen(5000, () => {
    console.log(`Server started...`);
});