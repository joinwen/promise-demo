console.log("here we go");

// new Promise(resolve => {
//     setTimeout( ()=>{
//         resolve("hello");
// },2000);
// })
// .then(value=>{
//     console.log(value+" world");
// });

new Promise(function(resolve){
    setTimeout(function(){
        resolve("hello");
    },3000);
})
.then(function(value){
    console.log(value+" world");
})