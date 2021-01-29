1. Since `var` has no concept of block scope, `prices.length` will be printed.

2. Since `var` has no concept of block scope, the discounted price of the last price in `prices` will be printed. 

3. The final price of the last price in prices will be printed. Note that it doesn't matter if `finalPrice` was declared in the for loop or not, as it uses `var`.

4. `[50, 100, 150]` - The function calculates the discounted prices as expected, and returns them in an array.

5. An error will occur, as `i` is only visible inside the for loop!

6. An error will occur, as `discountedPrice` is only visible inside the for loop!

7. The final price of the last price in prices wil be printed, as `finalPrice` was declared outside of the for loop.

8. `[50, 100, 150]` - The function still calculates the discounted prices as expected.

9. An error will occur, as `i` is only visible inside the for loop!

10. An error will occur, as `discountedPrice` is only visible inside the for loop!

11. `0` will be printed, as a `const` variable cannot be redefined after it is assigned.

12. Assuming the additional assignments to `finalPrice` fail silently, this function will return `[0, 0, 0]`.

13. A. `student.name`
	B. `student['Grad Year']`
	C. `student.greeting()`
	D. `student['Favorite Teacher'].name`
	E. `student.courseLoad[0]`

14.
	A. `'32'` - JS sees 3 as a string and applies string concatenation
	B. `1` - JS sees subtraction and casts 3 to its integer value
	C. `3` - null is cast to 0, so nothing happens
	D. `'3null'` - null is cast to the string 'null' and concatenated
	E. `4` -  true is cast to its integer value (1) and added
	F. `0` - both false and null are cast to their integer values
	G. `'3undefined'` - undefined is cast to the string 'undefined' and concatenated
	H. `NaN` - 3 is cast to its integer value and undefined is subtracted from it, resulting in NaN

15.
	A. `true` - 2 is cast to its integer value, which is greater than 1
	B. `false` - String comparison is done on each value letter-by-letter.
	C. `true` - '2' is converted to a number, which is the same as 2.
	D. `false` - The === operator requires both operands to result in the same type, so this is false.
	E. `false` - true is converted to 1, which != 2.
	F. `true` - 2 is manually cast to a boolean (true), which == true.

16. The === operator requires both operands to be of the same type, whereas the == operator converts them both to integers.

17. true is converted to an integer, so the first case doesn't execute. In the second case, 2 is converted to a boolean (true), so it executes, printing `How are you?`.

18. [SEE FILE]

19. First, `num + 2` will execute, then `x * 2`, as `doSomething` is called with the anonynous function as a parameter. The result: `[6, 8, 10]`

20. [SEE FILE]

21. 1
	4
	3 (A millisecond later)
	2 (1 second later)