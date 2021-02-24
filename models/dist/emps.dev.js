"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var path = require('path');

var p = path.join(path.dirname(process.mainModule.filename), 'data', 'employ.json');

var getemployeesFromFile = function getemployeesFromFile(cb) {
  fs.readFile(p, function (err, fileContent) {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports =
/*#__PURE__*/
function () {
  function Employee(id, fN, lN, uE, uPN, uG, dfb, iA, A) {
    _classCallCheck(this, Employee);

    this.Id = id;
    this.firstName = fN;
    this.LastName = lN;
    this.useremail = uE;
    this.userPhoneNumber = uPN;
    this.gender = uG;
    this.dfb = dfb;
    this.ip_address = iA;
    this.Accepted = A;
  }

  _createClass(Employee, [{
    key: "save",
    value: function save() {
      var _this = this;

      getemployeesFromFile(function (employees) {
        if (_this.Id) {
          var existingEmp = employees.findIndex(function (p) {
            return p.Id === _this.Id;
          });

          var updateEmp = _toConsumableArray(employees);

          updateEmp[existingEmp] = _this;
          fs.writeFile(p, JSON.stringify(updateEmp), function (err) {
            console.log(err, ' in updating emp');
          });
        } else {
          _this.Id = Math.random().toString();
          employees.push(_this);
          fs.writeFile(p, JSON.stringify(employees), function (err) {
            console.log(err, " in adding new emp");
          });
        }
      });
    }
  }], [{
    key: "fetchAll",
    value: function fetchAll(cb) {
      getemployeesFromFile(cb);
    }
  }, {
    key: "getbyId",
    value: function getbyId(id, cb) {
      getemployeesFromFile(function (employees) {
        var emp = employees.find(function (p) {
          return p.Id === id;
        });
        cb(emp);
      });
    }
  }, {
    key: "rembyId",
    value: function rembyId(id, cb) {
      getemployeesFromFile(function (employees) {
        var delemp = employees.filter(function (d) {
          return d.Id !== id;
        });
        cb(delemp);
        fs.writeFile(p, JSON.stringify(delemp), function (err) {
          console.log(err, ' in delet');
        });
      });
    }
  }]);

  return Employee;
}();