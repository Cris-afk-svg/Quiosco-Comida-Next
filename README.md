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
