const Employee = require('../models/emps')
const EditEmployee = require('../models/editedEmps')
const RejectedEmp = require('../models/rejected')
const SeletedEmp = require('../models/selected')

//geting emp in table formate
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

// geting emp and can be draged from one place to another
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

//geting emp in table formate with some actions
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

//geting employee details in card view and also with some actions
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

//getting required user details 
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

//geting all removed or rejected users data
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

//removing user from main data and storing in selected list
exports.getselectEmp = (req, res, next) => {
    const empID = req.params.empId;
    Employee.rembyId(empID, employees => {
        res.redirect('/selected');
    });
    Employee.getbyId(empID, employees => {
        SeletedEmp.selectEmp(empID, employees)
    })               
}

//all selected users
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

//getting required user details 
exports.getselectedEmp = (req, res, next) => { 
    const empID = req.params.empId;
    SeletedEmp.getselbyId(empID, employees => {
        res.render('employees/profile', {
            user: employees,
            pageTitle: 'view  Employees',
            activeEmp: true,
            productCSS: true
        })
    })
}

//restore user data from rejected list to main data
exports.getrestoreEmp = (req, res) => {
    const empID = req.params.empId;
    RejectedEmp.remdelbyId(empID, employees => {
        res.redirect('/empCards');
    }); 
    RejectedEmp.getdelbyId(empID, employees => {
    Employee.addEmp(empID, employees)
    })
}