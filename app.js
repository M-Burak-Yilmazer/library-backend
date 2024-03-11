const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";
app.use(express.json());

// CORS ayarları
app.use(
  cors({
    origin: "https://library-frontend-sigma.vercel.app/", // İzin verilen köken
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // İzin verilen HTTP metodları
    credentials: true, // Kimlik bilgilerinin gönderilmesine izin ver
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"], // İzin verilen başlıklar
  })
);

app.use(require("./routes/router"));
app.use(require("./app/models/model"));
require("express-async-errors");

app.use(require("./app/errorHandler"));

app.listen(PORT, HOST, () =>
  console.log("welcome to my page: http://127.0.0.1:8000")
);
