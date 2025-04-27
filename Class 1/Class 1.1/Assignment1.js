const crypto = require('crypto');

function findHashVal(num){
    let ans = 0;

    while(true){
        const hash = crypto.createHash('sha256').update(ans.toString()).digest('hex');
        // console.log(ans);
        if(hash.substring(0, num.length) == num){
            console.log(`Number : ${ans}`);
            console.log(`Hash : ${hash}`);
            return ans;
        } else {
            ans++;
        }
    }
}

let value = "00000";
findHashVal(value);