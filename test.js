function fun(a,b,c){
	if(!c) {
 a= a + '/home'
}
else{
	a=a*b*c;
}
 return a;
}

var i=fun(__dirname);
console.log(i);