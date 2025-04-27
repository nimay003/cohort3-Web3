const crypto = require('crypto');

function findHashVal(num, start) {
    let ans = 0;

    while (true) {
        const inputStr = start + ans.toString();   // Append "100xdevs" with the current number
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');   // Create SHA-256 hash

        if (hash.substring(0, num.length) === num) {    // Check if hash starts with the given prefix
            console.log(`Number : ${ans}`); //nonce
            console.log(`Input : ${inputStr}`); //statement
            console.log(`Hash   : ${hash}`); //signature
            return ans;
        } else {
            ans++;
        }
    }
}

let value = "0000", start = "Hello";
const startHash = crypto.createHash('sha256').update(start).digest('hex');
findHashVal(value, startHash);
