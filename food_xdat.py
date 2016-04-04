import csv

fp = open('xdat_health.txt', 'w')

f = open('food.csv')
csv_f = csv.reader(f)
val = [row for row in csv_f]

for row in val:
	for n, item in enumerate(row):
		if n<10 or n>50:
			fp.write(item)
			fp.write(';')
	fp.write('\n')

fp.close()
f.close()