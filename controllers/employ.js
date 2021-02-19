const Employee = require('../models/emps')
const EditEmployee = require('../models/editedEmps')
const selectedEmp = require('../models/deleted')


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
        console.log(JSON.stringify(employees));
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
exports.getdeletedEmps = (req, res) => {
    const empID = req.params.empId;
    Employee.rembyId(empID, employees => {
        res.redirect('/empCards');
    });
    Employee.getbyId(empID, employees => {
        selectedEmp.addEmp(empID, employees)
    })
}


exports.getremoveEmps = (req, res, next) => {
    selectedEmp.fetchAll(employees => {
        res.render('employees/deleted', {
            user: employees,
            pageTitle: 'All Employees',
            hasUsers: employees.length > 0,
            activeEmp: true,
            productCSS: true
        })
    });
}