// The \s meta character in JavaScript regular expressions matches any whitespace character: spaces, tabs, newlines and Unicode spaces. And the g flag tells JavaScript to replace it multiple times


const string="sandeep jena";
//console.log(string.replace(/\s/g,''));
console.log(string);
string_split=string.split(" ");
console.log(string_split);
console.log(string_split.join());

