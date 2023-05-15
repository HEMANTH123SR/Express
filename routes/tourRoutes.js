const express=require('express')
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

const Router = express.Router();


const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    res.send('error');
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  }
};

const createTour = (req, res) => {
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

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    res.status(400).json({
      status: 'unsuccess',
      data: {
        data: '404 erro',
      },
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        tour: 'updated tour here </>',
      },
    });
  }
};



const deleteTour = (req, res) => {
  const id = req.params.id;
  if (id > tours.length) {
    res.status(404).json({
      status: 'error',
      message: 'Tour not found',
    });
  } else {
    res.status(202).json({
      status: 'success',
      message: 'Tour deleted',
    });
  }
};

Router.route('/').get(getAllTours).post(createTour);

Router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);




module.exports=Router