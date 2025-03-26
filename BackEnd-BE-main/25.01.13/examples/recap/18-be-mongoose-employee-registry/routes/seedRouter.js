import { Router } from 'express';
import { Address } from '../models/addressModel.js';
import { Employee } from '../models/employeeModel.js';
import { Role } from '../models/roleModel.js';
import { Office } from '../models/officeModel.js';

const roles = [
  { name: 'Developer', employees: [] },
  { name: 'Manager', employees: [] },
  { name: 'HR', employees: [] },
  { name: 'Marketing', employees: [] },
  { name: 'Management', employees: [] },
];
const offices = [
  { streetName: '123 Main St', zip: '12345', city: 'CityA' },
  { streetName: '456 Elm St', zip: '54321', city: 'CityB' },
  { streetName: '789 Oak St', zip: '67890', city: 'CityC' },
];

const employees = [];
const addresses = [];

export const seedRouter = Router();

seedRouter.route('/').post(async (req, res, next) => {
  await Employee.deleteMany({});
  await Role.deleteMany({});
  await Office.deleteMany({});
  await Address.deleteMany({});

  for (let i = 0; i < 15; i++) {
    addresses.push({
      streetName: `street_${i}`,
      streetNumber: '20',
      zip: 1234,
      city: 'cityC',
    });
  }

  const rolesToAdd = await Role.insertMany(roles);
  const officesToAdd = await Office.insertMany(offices);
  const addressesToAdd = await Address.insertMany(addresses);

  for (let i = 0; i < 15; i++) {
    employees.push({
      fullName: `joe_${i}`,
      position: 'Manager',
      email: `joe_${i}@joe.com`,
      contactAddress: addressesToAdd[i]._id,
      office: officesToAdd[Math.floor(Math.random() * officesToAdd.length)]._id,
      roles: [
        rolesToAdd[Math.floor(Math.random() * rolesToAdd.length)]._id,
        rolesToAdd[Math.floor(Math.random() * rolesToAdd.length)]._id,
      ],
    });
  }
  const employeesToAdd = await Employee.insertMany(employees);

  let existingEmployees = await Employee.find();
  let existingEmployeeIDs = existingEmployees.map((employee) => employee._id);




  const updatedRoles = await Role.updateMany({
    employees: [],
    employees: [
     existingEmployeeIDs[[Math.floor(Math.random() * existingEmployeeIDs.length)]]
    ],
  });

  res.send({ updatedRoles, officesToAdd, addressesToAdd, employeesToAdd });
});
