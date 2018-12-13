 const {MongoClient,ObjectID}=require("mongodb");

 MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
   if(err)
     return console.log("Unable To Connect");
   else {
     let db=client.db("MyTodosDb");

     //Delete Many
     // db.collection("ToDos").deleteMany({text: "Eat Lunch"}).then((result)=>{
     //   console.log(result);
     // });

     //Delete One
     // db.collection("ToDos").deleteOne({text: "Delete One"}).then((result)=>{
     //   console.log(result);
     // });

     //findOne And Delete
     db.collection("ToDos").findOneAndDelete({completed:false}).then((result)=>{
       console.log(result);
     });
     
     client.close();
   }
 });
