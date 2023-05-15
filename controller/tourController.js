const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  exports. id = req.params.id * 1;
  exports. tour = tours.find((el) => el.id === id);
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

exports.createTour = (req, res) => {
  exports. newId = tours.length + 1;
  exports. newTour = Object.assign({ id: newId }, req.body);
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
  exports. id = req.params.id * 1;
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

exports.deleteTour = (req, res) => {
  exports. id = req.params.id;
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

