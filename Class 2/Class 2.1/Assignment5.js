function arrayToHex(hexArr){
    let ans = "";

    for(let i = 0; i < hexArr.length; i++){
        ans += hexArr[i].toString(16);
    }

    return ans;
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
const hexString = arrayToHex(byteArray);
console.log(hexString);   // Output: "48656c6c6f"