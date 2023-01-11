let arr = [1,2,3,4,5]
let factor=0;
for(let i=0;i<=arr.length;i++){
if(arr%i==0){
factor++;
}
}
if(factor==2){
console.log("Yes");
}
else{
console.log("No")
}