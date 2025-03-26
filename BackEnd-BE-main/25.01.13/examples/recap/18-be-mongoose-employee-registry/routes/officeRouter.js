import { Router } from 'express';

import { Office } from '../models/officeModel.js';


export const officeRouter = Router();

officeRouter.route('/').get(async (req, res, next) => {

    let offices

  if (req.query.full === 'true') {
    
    offices= await Office.find()
      .populate('employees')
      .exec();
  } else {
     offices = await Office.find();

  }

  res.send({ offices });
});
