const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then((res)=>{
    console.log("Connection sucessful")
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let allChats =[
    {
         from:"Neha",
         to:"priya",
         msg:"Send me your exam sheets",
         created_at: new Date()
    },

    {
        from:"Rohit",
        to:"mohit",
        msg:"Teach me Js call backs",
        created_at: new Date()
   },
   {
    from:"amit",
    to:"sumit",
    msg:"bring me some fruits",
    created_at: new Date()
   },

   {
    from:"anitha",
    to:"ramesh",
    msg:"all the best",
    created_at: new Date()
   },

   {
    from:"tony",
    to:"peter",
    msg:"i love 3000",
    created_at: new Date()
   },
]

Chat.insertMany(allChats)

