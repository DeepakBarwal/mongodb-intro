const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

async function writeTask() {
  const client = await MongoClient.connect(MONGO_URL);
  const tododb = client.db(DB_NAME);

  const todos = tododb.collection('todos');

  const todo = {
    task: 'an important task',
    priority: 2,
    owner: 'manager',
  };

  const result = await todos.insertOne(todo);
  console.log(result);
}

async function writeTasks() {
  const client = await MongoClient.connect(MONGO_URL);
  const tododb = client.db(DB_NAME);

  const todos = tododb.collection('todos');

  const result = await todos.insertMany([
    // returns promise
    { task: 'another task', owner: 'security' },
    { task: 'yo task', owner: 'CEO' },
    { task: 'some damn task', owner: 'manager' },
    { task: 'what a task', owner: 'executive' },
  ]);
  console.log(result);
}

writeTasks();
