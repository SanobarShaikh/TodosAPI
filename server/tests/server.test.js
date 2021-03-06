const expect=require("expect");
const request=require("supertest");

const {app}=require("./../server");
const{ToDo}=require("./../models/todos");

beforeEach((done)=>{
  ToDo.remove({}).then(()=>done())
});

describe("POST /todos",()=>{

  it("should create a new todo",(done)=>{
    let text="test todo text";

    request(app)
      .post("/todos")
      .send({text})
      .expect(200)
      .expect((res)=>{
        expect(res.body.text).toBe(text);
      })
      .end((err,res)=>{
        if(err){
          return done(err);
        }
        ToDo.find().then((todos)=>{
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e)=>{
          return done(e);
        });
      });
  });
});
