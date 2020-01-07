import createApp from './app';


// 服务端需要每次都需要生成一个新的app实例
export default (context) => {
  return new Promise((resolve) => {
    let { app, router, store }  = createApp();
    router.push(context.url);
    // 我们需要在路由加载完之后，才能resolve app，在服务端运行的router会有onReady方法
    router.onReady(() => {
      // 需要执行当前页面(组件)中的asyncData方法
      let matchesComponents = router.getMatchedComponents(); // 获取当前路径匹配到的组件
      // 遍历组件，执行asyncData方法，插入store参数
      Promise.all(matchesComponents.map(component => {
        if(component.asyncData) {
          return component.asyncData({ store });
        }
      })).then(() => {
        // 将当前vuex中的state挂载在上下文中的state
        context.state = store.state;
        resolve(app);
      })
    });
  });
}