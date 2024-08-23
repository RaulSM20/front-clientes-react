# Sistema de Login y Registro con JWT

Este proyecto es una aplicación simple que implementa un sistema de autenticación de usuarios mediante JWT (JSON Web Token). La aplicación permite a los usuarios registrarse, iniciar sesión y acceder a rutas protegidas una vez autenticados.

## Características

- **Registro de Usuario:** Permite a los usuarios crear una cuenta proporcionando un nombre de usuario y una contraseña.
- **Inicio de Sesión:** Los usuarios pueden autenticarse proporcionando su nombre de usuario y contraseña. Al autenticarse con éxito, reciben un token JWT.
- **Protección de Rutas:** Algunas rutas están protegidas y solo son accesibles si el usuario proporciona un token JWT válido.
- **Validación de Token:** El token JWT es validado en cada solicitud a rutas protegidas, garantizando que solo los usuarios autenticados puedan acceder.
