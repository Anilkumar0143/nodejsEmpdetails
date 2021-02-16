"use strict";

var Employee = require('../models/emps');

var EditedEmployee = require('../models/editedEmps');

exports.getAddEmp = function (req, res, next) {
  res.render('session/add-emp', {
    pageTitle: 'Add Employees',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddEmp = function (req, res, next) {
  var firstName = req.body.firstName;
  var LastName = req.body.LastName;
  var useremail = req.body.useremail;
  var userPhoneNumber = req.body.userPhoneNumber;
  var gender = req.body.gender;
  var dfb = req.body.dfb;
  var ip_address = req.body.ip_address;
  var Accepted = req.body.Accepted;
  var employee = new Employee(null, firstName, LastName, useremail, userPhoneNumber, gender, dfb, ip_address, Accepted);
  employee.save();
  res.redirect('/admin');
};

exports.getEditEmp = function (req, res, next) {
  res.render('session/edit-emp', {
    pageTitle: 'Edit Employee',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.posteditedEmps = function (req, res, next) {
  var Id = req.body.Id;
  var efirstName = req.body.efirstName;
  var eLastName = req.body.eLastName;
  var euseremail = req.body.euseremail;
  var euserPhoneNumber = req.body.euserPhoneNumber;
  var egender = req.body.egender;
  var edfb = req.body.edfb;
  var eip_address = req.body.eip_address;
  var eAccepted = req.body.eAccepted;
  var eEmployee = new Employee(Id, efirstName, eLastName, euseremail, euserPhoneNumber, egender, edfb, eip_address, eAccepted);
  var edtEmployee = new EditedEmployee(Id, efirstName, eLastName, euseremail, euserPhoneNumber, egender, edfb, eip_address, eAccepted);
  eEmployee.save();
  edtEmployee.save();
  res.redirect('/edited');
}; //geting required emp detils 


exports.geteditingemployee = function (req, res, next) {
  var empID = req.params.empId;
  Employee.getbyId(empID, function (employees) {
    // console.log(JSON.stringify(employees) );
    res.render('session/edit-emp', {
      user: employees,
      pageTitle: 'editing Employees',
      activeEmp: true,
      productCSS: true
    });
  });
};