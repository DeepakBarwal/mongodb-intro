const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

async function readTasks() {
  const client = await MongoClient.connect(MONGO_URL);
  const tododb = client.db(DB_NAME);
  const todos = tododb.collection('todos');
  //   const todoArr = await todos.find({ priority: { $gt: 1 } }).toArray(); // returns cursor
  //   const todoArr = await todos.find({ priority: { $exists: false } }).toArray();
  //   const todoArr = await todos
  //     .find({
  //       $and: [{ priority: { $lt: 3 } }, { priority: { $gt: 1 } }],
  //     })
  //     .toArray();
  //   const todoArr = await todos.find({}).sort({ priority: 1 }).toArray();
  const todoArr = await todos
    .find({ priority: { $exists: true } })
    .sort({ priority: -1 })
    .toArray();
  todoArr.forEach((todo) => console.log(JSON.stringify(todo)));
}

readTasks();
