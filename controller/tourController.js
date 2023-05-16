
const Tour=require('./../models/toursModel')




exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tours,
  //   },
  // });
};

exports.getTour = (req, res) => {
  // const id = req.params.id * 1;
  //  const tour = tours.find((el) => el.id === id);
  //  if (!tour) {
  //     res.send('error');
  //  }
  //  else{
  // res.status(200).json({
  //   status: 'success',
  //   // data: {
    //   tour,
    // },
  // });
  //  }
};

exports.createTour =async (req, res) => {
  try{
const newTour=await Tour.create(req.body);

 res.status(201).json(
  {
    status:'success',
    data:{
      Tour:newTour
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

exports.updateTour = (req, res) => {
  // const id = req.params.id * 1;
  //  const tour = tours.find((el) => el.id === id);
  //  if (!tour) {
  //     res.send('error');
  //  }
  //  else{
  //   res.status(200).json({
  //     status: 'success',
  //     data: {
  //       tour: 'updated tour here </>',
  //     },
  //   })
  // }
  
};

exports.deleteTour = (req, res) => {
  //  const id = req.params.id * 1;
  //  const tour = tours.find((el) => el.id === id);
  //  if (!tour) {
  //     res.send('error');
  //  }
  //  else{
  //   res.status(202).json({
  //     status: 'success',
  //     message: 'Tour deleted',
  //   })
  // }
  
};

