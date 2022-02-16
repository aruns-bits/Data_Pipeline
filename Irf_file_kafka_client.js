const chokidar = require('chokidar');
const path = require("path")

console.log(path.basename(__dirname))

var watcher = chokidar.watch('IRF_FILES', {ignored: /^\./, ignoreInitial: true, persistent: true });

watcher
  .on('ready', () =>  {console.log("Files are being watched for change..")})
  .on('add', path =>  {console.log('File', path, 'has been added');})
  .on('change', path =>  {console.log('File', path, 'has been changed');})
  .on('unlink', path =>  {console.log('File', path, 'has been removed');})
  .on('error', error =>  {console.error('Error happened', error);})