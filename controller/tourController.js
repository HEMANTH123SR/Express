// const { get } = require('../routes/tourRoutes');
const Tour=require('./../models/toursModel')




exports.getAllTours = async (req, res) => {
  try {
    const getAllTour = await Tour.find();
    res.status(200).json({
      status: 'success',
      result: getAllTour.length,
      data: {
        Tour: getAllTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'unsucess',
      data: {
        Tour:err
      },
    });
  }
};;

exports.getTour = async(req, res) => {
try{ 
 const tour=await Tour.findById(req.params.id)
  res.status(201).json({
    status: 'success',
    data: {
      Tour: tour,
    },
  });
}catch(err){
   res.status(400).json({
     status: 'fail',
     message: 'invalid data sent',
   });
}
};

exports.createTour =async (req, res) => {
  try{
const tour=await Tour.create(req.body);

 res.status(201).json(
  {
    status:'success',
    data:{
      Tour:tour
    }
  }
 )
}
catch(err){
  res.status(400).json({
    status:"fail",
    message:err
  })
}
};

exports.updateTour =async (req, res) => {
  try{
const tour=await Tour.findByIdAndUpdate(req.params.id,req.body,{
  new:true,
  runValidators:true
})

     res.status(201).json({
       status: 'success',
       data: {
         Tour: tour,
       },
     });

  }catch(err){
  res.status(400).json({
    status: 'fail',
    message: 'invalid data sent',
  });
  }
  
};

exports.deleteTour =async (req, res) => {
try {
  const tour = await Tour.findByIdAndDelete(req.params.id)
res.status(204).end()
// this is just a trial this may not work
} catch(err){
  res.status(404).end()
  //this is 404 error getting for not deleting 
}
  
};

