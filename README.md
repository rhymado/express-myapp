Example of simple CRUD API using express and mysql

## Clone repo ini

```
$ git clone https://github.com/rhymado/express-myapp.git
$ cd express-myapp
$ npm install
```

## Untuk auto-reloading server

```
$ npm install -g nodemon
```

Tambahkan di `package.json` (disini memakai `server.js`)

```
{
    ...
    "scripts" : {
        "start": "nodemon server.js" 
    }
    ...
}
```
Jalankan

```
$ npm start
```
