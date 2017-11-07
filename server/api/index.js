import express from 'express'
// import { Router } from 'express'

import auth from './auth'
import cart from './cart'
import favourites from './favourites'

const app = express()
const router = express.Router()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add USERS Routes
router.use(auth)
router.use(cart)
router.use(favourites)

export default router
