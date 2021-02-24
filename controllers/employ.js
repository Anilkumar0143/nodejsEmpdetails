const Employee = require('../models/emps')
const EditEmployee = require('../models/editedEmps')
const RejectedEmp = require('../models/rejected')
const SeletedEmp = require('../models/selected')


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
exports.getdragemp = (req, res, next) => {
    Employee.fetchAll(employees => {
        res.render('employees/drag', {
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

exports.getempCards = (req, res, next) => {
    Employee.fetchAll(employees => {
        res.render('employees/empCards', {
            user: employees,
            pageTitle: 'All Employees Card View',
            hasUsers: employees.length > 0,
            activeEmp: true,
            productCSS: true
        })
    });
}



//geting required emp detils 
exports.getemployee = (req, res, next) => {
    const empID = req.params.empId;
    Employee.getbyId(empID, employees => { 
        res.render('employees/profile', {
            user: employees,
            pageTitle: 'view  Employees',
            activeEmp: true,
            productCSS: true
        })
    })
}
//getting edited emp  details
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
// //deleting and geting remaining emp details and updating in / employ.json
exports.getrejectedEmps = (req, res) => {
    const empID = req.params.empId;
    Employee.rembyId(empID, employees => {
        res.redirect('/rejected');
    });
    Employee.getbyId(empID, employees => {
        RejectedEmp.addEmp(empID, employees)
    })
}


exports.getremoveEmps = (req, res, next) => {
   RejectedEmp.fetchAll(employees => {
        res.render('employees/rejected', {
            user: employees,
            pageTitle: 'All Employees',
            hasUsers: employees.length > 0,
            activeEmp: true,
            productCSS: true
        })
    });
}
exports.getselectEmp = (req, res, next) => {
    const empID = req.params.empId;  
    Employee.rembyId(empID, employees => {
        res.redirect('/selected');
    });
    Employee.getbyId(empID, employees => {
        SeletedEmp.selectEmp(empID, employees)
    })  
 
     
}
exports.getselectEmps = (req, res, next) => {
        SeletedEmp.fetchAll(employees => {
        res.render('employees/selected', {
            user: employees,
            pageTitle: 'All Employees',
            hasUsers: employees.length > 0,
            activeEmp: true,
            productCSS: true
        })
    });
}