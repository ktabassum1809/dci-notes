import mongoose from "mongoose";
import dotenv from "dotenv";
import Employee from "./models/Employee.js";
import Role from "./models/Role.js";
import Office from "./models/Office.js";
import Address from "./models/Address.js";
import connectDB from "./libs/database.js";

dotenv.config();

const seed = async () => {
  try {
    // Create roles
    const roles = await Role.insertMany([
      { name: "Developer" },
      { name: "Manager" },
      { name: "Marketing" },
      { name: "HR" },
      { name: "Management" },
    ]);

    // Create offices
    const offices = await Office.insertMany([
      { street: "123 Main St", areaCode: "12345", city: "CityA" },
      { street: "456 Elm St", areaCode: "54321", city: "CityB" },
      { street: "789 Oak St", areaCode: "67890", city: "CityC" },
    ]);

    // Create employees and assign them to roles
    const roleEmployeeMap = {}; // Map roleId to an array of employeeIds

    const employeePromises = Array.from({ length: 15 }, async (_, i) => {
      const address = await Address.create({
        streetName: `Street ${i + 1}`,
        streetNumber: `${i + 10}`,
        areaCode: 10000 + i,
        city: `CityA`,
      });

      const randomRole = roles[Math.floor(Math.random() * roles.length)];

      const employee = new Employee({
        fullName: `Employee ${i + 1}`,
        position: "Position",
        email: `employee${i + 1}@company.com`,
        contactAddress: address._id,
        office: offices[0]._id,
        roles: [randomRole._id], // Assign role to employee
      });

      const savedEmployee = await employee.save();

      // Collect employees for the role
      if (!roleEmployeeMap[randomRole._id]) {
        roleEmployeeMap[randomRole._id] = [];
      }
      roleEmployeeMap[randomRole._id].push(savedEmployee._id);
    });

    await Promise.all(employeePromises);

    // Now update each role with its employees
    const roleUpdatePromises = roles.map(async (role) => {
      if (roleEmployeeMap[role._id]) {
        role.employees = roleEmployeeMap[role._id];
        await role.save();
      }
    });

    await Promise.all(roleUpdatePromises);

    console.log("Seeding complete!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
};

const runSeeder = async () => {
  await connectDB();
  await Employee.deleteMany({});
  await Role.deleteMany({});
  await Office.deleteMany({});
  await Address.deleteMany({});
  await seed();
};

runSeeder();
