import { styleBody, addTitle } from "./dom";
import testData, { primeUsers } from "./data";

styleBody();
addTitle("Webpack and Babel");

const prime = primeUsers(testData);
console.log(testData, prime);
