#!/usr/bin/env node
const express=require('express')
let app=express()

app.listen(8181,()=>{
    console.log("服务启动成功")
})
module.express=app
