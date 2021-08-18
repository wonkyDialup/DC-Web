# Question 1
Sum = 0

numList = [33, 45, 98, 43, 77, 12, 81, 23, 9]

for numTotal in range(0, len(numList)):
    Sum = Sum + numList[numTotal]
print("The total number is", Sum)

# Question 2
print("The largest number is", max(numList))

# Question 3
print("The smallest number is", min(numList))

# Question 4
for evenNum in numList:
    if evenNum % 2 == 0:
        print(evenNum)

# Question 5
newList = [2, 4, 6, 8, 10]
min = 0 

count = 0
for i in newList :
    if i > min :
        count = count + 1
print ("The numbers greater than 0 : " + str(count))

# Question 6
list1 = [-9, 12, 90, -5, 7, -54]
for posNum in list1:
    if posNum >= 0:
        print(posNum)