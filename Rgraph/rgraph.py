import json
import csv

fin = open('habit.csv')
csv_f = csv.reader(fin)
val = [row for row in csv_f]


habits = [[],[],[],[],[],[],[]]
for row in val[1:]:
	habits[int(row[1][5])].append(row[0])

#{id:"000",name:"China",children:[],data:{}},
for n, habit in enumerate(habits):
	for m, item in enumerate(habit):
		print '															{id:\"0'+str(n)+str(m)+'\",name:\"'+item+'\",children:[],data:{}},'


"""
var json = {
        id: "0",
        name: "Countries",
        children: [{
                    id: "00",
                    name: "Habits0",
                    children: [],
                    data:{}
                  },
                  {
                    id: "01",
                    name: "Habits1",
                    children: [],
                    data:{}
                  },
                  {
                    id: "02",
                    name: "Habits2",
                    children: [],
                    data:{}
                  },
                  {
                    id: "03",
                    name: "Habits3",
                    children: [],
                    data:{}
                  },
                  {
                    id: "04",
                    name: "Habits4",
                    children: [],
                    data:{}
                  },
                  {
                    id: "05",
                    name: "Habits5",
                    children: [],
                    data:{}
                  },
                  {
                    id: "06",
                    name: "Habits6",
                    children: [],
                    data:{}
                  },
        ],
        data:{}
    };
"""