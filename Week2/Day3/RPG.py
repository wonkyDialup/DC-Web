import random

# Main Menu
def mainMenu():
    menu = """
    Welcome to Monster Deathmatch v1.0
    1. Begin Battle
    2. Quit Game 
    """
    print(menu)

# Character classes
class Character:
    def __init__(self, health):
        self.health = health

class Player(Character):

    def __init__(self, health=500):
        super().__init__(health)

    def attack(self, target):
        answer = int(input("""
        Choose your next action:

        1. PUNCH
        2. KICK
        3. TACKLE
    
        """))
        try:
            if answer == 1: 
                target.health -= int(random.randint(50, 100) / (random.uniform(1, 0) * target.defense))
            if answer == 2:
                target.health -= int(random.randint(75, 150) / (random.uniform(1, 0) * target.defense))
            if answer == 3:
                target.health -= int(random.randint(115, 200) / (random.uniform(1, 0) * target.defense))
        except ValueError:
            print("Please choose option 1, 2, or 3")
            battle(Player(), random.choice(enemies))


class Enemy(Character):

    def __init__(self, name, strength, defense, health):
        super().__init__(health)
        self.name = name
        self.strength = strength
        self.defense = defense

    def attack(self, target):
        print("The {0.name} launches for an attack!".format(self))
        target.health -= int(self.strength * random.uniform(0.1, 1.5))

# Battle loop
def battle(player, enemy):
    print ("Oh no! A wild {0.name} appears out of nowhere!".format(enemy))
    while player.health > 0 and enemy.health > 0:
        player.attack(enemy)
        print("The health of the {0.name} is now {0.health}.\n".format(enemy))
        if enemy.health <= 0:
           battle(Player(), random.choice(enemies)) 
        enemy.attack(player)
        print("Your health is now {0.health}.\n".format(player))
    if player.health > 0:
        print("You killed the {0.name}.\n".format(enemy))
        battle(Player(), random.choice(enemies))
    elif enemy.health > 0:
        print("The {0.name} killed you. The end!".format(enemy))
        exit()

# List of Enemies
enemies = [Enemy("Banshee",23, 15, 110), Enemy("Bone Naga", 20, 10, 125), Enemy("Chuul", 30, 20, 150), Enemy("Couatl", 40, 30, 111),
                    Enemy("Ettin", 27, 20, 125), Enemy("Flameskull", 18, 5, 80), Enemy("Ghost", 25, 15, 90), Enemy("Lamia", 60, 21, 210),
                    Enemy("Mummy Lord", 43, 50, 85), Enemy("Iron Golem", 90, 100, 200), Enemy("Ulamog The Ceaseless Hunger", 200, 150, 300)]

mainMenu()
while True:
    try:
        choice = int(input("Choose one of the above "))
        if choice == 1:
            battle(Player(), random.choice(enemies))
        if choice == 2:
            exit()
    except ValueError:
        print("Choose a valid option")




