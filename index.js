const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const AdminRoute = require("./routes/AdminRoute.js");
const CreoteRoute = require("./routes/CreoteRoute.js");
const AuthAdminPanelRoute = require("./routes/AuthAdminPanelRoute.js");

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "your_secret_here", // This is the secret used to sign the session ID cookie. Replace 'your_secret_here' with your actual secret.
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
    cookie: {
      maxAge: 3600000, // Session duration in milliseconds (e.g., 1 hour). Adjust as needed.
      secure: false, // Set to true if your app is served over HTTPS. This ensures the session cookie is only sent over HTTPS.
      httpOnly: true, // Ensures the session cookie is not accessible to client-side JavaScript.
    },
  })
);
// File upload route
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderName = req.body.folderName || "profile_pic"; // Default folder
    const uploadPath = path.join(__dirname, folderName);
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
app.use("/profile_pic", express.static("profile_pic"));
app.post("/api/uploadAndStore", upload.single("file"), (req, res) => {
  if (!req.body.folderName) {
    return res.status(400).json({ error: "Folder name is required" });
  }
  if (!req.file) {
    return res.status(400).json({ error: "File is missing" });
  }
  const filePath = req.file.path;

  // Calculate relative path
  const relativePath = path.relative(__dirname, filePath).replace(/\\/g, "/");

  // Construct URL
  const fullUrl = ` ${req.protocol}://${req.get("host")}/${relativePath}`;

  res
    .status(200)
    .json({ message: "File uploaded successfully", filePath: fullUrl });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://helipandya29:helly123@cluster0.jjakkfi.mongodb.net/Creote",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define routes
app.use("/api/user", AdminRoute);
app.use("/api/creote", CreoteRoute);
app.use("/api/auth", AuthAdminPanelRoute);

// app.post();
