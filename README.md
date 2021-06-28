# Proyecto final 1ra parte

1ra parte del producto final de coderhouse.

## Resúmen

La 1ra parte del proyecto consta de entregar una API sobre productos y carritos. Estás rutas van a estar protegidas por un middleware que van a validar si el usuario es o no administrador.

### API

#### GET https://charm-slender-scaffold.glitch.me/productos/listar

#### GET https://charm-slender-scaffold.glitch.me/productos/listar/:id

#### POST https://charm-slender-scaffold.glitch.me/productos/guardar

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

#### PUT https://charm-slender-scaffold.glitch.me/productos/actualizar/:id

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

#### DELETE https://charm-slender-scaffold.glitch.me/productos/borrar/:id

headers:

```
administrador: true
```

#### GET https://charm-slender-scaffold.glitch.me/carrito/listar

#### GET https://charm-slender-scaffold.glitch.me/carrito/listar/:id

#### POST https://charm-slender-scaffold.glitch.me/carrito/guardar/id_producto

El parametro id_producto luego va a pertenecer al producto creado (Si mal no entendí).
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

#### DELETE https://charm-slender-scaffold.glitch.me/carrito/borrar/id

### Para correr el proyecto

```
npm start
```
