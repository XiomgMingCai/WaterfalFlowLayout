/**
 * Created by xiongmingcai on 16/12/6.
 */
window.onload = function () {
    waterfall('main', 'box')
};
/**
 *
 * @param parent 父元素
 * @param box  子元素
 */
function waterfall(parent, box) {
    //将main 下的所有class 为box 的元素取出来
    var oParent = document.getElementById(parent);
    var oBoxs = getByclass(oParent, box);
    //计算整个页面显示的列数(页面/box的宽度)
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
    //设置main 的 宽()
    oParent.style.cssText = 'width:' + oBoxW * cols + 'px; margin:0 auto';

    var hArr = [];//存放每列高度的数组
    for (var i = 0; i < oBoxs.length; i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);//offsetHeight(获取盒子高度)
        } else {
            var minh = Math.min.apply(null, hArr);
            var index = getMinhindex(hArr, minh);
            oBoxs[i].style.position ='absolute';
            oBoxs[i].style.top = minh +'px';
            // oBoxs[i].style.left= oBoxW * index + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //我们数组放每一列的高 而不是前六列的高
            hArr[index]  = hArr[index] + oBoxs[i].offsetHeight;
        } 
    }
    console.log(index)
    console.log(hArr)
}

/**
 * 根据 class 获取元素
 * @param parent 父元素
 * @param clsname
 */
function getByclass(parent, clsname) {
    var boxArr = [];//用来存储获取到的所有class为box 的元素
    var oElements = parent.getElementsByTagName('*');//获取父元素所有子元素
    for (var i = 0; i < oElements.length; i++) {
        if (oElements[i].className == clsname) { //当main下元素和 clsname 相等时
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}
//获得最小值的位置
function getMinhindex(arr, minh) {
    for (var i in arr) {
        if (arr[i] == minh) {
            return i;
        }
    }
}
