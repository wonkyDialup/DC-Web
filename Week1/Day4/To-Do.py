# To Do List
print("Welcome, please select an option ಠ_ಠ")
taskSelect = int(input("Select one of the following:\n\n1. Add a task\n\n2. Delete a task\n\n3. View all tasks\n\n Press Q to quit\n\n"))
if taskSelect == 1:
    taskName = input("What is the name of the task?\n")
    priority = input("What is the priority of your task?\n\nHigh\nMedium\nLow\n")
    task_dict = {taskName, priority}
def getTask(task_dict):
    tasks = []
    for key in task_dict:
        tasks.append(key)

    return tasks
items = task_dict.items()
# Frustrating...