import csv

fin = open('Fruit.csv')
csv_f = csv.reader(fin)
val = [row for row in csv_f]

fout = open('fruit_nodes.csv', 'w')
fout.write('Id,Label\n')
for n, row in enumerate(val[1:]):
	fout.write(str(n+1))
	fout.write(',')
	fout.write(str(row[0]))
	fout.write('\n')
fout.close()

fout = open('fruit_edges_all.csv', 'w')
fout.write('Source,Target,Weight\n')

euclideanDistance_sum = 0
counter = 0
for n, row1 in enumerate(val[1:]):
	for m, row2 in enumerate(val[1:]):
		if m != n:
			euclideanDistance = 0
			for i in range(1,19):
				print row1
				print row2
				print row1[i], row2[i],i
				euclideanDistance += (float(row1[i])-float(row2[i]))**2
			fout.write(str(n+1)+','+str(m+1)+','+str(euclideanDistance)+'\n')
			euclideanDistance_sum += euclideanDistance
			counter += 1
fout.close()
euclideanDistance_average = float(euclideanDistance_sum)/float(counter)/2.0
print 'threshold:', euclideanDistance_average

#threshold equals euclideanDistance_average
fout = open('fruit_edges_threshold.csv', 'w')
fout.write('Source,Target,Weight\n')

for n, row1 in enumerate(val[1:]):
	for m, row2 in enumerate(val[1:]):
		if m != n:
			euclideanDistance = 0
			for i in range(1,19):
				euclideanDistance += (float(row1[i])-float(row2[i]))**2
			if euclideanDistance < euclideanDistance_average:
				fout.write(str(n+1)+','+str(m+1)+','+str(euclideanDistance)+'\n')
fout.close()


