# Proyecto final 1ra parte

1ra parte del producto final de coderhouse.

## Resúmen

La 1ra parte consta de entregar una API sobre productos y carritos. Estás rutas van a estar protegidas por un middleware que va a validar si el usuario es o no administrador.

### API

### GET /productos/listar

### GET /productos/listar/:id

### POST /productos/guardar

El id del producto es autonúmerico.

headers:

```
Content-Type: application/json
administrador: true
```

json

```
 {
  "nombre": "mortadela",
  "descripcion": "mortadela",
  "codigo":"123",
  "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WDu8nC8fZc2mQqfxPaqrVIRdQm9zHbkMr3zR0crFRwfcxSSC5optlgl_MgErZ1E8nDL_zlquepUo1A&usqp=CAU",
  "precio": 150,
  "stock": 15
}
```

### PUT /productos/actualizar/:id

headers:

```
Content-Type: application/json
administrador: true
```

json

```
 {
  "nombre": "mortadelaaaaa",
  "descripcion": "mortadelaaaaaa",
  "codigo":"123",
  "foto": "nohayfoto.jpg",
  "precio": 150,
  "stock": 15
}
```

### DELETE /productos/borrar/:id

headers:

```
administrador: true
```

### GET /carrito/listar

### GET /carrito/listar/:id

### POST /carrito/guardar/id_producto

El parametro id_producto luego va a pertenecer al producto creado (Si mal no entendí)
El id del carrito es autonúmerico.

headers:

```
Content-Type: application/json
```

json

```
{
	"producto":{
        "nombre": "mortadela",
        "descripcion": "mortadela",
        "codigo": "123",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WDu8nC8fZc2mQqfxPaqrVIRdQm9zHbkMr3zR0crFRwfcxSSC5optlgl_MgErZ1E8nDL_zlquepUo1A&usqp=CAU",
        "precio": 150,
        "stock": 15

	}
}
```

### DELETE | /carrito/borrar/id
