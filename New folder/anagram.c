#include <stdio.h>
#include<string.h>

int main()
{
    char s1[20];
    char s2[20];
    printf("enter main string\n");
    scanf("%s",s1);
    printf("enter string to be checked\n");
   
    scanf("%s",s2);
    printf("%s %s\n",s1,s2);

    //coverting strings to lowercase
    for(int i=0;i< strlen(s1);i++)
    {
        if(s1[i]>='A' && s1[i]<='Z')
        {
            s1[i]=s1[i]+32;
        }
    }
     for(int i=0;i< strlen(s2);i++)
    {
        if(s2[i]>='A' && s2[i]<='Z')
        {
            s2[i]=s2[i]+32;
        }
    }
    char res='f';
    //checking secondary string in main string
    if(strlen(s2)<=strlen(s1))
    {
        for(int i=0;i<strlen(s2);i++)
        {
            res='f';
            for(int j=0;j<strlen(s1);j++)
            {
                if(s2[i]==s1[j])
                {
                    res='t';
                }
            }
            if(res=='f')
            {
                break;
            }
        }
    }
   else
   {
       printf("anangram not possible\n");
   }
   if(res=='t')
   {
       printf("strings are anagram\n");
   }
   else
   {
       printf("not anagram\n");
   }
   
    return 0;
}
