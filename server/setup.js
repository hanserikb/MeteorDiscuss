if ( Threads.find({}).count() === 0 ) {
  console.log("inserting threads");
  var threads = data.threads;
  for (var i = threads.length - 1; i >= 0; i--) {
    Threads.insert({ 
      heading: threads[i].heading, 
      body: threads[i].body,
      created: threads[i].created,
      replies: threads[i].replies,
      });
  };
};