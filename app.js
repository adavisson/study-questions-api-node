const subjectRouter = require('./src/routes/subject');
const questionRouter = require('./src/routes/question');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/subjects', subjectRouter);
app.use('/questions', questionRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))