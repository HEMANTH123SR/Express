const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

// exports.checkID=(req,res,next,val)=>{
//  const id = req.params.id * 1;
//  const tour = tours.find((el) => el.id === id);
//  if (!tour) {
//    return res.send('error');
//  } 
 
// }

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
   const tour = tours.find((el) => el.id === id);
   if (!tour) {
      res.send('error');
   }
   else{
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
   }
};

exports.createTour = (req, res) => {
  const newId = tours.length + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'Data Created',
        data: {
          tours,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
   const tour = tours.find((el) => el.id === id);
   if (!tour) {
      res.send('error');
   }
   else{
    res.status(200).json({
      status: 'success',
      data: {
        tour: 'updated tour here </>',
      },
    })
  }
  
};

exports.deleteTour = (req, res) => {
   const id = req.params.id * 1;
   const tour = tours.find((el) => el.id === id);
   if (!tour) {
      res.send('error');
   }
   else{
    res.status(202).json({
      status: 'success',
      message: 'Tour deleted',
    })
  }
  
};

