console.log("here we go");

new Promise(function(resolve){
    setTimeout(function(){
        resolve("hello");
    },2000)
})
.then(function(value){
    console.log(value);
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("world");
        },2000);
    });
})
.then(function(value){
    console.log(value+" world");
})