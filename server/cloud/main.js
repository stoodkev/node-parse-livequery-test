
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

// Example for Scheduled Job on Parse
Parse.Cloud.job("scheduleDeleteMessages", function (request, status) {
  var query = new Parse.Query(Parse.Object.extend("Message"));
  var d = new Date();
  d.setDate(d.getDate() - 1);
  query.lessThan('time',d);
  query.ascending("createdAt");
  query.find({
    useMasterKey: true,
    success: function(messages) {
      for(message of messages)
      {
          message.destroy({useMasterKey:true});
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
});
