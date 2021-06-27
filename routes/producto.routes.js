const express = require("express");
const router = express.Router();

const ProductoRepositorio = require("../repositorio/producto-repositorio");
const Producto = require("../api/producto");

let productos;

const cargarProductos = async () => {
  productos = await ProductoRepositorio.getProductos();
};

cargarProductos();

router.use(function (req, res, next) {
  if (req.url.includes("listar")) {
    return next();
  }

  if (
    !req.headers["administrador"] ||
    req.headers["administrador"] === "false"
  ) {
    return res.status(401).json({ error: "-1", descripcion: "Unauthorized" });
  }

  next();
});

router.get("/listar", async (req, res) => {
  return res.json(productos);
});

router.get("/listar/:id", (req, res) => {
  return res.json(productos.filter((p) => String(p.id) === req.params.id));
});

router.post("/guardar", (req, res) => {
  productos.push(getProducto(req.body));

  ProductoRepositorio.guardar(productos);

  return res.status(200).json({ message: "producto guardado" });
});

router.put("/actualizar/:id", (req, res) => {
  let producto = getProducto(req.body);

  const index = productos.findIndex((p) => String(p.id) === req.params.id);
  productos[index] = producto;

  ProductoRepositorio.guardar(productos);

  return res.status(200).json({ message: "producto actualizado" });
});

router.delete("/borrar/:id", (req, res) => {
  const index = productos.findIndex((p) => String(p.id) === req.params.id);
  productos.splice(index, 1);

  return res.status(200).json({ message: "producto borrado" });
});

const getProducto = (body) => {
  const id = productos.length + 1;
  const producto = new Producto(
    id,
    Date.now().toLocaleString("es-AR"),
    body.nombre,
    body.descripcion,
    body.codigo,
    body.foto,
    body.precio,
    body.stock
  );

  return producto;
};

module.exports = router;
