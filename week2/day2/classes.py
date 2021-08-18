#  Intro to classes
# Classes
# Class is a complicated/more advanced dictionary that can house information, methods (functions) and can be replicated

# List ["can",123,{}]
# Dictionary {"key": "value"}
# Tuple (12321312,123123123)

#  You define a class with the keyword "class", followed by the name of the class
#  SCOPE
randy = "randy"


def joesFunction():

    joesName = "joe"
    print(randy)
    return joesName


class Person:
    # constructor, is the blueprint or skeleton or model for your class
    # you define the constructor like a function
    # you will use the keywords __init__ as the name
    # you have your open and close ()
    # you will use the keyword self (self)
    def __init__(self):
        self.name = "Joe"
        self.hairColor = "Black"
        self.age = "unknown"
        self.ears = 2
        self.address = "123 tomball st"
    # name
    # hairColor
    # age


#  First we must instantiate a class and assign it to a variable
britt = Person()
#  To access unique attributes of that class, we use dot notation
# So if you want to get britts name, you would use britt.name (and so on)
print(britt.address)
print(britt.ears)
# Even though this is using the same class we defined, this is a new instance
#  So justin exist somewhere else seperate on the computer and the computer will treat him uniquely
justin = Person()
print(justin.ears)
# def getAge(age):
#     PersonsAge = age
#     return PersonsAge