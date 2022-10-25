# import csv
# from hashlib import new
# import itertools
# import pandas as pd
# import numpy as np


# class City:
#     # id_iter = itertools.count()

#     def __init__(self, name, code):
#         # self.id = next(City.id_iter)
#         self.name = name
#         self.code = code


# class CityCodeDict:
#     def __init__(self, name, code):
#         # self.id = id
#         self.name = name
#         self.code = code


# city_list = []
# with open('citycodelist.csv', newline='') as csvfile:
#     with open('writecitycodelist.csv', 'w', newline='') as f:
#         cityreader = csv.reader(csvfile)
#         writer = csv.writer(f)
#         for row in cityreader:
#             ci = City(row[0], row[1])
#             result = [ci.name, ci.code]
#             # print(result)
#             writer.writerow(result)
#     f.close()
# csvfile.close()
# city_code_dictionary = {}
# fieldnames = ['id', 'name', 'code']
# newlist = []
# # new_code_dict = {}
# with open('writecitycodelist.csv', newline='') as convertdict:
#     with open('writeconvertdict.csv', 'w', newline='') as g:
#         convert = csv.reader(convertdict)
#         writers = csv.writer(g)
#         # writedict = csv.DictWriter(g, fieldnames=fieldnames)
#         city_code_dictionary = dict()
#         for row in convert:
#             dict(name=row[0], code=row[1])
#             writers.writerow(row)
#         g.close()
# convertdict.close()


