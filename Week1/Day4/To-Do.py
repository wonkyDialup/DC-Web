print("Welcome, please select an option ")
tasks = []


taskSelect = (input("Select one of the following:\n\n1. Add a task\n\n2. Delete a task\n\n3. View all tasks\n\n Press Q to quit\n\n"))
while taskSelect != "q":
    if taskSelect == "1":
        taskName = input("What is the name of the task?\n")
        priority = input("What is the priority of your task?\n\nHigh\nMedium\nLow\n")
        newTask = taskName + " - " + priority
        tasks.append(newTask)
        print("A new task was added" + str(tasks))
        taskSelect = (input("Select one of the following:\n\n1. Add a task\n\n2. Delete a task\n\n3. View all tasks\n\n Press Q to quit\n\n"))


    elif taskSelect == "2":
        count = 0
        for items in tasks:
            print("%d: %s" % (count, items))
            count += 1
        removeTask = (input("Enter the number of the task you would like to delete."))
        del tasks[removeTask]
        print(tasks)
        taskSelect = (input("Select one of the following:\n\n1. Add a task\n\n2. Delete a task\n\n3. View all tasks\n\n Press Q to quit\n\n"))


    elif taskSelect == "3":
        task_Dict = {}
        taskDict = tasks
        count = 1
        for listTasks in tasks:
            print("Here are your stored tasks")
            count += 1
            taskSelect = (input("Select one of the following:\n\n1. Add a task\n\n2. Delete a task\n\n3. View all tasks\n\n Press Q to quit\n\n"))

    elif taskSelect == "q":
        quit


    else:
        print("Invalid option ಠ_ಠ")