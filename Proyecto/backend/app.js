const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("No se encontró la ruta.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Ocurrió un error desconosido!" });
});

mongoose
  .connect(
    `mongodb://oguerrero:lutNCoSBAW7WOsM7@clusterzero-shard-00-00.kml00.mongodb.net:27017,clusterzero-shard-00-01.kml00.mongodb.net:27017,clusterzero-shard-00-02.kml00.mongodb.net:27017/myPlacesApp?ssl=true&replicaSet=atlas-6ogobi-shard-0&authSource=admin&retryWrites=true&w=majority`
    ,{useNewUrlParser: true})
  .then(() => {
    app.listen(5001);
  })
  .catch(err => {
    console.log(err);
  });
