const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key.js');
const { User } = require('./models/User.js');

//application/x-www-gorm-urlencoded
app.use(express.urlencoded({extended: true}));

//application/json
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 에러방지 구문
}). then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.post('/register', (req, res) => {
  //회원가입할때 필요한 정보를 client  에서 가져오면 
  //그것들을 데이터베이스에 넣는다

  const user = new User(req.body)

  user.save((err, userinfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//mongodb+srv://esnature:<password>@cluster0.q0wp2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority