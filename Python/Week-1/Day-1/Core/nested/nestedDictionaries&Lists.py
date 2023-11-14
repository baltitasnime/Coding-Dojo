x = [ [5,2,3], [10,8,9] ] 
x[1][0]=15

print(x)
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0]["last_name"]="Bryant"

print(students)



sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'][0]="Andres"
print(sports_directory)

z = [ {'x': 10, 'y': 20} ]
z[0]["y"]=30
print(z)




students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

for i in range(0,len(students),1) :
    for k,v in students[i].items() :
        print(v)

for i in range(0,len(students),1):
    print(students[i]['first_name'])

for i in range(0,len(students),1):
    print(students[i]['last_name'])



dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}



# for key, value in dojo.items():
#     print(key)



print(list(dojo.keys())[0])


print(len(dojo['locations']) , "locations")
for j in range(0,len(dojo['locations']),1):
    print(dojo['locations'][j])

print(len(dojo['instructors']) , "instructors")
for j in range(0,len(dojo['instructors']),1):
    print(dojo['instructors'][j])









