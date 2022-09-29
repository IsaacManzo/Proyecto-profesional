# **Tecnologias**

### *front-end:*

- *React* - *React-scripts*
- *Redux* - *Redux/Toolkit*
- *Styled components*

### *back-end:*

- *Express* 
- *Sequelize* 
- *Postgres* - *pg/postgress* - *pg-store*
- *Json web tokens* - *Bcript*
- *Nodemon*
- *Cookie-parser*
- *Cors*

### **React** - *React-scripts*

**React** se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.
**React-scripts** Se usa para agregar los scripts como el npm start.

### **Redux - Redux/Toolkit**

**Redux** es una librería de JavaScript que te permite manejar el estado de una aplicación. También podríamos decir que es un patrón de arquitectura de datos que permite manejar estados.

**Redux** **Toolkit** tiene como objetivo simplificar Redux con una abstracción conveniente sobre el «texto estándar».

### **Styled** **components**

**Styled** **components** es una biblioteca de componentes de interfaz de usuario para React. js que está diseñada para la accesibilidad.

### **Express**

**Express** lo utilizaremos para inicializar el servidor y parte de la configuracion.

### **Sequelize** - **pg/postgress** - **pg-hstore**

Con la aplicacion **pgAdmin 4** de **pg**, cree la db (proyectoProfesional). **Sequelize** sera la herramineta que usaremos para setear la db (base de datos).

### **Json web token** - **Bcript** 

**Json** **web** **token** y **Bcript** lo utilizaremos para la validacion de los tokens, para crearlos y para setear las cookies.

### **Cookie-parser**

Cookie-parser analiza el encabezado Cookie y rellena req. cookies con objeto marcado con los nombres de las cookies.

### **Cors**

Se usa para poder enviar data json desde el **back** al front, y que el front pueda traducir los datos y entendenrlos o cambiarles el formato a uno legible por el mismo.

# **Scheme design**

![No cargo la imagen](https://i.pinimg.com/564x/c7/07/b3/c707b3d1acab736c3c72df8539ba9e23.jpg)

# **Mis pasos**

## **Primer semana**
### Iniciando el back

*README, CARPETAS, DEPENDENCIAS, INICIE REACT, CREE DB Y LEVANTE SERVER, CREE RUTA AUTH

*Primero organice el README con las dependencias que iba a usar

*Primero realice el armado de carpetas

*Luego instale las dependencias

*Inicialice el proyecto con react

*Cree la db en pgAdmin y la enlacecon sequielize

*Luego cree el primer modelo

*Despues cree la ruta y el controller de la ruta

*Prueba final de que la ruta anda

## **Segunda semana**
### Terminando el back

*TOKEN, RUTAS ADMIN, MIDDLEWARES, MODELOS, RELACIONES, TABLA INTERMEDIA FAVORITO, RUTAS FAVORITO

*Arranque el hasheo de la contraseña, hook para modelo User y hasheo con bcrypt

*Cree la ruta de logueo, deslogeo, persistencia de login y ruta para validar al usuario

*Configure jwt, cookies, tokens, SECRET, etc.

*Crear usuario, loguear deslogear (primer semana)

*Rutas para admin, editar una casa, eliminar o agregar

*Cree todos los modelos

*Tabla Favorito creada por relaciones

*Probando las rutas de favoritos

## **Tercerca semana**
###  Back y front

*RUTA FAVORITOS AGREGAR, RUTAS REVIEW, ARRANCANDO FRONT

*Termine las rutas de favoritos

*Arme las rutas de review

*Arme las carpetas de front

*Cree componente Registro y le agregue estilos

## **Cuarta semana**
### Front y enlace al back

*COMPONENTES,ESTILOS, AXIOS, REDIRECCION DE BOTONES, ENLACE DE RUTAS CON REACT-ROUTER, CONFIGURACION DE BOTONES, 

*Cree componentes y commons

*Enlace el registro con axios para que llegue la data a la db
