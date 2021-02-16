const path = require('path');

const express = require('express');

const employeesController = require('../controllers/session')

const router = express.Router();

//get 
router.get('/add-emp',employeesController.getAddEmp);
router.get('/edit',employeesController.getEditEmp);  
router.get('/edit/:empId',employeesController.geteditingemployee); 

//post
router.post('/add-emp',employeesController.postAddEmp); 
router.post('/edit',employeesController.posteditedEmps); 

module.exports= router;