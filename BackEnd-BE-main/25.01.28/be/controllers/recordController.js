import { Record } from '../models/recordModel.js';
import { data } from '../data.js';
export const getRecords = async (req, res, next) => {
  try {
    const records = await Record.find();
    res.send(records);
  } catch (error) {
    next(error);
  }
};

export const getSingleRecord = async (req, res, next) => {
  try {
    const record = await Record.findById(req.params.id);
    //const user = await User.findOne({_id:req.params.id});

    if (!record) {
      const error = new Error('no record found');
      error.status = '404';
      throw error;
    }
    res.send(record);
  } catch (error) {
    next(error);
  }
};
export const seedRecords = async (req, res, next) => {
  try {
    const records = data.map((record) => new Record(record));
    await Record.deleteMany();
    await Record.insertMany(records);
    res.send(records);
  } catch (error) {
    next(error);
  }
};
