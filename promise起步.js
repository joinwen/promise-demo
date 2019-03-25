new Promise(
    /*执行器  executor*/
    function(resolve,reject){
        //一段耗时很长的异步操作
        resolve();  //数据处理完成

        reject();  //数据处理出错

    }
)
.then(function A(){

    //成功，下一步
},function B(){

    //失败，响应处理
});


/**
 *
 * Promise是一个代理对象，它和原先要进行的操作并无关系
 *
 * 它通过引入一个回调，避免更多的回调
 *
 *
 * Promise状态发生改变，就会触发.then()里的响应函数处理后序步骤
 *
 * Promise状态一经改变，不会再变
 *
 * Promise三种状态
 *
 * pending      待定 初始状态
 *
 * fulfilled    实现  操作成功
 *
 * rejected     被否决  操作失败
 */

