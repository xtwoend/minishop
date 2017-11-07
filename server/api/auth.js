import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.post('/auth', function (req, res, next) {
  console.log(req.body)
  axios.post('http://apinews.dev/api/auth', {username: req.body.phone, password: req.body.password}).then((result) => {
    console.log(result.data)
    req.session.token = result.data.token
    res.json(result.data)
  })
  // req.session.token = 'tokenLoremIsumka.bajjsdihiiadfiJIOJoidhfoij90rjnkjIOfuw9irnknskdjfnsiuthiorn'
  res.json(['ok'])
})

export default router
