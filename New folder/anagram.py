str1=input('Enter main string: ').lower()
str2=input('Enter to be checked string: ').lower()
b='True'
if len(str2)<=len(str1):
    for a in str2:
        if a in str1:
            pass
        else:
            b='False'
            break
else:
    print('Anagrm not possible')
if b=='True':
    print('strings are anagram')
else:
    print('strings are not anagram')


