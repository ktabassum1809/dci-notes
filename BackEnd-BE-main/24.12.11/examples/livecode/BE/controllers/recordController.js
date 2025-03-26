import records from '../data/records.js';
import { Record } from '../models/recordModel.js';

export const getRecords = async (req, res, next) => {
  try {
    const records = await Record.find()

    res.send({ records });
  } catch (error) {
    //next(error)
    console.log(error);
  }
};
export const getSingleRecord = async (req, res, next) => {
  try {
    const id=req.params.id
    const record = await Record.findById(id)
    //const record = await Record.find({_id:id})

    res.send({ record });
  } catch (error) {
    //next(error)
    console.log(error);
  }
};
export const seedRecords = async (req, res, next) => {
  try {
    const recordsToAdd = records.map((record) => new Record(record));
    await Record.insertMany(recordsToAdd);

    res.send({ message: 'data added', recordsToAdd });
  } catch (error) {
    //next(error)
    console.log(error);
  }
};
export const purgeRecords = async (req, res, next) => {
  try {
    await Record.deleteMany();
    const currentRecords = await Record.find();

    res.send({ message: 'database purged', currentRecords });
  } catch (error) {
    //next(error)
    console.log(error);
  }
};
export const addSingleRecord = async (req, res, next) => {
  try {
    const recordToAdd = await Record.create(req.body);

    res.send({ message: 'Record added', recordToAdd });
  } catch (error) {
    //next(error)
    console.log(error);
  }
};
export const updateSingleRecord = async (req, res, next) => {
  try {

console.log(req.body)

    const id=req.params.id

    const recordToUpdate = await Record.findByIdAndUpdate(id,req.body);
    //const recordToUpdate = await Record.updateOne({_id:id},req.body);
    const updatedRecord=await Record.findById(id)
    res.send({ message: 'Record updated', updatedRecord });
  } catch (error) {
    //next(error)
    console.log(error);
  }
};
