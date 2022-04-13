function objectConcat(obj) {
    return Object.keys(obj).map(key => {
        return key + " " + obj[key]
    }).join(' ');
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function minusLowOrder(array1, array2) {
    return array1.filter(item => !array2.includes(item))//.sort((a, b) => b - a);
}



let test1 = {hello: "my old", friend: "i hope", you: "are well"}
console.log(objectConcat({}) === '');
console.log(objectConcat(test1) === "hello my old friend i hope you are well");


console.log(arrayEquals([9 ,8, 7, 6, 5, 4, 3 ], [9 ,8, 7, 6, 5, 4, 3 ]));
console.log(arrayEquals([9 ,8, 7, 5, 6, 4, 3 ], [9 ,8, 7, 6, 5, 4, 3 ]) === false);
console.log(minusLowOrder([1],[1]).length === 0);
console.log(minusLowOrder([1, 2],[2])[0] === 1);
console.log(minusLowOrder([3, 2],[2])[0] === 3)
console.log(arrayEquals(minusLowOrder([9 ,8, 7, 6, 5, 4, 3 ],[3, 2]), [ 9, 8, 7, 6, 5, 4 ]));
console.log(minusLowOrder([1 ,5, 3, 8, 9, 2, 4 ],[3, 2]))
console.log(minusLowOrder([1 ,5, 3, 8, 9, 2, 4 ],[3, 2]))
console.log(minusLowOrder([8 ,5, 3, 4, 9, 2, 5 ],[3, 2]))


