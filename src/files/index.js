const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const readFileState = function (filepath, cb = () => {}) {
    return new Promise((resolve, reject) => {
      fs.stat(filepath, function (err, stats) {
        if (err) {
          reject(err);
          return cb(err);
        }
        resolve(stats);
        cb(null, stats);
      })
  
    })
  }

const filePath = path.join(dirname, `file`);

readFileState(`${filePath}`)
.then(data=> console.log(data))
.catch(console.error)
