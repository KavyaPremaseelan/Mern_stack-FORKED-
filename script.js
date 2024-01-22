// // console.log('hello')
// // //must be declared
// // const pi = 3.14
// // //can be updated ,but not redeclared,block scope
// // let y =3
// // y = 4
// // //can be updated,can be redeclared,global scope
// // var z = 4
// // var z = 9
// // z = 2
// // console.log(pi,y,z)
// // console.log(window)
// // /**
// //  * number  x =
// //  * string  x = ""
// //  * boolean 
// //  * BigInt  BigInt(123)
// //  */

// //   


//   // function changeText() {
//   //   // Get the h1 element by its id
//   //   let heading = document.getElementById('myHeading');

//   //   // Change the text content
//   //   heading.textContent = 'Hello Everyone';
//   // }

//   // let count =0
//   // const timer = document.getElementById('timer')
//   // setInterval(function(){
//   // count=count+1
//   // timer.innerHTML=count},1000)


//   //const arr = [1,2,true,4,"hello"] 
//   /**
//    * selecting DOM element
//    * text manipulate-->  .textcontent
//    * add or update HTML
//    * styling can be changed-->have 2 diff approaches
//    * mobile-->(database : mobile)
//    */

//   // const dataTypesDisplay=document.getElementById('js-datatypes')

//   // const buttonElement = documnet.getElementById('datatype')
  
//   // function displayDatatypes(){
//   //   dataTypesDisplay.innerHTML = '<p>number,boolean,string</p>'
//   // }
//   // buttonElement.addEventListener('click',displayDatatypes)
//   // const datatypes= ['numbers','strings','boolean']
//   // console.log('nuber : 3')
//   // const num = 3
//   // console.log(`number : ${num}`)
//   function changeColor() {
//     // Get the element with the ID 'textToChange'
//     var textElement = document.getElementById('textToChange');

//     // Generate a random color
//     var randomColor = getRandomColor();

//     // Change the text color to the random color
//     textElement.style.color = randomColor;
// }

// function getRandomColor() {
//     // Generate a random color in hexadecimal format
//     return '#' + Math.floor(Math.random()*16777215).toString(16);
// }


//   // const butele = document.getElementById('colour')
//   // const title = document.getElementById('myHeading')
//   // function changeColor(){
//   //   myHeading.style.setProperty('color')
//   // }
//   // butele.addEventListener('click',changeColor)

var isCircle = true;

function changeShape() {
    // Get the element with the ID 'shapeElement'
    var shapeElement = document.getElementById('shapeElement');

    // Toggle between circle and square
    isCircle = !isCircle;

    // Change the shape based on the current state
    if (isCircle) {
        shapeElement.style.borderRadius = '50%'; // Circle
    } else {
        shapeElement.style.borderRadius = '0'; // Square
    }
}

