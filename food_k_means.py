import csv
from sklearn import cluster
import numpy as np

f = open('food.csv')
csv_f = csv.reader(f)
val = [row for row in csv_f]

points = []
countries = []
for i in range(1,87):
	points.append(tuple(val[i][9:52]))
	countries.append(val[i][0])

n_class = 7
points = np.asarray(points)
k_means_pp = cluster.KMeans(init='k-means++', n_clusters=n_class, n_init=5)
k_means_pp.fit(points)
labels = k_means_pp.labels_

fhabit = open('habit.txt','w')
for label in labels:
	fhabit.write('Habit'+str(label))
	fhabit.write('\n')

fhabit.close()
f.close()