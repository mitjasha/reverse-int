module.exports = function reverse (number){
    let out = 0;
    while(number !=0){
        out *= 10;
        out += number % 10;
        number = (number - number % 10) / 10;
    }
    return Math.abs(out);
}

// module.exports = function reverse (n) {
//     let n_str = Math.abs(n).toString()
//     let out = ''
//     for (let i = n_str.length - 1; i >= 0; i--){
//         out += n_str[i]
//     }
//     return Number(out);
// }
