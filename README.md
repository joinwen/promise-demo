# promise-demo

### 简介
#### promise对象的简单示例
- ##### 构造一个简单的Promise对象
```
var p = new Promise( function( resolve, reject ) {
  //内部封装一个异步任务
  setTimeout ( function () {
    return "hello world";
  }, 4000 )
}


```
- ##### 执行这个Promise对象(4秒之后打印"hello world")
```
p.then( function( data ) {
  console.log( data );
}, function( error ) {
  console.log( error );
})
```

#### 使用Promise解决ajax回调嵌套(让代码从水平扩展变成了垂直扩展)

- ##### 封装一个ajax的Promise对象
```
function p( options ) = new Promise(function( resolve, reject ){
  //内部封装一个异步任务
  $.ajax({
    url: options.url,
    type: options.type,
    data: options.data,
    dataType: options.dataType,
    async: options.async,
    success: function( response ) {
      resolve( response );
    },
    error: function( response ) {
      reject( response );
    }
  )}
})
```
- #### 执行这个Promise对象
```
  p.then(function( data ) {
    console.log( data );
    //下面可以继续调用异步请求
    return p;
  },function( error ){
    console.log( error );
  })
  .then(function( data ){
    console.log( data );
    //下面可以继续调用异步请求
    return p;
  },function(error){
    console.log( error );
  })
  .then(function( data ){
    console.log( data );
    //下面可以继续调用异步请求
    return p;
  },function(error){
    console.log( error );
  })
  .then(function( data ){
    console.log( data );
  },function(error){
    console.log( error );
  })
  
```
#### 使用async和await

- #### async和await简介
  async关键字修饰一个函数，这个函数的返回结果是一个Promise对象

  awati关键字修饰一Promise对象，这个对象会自动执行执行resolve函数

- #### 示例
 
 ```
  function someThing(){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
      resolve("hello world");
      },4000);
    })
  }
  async function show(){
    console.log(await someThing());
    console.log("等等我，再等等我");
    console.log(await someThing());
  }
show();
 ```

- #### 使用async和await封装ajax

- ##### 产生一个Promise对象
```
  function p( options ){
    return new Promise(function( resolve, reject) {
      //内部封装一个异步任务
      $.ajax({
        url: options.url,
        type: options.type,
        data: options.data,
        dataType: options.dataType,
        async: options.async,
        success: function( response ) {
          resolve( response );
        },
        error: function( response ) {
          reject( response );
        }
    })
```
- ##### 使用这个Promise对象
  
 ```
  async function getData(options){
    try{
      const data_1 = await p( options );    //await修饰Promise对象，会自动执行resolve函数，返回结果给data_1
      const data_2 = await p( options );
      const data_3 = await p( options );
    }catche(e){
      //处理异常
    }
 ```
