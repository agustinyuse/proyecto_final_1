const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productoRouter = require("./routes/producto.routes");
app.use("/productos", productoRouter);

const carritoRouter = require("./routes/carrito.routes");
app.use("/carrito", carritoRouter);

const puerto = process.env.PORT || 3000;

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on("error", (error) => {
  console.log("error en el servidor:", error);
});
