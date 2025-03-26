import { Router } from 'express';

import { Employee } from '../models/employeeModel.js';


export const employeeRouter = Router();

employeeRouter.route('/').get(async (req, res, next) => {

    let employees

  if (req.query.full === 'true') {
    employees= await Employee.find()
      .populate('roles')
      .populate('contactAddress')
      .populate('office')
      .exec();
  } else {
     employees = await Employee.find();
    /*    .populate('roles')
          .populate('contactAddress')
          .populate('office')
          .exec(); */
  }

  res.send({ employees });
});
