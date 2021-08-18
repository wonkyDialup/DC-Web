class Person:
    # constructor, is the blueprint or skeleton or model for your class
    # you define the constructor like a function
    # you will use the keywords __init__ as the name
    # you have your open and close ()
    # you will use the keyword self (self)
    def __init__(self, lifePoints, name, hairColor, age, ears, address):
        self.lifePoints = lifePoints
        self.name = name
        self.hairColor = hairColor
        self.age = age
        self.ears = ears
        self.address = address

    def changeHairColor(self, colorToChangeItTo):
        self.hairColor = colorToChangeItTo

    def takeDamage(self, damageAmount):
        self.lifePoints -= damageAmount


britt = Person(10, "Britt", "Blondeish", 20, 2, "123 main st")
# We can invoke methods that are on a class by calling them with dot notation
print(britt.hairColor)
britt.changeHairColor("Blue")
print(britt.hairColor)

# Code to show how someone can "take damage" and we can run a scenario based on a class attribute
# while True:
#     britt.takeDamage(1)
#     if britt.lifePoints != 0:
#         print("Keep fighting")
#     else:
#         print("RIP Britt")
#         break


# Inheritance
# Person
#  140lbs
#  6.1
class Athlete(Person):
    # height
    # vertical Jump
    # sport
    # but they also have lifePoints, name, hairColor, age, ears, address
    def __init__(self, lifePoints, name, hairColor, age, ears, address, height, vertical, sport):
        # In order to inherit the init function of the parent class, we use super(). whatever we want to inherit, .__init__()
        super().__init__(lifePoints, name, hairColor, age, ears, address)
        self.height = height
        self.vertical = vertical
        self.sport = sport

    def playSports(self):
        print("I play " + self.sport)


timothy = Athlete(20, "Timothy", "black", 20, 2,
                  "123 w main st", "6.1", "36", "basketball")
# subclasses inherit methods from the parent class
timothy.takeDamage(1)
timothy.playSports()

