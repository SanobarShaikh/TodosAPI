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
    db.collection("ToDos").insertOne({
      text:"something to do",
      completed:false
      // name:"Sana",
      // age:22,
      // location:"Surat"
    },(err,result)=>{
        if(err)
          return console.log("Unable to Insert.",err);
        console.log(JSON.stringify(result.ops,undefined,2));
    });
  }
  client.close();
});
