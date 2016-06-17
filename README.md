## CDDB.js

REST API using Node/Express.

```bash
$ npm install
$ npm app.js
```


### GET Requests

```bash
$ curl -v localhost:3000/
$ curl -v localhost:3000/albums
$ curl -v localhost:3000/albums/5
```


### POST Request

```bash
$ curl -v -H "Content-Type: application/json" -X POST -d '{"artist":"tycho","title":"awake","year":2014}' localhost:3000/albums
```


### PUT Request

```bash
$ # TODO
```


### DELETE Request

```bash
$ curl -v -X DELETE localhost:3000/albums/3
```


## TODO/Issues

* PUT Request
* Persist Albums using a file or datastore
* IDs aren't really unique identifiers. eg- Delete a record, all IDs after that record change by 1.


## Resources
* [Express v4.x API](http://expressjs.com/en/4x/api.html)
* [Build a RESTful API Using Node and Express 4](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
* [Using HTTP Methods for RESTful Services](http://www.restapitutorial.com/lessons/httpmethods.html)
