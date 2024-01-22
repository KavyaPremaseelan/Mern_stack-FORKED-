// console.log('async')
// //single thread - async
// /**
//  * single threaded but async 
//  * event loop - in browser as js run in that
//  */
// function displayHello()
// {
//     setTimeout(function(){
//         console.log('hello')
//     },1000)
//     console.log('hey')
// }
// displayHello()
// function dataTypes(data,callback){
//     setTimeout(function(){
//         console.log(data)
//         console.log(data)
//         if((callback){
//             callback()
//         })
//     },2000)
// }
// function display(s) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log(s);
//             resolve('completed');
//             //reject('function incomplete');
//         }, 2000);
//     });
// }

// display('hey').then(function(status) {
//     if (status === 'completed')
//      { return display('hi'); }
// }).then(function(status) {
//     if (status === 'completed') {
//         return display('hola');
//     }
// });
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  // async function asyncCall() {
  //   console.log('calling');
  //   const result = await resolveAfter2Seconds();
  //   console.log(result);
  //   // Expected output: "resolved"
  // }
  
  // asyncCall();