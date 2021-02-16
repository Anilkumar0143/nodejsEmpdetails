const path = require('path');

const express = require('express');
const employeesController = require('../controllers/employ')
 
// const adminData = require('./admin');

const router = express.Router();

router.get('/', employeesController.getemp);
router.get('/admin', employeesController.getAdmin);
router.get('/edited', employeesController.geteditedEmps);
router.get('/admin/:empId', employeesController.getemployee);
router.get('/deleted/:empId',employeesController.getdeletedEmps);

module.exports = router;
 