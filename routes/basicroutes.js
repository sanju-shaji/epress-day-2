const exp = require('constants');

const express=require('express')
const router=express.Router();
router.use(express.json())
router.use(express.urlencoded({extended:true}))

var arr_obj=[{name:'sanju',age:22,loc:"qln"},{name:'arr',age:22,loc:"tvm"},
    {name:'aju',age:22,loc:"knr"}];

router.get('/students',(req,res)=>{
   // res.send(arr_obj)
    
    res.render("students",{
        title:'student',
        arr_obj

})
})

router.post('/add',(req,res)=>{
    const data=req.body;
    console.log(data)
    arr_obj.push(data)
    res.send('post successfull')
})

//put operation

router.put('/edit',(req,res)=>{
    const data=req.body;
    arr_obj.splice(1,1,data)
    res.send(arr_obj);
})


//Using id:


// router.put('/edit/:id',(req,res)=>{
//     const id=req.params.id
//     arr_obj.splice(1,1,data)
//     res.send(arr_obj);
// })


//delete operation

router.delete('/remove',(req,res)=>{
    arr_obj.pop()
    res.send(arr_obj)
})


module.exports=router
