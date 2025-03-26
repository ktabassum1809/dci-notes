class Employee {
	constructor(id, firstName, lastName, taxId, salary) {
		this.id = id
		this.firstName = firstName
		this.lastName = lastName
		this.taxId = taxId
		this.salary = salary
	}

	generatePayslip() {
		let monthlySalary = this.salary / 12
		return `
       Employee ID: ${this.taxId}
       Name: ${this.firstName} ${this.lastName}
       Tax ID: ${this.taxId}
       Pay: ${monthlySalary}
       `
	}
}

// console.log(employee1.generatePayslip())

class Manager extends Employee {
	constructor(id, firstName, lastName, taxId, salary, managedEmployees = []) {
		super(id, firstName, lastName, taxId, salary)
		this.managedEmployees = managedEmployees
	}

	addManagedEmployee(employee) {
		// add employee
		// if the employee doesn't exist already
		if (!this.managedEmployees.includes(employee)) {
		    this.managedEmployees.push(employee)
		}
		return this.managedEmployees
	}

    removeManagedEmployee(employee) {
        return this.managedEmployees = this.managedEmployees.filter(currEmployee => currEmployee.id !== employee.id)
    }

}

const employee1 = new Employee("4wfsl", "Nausica", "Castriota", 43423, 60000)
const employee2 = new Employee("4w98fsl", "Brian", "C", 4342973, 30000)
const manager1 = new Manager("432wfsl", "Thong", "Vaidyanond", 4342323, 60001, [])

console.log(manager1)
manager1.addManagedEmployee(employee1)
manager1.addManagedEmployee(employee2)
console.log(manager1)
manager1.removeManagedEmployee(employee1)
manager1.removeManagedEmployee(employee2)
console.log(manager1)