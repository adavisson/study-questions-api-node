# study-questions-api-node

## About
An API written in nodejs for https://study-buddy.andydavisson.com

## To Run
1. Clone the repository and install dependencies:
``` npm install ```

2. Run database migrations:
``` npm run-script db:migrate ```

3. Seed database with questions from 'src/persistence/seedData/testData.js':
``` sequelize db:seed:all ```

4. Start the server:
``` npm start ```