class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePayslip() {
    let monthlySalary = this.salary / 12;
    return `Employee ID : ${this.id}
      Name : ${this.firstName} ${this.lastName}
      Tax ID : ${this.taxId}
      Pay : $ ${monthlySalary}`;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    // super refers to the parent class, in this case Employee
    // so this call to super calls the parent constructor
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  removeManagedEmployee(employee) {
    // remove the employee from the managedEmployees array
    // using the filter method
    this.managedEmployees = this.managedEmployees.filter(
      (currentEmployee) => {
        return currentEmployee.id !== employee.id;
      } // end filter
    );
    
    // this.managedEmployees.filter(function (e) {
    //   return e.id !== employee.id;
    // });
  }
}

// Create a new employee instance
let anEmployee = new Employee(123, 'John', 'Smith', 99090, 60000.0);

// Create a new manager instance
let aManager = new Manager(113, 'Frank', 'Pointyhair', 88454, 90000.0);

console.log(anEmployee.generatePayslip());
/*
"Employee ID : 123
Name : John Smith
Tax Id: 99090
Pay : $5000"
*/

console.log(aManager.generatePayslip());
/*
"Employee ID : 113
Name : Frank Pointyhair
Tax Id : 88454
Pay : $7500"
*/
