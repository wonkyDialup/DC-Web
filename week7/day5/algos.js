const getMax = function (str) {
    var max = 0,
        maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     return console.log(`The maximum occurring character is ${maxChar}`);
   };

console.log(getMax('Ireallydontlikealgorithms'));


