let express = require('express');
let fs = require('fs');
let Vue = require('vue');
let VueServerRender = require('vue-server-renderer');
let app = express();

// 创建vue实例。这里不能用el，在服务端没有dom
let vm  = new Vue({
  template: '<div>hello world</div>'
});
// VueServerRender可以直接创建渲染函数，返回的就只这个render对象
let template = fs.readFileSync('./index.html', 'utf8');
let render = VueServerRender.createRenderer({
  template // 告诉渲染函数，用的是哪个模板
});
app.get('/', (req, res) => {
  // renderToString 方法可以将vm转换成html字符串
  render.renderToString(vm, function(err, html) {
    console.info(html);
    res.send(html); // 直接传入html
  });
});
app.listen(3000);