# Temas cubiertos en el proyeto
* Uso del framework **express**.
* Uso de **mongoose** para el ORM de la aplicación y la interacción con MongoDB.
* Encriptación de password con la librería **bcryptjs**.
* Autenticación de usuarios con JWT.
* Uso de variables de entorno para conexiones a base de datos y semilla de encriptación.
* Creación de middleware para autenticación usando token de usuario.
* Generación de endpoints para el CRUD.

# Comandos de ejecución del proyecto
### Para instalar los paquetes del package.json y ejecutar se ingresan los siguientes comandos:
```
npm i
npm run dev
```

# Primera sesión
### [Paso 1] Comando de creación del proyecto
```
npm init
```
### [Paso 2] Instalación de express web framework
```
npm i express
```
### [Paso 3] Instalación de nodemon para detección de cambios de código y ejecución automática del servidor
```
npm i -D nodemon
```
### [Paso 4] Se ejecuta el servidor con el siguiente comando para el perfil dev, se debe configurar el perfil de producción posteriormente en el package.json
```
npm run dev
```
### [Paso 5] Instalación ORM mongoose y configuración de variables para conexión a BD
```
npm i mongoose
```

# Segunda sesión
### [Paso 1] Definición del modelo usuario con mongoose
### [Paso 2] Creación de rutas para la API usuario en el archivo usuarioRouters.js
### [Paso 3] Creación de controlador de usuarios

# Tercera sesión
### [Paso 1] Instalación bcrypt para encriptar la contraseña y pruebas con postman del endpoint para crear usuarios
```
npm install bcryptjs
```

# Cuarta sesión
### [Paso 1] Validación de existencia de usuarios en la base de datos por email para no duplicar cuentas (archivo usuarioController.js).
### [Paso 2] Creación de los archivos authController.js y authRouters.js para realizar la autenticación con JWT. Se validan los tokens creados en la página
```
https://jwt.io/
```
### [Paso 3] Instalación de la libreria para crear JWT
```
npm i jsonwebtoken
```
### [Paso 4] Creación de archivo con variables de entorno para uso de TOKEN
### [Paso 5] Instalación de la libreria para usar variables de entorno
```
npm i dotenv
```

# Quinta sesión
### [Paso 1] Creación middleware para autenticación
### [Paso 2] Definir en los headers de la petición GET la clave **x-auth-token** y como valor el **token**
### [Paso 3] Se agrega la funcion de **usuarioAutenticado** en **authController.js** luego de verificar las credenciales del usuario con el token
### [Paso 4] Se valida con postman el retorno del usuario luego de la autenticación

# Última sesión backend
### [Paso 1] Se agregan los modelos para **producto** y **categoria** relacionando los productos a una categoría.
### [Paso 2] Se agregan las rutas para los modelos previamente definidos en los archivos **productoRouters.js** y **categoriaRouters.js** para realizar el CRUD.
### [Paso 3] Se agregan los controladores **productoController.js** y **categoriaController.js**.
### [Paso 4] Se crean respuestas de prueba y se utiliza postman para verificar el enrutamiento hacia los controladores.
### [Paso 5] Se añade la ruta **/api/categoria** al index.js.