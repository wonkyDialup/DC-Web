list_groceries = {}
class Groceries:
    def __init__(self, store, item):
        self.store = store
        self.item = item

    def mainMenu():
        message = """
        This is your shopping list menu
        1. Create a new list
        2. Add to an existing list
        3. View a list
        4. Quit 'q'
        """
        return print(message)

    print(mainMenu())

    optionSelect = input("Please choose one of the above options ")
    selection = ""
    newList = []
    # list_groceries = newList


    while optionSelect != "q":
        if optionSelect == "1":
            newEntry = input("What is the name of the store? ")
            listInput = list_groceries[newEntry]
            newList.append(listInput)
            addGroceries = input("What would you like to add to your list? ")
            newList.append(addGroceries)
            list_groceries.append(newList)
            print(mainMenu())

        if optionSelect == "2":
            for store in list_groceries.keys():
                print(store)
            listName = int(input("Which list would you like to add to? "))
            newItem = input("What item will you be adding? ")
            list_groceries[listName].append(newItem)
            print(mainMenu())

        if optionSelect == "3":
            for store, item in list_groceries.items():
                print("{}{}".format(store, item))
            print(mainMenu())


        if optionSelect == "q":
            print("The application will now close, goodbye")
            quit()

        else:
            print("Invalid option ಠ_ಠ")
        



    