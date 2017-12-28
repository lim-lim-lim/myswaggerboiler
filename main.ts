var kue = require('kue')
  , queue = kue.createQueue({
  prefix: 'q',
  redis: {
    port: 32768
  }
});

kue.app.listen(3050);

var job = queue.create('video conversion', {
  title: 'converting loki\'s to avi'
  , user: 1
  , frames: 200
}).attempts(5).ttl(5000).save( function(err){
  if( !err ) console.log( job.id );
});

queue.process('video conversion', (job, done)=>{

  console.log( job.id );
  console.log( job.data );
  job.progress(1, 10, { test:'hello'});
  done(null, 'helloworld');
});


job.on('complete', function(result){
  console.log('Job completed with data ', result);

}).on('failed attempt', function(errorMessage, doneAttempts){
  console.log('Job failed');

}).on('failed', function(errorMessage){
  console.log('Job failed');

}).on('progress', function(progress, data){
  job.log('hello log');
  console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data );
});


// queue.on('job enqueue', function(id, type){
//   console.log( 'Job %s got queued of type %s', id, type );
//
// }).on('job complete', function(id, result){
//   kue.Job.get(id, function(err, job){
//     if (err) return;
//     job.remove(function(err){
//       if (err) throw err;
//       console.log('removed completed job #%d', job.id);
//     });
//   });
// });

// setInterval(()=>{
//   kue.Job.get(42, (err, job)=>{
//     if ( err ) {
//       return console.log( err );
//     }
//
//     console.log( job.type, job.data, job.id, job.result, job.progress_data );
//   })
//
//
// },5000);
