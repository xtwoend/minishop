import express from 'express'
import redis from 'redis'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import redisConn from 'connect-redis'
import { Nuxt, Builder } from 'nuxt'
import appConfig from '../config'
import uuid from 'uuid/v1'
import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const client = redis.createClient()
const redisStore = redisConn(session)

app.set('port', port)
app.use(session({
  store: new redisStore({ host: 'localhost', port: 6379, client: client, ttl :  260}),
  secret: appConfig.app.key,
  name: '_ms',
  // rolling: true,
  resave: true,
  saveUninitialized: true,
  cookie: { 
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/', 
    httpOnly: true,
    signed: false
  }
}))
app.use(cookieParser(appConfig.app.key))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// middleware
app.use(function (req, res, next) {
  if (!req.cookies['_sid']){
    res.cookie('_sid', uuid())
  }
  next()
})

app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
