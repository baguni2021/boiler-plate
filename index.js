const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://esnature:1q1q1Q1Q@cluster0.q0wp2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 에러방지 구문
}). then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//mongodb+srv://esnature:<password>@cluster0.q0wp2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority