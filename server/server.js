const express=require("express");
const bodyParser=require("body-parser");

const{mongoose}=require("./db/mongoose");
const{ObjectId}=require("mongodb");
const{ToDo}=require("./models/todos");

let app=express();

app.use(bodyParser.json());

// app.get('/todos', function(req, res){
//   res.send("Get Called");
// });

app.post("/todos",(req,res)=>{
  //console.log(req.body);
  let todo = new ToDo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
    },
  (e)=>{
    res.status(400).send(e);
  });
});

app.get("/todos",(req,res)=>{
  ToDo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send();
  });
});

//GET /todos/12345
app.get("/todos/:id",(req,res)=>{
  let id=req.params.id;

  if(ObjectId.isValid(id)){
    ToDo.findById(id).then((todo)=>{
      if(todo){
        res.send({todo});
      }
      else{
        res.status(404).send("Id Does Not Exist");
      }
    }).catch((e)=>{res.status(400).send("Error Fetching Id");})
  }
  else{
    return res.status(404).send("Invalid Id Format");
  }
});


app.listen(3000,()=>{
  console.log("Started port 3000");
});

module.exports={app};
