import Query from "../models/Query.js";

export const createQuery = async (req, res, next) => {

  const newQuery = new Query(req.body);
  try {
    const savedQuery = await newQuery.save();
    res.status(200).json(savedQuery);
  } catch (err) {
    next(err);
  }
};

export const updateQuery = async (req, res, next) => {
  try {
    const Query = await Query.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(Query);
  } catch (err) {
    next(err);
  }
};

export const deleteQuery = async (req, res, next) => {
  try {
    await Query.findByIdAndDelete(req.params.id);
    res.status(200).json("the Query has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getQuery = async (req, res, next) => {
  try {
    const query = await Query.findById(req.params.id);
    res.status(200).json(query);
  } catch (err) {
    next(err);
  }
};

export const getQuerys = async (req, res, next) => {
  try {
    const querys = await Query.find();
    res.status(200).json(querys);
  } catch (err) {
    next(err)
  }
}
