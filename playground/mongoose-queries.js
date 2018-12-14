const {mongoose}=require("./../server/db/mongoose");
const {ToDo}=require("./../server/models/todos");

let id="5c136c3534143a159e685478";

ToDo.find({
  _id: id
}).then((todos)=>{console.log("ToDos",todos);});

ToDo.findOne({
  _id:id
}).then((todo)=>{console.log("ToDo",todo);});

ToDo.findById(id).then((todo)=>{console.log("ToDo",todo);});
