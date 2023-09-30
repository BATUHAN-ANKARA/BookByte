const express = require("express")
const configs = require("./configs/index")
const db = require("./db/index")

const app = express()

configs.serverConfig.initialServerConfig()

const PORT = process.env.PORT || 3000
//ladbfjdsbfkjdabfkjdsbakf
app.use(express.json())

db.mongooseConnection.connectMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`)
  })
})
