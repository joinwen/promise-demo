function doSomething(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("doSomething");
    },2000);
  })
}
function doSomethingElse(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("doSomethingElse");
    },8000);
  })
}
function findHandler(value){
  console.log("findHandler");
  console.log(value);
}
doSomething().then(doSomethingElse())
.then(findHandler);