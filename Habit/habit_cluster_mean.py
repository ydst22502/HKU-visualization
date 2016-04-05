import csv

fin = open('food_habit_clustered.csv')
csv_f = csv.reader(fin)
val = [row for row in csv_f]
fin.close()

#print val[1][102] Habit4
average = [[],[],[],[],[],[],[]]
average[0] = [0 for i in range(103)]
average[1] = [0 for i in range(103)]
average[2] = [0 for i in range(103)]
average[3] = [0 for i in range(103)]
average[4] = [0 for i in range(103)]
average[5] = [0 for i in range(103)]
average[6] = [0 for i in range(103)]


#print val[1:][0][0]
for row in val[1:]:
	for n, item in enumerate(row):
		if n != 0 and n != 101 and n != 102:
			average[int(row[102][5])][n] += float(item)
	average[int(row[102][5])][0] += 1

for i in range(7):
	for n, item in enumerate(average[i]):
		if n != 0:
			average[i][n] = average[i][n] / float(average[i][0])

fout = open('food_habit_clustered_mean.csv', 'w')
for row in average:
	for n, item in enumerate(row):
		if item == max(average[0][n],average[1][n],average[2][n],average[3][n],average[4][n],average[5][n],average[6][n]) and n!=0:
			fout.write('LOVE '+str(item)+',')
		elif item == min(average[0][n],average[1][n],average[2][n],average[3][n],average[4][n],average[5][n],average[6][n]) and n!=0:
			fout.write('HATE '+str(item)+',')
		else:
			fout.write(str(item)+',')
	fout.write('\n')
fout.close()

summay = [[],[],[],[],[],[],[]]
fout = open('food_habit_summary.txt','w')
for m, row in enumerate(average):
	for n, item in enumerate(row):
		if n>=9 and n <=51:
			if item == max(average[0][n],average[1][n],average[2][n],average[3][n],average[4][n],average[5][n],average[6][n]) and n!=0:
				summay[m].append('Love '+str(val[0][n]))
			elif item == min(average[0][n],average[1][n],average[2][n],average[3][n],average[4][n],average[5][n],average[6][n]) and n!=0:
				summay[m].append('Hate '+str(val[0][n]))
			else:
				pass

for n, row in enumerate(summay):
	fout.write(str(n)+': ')
	fout.write(str(row))
	fout.write('\n\n')
fout.close()





















