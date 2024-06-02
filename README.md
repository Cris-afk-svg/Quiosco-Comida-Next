This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Quiosco de Comida

Breve descripción del proyecto.


## Historial de Cambios

Todos los cambios notables en este proyecto se documentarán en este archivo.

### [Unreleased]

#### Añadido
- **Clase Text cuatro:** Añadida para estilizar el texto con `className Text cuatro, xn, text center y font blank`.
- **Resumen del pedido:** Implementado el resumen del pedido de las personas.
- **Clase MD Flex uno:** Añadida a `main` para que tome todo el espacio disponible (`className md Flex uno`).
- **Clase MDH screen:** Añadida a `main` para manejar la altura de pantalla (`className MDH screen`).
- **Clase MD overflow y scroll:** Añadida a `main` para manejar el desbordamiento y el scroll (`className md overflow y scroll`).
- **Padding de cinco:** Añadido a `main` para agregar un padding de cinco (`padding de cinco`).
- **Integración con Prisma:** Introducción del ORM Prisma para la gestión de la base de datos.
- **Uso de Render:** Configuración inicial para utilizar Render como servicio de base de datos.

### [1.0.0] - 2024-05-29

#### Añadido
- Funcionalidad inicial de la aplicación.
- Documentación en el README.

#### Corregido
- Corrección de errores menores en el código base.

---

## Detalles Adicionales

Para más detalles sobre cómo implementar las clases y configuraciones mencionadas:

### Implementación de Clases en el Layout

- **Texto Resumen:** 
  ```jsx
  <div className="Text cuatro xn text-center font-blank">
    Aquí va a estar el resumen del pedido de las personas.
  </div>

###  [Unreleased]]

## Instalación de Dependencias

1. **Instalar Prisma Client**
2. **Instalar las Dependencias de Desarrollo de Prisma**
3. **Configuración de la Base de Datos en Render**

1. **Crear una Nueva Base de Datos PostgreSQL en Render:**
    - Acceder al dashboard de Render.
    - Seleccionar "New Postgres".
    - Asignar un nombre a la base de datos, por ejemplo: `quiosco_next`.


2. **Obtener la URL de Conexión:**
    - Reemplazar el valor de `DATABASE_URL` en tu archivo `.env` con esta URL.

## Confirmación de Conexión

1. **Verificar la Conexión**
2. **Definir Modelos en Prisma**

### [1.0.1] - 2024-05-31


###  [Unreleased]]

## Routing Dinámico

Esta estructura permite que cuando un usuario navegue a /order/hamburguesa, 
el componente pueda leer hamburguesa como el valor de category y usarlo para realizar consultas a la base de datos y mostrar los productos correspondientes.

### [1.0.2] - 2024-05-31


###  [Unreleased]]

## Resaltando la Categoría Actual en Next.js

Al navegar por diferentes categorías, queremos que se resalte visualmente la categoría actual en el menú lateral.


### Solución con useParams:

**1.- Utilizamos el hook useParams:**  de next/navigation para obtener los parámetros de la URL en un componente de cliente.
Convertimos el componente a un componente de cliente añadiendo use client en la parte superior.
Implementamos console.log(params) para verificar los parámetros obtenidos.

**2.- Resaltando la Categoría Actual:**
Utilizamos los parámetros obtenidos para comparar con el slug de cada categoría.
Aplicamos una clase CSS condicional (bg-number-400) para resaltar la categoría actual.
Mejorando la Autocompletación:

**3.- Definimos un tipo genérico para useParams** para mejorar la autocompletación y la validación en el código.
Esto permitió detectar errores en los parámetros utilizados y asegurar que solo se usen parámetros válidos.
Caché de Consultas con Prisma:

**4.- Observamos cómo Next.js cachea automáticamente las consultas realizadas con Prisma.**
Las consultas a categorías visitadas previamente no se vuelven a ejecutar, mejorando el rendimiento de la aplicación.

### [1.0.3] - 2024-06-01


###  [Unreleased]]

## Agregando Orden de la comida

**1.- Agregar articulos a la orden**

**2.- Mostrar todos los articulos de la orden**

**3.- Evitar que se dupliquen esos objetos y muestre unicamente un producto seleccionado**

**4.- Incrementar la cantidad del producto y decrementar**

**5.- Cancelar la orden**

**6.- Calcular el total a pagar**


### [1.0.4] - 2024-06-01



###  [Unreleased]]

## Validación de información del pedido

**1.- Recuperar Datos de Formulario con formData**
Recuperar datos de formularios utilizando formData. Esta técnica es esencial para manejar la entrada de datos del usuario y prepararlos para su validación y procesamiento.

**2.- Validación de Datos con ZOD en el Cliente**
 Utilizar ZOD para validar datos del lado del cliente. Implementaremos esquemas de validación que aseguren que los datos ingresados por los usuarios cumplan con los requisitos esperados.

**3.- Mostrando errores de validación con Toast**
Mostrar errores de validación utilizando Toast, una librería de notificaciones que nos permitirá informar al usuario de una manera amigable y efectiva sobre los problemas encontrados en su entrada de datos.

**4.- Validación de Datos con ZOD en el Servidor**
Validar datos en el servidor utilizando ZOD. Esta capa adicional de validación asegura que los datos enviados desde el cliente sean seguros y conformes a nuestras expectativas antes de ser procesados o almacenados.

**5.- Validando el Resto de la Orden**
Nos enfocaremos en validar el resto de los datos de la orden, asegurando que toda la información necesaria esté presente y sea correcta antes de proceder con el procesamiento de la orden.



**6.- Ingresar Datos a la Base de Datos**
Ingresar datos validados en la base de datos usando Prisma. 

**7.- Evitar Ordenes Duplicadas**
Mecanismos para evitar la creación de órdenes duplicadas. Este paso es crucial para mantener la integridad de los datos y asegurar que cada orden sea única.

### [1.0.5] - 2024-06-01



###  [Unreleased]]

## Creando Panel de Administración

1. **Creando las Rutas y Layout** 
2. **Creando un componente re-utilizable para los títulos** 
3. **Navegación en el panel de administración** 
4. **Obtener las Ordenes Pendientes** 
5. **Mostrar las Ordenes Pendientes** 
6. **Mostrar el Contenido de la Orden** 
7. **Creando la acción para completar ordenes** 
8. **Marcar Ordenes Completas y Validación** 
9. **Revalidación de datos en Next.js** 

### [1.0.6] - 2024-06-01



###  [Unreleased]]

## Administración de Productos
1.- **Listando los Productos**
En esta lección, listar los productos. Se utiliza Next.js y Prisma para obtener y mostrar los productos almacenados en la base de datos.

2.- **Incluir la categoría en la tabla**
Añadido la categoría de cada producto en la tabla de productos para una mejor organización y visualización. Obtener y mostrar esta información de manera eficiente.

3.- **Creando un Paginador**
Se creo un paginador para manejar la visualización de grandes cantidades de productos. 

4.- **Creando routing para navegar en el paginador**
Se implemento el routing necesario para permitir la navegación entre diferentes páginas del paginador, asegurando que la URL refleje la página actual.

5.- **Calcular total de páginas**
Se calcula el número total de páginas necesarias para mostrar todos los productos, basándonos en la cantidad de productos por página definida.

6.- **Añadir el botón de página anterior**
Se añado un botón para navegar a la página anterior en el paginador. Veremos cómo manejar el estado actual de la página y actualizarlo correctamente.

7.- **Añadir paginador por números**
Se implemento un paginador que permita la navegación por números de página, proporcionando una experiencia de usuario más intuitiva y rápida.

8.- **Creando un Formulario de búsqueda de productos**
Se creo un formulario de búsqueda para permitir a los usuarios buscar productos específicos.

9.- **Validando el Buscador**
Se Añadio validación al formulario de búsqueda para asegurarnos de que los usuarios ingresen términos de búsqueda válidos.

10.- **Recuperar el valor de búsqueda**
recuperar el valor de búsqueda ingresado por el usuario y utilizarlo para filtrar los productos mostrados.

11.- **Mostrando los resultados de búsqueda**
Se muestra los resultados de la búsqueda en la interfaz de usuario.

### [1.0.7] - 2024-06-01


###  [Unreleased]]

## Creación de Productos

1.- **Routing y Formulario para crear productos**
Se configurara el routing y a crea un formulario para la adición de nuevos productos en la aplicación. 

2.- **Mostrando las categorías en el formulario**
Se Añadio un campo en el formulario para seleccionar la categoría del producto. 

3.- **Validando la creación de Productos**
Se Añadio validación al formulario de creación de productos utilizando ZOD para asegurarnos de que los datos ingresados sean correctos y completos.

4.- **Cloudinary para Subir imágenes**
Se configuraro Cloudinary para manejar la subida de imágenes. 

5.- **Creando el Componente para subir imágenes**
Se Desarrollo un componente de React para la subida de imágenes. 

6.- **Obtener la URL de la imagen que se sube**
Se obteniene la URL de las imágenes que se suben a Cloudinary. Esta URL se utilizará para almacenar la referencia de la imagen en la base de datos.

7.- **Almacenando el Producto a la base de datos**
Se almacena los datos del nuevo producto, incluyendo la URL de la imagen, en la base de datos utilizando Prisma.

8.- **Cómo mostrar las imágenes si vienen de Cloudinary**
Se muestra las imágenes que se almacenan en Cloudinary en la aplicación. 

### [1.0.8] - 2024-06-01



###  [Unreleased]]

## Editar Productos

1. **Obtener el producto a editar**
Se recuperan los datos del producto que se desea editar. 

2. **Ajustar el Formulario de Edición y Llenar los campos automáticamente**
Se añadio la funcionalidad al formulario de edición para que se llenen automáticamente los campos con los datos del producto seleccionado. Esto mejorará la experiencia del usuario al editar productos.

3. **Validando las imágenes**
Se validan las imágenes del producto durante el proceso de edición. 

4. **Guardando los cambios de Productos**
Se guardan los cambios realizados en los productos.

### [1.0.9] - 2024-06-02
