function removeDuplcate(array) {
    return [...new Set(array)];
}

console.log(removeDuplcate([1,2,3,4,5,5,6,7,8,9,10,10,11,12,13,14,15]));