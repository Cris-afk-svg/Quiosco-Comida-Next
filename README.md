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


