const mongoose=require("mongoose");

let ToDo = mongoose.model("Todo",{
  text : {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed : {
    type: Boolean,
    default:false
  },
  completedAt: {
    type: Number,
    default:null
  }
});

module.exports={ToDo};

// let newTodo=new ToDo({text:"        Read Novel        "});
//
// newTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
//   //mongoose.connection.close();
// },(e)=>{
//   console.log("Unable To Save");
// });
