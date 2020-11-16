const fs = require('fs');

const readFileAsArray = function(file, cb = () => {}) {
    return new Promise( (resolve, reject)=> {

        fs.readFile(file, function(err, data){
            if(err){
            
               reject(err);
               return cb(err);
            }
        
            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
          })

    })
}

async function countOdd() {
    try {
        const lines = await readFileAsArray('./numbers');
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(num => num % 2 === 1)
  
        console.log('odd numbers count:', oddNumbers.length);
        
    } catch (error) {
        console.error(error)
    }
}

countOdd()

