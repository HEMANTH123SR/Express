const mongoose=require('mongoose')

const toursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have  group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour mush have a difficulty'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required:[true,'A tour must have description']
  },
  desription:{
    type:String,
    trim:true
  },
  imageCover:{
    type:String,
    required:[true,'A tour must have a cour image']
  },
  images:[String],
  createAt:{
    type:Date,
    default:Date.now()
  },
  startDate:[Date]
});


const Tour=mongoose.model('Tour',toursSchema)

module.exports=Tour
