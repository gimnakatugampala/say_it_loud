const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')


const connectDB = require('./config/db')

const app = express()

// Load config
dotenv.config({path:'./config/config.env'})

connectDB()

// Body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())


// Moragn 
app.use(morgan('dev'))

// Handlebars
app.engine('.hbs', exphbs({defaultLayout:'main',extname: '.hbs'}));

// Routes
app.use('/',require('./routes/index'))



const PORT = process.env.PORT || 3000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
