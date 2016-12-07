 ##onscroll事件实现瀑布流布局的图片加载功能
  ![offsetLeft](https://github.com/XiomgMingCai/WaterfalFlowLayout/blob/master/01_js%20%E5%AE%9E%E7%8E%B0%E7%80%91%E5%B8%83%E6%B5%81%E5%B8%83%E5%B1%80/images/Snip20161207_66.png?raw=true) <br>
      【原理】
      当滚动滚动条时，判断是否要加载新的图片，通过一个函数，返回布尔值。<br>
      需要加载的条件：<br>
      页面最下面的元素box在视口中露出一半的高度时，开始加载。具体计算：(scrollTop+可视宽口高度)>(box.offsetTop+自身高度一半)时，加载（如图所示）。<br>
      【知识点】<br>
      ①scrollTop标准模式和混杂模式的兼容问题。<br>
      标准模式--document.body.scrollTop<br>
      混杂模式--document.documentElement.scrollTop;<br>
      兼容的写法：var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;<br>
      ②当前浏览器的可视窗口的高度<br>
      标准模式--document.body.clientHeight<br>
      混杂模式--document.documentElement.clientHeight;<br>
      ③三元运算符代替if..else(比较简便)<br>
      ④数据加载：将来自后台的json数据渲染到前端<br>
      创建元素,将数据填进去（这里是img的src）<br>
      ⑤document.createElement创建元素<br>
      parentObj.appendChild(obj);插入对象到尾部<br>