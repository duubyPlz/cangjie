#!/usr/bin/env python3

from subprocess import Popen, PIPE

if __name__ == "__main__":
    derp = "尸";
    p1 = Popen(["echo",'"{}"'.format(derp)], stdout=PIPE)
    p2 = Popen(["iconv", "-f utf-8 -t big5"], stdin=p1.stdout, stdout=PIPE)
    p1.stdout.close()

    output, errors = p2.communicate()

    print("OUTPUT")
    print(output)
    print("ERRORS")
    print(errors)
#echo "尸" | iconv -f utf-8 -t 

'''
TODO:
    open big5Codes.txt
    split by '|'
    for each entry, attach to url
    access url & save file
'''
