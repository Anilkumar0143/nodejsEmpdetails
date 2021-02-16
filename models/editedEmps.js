const fs = require('fs');
const path = require('path');
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'editedEmp.json'
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
module.exports = class EditedEmployee {
  constructor(id, fN, lN, uE, uPN, uG, dfb, iA, A) {
    this.Id = id;
    this.efirstName = fN;
    this.eLastName = lN;
    this.euseremail = uE;
    this.euserPhoneNumber = uPN;
    this.egender = uG;
    this.edfb = dfb;
    this.eip_address = iA;  
    this.eAccepted = A;
  }

  save() {
    getemployeesFromFile(employees => {      
      employees.push(this);
      fs.writeFile(p, JSON.stringify(employees), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getemployeesFromFile(cb);
  }
  static getbyId(id, cb) {
    getemployeesFromFile(employees => {
      const emp = employees.find(p => p.Id === id);
      cb(emp)
    });
  }
};