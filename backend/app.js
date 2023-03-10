const express = require("express");

const bodyParser = require("body-parser");
require("dotenv").config();

const placeRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/api/places", placeRoutes);

app.use("/api/users", userRoutes);

app.use((req, res, next) => {
    const error = new HttpError("Could not find this route.", 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occurred!!!" });
});

app.listen(PORT, () => {
    console.log("Server running at", PORT);
});
