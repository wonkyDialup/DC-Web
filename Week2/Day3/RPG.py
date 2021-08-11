class Hero: 
    def __init__(self, name, health=500, attack=50, ):
        self.name = name
        self.health = health
        self.attack = attack

    def items(self):
        itemMenu = int(input("""
        You may choose one of the following
        1. Energy Drink (+100 Health)
        2. Falcon Punch instruction guide (+25 attack)
        3. Boss Key (immediate access to Boss Room *WARNING*)
        4. Nevermind, go back
        """))
        print(itemMenu)
        if itemMenu == 1 and self.health >= 250:
            print("You aren't thirsty right now")
        else:
            self.health += 100; print("{hero.name} recovered 100 HP!")
        if itemMenu == 2:
            self.attack += 25; print("{hero.name} increased their attack by 25 points!!")
        elif itemMenu == 3:
            print('Have fun...')
            bossBattle()
        elif itemMenu == 4:
            itemMenu()

    def viewStats(self):
        print(f"--------------------------/nOur Hero: {self.name},\n {self.attack},\n {self.health}\n--------------------------")
        # mainMenu()

    def getDamage(self, damage):
        self.health -= damage
        if self.health <= 0:
            print("You died")
            exit()

name = input("What would you like to name your character? ")
name = Hero(name, health=500, attack=50)




