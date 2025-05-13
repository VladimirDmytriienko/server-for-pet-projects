const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require('dotenv').config()

const db = require("./db/db")


const srv = express()
const PORT = process.env.PORT || 3003

srv.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

srv.use(express.json())
srv.use(cookieParser())
srv.use(morgan(":method :url :status"))

srv.listen(PORT, () => console.log(`Server running on port ${PORT}`))
