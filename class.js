// String ..
//  A JavaScript string is zero or more characters written inside quotes.

//  JavaScript Strings are used for storing and manipulating text.



// How to find the length of a string.

//  String.prototype.length


// let myName = "Zubair Akhtar";
// console.log(myName.length);


// Escape Character

// let anySentence = "We are the so-called  \"Vikings\" from the north";
// console.log(anySentence);


//  if we dont want to mess, simply use the alertnate quotes
// let anySentence = 'We are the so-called  "Vikings" from the north';
// console.log(anySentence);



// Finding a String in a String

//  String.prototype.indexOf(searchValue [, fromIndex])


// The indexOf() method returns the index of (the position of ) the first occurrence of a specified text in a string

// const myBioData = 'I am Zubair Akhtar';
// console.log(myBioData.indexOf("Akhtar"));

// Searching for a String in a String

// String.prototype.search()
// The search() method searches a string for a specified value and returns the position of the match

// const myBioData = 'I am Zubair Akhtar';
// let sData = myBioData.search("Zubair");
// console.log(sData);


// Extracting String Parts

// there are three method for extracting a part of a string

// slice(start, end)
// substring(start, end)
// substr(start, length)


// 1) Slice() Method
// Slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes two parameters: the start position,
// and the end position (end not included)

// let str = "Apple, Banana , kiwi";
// let res = str.slice(7, -2);
// console.log(res);




// Substring() method..
// substring() is  similar to slice()
// The Difference is that substring() cannot accept negative indexes.

// let str = "Apple, Bananaa, kiwi";
// let res = str.substring(0,4);

// console.log(res);


// Substr() Method
// similar to slice.
// The difference is that  the second parameter specifies the length of the extracted part

// let str = "Apple, Banana , kiwi"
// // let  res = str.substr(0,4);
// let res = str.substr(-10);
// console.log(res);





// Replacing String Content()
// String.prototype.replace(searchFor, replaceWith)

// THe replace() method replaces a specified value with another value in a string.

// let myBioData = `I am zubair akhtar `;
// let replaceData = myBioData.replace('zubair', 'Zubair');
// console.log(replaceData);
// console.log(myBioData);

// The replace() method does not change the string 
//  it is called on. it return a new string.
// by default, the replace() method replacces only the first match
// By default, the replace() method case sensitive.



// Extracting String Characters

// There are 3 methods for extracting string characters

// 1) charAt(position)
// 2) charCodeAt(position)
// 3) property access[ ]

// let str = "HELLO WORLD";
// console.log(str.charAt(0));


// charcodeAt() method
// The charCodeAt() mthod returns the unicode of the character at a specified index in a string:

// let str = "HELLO WORLD";
// console.log(str.charCodeAt(0));

