const fs = require('fs');
const path = require('path');
let users = []
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'editedEmp.json'
);

const getemployeesFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb(users);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
}; 
module.exports = class EditedEmployee {
  constructor(id,fN,lN,uE,uPN,uG,dfb,iA,A) { 
    this.eId =id;
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
      if (this.Id) {
        const existingEmp = employees.findIndex(p => p.Id === this.Id);
        const updateEmp = [...employees];
        updateEmp[existingEmp] = this; 
        fs.writeFile(p, JSON.stringify(updateEmp), err => {
          console.log(err);
        });
      } else {
    this.Id = Math.random().toString();
    employees.push(this);
        fs.writeFile(p, JSON.stringify(employees), err => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getemployeesFromFile(cb);
  }
  static getbyId(id,cb){
    getemployeesFromFile(employees => {
    const emp = employees.find(p =>  p.Id === id);    
    cb(emp)
    });
  } 
};
