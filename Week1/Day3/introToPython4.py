print("Welcome to the program")
firstName = input("What is your first name?")
firstNameLength = len(firstName)

if firstNameLength <= 4:
    print("Please enter at least 4 characters")
else:
    print(f"Hello {firstName}, welcome!")