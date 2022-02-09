const str = ["a", "a", "b", "b", "c", "c", "c"]

function stringNum(str)
    {
        let n = str.length;
        for (let i = 0; i < n; i++) {
            let count = 1;
            while (i < n - 1 && str[i] == str[i + 1]) {
                count++;
                i++;
            }
            console.log(str[i]);
            console.log(count);
        }
}
stringNum(str);

function stringCount(str) {
    if (str.length ==0) {
      console.log('Please enter valid string.');
      return;
    }
    let output = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    console.log(output);
}
stringCount(str);