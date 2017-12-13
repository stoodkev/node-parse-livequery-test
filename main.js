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

client.open({useMasterKey:true});
client.on('open', () => {
  console.log('connection opened');
});

let query = new Parse.Query(Parse.Object.extend(liveQueryCollection));

let subscription = client.subscribe(query);

// Add sessiontoken for liveQuery to work with ACL
subscription.on('create', (object) => {
  console.log('object created');
});

process.on('uncaughtException', function (err) {
    console.log(err);
});
