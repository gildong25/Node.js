function read(Filepath, encode, callback){
    var data = 'fffff';//Filepath....
    var realData = 'fadasdasdasd'// code.....
    var error_code = null;
    if(realData) {
        
    } else {
        error_code = 404;
    }
    callback(error_code, realData);
}


read('./taa.txt', 'utf8', function(err, data){
 
    if (err) {
        console.log(err);
      } else {
        console.log('FILE WRITE COMPLETE');
      }
})