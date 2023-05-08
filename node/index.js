

const express = require('express');
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');


const app=express()
const port=3000


sdk.auth('rnd_Y0gaMTmqyZDUkqCXBMXYAeWzjDPA');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

 
app.get('/',(req,res)=>{
    res.send([
      {
        cursor: 'gy_AfMsS3icyNjVnazRxZW9vMjA2Mmcw',
        service: {
          id: 'srv-ch93265gk4qeoo2062g0',
          autoDeploy: 'yes',
          branch: 'main',
          buildFilter: null,
          createdAt: '2023-05-03T10:02:01.119487Z',
          name: 'TodoApi',
          notifyOnFail: 'default',
          ownerId: 'usr-ch7umhmsi8uhth3dm65g',     
          repo: 'https://github.com/GitiRubin/ToDoList-Application',
          rootDir: './TodoApi',
          slug: 'todoapi-cmvx',
          suspended: 'not_suspended',
          suspenders: [],
          type: 'web_service',
          updatedAt: '2023-05-07T21:02:46.718504Z',
          serviceDetails: [Object]
        }
      },
      {
        cursor: 'CHCfw5Beci9yMzVnazRxN2xtdWw3a3Zn',
        service: {
          id: 'srv-ch7ur35gk4q7lmul7kvg',
          autoDeploy: 'yes',
          branch: 'main',
          buildFilter: null,
          createdAt: '2023-05-01T16:49:16.42936Z',
          name: 'ToDoListClient',
          notifyOnFail: 'default',
          ownerId: 'usr-ch7umhmsi8uhth3dm65g',
          repo: 'https://github.com/GitiRubin/ToDoList-Application',
          rootDir: './ToDoListReact-master',
          slug: 'todolistclient-f84i',
          suspended: 'not_suspended',
          suspenders: [],
          type: 'static_site',
          updatedAt: '2023-05-07T21:02:51.656805Z',
          serviceDetails: [Object]
        }
      }
    ])
   
})




app.listen(port,()=>{
    console.log('app listening')
})