function asciiToBytes(asciiStr){
    let arr = [];

    for(let i = 0; i < asciiStr.length; i++){
        let char = asciiStr[i];
        arr.push(char.charCodeAt(0));
    }

    return arr;
}

const ascii = "Hello";
const ans = asciiToBytes(ascii);
console.log(ans);