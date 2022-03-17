// const { populate } = require("../models/student.models");

const get = (model) => async (req, res) => {
  try {
    let a = req.params.id;

    const item = await model.find({ evaluation_id: a }).lean().exec();
    return res.status(200).send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const highest = (model) => async (req, res) => {
  try {
    let a = req.params.id;
    const item = await model
      .find({ evaluation_id: a })
      .populate({
        path: "student_id",
        select: ["roll_id", "current_batch"],
        populate: "roll_id",
        populate: "current_batch",
      })
      .lean()
      .exec();

    for (let i = 0; i < item.length; i++) {
      item.sort((a, b) => b.marks - a.marks);
    }
    return res.status(200).send(item[0]);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
module.exports = { get, highest };
