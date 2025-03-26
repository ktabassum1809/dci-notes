import connectDB from "./libs/database.js";
import express from "express";

import Employee from "./models/Employee.js";
import Role from "./models/Role.js";
import Office from "./models/Office.js";
import "./models/Address.js";

await connectDB();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// GET all employees with full details
app.get("/employee", async (req, res) => {
  try {
    const shouldPopulate = req.query.full === "true";

    let query = Employee.find();

    if (shouldPopulate) {
      query = query
        .populate("contactAddress")
        .populate("office")
        .populate("roles");
    }

    const employees = await query;

    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET employees by role
app.get("/role", async (req, res) => {
  try {
    const shouldPopulate = req.query.full === "true";

    let query = Role.find();

    if (shouldPopulate) {
      query = query.populate("employees");
    }

    const roles = await query;

    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all offices
app.get("/office", async (req, res) => {
  try {
    const offices = await Office.find();
    res.json(offices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET employees by office
app.get("/office/:id/employees", async (req, res) => {
  try {
    const employees = await Employee.find({ office: req.params.id });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
