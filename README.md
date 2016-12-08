##总结
***
瀑布流实现的三个方法：<br>
1: JS JavaScript原生方法<br>
2: JQ JQurey方法<br>
3: CSS CSS3的多栏布局<br>

***
[瀑布流js控制效果示例!](https://xiomgmingcai.github.io/WaterfalFlowLayout/)
###Javascript 实现瀑布流布局，
父级的应为relative
每个数据块上的 position 属性应定义为（absolute）
瀑布流的原理在于：利用绝对定位固定图片位置，图片等宽不等高。新东西：图片阴影（box-shadow）、圆角（border-radius）、用padding与margin的微妙区别。

###瀑布流布局----JavaScript实现瀑布流布局中图片排序<br>
   【原理】用一个数组存放每列的高度,当有新的图片加进来时,新图片总是加在列高最小的那一列,新图片加进来后,数组中相应的列的高度也相应增加.
   【要点】
   ####1. 求数组中最小值
   Math.min()只能求一组数据的最小值，通过传参数列表，而不是数组。
   借助apply()方法,
  *  将数组转换为参数列表，
  *  改变函数中this的指向(本节课用不到此功能)
   Math.min.apply(null,hArr);
 ####  2. 求最小值在数组中的索引封装函数getIndex
 ####  3. 图片定位(两种方法)
  position:absolute;
  top:minH+’px’;
   1) .left:oBoxW*index+’px’;
   2) .left:oBoxs[index].offsetLeft+’px’;
   #### 4.存放offsetHeight的数组值hArr要不断更改
   在每次加入新图片后，最小高度的box加上定位在其下的box的offsetHeight <br>即：hArr[index]+=oBoxs[i].offsetHeight;

 ![offsetLeft](http://www.cftea.com/c/2009/01/R3MW6VH4GID77IZV/REUW6Z0WU6ZHU5EK.png)
 >大块是小块的 offsetParent，红色是大块的边框，蓝色是小块的边框，蓝框外白色区域是大块的 padding 或/和 小块的 margin 或其他元素或其他原因造成的空白。offsetTop 是小块上边框上部与大块上边框下部的距离；offsetLeft 是小块左边框左部与大块左边框右部的距离。

      offsetWidth属性包括padding在内的宽度，而不是元素的width值
      offsetWidth = 内容宽度 + 内边距宽度×2 +边框宽度×2  【不包括外边距margin】

      要点：
      1.封装瀑布流的函数waterfall
      2.封装通过className获取元素集的函数
        （原因：因为ie8以下不兼容classname，所以要封装一个函数来获取，如果存在多个className的情况，那么if(oElements[i].className.split(" ").indexOf(className)!==-1){……}  进行判断就OK了。如图）

      3.计算一行显示的列数，父级宽度/box的offsetWidth，注意取整Math.floor；
      var cols = Math.floor(document.documentElement.clientWidth / oBoxWidth);

         （获取页面可见宽度可能会出现兼容问题，可用var h = window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth;   //Width,Height同理）

      4.obj.style.cssText ="",以字符串的形式设置多个样式
