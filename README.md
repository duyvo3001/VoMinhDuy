# VoMinhDuy
CrudeServer_99tech
_____________________________________________________________________________________________________

how to run : Problem 5

npm install : to dowload libraries

npm run build : to build project

npm run dev : to run project

API test:

API create Resource | method POST : http://localhost:8000/v1/api/ ( return data, id, updateAt, createAt ). Add in body { "data" :["resource you want add here"] }

API update Resource | method PUT: http://localhost:8000/v1/api/:id ( id you want to get update ). Add in body { "data" :["resource you want update here"] }

API get Resource | method GET: http://localhost:8000/v1/api/detail/:id ( id you want to get detail )

API list Resource | method GET: http://localhost:8000/v1/api/list?filter=update&sort=asc ( filter have 2 params: update, create; sort have 2 params: asc, des )

API delete Resource | method DELETE: http://localhost:8000/v1/api/:id ( id you want to delete )

_____________________________________________________________________________________________________

how to run : Problem 6

npm install : to dowload libraries

npm run build : to build project

npm run dev : to run project

API test:

API create User | method POST : http://localhost:8000/Create ( return success response ). Add in body { "UserName" :"user you want" , "PassWord":"pass you want"}

API update Point | method POST: http://localhost:8000/Update ( return success response ). Add in body { "UserName" :"your User" , "PassWord":"your pass" }

Diagram : in folder Problem 6

Websocket PORT : 'ws://localhost:4000'

In this Problem 6 i'm use mongodb for database connection, websocket to realtime connect server and client. When user connect to 

client then server will create a websocket connection and view the top 10 scroce board. If user want play then user request in 

address http://localhost:8000/Create add user and pass in this request and update scroce in http://localhost:8000/Update. 

It simple server to handle one by one streaming handle. But in future i'm will use Kafka distributed event streaming platform to 

handle this problem.

