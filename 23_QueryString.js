const queryString = require('querystring');

const res = queryString.parse(`id=537&user=John`)
console.log(res);


const res1 = queryString.stringify({
                id:'734',
                user:'John'
})

console.log(res1);