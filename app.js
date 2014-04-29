var express = require("express");
var app = express();
var querystring = require("querystring");
var http = require('http');
var mongodb = require("mongodb");
var dbServer = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var db = new mongodb.Db('gallery', dbServer, {safe:true});
var server = http.createServer(app);
var io = require('socket.io').listen(server);

db.open(function(err, db) {
  if (!err) {
    console.log('db connected.');
  } else {
    console.log(err);
  }
});

io.sockets.on('connection', function (socket) {

  // db.collection('galleryComments', {safe:true}, function(err, collection) {
  //   collection.find().toArray(function(err, docs) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       socket.emit('allData', docs);
  //     }
  //   });
  // });

  socket.on('newData', function (data) {
    //console.log(data);
    db.collection('galleryComments', {safe:true}, function(err, collection) {
      if (err) {
        console.log(err);
      } else {
        var tmp = {comments: data};
        collection.insert(tmp, {safe:true}, function(err, result) {
          console.log(result);
          collection.find().toArray(function(err, docs) {
            if (err) {
              console.log(err);
            } else {
              socket.broadcast.emit('allData', docs);
            }
          });
        });
      }
    });
  });
});

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

server.listen(2333);

// app.post('/comment', function (req, res, next) {
//   var comment = req.body.comment;
//   db.collection('galleryComments', {safe:true}, function(err, collection) {
//     if (err) {
//       console.log(err);
//     } else {
//       var tmp = {comments: comment};
//       collection.insert(tmp, {safe:true}, function(err, result) {
//         console.log(result);
//       });
//     }
//   });
//   res.send({message: "ok"});
//   console.log("Data received.");
// });

app.get('/comments', function (req, res, next) {
  db.collection('galleryComments', {safe:true}, function(err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.find().toArray(function(err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.send(docs);
        }
      });
    }
  });
  console.log("Data pushed.");
});

console.log("Server has been started.");
