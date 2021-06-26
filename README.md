# idNumber
Check if an Israeli id number is legal.

An Israeli id number must contain 9 digits exactly, while the last one (the 9th digit) is used as a check digit.

### The calculation is done as follows:

id number:  x  x  x  x  x  x  x  x  y  (y = check digit)

        ______________________
        x  x  x  x  x  x  x  x
        1  2  1  2  1  2  1  2
        ______________________
        (x*1)+(x*2)+(x*1)+(x*2) ...... = sum
        sum + y = N
        if N/10 equals an integer (a whole number) - the id number is legal
