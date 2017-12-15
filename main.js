let Parse = require('parse/node');
let LiveQueryClient = Parse.LiveQueryClient;
const appId='yourAppId';
const serverURL='ws://xxxx.herokuapp.com';
const masterKey='yourMaterKey';
const liveQueryCollection='InstantMessage';

let client = new LiveQueryClient({
  applicationId: appId,
  serverURL: serverURL,
  masterKey: masterKey,
});

var chatroom={
          "__type": "Pointer",
          "className": "Chatroom",
          "objectId": "rHN9rNYbhYa"
        };

client.open({useMasterKey:true});
client.on('open', () => {
  console.log('connection opened');
});

query.equalTo('chatroom',chatroom);
query.greaterThan("length", 5);
let query = new Parse.Query(Parse.Object.extend('InstantMessage'));
query.equalTo('chatroom',pointerToTheChatroom);
let subscription = client.subscribe(query);

// Add sessiontoken for liveQuery to work with ACL
subscription.on('create', (object) => {
  console.log('object created');
});

process.on('uncaughtException', function (err) {
    console.log(err);
});
