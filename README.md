# Burger Queen

## Preámbulo

[React](https://reactjs.org/) es uno de los _frameworks_ y _librerías_ de JavaScript más utilizados por lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

## Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
_backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      | Precio \$ |
> | ------------------------- | --------- |
> | Café americano            | 20        |
> | Café con leche            | 28        |
> | Sandwich de jamón y queso | 35        |
> | Jugo de naranja           | 15        |
>
> Y otro menú para el resto del día:
>
> | Ítem                         | Precio |
> | ---------------------------- | ------ |
> | **Hamburguesas**             | **\$** |
> | Hamburguesa sencilla de res  | 40     |
> | Hamburguesa doble de res     | 55     |
> | Hamburgesa sencilla de pollo | 40     |
> | Hamburgesa doble de pollo    | 55     |
> | Hamburgesa vegetariana       | 40     |
> | Queso                        | 15     |
> | Huevo                        | 15     |
> | **Acompañamientos**          | **\$** |
> | Papas a la francesa          | 15     |
> | Aros de cebolla              | 15     |
> | **Para tomar**               | **\$** |
> | Agua                         | 10     |
> | Refresco                     | 15     |

>

> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos de aprendizaje

1. El objetivo principal de es aprender a construir una _interfaz web_ usando
   el _framework_ elegido (React, Angular o Vue). Todos estos frameworks de
   Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado
   sincronizados**. Así que esta experiencia espera familiarizarte con el concepto
   de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
   a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

2. Como objetivo secundario, deberás seguir las recomendaciones para PWAs
   (_Progressive Web Apps_), lo cual incluye conceptos como **offline**. Para
   guiarte con respecto a este tema te recomendamos usar [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es),
   que es una herramienta de Google que nos ayuda a asegurar que nuestras web apps
   sigan "buenas prácticas". De hecho, usaremos Lighthouse a la hora de evaluar el
   proyecto.

3. Finalmente, la interfaz debe estar diseñada específicamente para correr en
   **tablets**.

Tópicos: _react_, _angular_,_vue_, _pwa_, _offline-first_, _service-worker_.

## Consideraciones

Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Fierbase (hosting, firestore y
functions):

```text
./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md

```

Para este proyecto se trabajó de la mano de una UX designer. Este es el prototipo de alta
fidelidad propuesto por Brenda Vazquez.![burger-queen](https://i.ibb.co/x52jGwh/proto.png)

Para utilizar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Criterios del proyecto

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una _tablet_

## Primeros pasos

1. El primer paso de este proyecto debe ser convertir el menú descrito por el
   cliente en una estructura que podamos poner en un archivo JSON para después
   _pintar_ en la pantalla

2. Haz un _fork_ de este repo (en GitHub).

3. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

4. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

5. Crear proyecto en [Firebase](https://firebase.google.com/)

6. Habilitar Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

7. Instalar utilidad de línea de comando de Firebase:

   ```sh
   npm i -g firebase-tools
   ```

8. Ahora usa el siguiente comando para acceder con tu cuenta de Google:

   ```sh
   firebase login
   ```

9. Agregamos entorno de producción para desplegar:

   ```sh
   firebase use --add
   ```

   Elige el proyecto de Firebase y un alias:

![image](https://user-images.githubusercontent.com/25906896/46550922-06d6e480-c89c-11e8-8ee1-7cdbe0445884.png)

10. Instalar dependencias de cloud functions:

```sh
# usando yarn
cd functions && yarn && cd ..
# alternativamente, usando npm
cd functions && npm install && cd ..
```

11. Desplegar:

```sh
firebase deploy
```

12. Llegado a este punto ya puedes comenzar con el _front-end_ :wink:

---

Nota para estudiantes que elijan React y quieran usar `create-react-app`:

Si tratas de usar `create-react-app` en el directorio del proyecto recibirás un
error diciendo que hay archivos que podrían presentar un conflicto. Para evitar
este problema puedes crear una nueva app usando `create-react-app` y de ahí
_mezclarla_ con la carpeta del proyecto:

```sh
# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
```

---

## Pistas / Tips

### Framework / library

- [React](https://reactjs.org/)

### Herramientas

- [npm-scripts](https://docs.npmjs.com/misc/scripts)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)

### Autores

- Olga Contreras, Brenda Vazquez
