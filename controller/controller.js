const Product=require('../model/model')
const assert=require('assert')
const multer=require('multer')
const path=require('path')



module.exports={
    home:(req,res)=>{
      
        Product.find((err,data)=>{
            if(err){
                assert.equal(null,err)
            }
            else{
                res.render('index',{posts:data})
            }
        })
    },
    create:(req,res)=>{
        res.render('create')
    },

    newPost:(req,res)=>{
        let pro=new Product(req.body)

        pro.save().then(result=>{
            res.status(200).send("Data save success <a href='/'>Return Home </a>")
            
          
          
        }

    ).catch(err=>{
        res.status(400).send("Data save Failed <a href='/'>Return Home</a>")
    })

    },

    edit:(req,res)=>{
        let id=req.params.id
        Product.findById({_id:id},(err,data)=>{
            if(err){
            assert.equal(null,err)
            }
            else{
                res.render('update',{post:data})
            }
        })
    },

    update:(req,res)=>{
        let id=req.params.id
        Product.findById({_id:id},(err,data)=>{
           
            if(!data){
                res.status(400).send("No Data Found <a href='/'>Return Home</a>")
            }
            else{
               
               data.name=req.body.name
               data.email=req.body.email
               data.select=req.body.select
               data.phone =req.body.phone
              data.desc =req.body.desc
              data.image=req.body.image
              data.truckmodel=req.body.truckmodel


                data.save().then(
                    result=>{
                        res.status(200).send("Data Update Success <a href='/'>Return Home </a>")
                    }
                ).catch(
                    err=>{
                        res.status(400).send("Data Update Failed <a href='/'>Return Home </a>")
                    }
                )

            }
           
              




            


        })
    },
    delete:(req,res)=>{
        let id=req.params.id
        Product.findByIdAndDelete({_id:id},(err,data)=>{
            if(err){
                res.status(400).send("Deletion Failed <a href='/'>Return Home </a>")
            }
            else{
                res.status(200).send("Deletion Success <a href='/'>Return Home </a>")
            }
        })
    }

    

    

    


    
}
