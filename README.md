# Descripción

## Corrrer en dev

1.- Clonar el repositorio
2.- Crear una copa del ```.env.ejemplo``` y renombrarlo a ```.env```y cambiar las variables de entorno
3.- Hacer la instalación de ```npm install```
4.- Levantar la base de datos ```docker compose up -d```
5.- Correr las migraciones de prisma ```npx prisma migrate dev --name nombre```
6.- Configurar Prisma ```npx prisma init --datasource-provider PostgreSQL```
7.- Ejecutar seed ```npm run seed```
8.- Correr el proyecto ```npm run dev```

## Correr en prod
