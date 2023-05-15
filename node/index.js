

const express = require('express');
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');


const app=express()
const port=3000
var list

sdk.auth('rnd_Y0gaMTmqyZDUkqCXBMXYAeWzjDPA');
   sdk.getServices({limit: '20'})
  .then(({ data }) => list= data)
  .catch(err => console.error(err));

 
app.get('/',(req,res)=>{  
   res.send(list)
})




app.listen(port,()=>{
    console.log('app listening')
})