function bytesToAscii(byteArr){
    var str = "";

    for(var i = 0; i < byteArr.length; i++){
        str += String.fromCharCode(byteArr[i]);
    }

    return str;
}

const bytes = [72, 101, 108, 108, 111];
var ans = bytesToAscii(bytes);
console.log(ans);