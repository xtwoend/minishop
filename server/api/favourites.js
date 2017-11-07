import { Router } from 'express'

const router = Router()

router.post('/favourites', (req, res, next) => {
  if (!req.session.favourites) {
    req.session.favourites = []
  }
  // console.log(req.body.item)
  req.session.favourites.push(req.body.item)
  res.json(req.body.item)
})

router.delete('/favourites/:itemid', (req, res, next) => {
  if (!req.session.favourites) {
    res.json({success: false, message: 'Empty favourites'})
  }
  var index = req.session.favourites.indexOf(req.params.itemid)
  req.session.favourites.splice(index, 1)
  res.json(req.params.itemid)
})

export default router
