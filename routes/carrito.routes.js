const express = require("express");
const router = express.Router();

const CarritoRepositorio = require("../repositorio/carrito-repositorio");

const Carrito = require("../api/carrito");
const Producto = require("../api/producto");

let carritos;

const cargarCarritos = async () => {
  carritos = await CarritoRepositorio.getCarritos();
};

cargarCarritos();

router.get("/listar", async (req, res) => {
  return res.json(carritos);
});

router.get("/listar/:id", (req, res) => {
  return res.json(carritos.filter((p) => String(p.id) === req.params.id));
});

router.post("/guardar/:id", (req, res) => {
  try {
    const producto = getProducto(Number(req.params.id), req.body.producto);

    const carrito = new Carrito(
      req.body.id,
      Date.now().toLocaleString("es-AR"),
      producto
    );

    carritos.push(carrito);

    CarritoRepositorio.guardar(carritos);

    return res.status(200).json({ message: "carrito guardado" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/borrar/:id", (req, res) => {
  const index = carritos.findIndex((p) => String(p.id) === req.params.id);
  carritos.splice(index, 1);

  return res.status(200).json({ message: "carrito borrado" });
});

const getProducto = (id, producto) => {
  const obj = new Producto(
    id,
    Date.now().toLocaleString("es-AR"),
    producto.nombre,
    producto.descripcion,
    producto.codigo,
    producto.foto,
    producto.precio,
    producto.stock
  );

  return obj;
};

module.exports = router;
