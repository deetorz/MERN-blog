const express = require("express")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("./models/User")
const secrets = require("./secrets")

const app = express()

const salt = bcrypt.genSaltSync(10)

app.use(cors())
app.use(express.json())

mongoose.connect(secrets.mongoConnection)

app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  try {
    const user = await User.create({username, password: bcrypt.hashSync(password, salt)})
    res.json(user)
  } catch (e) {
    res.status(400).json(e)
  }
})

app.listen(4000)