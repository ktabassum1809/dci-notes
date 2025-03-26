import { Router } from 'express';

import { Role } from '../models/roleModel.js';

export const roleRouter = Router();

roleRouter.route('/').get(async (req, res, next) => {
  let roles;

  if (req.query.full === 'true') {
    roles = await Role.find().populate('employees').exec();
  } else {
    roles = await Role.find();
  }

  res.send({ roles });
});
roleRouter.route('/:id/employees').get(async (req, res,next) => {
  console.log(req.params)
  const role = await Role.findById(req.params.id).populate('employees').exec();
console.log(role.employees)
  res.send(role.employees);
});
