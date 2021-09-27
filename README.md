### dashboard_lista_recibos :zap:

*****
Aplicación que permite conectarse y visualizar los resultados una lista de recibos.

*****
Se divide la lógica del Backend y el Frontend.

#### Backend :back:

- Conectar la Base de datos
- Hacer consultas básicas del CRUD
- Hacer las funciones del CRUD


#### Instalaciones :computer:

1. Node JS :heavy_check_mark:
2. Sql Server :heavy_check_mark: 



#### Comandos :computer:

Después de tener instalado el Node JS creamos el archivo package.json con los comandos

```node
npm init -y
```

Intalaremos algunos módulos que vamos a necesitar para crear nuestro crud

- **mssql** un módulo que está relacionado como sql server
- **express** es un módulo que nos va ayudar con las rutas
- **cors** nos da los permisos para trabajar con varias ip
- **morgan**
- **dotenv** son las variables de entorno para no tenerlas directamente en nuestro código

```
npm install mssql express morgan  cors dotenv
```

Se genera una API REst para que el Frontend lo pueda consumir, a través del localhost

***Frontend***

Se encuentra ubicado dentro del mismo repositorio en el proyecto [Frontend](https://github.com/Erica1912/lista_recibos_frontend)
para separar las lógicas, del backend y el frontend

**Erica Ruiz**
