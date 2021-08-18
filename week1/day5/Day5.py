ogAvengers = ["Captain America", "Thor", "Iron Man", "Black Widow", "Hulk"]
ogAvengers.append("Hawkeye")
ogAvengers.append("Spider-Man")
ogAvengers.append("Ant-Man")

del ogAvengers[2]
ogAvengers.insert(1, "Wolverine")
# print(ogAvengers)


# FizzBuzz round deaux
for i in range(1,101):
    if ((i%3==0) and (i%5==0)):
        print("FizzBuzz")
    if ((i%3==0)):
        print("Fizz")
    if ((i%5==0)):
        print("Buzz")
    else:
        print(i)



# Moving 0's


array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

for num in array1:
    if num == 0:
        array1.remove(num)
        array1.append(num)
    else:
        pass

for num in array2:
    if num == 0:
        array2.remove(num)
        array2.append(num)
    else:
        pass
print(array1)
print(array2)
