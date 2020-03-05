const subjectRouter = require('./src/routes/subject');
const questionRouter = require('./src/routes/question');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3001

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Study Questions API'))

app.use('/subjects', subjectRouter);
app.use('/questions', questionRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))