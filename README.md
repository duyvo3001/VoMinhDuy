# VoMinhDuy
CrudeServer_99tech

how to run :

npm install : to dowload libraries

npm run build : to build project

npm run dev : to run project

API test:

API create Resource | method POST : http://localhost:8000/v1/api/ ( return data, id, updateAt, createAt )

API update Resource | method PUT: http://localhost:8000/v1/api/:id ( id you want to get update )

API get Resource | method GET: http://localhost:8000/v1/api/detail/:id ( id you want to get detail )

API list Resource | method GET: http://localhost:8000/v1/api/list?filter=update&sort=asc ( filter have 2 params: update, create; sort have 2 params: asc, des )

API delete Resource | method POST: http://localhost:8000/v1/api/:id ( id you want to delete )
