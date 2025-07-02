# Sistema de Gestión Empresarial

## Descripción del proyecto
Implementación completa de un sistema que permitirá a los participantes:

    Registrarse de forma sencilla y eficiente.

    Gestionar sus postulaciones y revisar su estado en tiempo real.

El objetivo principal es desplegar todas las habilidades en frontend y backend, demostrando la capacidad de construir aplicaciones web escalables, seguras y con una excelente experiencia de usuario.

## Requisitos ⚙️
- Express
- Handlebars
- PostgreSQL
- JWT
- Express-fileupload

## Instalación 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

Que cosas necesitas para instalar el software.

```
Visual Studio Code, Node, Git, Github
```
### Instalación 🔧

Realizar un fork o clon del proyecto.
Importar proyecto al IDE de preferencia para ejecutar.
Para ejecutar en consola realizar el build (empaquetado) de la aplicación.

```bash
git clone git@github.com:VictorPenafiel/Node_Express_SkatePark.git
cd proyecto
```

## Instrucciones para Cargar la Base de Datos 

Se debe persistir la información de los usuarios en PostgreSQL, por lo que deberás usar las
siguientes sentencias SQL para la creación de la base de datos y la tabla de participantes.

## Instrucciones para crear la base de datos

```bash
sql
```

```bash
CREATE DATABASE skatepark;

CREATE TABLE skaters (id SERIAL, email VARCHAR(50) NOT NULL, nombre
VARCHAR(25) NOT NULL, password VARCHAR(25) NOT NULL, anos_experiencia
INT NOT NULL, especialidad VARCHAR(50) NOT NULL, foto VARCHAR(255) NOT
NULL, estado BOOLEAN NOT NULL);

```

## Capturas de Pantalla del Proyecto terminado
Registro

![Imagenes](public/uploads/Screenshot_1.png)

Login

![Imagenes](public/uploads/Screenshot_2.png)


Terminal

![Imagenes](public/uploads/Screenshot_3.png)

## Construido con 🛠️

* [Node](https://nodejs.org/es)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)

## Contribuye 🖇️

```bash
# Fork → Crea rama → Cambios → Commit → Pull Request
```

## Autores ✒️

https://github.com/victorpenafiel

## Licencia 📄

Ningún Derecho Reservado.  [Creative Commons Atribución/Reconocimiento 4.0 ](https://creativecommons.org/licenses/by/4.0/deed.es).

Este proyecto está bajo la Licencia - mira el archivo [LICENSE.md](LICENSE.md) para detalles