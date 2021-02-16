const fs = require('fs');
const path = require('path');
let users = []
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'employ.json'
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
module.exports = class Employee {
  constructor(fN,lN,uE,uPN,uG,dfb,iA,A) { 
    this.Id = Math.random().toString();
    this.firstName = fN;
    this.LastName = lN;
    this.useremail = uE;
    this.userPhoneNumber = uPN;
    this.gender = uG;
    this.dfb = dfb;
    this.ip_address = iA;
    this.Accepted = A;

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
  static getbyId(id,cb){
    getemployeesFromFile(employees => {
    const emp = employees.find(p =>  p.Id === id);    
    cb(emp)
    });
  }
  static rembyId(id,cb) {
    getemployeesFromFile(employees => {
    const delemp = employees.filter(d =>  d.Id !== id);    
    cb(delemp)
    });
  }
 

};
