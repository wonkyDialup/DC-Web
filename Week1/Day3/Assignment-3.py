print("Assignment 3 - FizzBuzz")
sourceNum = int(input("Please provide a number:"))
if ((sourceNum%3==0) and (sourceNum%5==0)):
    print("FizzBuzz")
elif (sourceNum %5==0):
    print("Buzz")
elif (sourceNum %3==0):
    print("Fizz")
else:
    print("Womp womp, try again")