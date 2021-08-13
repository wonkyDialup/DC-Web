import random
import time

# Main Menu
def mainMenu():
    menu = """
    Welcome to Monster Deathmatch v1.0
…………………▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
……………▄▄█▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓█▄▄
…………▄▀▀▓▒░░░░░░░░░░░░░░░░▒▓▓▀▄
………▄▀▓▒▒░░░░░░░░░░░░░░░░░░░▒▒▓▀▄
……..█▓█▒░░░░░░░░░░░░░░░░░░░░░▒▓▒▓█
…..▌▓▀▒░░░░░░░░░░░░░░░░░░░░░░░░▒▀▓█
…..█▌▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░▒▓█
…▐█▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓█▌
…█▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓█
..█▐▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒█▓█
…█▓█▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒█▌▓█
..█▓▓█▒░░░░▒█▄▒▒░░░░░░░░░▒▒▄█▒░░░░▒█▓▓█
..█▓█▒░▒▒▒▒░░▀▀█▄▄░░░░░▄▄█▀▀░░▒▒▒▒░▒█▓█
.█▓▌▒▒▓▓▓▓▄▄▄▒▒▒▀█░░░░█▀▒▒▒▄▄▄▓▓▓▓▒▒▐▓█
.██▌▒▓███▓█████▓▒▐▌░░▐▌▒▓████▓████▓▒▐██
..██▒▒▓███▓▓▓████▓▄░░░▄▓████▓▓▓███▓▒▒██
..█▓▒▒▓██████████▓▒░░░▒▓██████████▓▒▒▓█
..█▓▒░▒▓███████▓▓▄▀░░▀▄▓▓███████▓▒░▒▓█
….█▓▒░▒▒▓▓▓▓▄▄▄▀▒░░░░░▒▀▄▄▄▓▓▓▓▒▒░▓█
……█▓▒░▒▒▒▒░░░░░░▒▒▒▒░░░░░░▒▒▒▒░▒▓█
………█▓▓▒▒▒░░██░░▒▓██▓▒░░██░░▒▒▒▓▓█
………▀██▓▓▓▒░░▀░▒▓████▓▒░▀░░▒▓▓▓██▀
………….░▀█▓▒▒░░░▓█▓▒▒▓█▓▒░░▒▒▓█▀░
…………█░░██▓▓▒░░▒▒▒░▒▒▒░░▒▓▓██░░█
………….█▄░░▀█▓▒░░░░░░░░░░▒▓█▀░░▄█
…………..█▓█░░█▓▒▒▒░░░░░▒▒▒▓█░░█▓█
…………….█▓█░░█▀█▓▓▓▓▓▓█▀░░█░█▓█▌
……………..█▓▓█░█░█░█▀▀▀█░█░▄▀░█▓█
……………..█▓▓█░░▀█▀█░█░█▄█▀░░█▓▓█
………………█▓▒▓█░░░░▀▀▀▀░░░░░█▓▓█
………………█▓▒▒▓█░░░░ ░░░░░░░█▓▓█
………………..█▓▒▓██▄█░░░▄░░▄██▓▒▓█
………………..█▓▒▒▓█▒█▀█▄█▀█▒█▓▒▓█
………………..█▓▓▒▒▓██▒▒██▒██▓▒▒▓█
………………….█▓▓▒▒▓▀▀███▀▀▒▒▓▓█
……………………▀█▓▓▓▓▒▒▒▒▓▓▓▓█▀
………………………..▀▀██▓▓▓▓██▀
    1. Begin Battle
    2. Quit Game 
    """
    print(menu)

class Player:

    def __init__(self, health=350):
        self.health = health

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


class Enemy:

    def __init__(self, name, strength, defense, health):
        self.health = health
        self.name = name
        self.strength = strength
        self.defense = defense

    def attack(self, target):
        print("The {0.name} launches for an attack!".format(self))
        target.health -= int(self.strength * random.uniform(0.1, 1.5))

# Battle loop
def battle(player, enemy):
    print("Get ready!")
    time.sleep(2)
    print("3")
    time.sleep(1)
    print("2")
    time.sleep(1)
    print("1")
    time.sleep(1)
    print("They're coming...")
    print ("Oh no! A wild {0.name} appears out of nowhere!".format(enemy))
    while player.health > 0 and enemy.health > 0:
        player.attack(enemy)
        time.sleep(2)
        print("After that attack, {0.name} has their HP reduced to {0.health}.\n".format(enemy))
        if enemy.health <= 0:
           battle(Player(), random.choice(enemies)) 
        enemy.attack(player)
        time.sleep(2)
        print("Ouch! Your health is now {0.health}.\n".format(player))
    if player.health < 100:
        print("Your HP is getting low, and the potion shop is closed.")
    if player.health > 0:
        time.sleep(1)
        print("You have vanquished {0.name}.\n".format(enemy))
        battle(Player(), random.choice(enemies))
    elif enemy.health > 0:
        time.sleep(2)
        print("You fought hard, but {0.name} killed you. The end!".format(enemy))
        time.sleep(2)
        print("""
        Writer, Producer, Director, Programmer:
        -------------Justin Gibbs--------------
        """)
        time.sleep(3)
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
            print("""
        Writer, Producer, Director, Programmer:
        -------------Justin Gibbs--------------
        """)
        time.sleep(2)
        exit()
    except ValueError:
        print("Choose a valid option")





