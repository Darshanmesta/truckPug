const express=require('express')
const appRoute=express.Router()
const control=require('../controller/controller')

appRoute.route('/').get(control.home)
appRoute.route('/create').get(control.create)
appRoute.route('/create').post(control.newPost)
appRoute.route('/edit/:id').get(control.edit)
appRoute.route('/update/:id').post(control.update)
appRoute.route('/delete/:id').get(control.delete)



module.exports=appRoute;