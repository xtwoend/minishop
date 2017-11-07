import mongoose from 'mongoose'
import findOrCreate from 'mongoose-findorcreate'
import appConfig from '../../config'

mongoose.connect(`mongodb://${appConfig.db.host}/${appConfig.db.database}`)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

mongoose.Promise = Promise

let Schema = mongoose.Schema

let CartSchema = new Schema({
  uuid: { type: String },
  items: { type: Array },
  total: { type: Number },
  created_at: { type: Date },
  updated_at: { type: Date }
})

CartSchema.plugin(findOrCreate)

CartSchema.pre('save', function(next) {
  let currentDate = new Date()
  this.updated_at = currentDate
  if (!this.created_at) {
    this.created_at = currentDate
  }
  next()
})

let ShopCart = mongoose.model('ShopCart', CartSchema )

export default ShopCart
