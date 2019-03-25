console.log("start");

let promise=new Promise(function(resolve){
    setTimeout(function(){
        console.log("the promise fulfilled");
        resolve("hello world");
    },2000);
});

setTimeout(function(){
    promise.then(function(value){
        console.log(value);
    })
},3000);
