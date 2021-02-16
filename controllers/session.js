const Employee = require('../models/emps') 
const EditedEmployee = require('../models/editedEmps') 
exports.getAddEmp = (req, res, next) => {
    res.render('session/add-emp', {
        pageTitle: 'Add Employees',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}
exports.postAddEmp = (req, res, next) => {
    const firstName = req.body.firstName;
    const LastName = req.body.LastName;
    const useremail = req.body.useremail;
    const userPhoneNumber = req.body.userPhoneNumber;
    const gender = req.body.gender;
    const dfb = req.body.dfb;
    const ip_address = req.body.ip_address;
    const Accepted = req.body.Accepted;
    const employee = new Employee(null, firstName,LastName, useremail,userPhoneNumber,gender,dfb,ip_address,Accepted)
    employee.save();
    res.redirect('/admin');
} 
exports.getEditEmp = (req, res, next) => {
    res.render('session/edit-emp', {
        pageTitle: 'Edit Employee',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
 
}
exports.posteditedEmps = (req, res, next) => {
    const Id = req.body.Id;
    const efirstName = req.body.efirstName;
    const eLastName = req.body.eLastName;
    const euseremail = req.body.euseremail;
    const euserPhoneNumber = req.body.euserPhoneNumber;
    const egender = req.body.egender;
    const edfb = req.body.edfb;
    const eip_address = req.body.eip_address;
    const eAccepted = req.body.eAccepted;
    const eEmployee = new Employee(Id, efirstName,eLastName, euseremail,euserPhoneNumber,egender,edfb,eip_address,eAccepted)
    const edtEmployee = new EditedEmployee(Id, efirstName,eLastName, euseremail,euserPhoneNumber,egender,edfb,eip_address,eAccepted)
    eEmployee.save();
    edtEmployee.save();
    res.redirect('/edited');
}

//geting required emp detils 
exports.geteditingemployee = (req, res, next) => {
    const empID = req.params.empId;
    Employee.getbyId(empID, employees => {
        // console.log(JSON.stringify(employees) );
        res.render('session/edit-emp', {
            user: employees,
            pageTitle: 'editing Employees', 
            activeEmp: true,
            productCSS: true
        })
    }) 
}