//** Currenly only works on local server**//


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
//
// var messageTemplate={'message':'','user':''};
// var messageArray=[];
// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('message', function(data){
//         console.log('a user message',data);
//         var message={'message':data.messageText,'user':data.user,'date':data.date};
//         // message.message=data.messageText;
//         // message.user=data.user;
//         console.log('a user message 2' ,message);
//         messageArray.push(message);
//         console.log('messageArray   ',messageArray);
//         socket.emit('message',message);
//     });
//     for(var message in messageArray) {
//         socket.emit('message',message);
//     }
//
// });
// http.listen(3001, function(){
//     console.log('listening on *:3001');
// });