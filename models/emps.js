const fs = require('fs');
const path = require('path');
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'employ.json'
);
const getemployeesFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Employee {
  constructor(id, fN, lN, uE, uPN, uG, dfb, iA, A, img) {
    this.Id = id;
    this.firstName = fN;
    this.LastName = lN;
    this.useremail = uE;
    this.userPhoneNumber = uPN;
    this.gender = uG;
    this.dfb = dfb;
    this.ip_address = iA;
    this.Accepted = A;
    this.imagPath = img;
  }

  save() {
    getemployeesFromFile(employees => {
      if (this.Id) {
        const existingEmp = employees.findIndex(p => p.Id === this.Id);
        const updateEmp = [...employees];
        updateEmp[existingEmp] = this;
        fs.writeFile(p, JSON.stringify(updateEmp), err => {
          console.log(err, ' in updating emp');
        });
      } else {
        this.Id = Math.random().toString();
        employees.push(this);
        fs.writeFile(p, JSON.stringify(employees), err => {
          console.log(err, " in adding new emp");
        });
      }
    });
  }

  static fetchAll(cb) {
    getemployeesFromFile(cb);
  }
  static addEmp(Id, emp) {
    fs.readFile(p, (err, fileContent) => {
      let employees = []
      if (!err) {
        employees  = JSON.parse(fileContent)
      } 
      const existingdEmp = employees .find(p => p.Id === Id);
      let updatedEmp;
      if (existingdEmp) {
        
        employees  = [...employees ]
       } else {
        updatedEmp = {
          Id: Id,
          firstName: emp.firstName,
          LastName: emp.LastName,
          useremail: emp.firstName,
          userPhoneNumber: emp.userPhoneNumber,
          gender: emp.gender,
          dfb: emp.dfb,
          ip_address: emp.ip_address,
          Accepted: emp.Accepted,
        }
        employees = [...employees, updatedEmp]
      }
      fs.writeFile(p, JSON.stringify(employees), err => {
        console.log(err);
      });
    });
  }
  static getbyId(id, cb) {
    getemployeesFromFile(employees => {
      const emp = employees.find(p => p.Id === id);
      cb(emp)
    });
  }
  static rembyId(id, cb) {
    getemployeesFromFile(employees => {
      const delemp = employees.filter(d => d.Id !== id);
      cb(delemp)
      fs.writeFile(p, JSON.stringify(delemp), err => {
        console.log(err, ' in delet');
      });
    });
  }


};