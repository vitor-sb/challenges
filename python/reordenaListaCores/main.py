import re

teste = "red3 blue4 green1 yellow2"


def function(s):
    resultList = s.split()
    result = ""
    for name in s.split():
        number = int(re.sub('[a-zA-Z]', "", name)) - 1
        resultList[number] = re.sub('[0-9]', " ", name)

    for colors in resultList:
        result += colors

    print(result)

if __name__ == '__main__':
    function(teste)
