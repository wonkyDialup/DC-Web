print("Assignment 1 - Calculator")
num1 = int(input("What is the first number?"))
operand = input("Would you like to add, subtract, multiply, or divide?")
num2 = int(input("What is the second number?"))
if operand == "add":
    print("The answer is", num1 + num2)
elif operand == "subtract":
    print("The answer is", num1 - num2)
elif operand == "multiply":
    print("The answer is", num1 * num2)
elif operand == "divide":
    print("The answer is", num1 / num2)
else:
     print("Please provide a valid input")