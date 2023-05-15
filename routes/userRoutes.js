const express=require('express')
const Router = express.Router();

const getAllUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not denfined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not denfined',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not denfined',
  });
};

const patchUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not denfined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not denfined',
  });
};



Router.route('/').get(getAllUser).post(createUser);

Router.route('/:id').get(getUser).patch(patchUser).delete(deleteUser);

module.exports=Router