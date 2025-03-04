// Reduce -> Ek array se koi ek value banao

var arr = [1,2,3,4];

var d = arr.reduce(function(accumulator, key)
{
    return accumulator + key;
},0)

// 1+2+3+4 = 10

var e = arr.reduce(function(acc, key)
{
    return acc * key;
},1)

//  1*2*3*4 = 24

var arr = [1,2,3,4,5];

var k = arr.reduce(function(acc, key)
{
    return acc + key;
},0)