//const MongoClient=require("mongodb").MongoClient;
const {MongoClient,ObjectID}=require("mongodb");

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
  if(err)
    return console.log("Unable To Connect");
  else {
    console.log("Connected To DB");
    var db = client.db('MyTodosDb');
    console.log(db.collection("ToDos").find());
    db.collection("ToDos").find({
      _id: new ObjectID("5c123e01894c2a1ea4134c35")
    }).toArray().then((docs)=>{
      console.log("Todos :");
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log("Unable to fetch arrays.");
    });

    db.collection("ToDos").find().count().then((count)=>{
      console.log(`Count is ${count}`);
    },(err)=>{
      console.log("Unable to fetch arrays.");
    });
  }
  client.close();
});
