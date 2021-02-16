"use strict";

var Employee = require('../models/emps');

var EditEmployee = require('../models/editedEmps');

exports.getemp = function (req, res, next) {
  Employee.fetchAll(function (employees) {
    res.render('employees/emp', {
      user: employees,
      pageTitle: 'All Employees',
      hasUsers: employees.length > 0,
      activeEmp: true,
      productCSS: true
    });
  });
};

exports.getAdmin = function (req, res, next) {
  Employee.fetchAll(function (employees) {
    res.render('employees/admin', {
      user: employees,
      pageTitle: 'All Employees',
      hasUsers: employees.length > 0,
      activeEmp: true,
      productCSS: true
    });
  });
};

exports.geteditedEmps = function (req, res, next) {
  EditEmployee.fetchAll(function (employees) {
    res.render('employees/edited-emp', {
      user: employees,
      pageTitle: 'All Employees',
      hasUsers: employees.length > 0,
      activeEmp: true,
      productCSS: true
    });
  });
}; //geting required emp detils 


exports.getemployee = function (req, res, next) {
  var empID = req.params.empId; // console.log(empID);

  Employee.getbyId(empID, function (employees) {
    console.log(JSON.stringify(employees));
    res.render('employees/profile', {
      user: employees,
      pageTitle: 'view  Employees',
      activeEmp: true,
      productCSS: true
    });
  });
};

exports.getdeletedEmps = function (req, res) {
  var empID = req.params.empId;
  console.log(empID);
  Employee.rembyId(empID, function (employees) {
    console.log(employees);
    res.redirect('/');
  });
};