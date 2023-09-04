# PRUEBA TECNICA

## Desarrollar una Aplicación WEB que contenga los siguientes módulos:

### Creación de usuarios

#### Datos Mínimos:

- Nombres (String – Longitud 50)
- Apellidos (String – Longitud 50)
- Fecha de Nacimiento (Date)
- email (String – Longitud 50)
- Numero de Documento (Number – Longitud 7)
- Salario (Decimal – Longitud 10 con 2 decimales)
- Estado (Activo/Inactivo – Activo por defecto) - select

#

### Creación de Áreas

#### Datos Mínimos

- Código (Number - Longitud 2)
- Nombre (String – Longitud 50)
- Líder (Number – Longitud 7) - select(usuarios creados)
- Estado (Activo/Inactivo – Activo por defecto)

#

### Consulta de Áreas

- Una grilla que permita mostrar los resultados.
- Debe poder editar un área.
- Debe poder eliminar un área.
- Debe poder crear un área.

#

### Consulta de Empleados

- Una grilla que permita mostrar los resultados.
- Debe poder editar un usuario.
- Debe poder eliminar un usuario.
- Debe poder crear un usuario.

#

### Dashboard – Panel de Control (Opcional)

#### Datos Mínimos

- Cantidad total de usuarios (Activos/Inactivos).
- Cantidad total de áreas (Activos/Inactivos).
- Cantidad de usuarios por área.
- Listado de líderes de área.

#

### Condiciones

- Se deben validar todos los campos de ingreso de datos.
- Se deben controlar los posibles errores de la aplicación.
- La interfaz debe poder visualizarse sin problemas en al menos dos (2) navegadores.
- El desarrollo debe ser bajo Angular<_TypeScript_> (última versión) y syncfusion (HTML y CSS).
- El formato de intercambio de información debe ser JSON.
- Se debe subir el fuente a Git y crear un repositorio publico y compartir el repositorio
- Capacidad responsive de la interfaz.
- Consumo de servicios WEB (REST).
- Creación de servicios que consuman una BD hecha en Firebase.
  Entregables
- Código fuente (obligatorio).
- Documento de Pruebas Unitarias con imágenes de evidencia (obligatorio).
