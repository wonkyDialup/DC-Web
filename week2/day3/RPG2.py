import random

def mainMenu():
    menu = """
    1. Attack
    2. Defend
    3. View stats
    4. Free item shop
    5. Quit Game 
    """
    print(menu)

class Character:

    def __init__(self, health):
        self.health = health

    def attack(self, other):
        raise NotImplementedError

class Player(Character):

    def __init__(self, health=100):
        super().__init__(health)

    def attack(self, other):
        answer = input("What move would you like to make (punch, kick or headbutt)? ")
        if answer.lower() in ('punch', 'kick', 'headbutt'):
            other.health -= int(random.randint(1, 100) / 
                                (random.uniform(0, 1) * other.defense))
        else:
            print("you stumble...")

class Enemy(Character):

    def __init__(self, name, strength, defense, health):
        super().__init__(health)
        self.name = name
        self.strength = strength
        self.defense = defense

    def attack(self, other):
        print("The {0.name} attacks...".format(self))
        other.health -= int(self.strength * random.uniform(0.1, 1.4))


def battle(player, enemy):
    print ("An enemy {0.name} appears...".format(enemy))
    # Combat loop
    while player.health > 0 and enemy.health > 0:
        player.attack(enemy)
        print("The health of the {0.name} is now {0.health}.".format(enemy))
        if enemy.health <= 0:
            break
        enemy.attack(player)
        print("Your health is now {0.health}.".format(player))
    # Display outcome
    if player.health > 0:
        print("You killed the {0.name}.".format(enemy))
    elif enemy.health > 0:
        print("The {0.name} killed you.".format(enemy))

enemies = [Enemy("Zombie", 10, 5, 100), Enemy("Angry Zombie", 20, 10, 100),
            Enemy("Really Angry Zombie", 30, 20, 100), Enemy("Really Really Angry Zombie", 40, 30, 130)]
battle(Player(), random.choice(enemies))


mainMenu()
while True:
    choice = int(input("This is the main menu"))
    if choice == 1:
        battle()
        mainMenu()
    # if choice == 2:
    #     defend()
    #     mainMenu()
    # if choice == 3:
    #     viewStats()
    #     mainMenu()
    # if choice == 4:
    #     items()
    #     mainMenu()
    if choice == 5:
        exit()

# enemies = [Enemy("Boar", 10, 5, 100), Enemy("Wolf", 20, 10, 100),
#             Enemy("Lion", 30, 20, 100), Enemy ("Dragon", 40, 30, 130)]
# battle(Player(), random.choice(enemies))