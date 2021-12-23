magic_square = [
[8, 3, 4],
[1, 5, 9],
[6, 7, 2]
]
i=0
while (i<(magic_square).length){
j=0
sum=0
while (j<(magic_square[i]).length){
sum=sum+(magic_square[i][j])              
j=j+1
console.log("sum",sum)
}
d=0
sum1=0
while (d<(magic_square[i]).length){
sum1=sum1+(magic_square[d][d]) 
d=d+1
console.log("sum",sum1)
}
k=0
sum2=0
while (k<(magic_square[i]).length){
s=((magic_square.length)-1)-k   
while (s<(magic_square).length){
sum2=sum2+(magic_square[k][s])
s=s+1
console.log("sum",sum2)
}
k=k+1  
}            
i=i+1  
}      
console.log("opposite diagonal",sum2)
