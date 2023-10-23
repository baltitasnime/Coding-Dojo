//level 2: challenge 1
var x =[1,2,4];
console.log(x)
// [1,2,4]
//level 2: challenge 2
var x [1,3,5];
console.log(x[0]);
//1
//level 2: challenge 3
var x = [2,4,6];
console.log(x[1]);
//4
//level 2: challenge 4
var x = [1,3,5];
console.log(x[2]);
//5
//level 2: challenge 5
var x = [1.3];
console.log(x[0]);
//1.3
//level 2: challenge 6
var x =[1,2,4];
x[0]=x[1];
console.log(X);
//[2,2,4]
//level 2: challenge 7
var x =[1,3,5];
var y = x.lenght;
console.log(y);
//3
//level 2: challenge 8
var x = [2,4,6,3,7];
var y = x.length-2;
console.log(x[y]);
//3
//level 2: challenge 9
var x = [2,4,6,3,7];
var y = x.length;
console.log(x[y-1]);
//7
//level 2: challenge 10
var x = [1,3,5,7];
x[0] = x[x.length-2];
console.log(x);
//[5,3,5,7]
//level 2: challenge 11
var x =[1,3,5,7];
x[x.length-3]= x[x.length/2+x.length/4];
console.log(x);
//[1,7,5,7];
//level 2: challenge 12
var x = [1,3,5,7];
var y = [2,4,6];
x[2]= y[x.length-3];
console.log(x);
//[1,3,4,7];
//level 2: challenge 13
var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3]+x[x[0]+y[0]];
console.log(x);
//[1,3,11,7]


//level 3: challenge 1
var x = [1,3,5];
x[0] = x[2];
x[[1]]= x[0];
console.log(x);
//[5,5,5]
//level 3: challenge 2
var x [1,3,5];
var y = [0,5,7];
x[0]= x[1]+y[2];
y[1]=y[2];
y[1]=y[2]-x[0];
console.log(x);
//[10,3,5]
//level 3: challenge 3
var x = [1,3,5,8];
x[0]=x[x.length-1];
console.log(x);
//[8,3,5,8]
//level 3: challenge 4
var x = [1,3,5,8];
var temp = x[x;length-1];
x[x.length-1]=x[0];
console.log(x);
//[1,3,5,1]
//level 3: challenge 5
var x = [1,3,5,8];
var temp = x[x.length-1];
x[x.length-1]= x[0];
x[0]= temp;
console.log(x);
//[8,3,5,1]
//level 3: challenge 6
var x = [1,3,5,8];
x.pop();
x.push(7);
console.log(x);
//[1,3,5,7]
//level 3: challenge 7
var x = [1,3,5];
x[0]=15;
x[3]=77;
console.log(x);
//[15,3,5,77]
//level 3: challenge 8
var x = [1,3,5,8,2,-5,-8];
x[0]= x[x.length-1];
x[x.length-1]=[0];
console.log(X);
//[-8,3,5,8,2,-5,-8]
//level 3: challenge 9
var x = [1,3,5,8,2,-5,-8];
var temp = x[x.length-1];
x[x.length-1]=x[0];
x[0]=temp;
console.log(x);
//[-8,3,5,8,2,-5,1]
//level 3: challenge 10
var x = [1,3,5];
x.push(7);
console.log(x);
//[1,3,5,7]
//level 3: challenge 11
var x = [2,4,6];
x.push(3);
console.log[x];
//[2,4,6,3]
//level 3: challenge 12
var x = [1,3,5];
var y = x[0]+x[1];
x.push(y);
console.log(x);
//[1,3,5,4];
//level 3: challenge 13 
var x = [2,3,5];
x.push(x[0]+x[1]);
console.log[x];
//[2,3,5,5]
//level 3: challenge 14
var x = [1,3,5];
x.pop();
console.log(x);
//[1,3]
//level 3: challenge 15
var x = [1,3,5]
x.push(2);
x.pop();
console.log(x);
//[1,3,5]




















