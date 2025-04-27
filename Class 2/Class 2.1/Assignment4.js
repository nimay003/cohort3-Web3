function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
    // [..."Hello"]   // Output: ["H", "e", "l", "l", "o"]
}

const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); 