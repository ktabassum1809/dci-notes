import { Router } from 'express';

import {
  getSingleRecord,
  getRecords,
 
} from '../controllers/recordController.js';
import { seedRecords } from '../controllers/recordController.js';
import { restrictTo,protect } from '../middlewares/auth.js';

export const recordRouter = Router();

recordRouter.route('/').get(protect,restrictTo('admin','customer'),getRecords);
recordRouter.route('/:id').get(protect,getSingleRecord);
recordRouter.route('/seed').post(protect,restrictTo('admin') ,seedRecords);


