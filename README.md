# DevJobs proyect

## Description

devJobs is a project created with the idea of practicing and learning new technologies, the center of
idea is a web platform in which job offers in the Systems area are published and searched.

## Members

    - Alexis Zacre
    - Ezequiel Rango
    - Juan De Giorgi
## Technologies

    - NodeJs
    - express
    - Passport
    - MySQL
    - Sequelize 
    - JWT
    - NodeMailer 
    - Docker 

## ENV variables

| Name              | Type   | Description                                            |
| ----------------- | ------ | ------------------------------------------------------ |
| SERVER_PORT       | number | Server listening port                                  |
| DB_USERNAME       | string | Database userName                                      |
| DB_PASSWORD       | string | Database password                                      |
| EMAIL_ADDRESS     | string | Email address                                          |
| EMAIL_PASSWORD    | string | Email password                                         |
| JWT_SECRET        | string | Secret key for generate JWT tokens                     |

## Environment setup

1. copy and rename .env.example file to .env ,fill variables with your data. 


2. Install dependencies :

        npm install

3. Create database :

        npm run db:up

4. Fill database :

        npm run db:migrate

5. Run proyect :

        npm start