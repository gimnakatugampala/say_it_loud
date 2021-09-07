const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const path = require('path')
const passport = require('passport')



const connectDB = require('./config/db')

const app = express()

// Load config
dotenv.config({path:'./config/config.env'})

// Passport Config
require('./config/passport-google')(passport)
require('./config/passport-facebook')(passport)

connectDB()

app.set('view engine', '.hbs');

// Body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())


// Moragn 
app.use(morgan('dev'))


// Body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Method Override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  }))

  // Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

  // Static Folder / CSS
app.use(express.static(path.join(__dirname,'public')))


// Handlebars
app.engine('.hbs', exphbs({defaultLayout:'main',extname: '.hbs'}));

// Routes
app.use('/',require('./routes/auth'))
app.use('/posts',require('./routes/index'))




const PORT = process.env.PORT || 3000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
