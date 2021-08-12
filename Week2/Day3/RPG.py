import random

def mainMenu():
    menu = """
    Welcome to this basic zombie fighting game
    1. Fight the horde of zombies
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
        answer = input("""
        Choose your next action:

        PUNCH
        KICK
        TACKLE
    
        """)
        if answer.lower() in ('punch', 'kick', 'tackle'):
            target.health -= int(random.randint(15, 150) / (random.uniform(0, 1) * target.defense))
        else:
            print("you stumble...")


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
    elif enemy.health > 0:
        print("The {0.name} killed you. The end!".format(enemy))
        exit()

# Enemy List and Boss details
enemies = [Enemy("Zombie", 10, 5, 100), Enemy("Angry Zombie", 20, 10, 125), Enemy("Really Angry Zombie", 30, 20, 150), Enemy("Really Really Angry Zombie", 40, 30, 200)]

# main menu
mainMenu()
while True:
    choice = int(input("Choose one of the above "))
    if choice == 1:
        battle(Player(), random.choice(enemies))
    if choice == 2:
        exit()
    else:
        print("Choose a valid option")




