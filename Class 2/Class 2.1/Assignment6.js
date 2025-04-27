function hexToArray(hexStr){
    const ans = new Uint8Array(hexStr.length/2);

    for(let i = 0; i < ans.length; i++){
        ans[i] = parseInt(hexStr.substr(i * 2, 2), 16);
    }

    return ans;
}

const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log(byteArrayFromHex);