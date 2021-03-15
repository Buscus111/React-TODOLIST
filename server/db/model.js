const { Schema, pluralize, model } = require('mongoose');

pluralize(null);

const taskModelName = 'tasks';
// const restaurantModelName = 'restaurants';

const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  editStatus: {
    type: Boolean,
    default: false,
  },
});

// const restaurantSchema = new Schema({
//   name: String,
//   discription: String,
//   image: String,
//   reviews: {
//     type: Schema.Types.ObjectId,
//     ref: reviewModelName,
//   },
// });

module.exports = {
  Task: model(taskModelName, taskSchema),
  // Restaurant: model(restaurantModelName, restaurantSchema),
};
