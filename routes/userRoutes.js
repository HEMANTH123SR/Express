const express=require('express')
const userController=require('./../controller/userController')
const Router = express.Router();



Router.route('/')
.get(userController.getAllUser)
.post(userController.createUser);

Router.route('/:id')
.get(userController.getUser)
.patch(userController.patchUser)
.delete(userController.deleteUser);

module.exports=Router