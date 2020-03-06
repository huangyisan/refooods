#!/bin/bash
num=0
while read line
do
wget $line -O $num.webp
let num+=1
done<pic
