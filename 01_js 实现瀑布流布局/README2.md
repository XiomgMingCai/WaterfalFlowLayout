 ##onscroll事件实现瀑布流布局的图片加载功能
      【原理】
      当滚动滚动条时，判断是否要加载新的图片，通过一个函数，返回布尔值。
      需要加载的条件：
      页面最下面的元素box在视口中露出一半的高度时，开始加载。具体计算：(scrollTop+可视宽口高度)>(box.offsetTop+自身高度一半)时，加载（如图所示）。
      
      【知识点】
      ①scrollTop标准模式和混杂模式的兼容问题。
      标准模式--document.body.scrollTop
      混杂模式--document.documentElement.scrollTop;
      兼容的写法：var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
      ②当前浏览器的可视窗口的高度
      标准模式--document.body.clientHeight
      混杂模式--document.documentElement.clientHeight;
      ③三元运算符代替if..else(比较简便)
      ④数据加载：将来自后台的json数据渲染到前端
      创建元素,将数据填进去（这里是img的src）
      ⑤document.createElement创建元素
      parentObj.appendChild(obj);插入对象到尾部