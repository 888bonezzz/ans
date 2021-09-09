var str = "aabbccxccbbaa";
console.log(str.replace(/(.)(?=.*\1)/g, "")); // "xcba"
