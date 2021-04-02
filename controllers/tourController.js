const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  console.log(name, price);
  if (!name || !price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Name or Price is absent',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    /* results: tours.length,
    data: {
      tours,
    }, */
  });
};
exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  //const tour = tours.find((el) => el.id === id);

  /* res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  }); */
};
exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    /* data: {
      tour: newTour,
    }, */
  });
};
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated data...',
    },
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
