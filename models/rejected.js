const fs = require('fs');
const path = require('path');
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'delEmp.json'
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
module.exports = class RejectededEmp {
  save() {
    getemployeesFromFile(employees => {
      fs.writeFile(p, JSON.stringify(employees), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getemployeesFromFile(cb);
  }
  static addEmp(Id, emp) {
    fs.readFile(p, (err, fileContent) => {
      // let selectedEmp =  {emp : [],total:0} 
      let selectedEmp = []
      if (!err) {
        selectedEmp = JSON.parse(fileContent)
      }
      // const existingdEmpIndex = selectedEmp.findIndex(p => p.Id === Id); 
      // const existingdEmp = selectedEmp[existingdEmpIndex]; 
      const existingdEmp = selectedEmp.find(p => p.Id === Id);
      let updatedEmp;
      if (existingdEmp) {
        //         updatedEmp = {
        //             ...existingdEmp
        //         } ;
        //    console.log(updatedEmp,"up");
        selectedEmp = [...selectedEmp]
        // selectedEmp[existingdEmpIndex] = updatedEmp;
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
        selectedEmp = [...selectedEmp, updatedEmp]
      }
      fs.writeFile(p, JSON.stringify(selectedEmp), err => {
        console.log(err);
      });
    });
  }
  static getdelbyId(id, cb) {
    getemployeesFromFile(employees => {
      const emp = employees.find(p => p.Id === id);
      cb(emp) 
    });
  }
  static remdelbyId(id, cb) {
    getemployeesFromFile(employees => {
      const delemp = employees.filter(d => d.Id !== id);
      cb(delemp)
      fs.writeFile(p, JSON.stringify(delemp), err => {
        console.log(err, ' in delet');
      });
    });
  }

}