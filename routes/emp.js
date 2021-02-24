const path = require('path');

const express = require('express');
const employeesController = require('../controllers/employ')

// const adminData = require('./admin');

const router = express.Router();

router.get('/', employeesController.getemp);
router.get('/empCards', employeesController.getempCards);
router.get('/admin', employeesController.getAdmin);
router.get('/selected', employeesController.getselectEmps);
router.get('/edited', employeesController.geteditedEmps);
router.get('/admin/:empId', employeesController.getemployee);
router.get('/rejected', employeesController.getremoveEmps);
router.get('/rejected/:empId', employeesController.getrejectedEmps);
router.get('/selected/:empId', employeesController.getselectEmp);
router.get('/drag', employeesController.getdragemp);

module.exports = router;