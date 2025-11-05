
const url = require("url");

const address = "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/";

const parsedUrl = url.parse(address,true);

console.log("Host: ",parsedUrl.host);
console.log("Pathname: ",parsedUrl.pathname);
console.log("Querey Parameters: ",parsedUrl.query);
