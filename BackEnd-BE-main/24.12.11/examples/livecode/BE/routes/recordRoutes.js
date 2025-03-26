import { Router } from 'express';
import {
  getSingleRecord,
  getRecords,
  purgeRecords,
  seedRecords,
  addSingleRecord,
  updateSingleRecord,
} from '../controllers/recordController.js';

export const recordsRouter = Router();

recordsRouter.route('/').get(getRecords);

recordsRouter.route('/:id').get(getSingleRecord);

recordsRouter.route('/add').post(addSingleRecord);

recordsRouter.route('/update/:id').patch(updateSingleRecord);

recordsRouter.route('/seed').post(seedRecords);

recordsRouter.route('/purge').delete(purgeRecords);

