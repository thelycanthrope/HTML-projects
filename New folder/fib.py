a=0
b=1
c=0
arr=[]
k=0
fib=[0,1]
index=0
while 1:

    print("when finished press -1")
    t=int(input("Enter numner: "))
    if(t==-1):
        break
    arr.append(t)

print(arr)
arr.sort()
print(arr)
result=''

while 1:
    c=a+b
    fib.append(c)
    a=b
    b=c
    if c>arr[-1]:
        break
print(fib)
for ab in arr:
    if ab in fib:
        result=result+'t '
    else:
        result=result+'f '
print(arr)
print(result)