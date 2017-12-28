let Parse = require('parse/node');
let path = require('path');
let fs= require('fs');


const appId='yourAppId';
const serverURL='ws://xxxx.herokuapp.com';
const masterKey='yourMaterKey';
const liveQueryCollection='InstantMessage';

Parse.initialize(appId,"javaScriptKey",masterKey);
Parse.serverURL = serverURL;

let file = undefined;
//const filePath = path.resolve(__dirname, '', 'p.png');
const filePath = path.resolve(__dirname, '', 'video.mp4');

  fs.readFile(filePath, 'base64', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      file = new Parse.File('icon', {base64: data});
      file.save().then(function() {
        // The file has been saved to Parse.
        var chatroom={
          "__type": "Pointer",
          "className": "Chatroom",
          "objectId": "rHN9rNYbhYa"
        };
        var InstantMessage = new Parse.Object("Message");
        InstantMessage.set("chatroom", chatroom);
        InstantMessage.set("from", "me");
        InstantMessage.set("content", "Hey!");
        InstantMessage.set("length", 6);
        InstantMessage.set("video", file);
        InstantMessage.save();
      }, function(error) {
        console.log(error);
        // The file either could not be read, or could not be saved to Parse.
      });
    }
  });
