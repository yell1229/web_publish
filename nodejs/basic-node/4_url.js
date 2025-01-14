const url = require('url');


const {URL} = url; // 구조분해할당

const myUrl = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC');

// console.log('url ==>>', url);
console.log('URL ==>>', URL);

console.log('myUrl ==>', myUrl);
console.log('url.format() ==>', url.format(myUrl));



