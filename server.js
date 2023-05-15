const mongoose=require('mongoose')
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });


const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
}).then(() => {

  console.log(`db connection succesfull`)

})
.catch(err => console.log(err))

const toursSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,'A tour must have name'],
    unique:true
  },
  rating:{
    type:Number,
    default:4.5,
  },
  price:{
    type:Number,
    required:[true,'A tour must have a price']
  },
})

const Tour=mongoose.model('Tour',toursSchema)

const testTour=new Tour({
  name:'the forest hiker is the new runner and he is fucking awseome',
  rating:4.7,
  price:490,
})
// const testTour = new Tour({
//   name: 'unique tour name', // Change the name to a unique value
//   rating: 4.7,
//   price: 490,
// });


testTour
.save()
.then(doc => console.log(doc))
.catch(err=>console.log(err))




const port = 3000;
app.listen(port, () => {
  console.log('app started');
  console.log(`http://localhost:${port}`);
});
