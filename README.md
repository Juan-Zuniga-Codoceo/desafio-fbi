# FBI System Login

Este proyecto es un sistema de autenticación simple utilizando Node.js, Express y JWT. Los agentes del FBI pueden iniciar sesión, recibir un token JWT y acceder a una página restringida.

## Installation

Clona este repositorio:

```bash
git clone https://github.com/Juan-Zuniga-Codoceo/desafio-fbi.git
```
Navega al directorio del proyecto:

```bash
cd fbi-system
```
Instala las dependencias:

```bash
npm install
```
## Ejecución
Para iniciar el servidor, ejecuta:
```bash
npm run dev
```
El servidor estará disponible en http://localhost:3000.

## Uso
1. Navega a la página de inicio de sesión: http://localhost:3000.
2. Inicia sesión con las credenciales proporcionadas en data/agents.js.
3. Serás redirigido a una página restringida que muestra tu email y proporciona un enlace para volver a la página de inicio.

## Estructura del Código
* index.js
Configura y arranca el servidor, sirviendo archivos estáticos y manejando rutas.

* authController.js
Maneja la lógica de autenticación, verifica credenciales y genera un token JWT.

* restrictedController.js
Verifica el token JWT y muestra la página restringida.

* index.html
Formulario de inicio de sesión.

* style.css
Estilos para el formulario de inicio de sesión.

## Dependencias
* express
* body-parser
* dotenv
* jsonwebtoken
* cookie-parser

## Contribución

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio y envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.