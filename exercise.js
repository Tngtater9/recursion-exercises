const countSheep = (num) => {
    if( num < 1){
        return console.log('All sheep jumped over the fence')
    }
    return console.log(`${num}: Another sheep jumps over the fence`), countSheep(num - 1)
} 

const powerCalulator = (base, power) => {
    if(power <= 1){
        return 1;
    } 
    return  base * powerCalulator(base, power - 1)
}

const reverseStr = (str) => {
    if(str.length === 0) {
        return '';
    }
    return str.slice(-1) + reverseStr(str.slice(0, -1))
}

const triangleN = (n) => {
    if(n < 1){
        return 0;
    }

    return n + triangleN(n - 1)
}

const splitter = (str, string = "") => {
    if(str.length === 0){
        return [string];
    }

    const newChar = str[0]

    if(newChar === "/"){
        return [
        string,
        ...splitter(str.slice(1),string = '')
    ]
    }
    string = string + newChar
    return splitter(str.slice(1), string)
}

const fibo = (n, x = 0, arr = [0,1]) => {
    if(n <= 0){
        return arr;
    }
    arr.push(arr[x] + arr[x + 1])
    return fibo(n - 1, x + 1, arr)
}

const factorial = (n) => {
    if(n <= 0){
        return 1;
    }
    return n * factorial(n - 1)
}

