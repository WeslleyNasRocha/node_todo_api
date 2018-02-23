const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Database not reacheble');
  }
  console.log('Connected to mongoDb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne(
  //   {
  //     todo: 'populate our database',
  //     completed: false
  //   },
  //   (err, results) => {
  //     if (err) return console.log('unable to insert todo', err);
  //     console.log(JSON.stringify(results.ops, undefined, 2));
  //   }
  // );

  // db.collection('Users').insertOne(
  //   {
  //     name: 'Weslley',
  //     age: 21,
  //     location: 'Campinas'
  //   },
  //   (err, results) => {
  //     if (err) return console.log('unable to insert user', err);

  //     console.log(JSON.stringify(results.ops, undefined, 2));
  //   }
  // );

  // db
  //   .collection('Todos')
  //   .find({ _id: new ObjectID('5a8f6cd83e2e1407082e07e2') })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       return console.log('unable to insert user', err);
  //     }
  //   );

  db
    .collection('Users')
    .find({ name: 'Weslley' })
    .count()
    .then(
      count => {
        console.log(`${count} users with the name of weslley on database`);
      },
      err => {
        console.log(`${err} ops`);
      }
    );

  client.close();
});
