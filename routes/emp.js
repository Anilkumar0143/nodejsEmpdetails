const path = require('path');

const express = require('express');
const employeesController = require('../controllers/employ')

// const adminData = require('./admin');

const router = express.Router();

router.get('/', employeesController.getemp);
router.get('/empCards', employeesController.getempCards);
router.get('/admin', employeesController.getAdmin);
router.get('/deleted', employeesController.getremoveEmps);
router.get('/edited', employeesController.geteditedEmps);
router.get('/admin/:empId', employeesController.getemployee);
router.get('/deleted', employeesController.getremoveEmps);
router.get('/deleted/:empId', employeesController.getdeletedEmps);

module.exports = router;