const path = require('path');

const express = require('express');
const employeesController = require('../controllers/employ')

const router = express.Router();

router.get('/', employeesController.getemp);
router.get('/empCards', employeesController.getempCards);
router.get('/admin', employeesController.getAdmin);
router.get('/selected', employeesController.getselectEmps);
router.get('/edited', employeesController.geteditedEmps);
router.get('/rejected', employeesController.getremoveEmps);
router.get('/drag', employeesController.getdragemp);
router.get('/rejected/:empId', employeesController.getrejectedEmps);
router.get('/select/:empId', employeesController.getselectEmp);
router.get('/selected/:empId', employeesController.getselectedEmp);
router.get('/admin/:empId', employeesController.getemployee);
router.get('/empCards/:empId', employeesController.getrestoreEmp);

module.exports = router;