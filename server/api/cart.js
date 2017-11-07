import { Router } from 'express'
import _ from 'lodash'
import ShopCart from '../model/Cart'
import uuid from 'uuid/v4'

const router = Router()

router.post('/cart', function (req, res, next) {
  if (!req.session.cart) {
    req.session.cart = []
  }
  req.session.cart.push(req.body)
  res.json(req.body)
})

router.get('/cart', function (req, res, next) {
  if (!req.session.cart) {
    req.session.cart = []
  }
  
})

router.delete('/cart/:uuid', function (req, res, next) {
  let uuid = req.params.uuid
  if (!req.session.cart){
    return res.json({success: false, message: 'cart empty'})
  }
  let index = _.findKey(req.session.cart, function(item) { 
    return item.uuid === uuid; 
  })
  req.session.cart.splice(index, 1)
  res.json('ok')
})

export default router
