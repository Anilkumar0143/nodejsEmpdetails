const Employee = require('../models/emps') 
const EditEmployee = require('../models/editedEmps') 


exports.getemp = (req, res, next) => {
       Employee.fetchAll(employees => {
        res.render('employees/emp', {
            user: employees,
            pageTitle: 'All Employees',
            hasUsers: employees.length > 0,
            activeEmp: true,
            productCSS: true
        })
    });
}

exports.getAdmin = (req, res, next) => {
    Employee.fetchAll(employees => {
        res.render('employees/admin', {
            user: employees,
            pageTitle: 'All Employees',
            hasUsers: employees.length > 0,
            activeEmp: true,
            productCSS: true
        })
    });
}


 

//geting required emp detils 
exports.getemployee = (req, res, next) => {
    const empID = req.params.empId;
    // console.log(empID);
    Employee.getbyId(empID, employees => {
        console.log(JSON.stringify(employees) ); 
        res.render('employees/profile', {
            user: employees,
            pageTitle: 'view  Employees', 
            activeEmp: true,
            productCSS: true
        })
    }) 
}  
exports.geteditedEmps = (req, res, next) => {
    EditEmployee.fetchAll(employees => {
        res.render('employees/edited-emp', {
            user: employees,
            pageTitle: 'All Employees',
            hasUsers: employees.length > 0,
            activeEmp: true,
            productCSS: true
        })
    });
}

exports.getdeletedEmps = (req, res) => {
    const empID = req.params.empId; 
    // console.log(empID);
    Employee.rembyId(empID, employees => {
        console.log(employees);
        res.redirect('/');
    }) 
}   
   