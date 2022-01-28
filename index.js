 // for(var a=1; a<=10; a++){
        //     if(a % 2 == 0){
        //         document.write(a + "<br>");
        //     }
        // }

        /*const n=5;
        for(let i = 1; i<=n; i++){
            document.write(`I love Javascript <br>`)
        }*/

       /* const n = 100;
        for(let a = 1; a<=n; a++){
            document.write(a + "<br>" )
           
        }
        */

        //for infinite loop




      /* let newobj = {name : "Ayaad",
        age : 19,
        class : "Javascript"}
        console.log(`
        /newobj`)*/
        

        //Array

       /* let obj = ["khurram", "Zubair", "Inam" ];

        console.log(obj[1])*/

        //if else if statement.....

        /*
        var per = 22;
        if(per >= 80 && per <=100){
            document.write("You are in Ist Division.");
        }else if(per >= 60 && per <= 80){
            document.write("You are in 2nd Division.")
        }else if(per >= 45 && per <= 60){
            document.write("You are in Third Division.")
        }else if(per >= 33 && per <= 45){
            document.write("You are in merit.")
        }else if(per < 33){
            document.write("You are Fail")
        }else{
            document.write("please enter a valid persentage")
        }*/


        // Conditional Ternary Operators

        /*
        var a = 100;
        var b;
        (a == 100)? b = "true" : b = "false";

        document.write(b)
        */


        //Switch Statement....

        /*
        var day = 10;

        switch (day) {
            case 0:
                document.write("Today is Monday");
                break;
            case 1:
                document.write("Today is Tuesday");
                break;
            case 2:
                document.write("Today is Wednesday");
                break;
            case 3:
                document.write("Today is Thursday");
                break;
            case 4:
                document.write("Today is Friday");
                break;
            case 5:
                document.write("Today is Saturday");
                break;
            case 6:
                document.write("Today is Sunday");
                break;

          
        
            default:
                document.write("Enter the valid week day")
                break;
        }
        */

        //Confirm Box.....
        /*
        var a = confirm("Do you Like Our Website ?");

        if(a){
            alert("Thanks");
        }else{
            alert("Sorry")
        }*/


        //Function Syntax in JS.....
        /*
        function helloName(){
            document.write("hello World");
        }

        function Another(){
            document.write("Hello Everyone");
        }

        
        Another();
        Another();
        Another();
        helloName();
        helloName();
        helloName();
        helloName();
        */
        //Function with Parameters

        /*
        function helloName(fname, lname){
            document.write("hello" + fname + lname);
        }
        helloName("  Zubair", "Akhtar")*/

    


        // Loops In JS
        
        // var a = 1;
        // while(a <= 10){
        //     document.write( a +") Hello Zubair here.....<br>")
        //     a++;
        // }
        

        //While Loop in JS.....

//     var num= 10;
//     while(num >=1){
//         console.log(num);
//         num--;
//  }

// Do-Whiel Loop

// let num =0;
// do{
//     console.log(num);
//     num++;
// }while(num<=50);




// Table of 8, 9 and 10......

// for(var num = 1; num <=10; num++ ){
//     var tableOf = 8;

//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }


// table of 9 ........

// for(let a = 1; a <= 10; a++ ){
//     let tableOf = 9;
//     console.log(tableOf + " * " + a + " = " + tableOf * a);
// }

// Table of 10......

// for(let z = 1; z <= 20; z++){
//     let tableOf = 100;
//     console.log(tableOf + " * " + z + " = " + tableOf * z);
// }



//Function in Javascript
// Function Defination

// function functionName(){
//     let a = 10, b = 20;
//     let total = a+b;
//     console.log(total);
    
// }
// functionName();


//function parameters........

// function numbers(a,b,c=9){
//     let total = a+b+c;
//     console.log(total);
// }
// numbers(20,50);
// numbers(100,20);


//  Function Expression....

// function num(a,b){
//     let total = a+b;

// }
// let funExp = num(10,50)


//Return Keyword....

// function num(a,b){
//     return total = a+b;
// }
// let funExp = num(120,500);
// console.log(funExp);


//Anonymous function 

// var functionName = function(a,b){
//     return total = a+b;

// }
// var product = functionName(2,10);
// var product1 = functionName(10,10);

// console.log(product / product1);




// Table of 12 latest method.....



// for(let num = 1; num<= 12; num++){
//     let tableOf = 12;
//     console.log( `${tableOf} * ${num} = ${tableOf * num} ` );
// }



// Default parameter


// function fname(a,b=4){
//     return a*b;
// }
// console.log(fname(2));


// Arrow Function......


// const sum = () => {
//     let a =10, b = 20;
//     return ` The sum of two Numbers is ${a+b}`
// }
// console.log(sum());


// modern way of Arrow function.....

// const sum = () =>  ` here the Sum of two numbers is ${(a=5)+(b=6)}` 
// console.log(sum());



// Traversal in array......

// var myFriends = [ 'Zubair', 'Akhtar', 'Khurram']

// console.log(myFriends[1]);

// console.log(myFriends.length);


// #Example 

// let arr = [10, 20, 30, 40, 50, 60];
 
// console.log(arr[5]);





// let arr = ["a", 10, 'zubair', true];
// for(let i in arr){
//     console.log(arr[i]);
// }

// arr.forEach(Element , index , );



// Arrays in JavaScript....
// Defination..
    //   In JavaScript We use to store multiple data in a variable ..
        // Indexes are use to addressed per Items in Array and started from 0...

        // syntax of Array
        // let arr = new Array();
        // let arr = [];

        // or

        // let fruit = ["Apple", "Orange", "Mango","Graps" ];
        
        // console.log(fruit[0]);
        // console.log(fruit[1]);
        // console.log(fruit[2]);
        // console.log(fruit[3]);
        // console.log(fruit[1]);

        // We can store multiple data types in a single array or varibale,,,

        // length of arry list....
// let arr = ["Zubair", 14, true, 'Ali']
// console.log(arr.length);





// Main difference between For in and for of Loop;;......


// For in loop...
// For in loop gives the index of the elements in arrays

// let myFriends = ['Zubair', 'Ali', 'Khurram', "Ram"];

// for(let elements in myFriends){
//     console.log(elements);
// }

// for  of loop 
// for of loop gives the elements in the Array

// let myFriends = ['Zubair', 'Ali', 'Khurram', "Ram"];

// for(let elements of myFriends){
//     console.log(elements);
// }

// ForEach loop....

// let myFriends = ['Zubair', 'Ali', 'Khurram', "Ram"];
// myFriends.forEach(function(elements, index, array){
//     console.log(elements +" " + index + "  "+ array);
// });



// Using Fat Arrow function in forEach function.....

// let myFriends = ['Zubair', 'Ali', 'Khurram', "Ram"];
// myFriends.forEach((elements, index, array) => {
//     console.log(index + " " + elements + "    " + array);
// });
 






// Array Methods....

//  Array prototype indexOf() 

// let myFriends = ['Zubair', 'Ali', 'Khurram', "Ram"];
// myFriends.indexOf(1);
// console.log(myFriends);

// 


// Array prototype push()
// THe unshift()method adds one or more elements to the end of an array and returns the new length of the array.


// const animals = [ 'chicken', "goats", 'sheep'];
// animals.push('pigs','cat', 'cow')
// console.log(animals)
// console.log(animals.length)


// Array prototype unshift()...
// THe unshift()method adds one or more elements to the beginnig of an array and returns the new length of the array


// const animals = [ 'chicken', "goats", 'sheep'];
// const count = animals.unshift('pigs','cat', 'cow');
// console.log(animals);
// console.log(count);


//  2nd Example....
// const myNumbers = [ 1,2,3,,5];
// myNumbers.unshift(4,6);
// console.log(myNumbers);


// Array.Prototype.pop()
// The pop() method removes the last element from an array and returns that element. This method changes the lenght of the array.

// const animals = ['cat', 'cow' , 'pig' , 'chicken'];

// console.log(animals);
// console.log(animals.length);

// console.log(animals.pop());
// console.log(animals);
// console.log(animals.length);


// Array.Prototype.Shift()....
//  THe Shift() method removes the first element from an array and returns that removed element.  This method cheanges the length of the array.

// const animals = ['cat', 'cow' , 'pig' , 'chicken'];
// console.log(animals);
// console.log(animals.shift());
// console.log(animals);





// challange time



// Splice method....
// Add or removes elements from and array.


// const months = [ 'jan', 'feb','march','april', 'june', 'july'];
// console.log(months);
// const newMonth = months.splice(6,0,'dec');
// console.log(months);
// console.log(months.length);



// const months = [ 'jan', 'feb','march','april', 'june', 'july'];
// const indexOfMonth = months.indexOf("march");
// if(indexOfMonth != -1 ){

//     const undateMonths = months.splice(2,2,'March');
//     console.log(months)
// }else{
//     console.log("no such data found");
// }





// const months = [ 'jan', 'feb','march','april', 'june', 'july'];
// const indexOfMonth = months.indexOf("june");
// if(indexOfMonth != -1 ){

//     const undateMonths = months.splice(indexOfMonth,1);
//     console.log(months)
// }else{
//     console.log("no such data found")
// }



// Map method and Redue method....
// Map method...
// Returns a new array containing the results of calling a function on every element in this array

// const array1 = [ 1,4,5, 9, 16, 25];


// let  newArr = array1.map((element, index, arr) => {
//     return element >9
// });
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((element,index,arr) => {
//     return     `Index no = ${index} and the value is ${element} belong to ${arr}`
// })
// console.log(newArr);




// Reduce Method.....
// Flatten an array means to convert the 3d or 2d into single dimentional array...

// or'

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// The reducer function takes four arguments;

// 1)  Accumulator
// 2) Current value
// 3) Current Index  
// 4) Source Array



// let arr = [ 5,6 ,2];
// let sum = arr.reduce((accumulator, element, index, array) => {
//     debugger;
//         return accumulator += element;
// },10)
// console.log(sum);



// How  to fatten an array
// Converting 2d and 3d array into one dimentional array..

// Solution....
// const arr = [
//     [2,3,5],
//     [5,6,2],
//     [1,3,6],
// ];
// let flatten = arr.reduce((accumulator, element) => {
//     return accumulator.concat(element);
// })

// console.log(flatten);
