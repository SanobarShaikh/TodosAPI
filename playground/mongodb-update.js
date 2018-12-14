 const {MongoClient,ObjectID}=require("mongodb");

 MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
   if(err)
     return console.log("Unable To Connect");
   else {
     let db=client.db("MyTodosDb");

     //findOneAndUpdate

     db.collection("ToDos").findOneAndUpdate(
       { _id:new ObjectID("5c124b85ab5519840089884a")},
       {
         $set:{
           completed:true
         }
       },
       {
         returnOriginal:false
       }).then((result)=>{
       console.log(result);
     });

     client.close();
   }
 });
