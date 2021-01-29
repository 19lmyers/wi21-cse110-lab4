A.
  The bug is that `num1` and `num2` are being typecast as strings, when we need them to be numbers. I would fix this like so:

```
function printSum() {
    debugger
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}
```

B.
  1. citylots.json
  2. part2.js
  3. 11.7 MB
  4. 20.44 
  5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4397.0 Safari/537.36 Edg/90.0.781.0
  6. Apache
  7. Tue, 26 Jan 2021 22:14:13 GMT
  8. application/json
  9. fetchData