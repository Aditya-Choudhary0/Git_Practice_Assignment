let N=15;
let factors=0;
for (let i=1;i<=N;i++){

if(N%i==0){
factors++
}

}
if (factors==2){
console.log("prime")
}else{
console.log("not prime")
}