/**
 * @param {string} num
 * @return {boolean}
 */

function countOccurrence(num, target){
let count=0;
for(i=0;i<num.length;i++){
if(num[i]==target){
      count++;
}
}
return count;
}



var digitCount = function(num) {
for(let i=0;i<num.length;i++){
count = countOccurrence(num,i);

if(num[i]!=count){
return false;
}

}

return true;
};

