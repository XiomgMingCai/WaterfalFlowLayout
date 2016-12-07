/**
 * Created by xiongmingcai on 16/12/6.
 */
window.onload = function () {
    waterfall('main', 'box');
    var dataInt = {
        'data': [
            {'src': '85.jpg'},
            {'src': '86.jpg'},
            {'src': '87.jpg'},
            {'src': '88.jpg'},
            {'src': '89.jpg'},
            {'src': '90.jpg'},
            {'src': '91.jpg'},
            {'src': '92.jpg'},
            {'src': '93.jpg'},
            {'src': '94.jpg'},
            {'src': '97.jpg'},
            {'src': '96.jpg'},
            {'src': '95.jpg'},
            {'src': '29.jpg'},
            {'src': '30.jpg'},
            {'src': '31.jpg'},
            {'src': '32.jpg'},
            {'src': '33.jpg'},
            {'src': '34.jpg'},
            {'src': '35.jpg'},
            {'src': '36.jpg'},
            {'src': '37.jpg'},
            {'src': '38.jpg'},
            {'src': '39.jpg'},
            {'src': '40.jpg'},
            {'src': '41.jpg'},
            {'src': '42.jpg'},
            {'src': '43.jpg'},
            {'src': '44.jpg'},
            {'src': '45.jpg'},
            {'src': '46.jpg'},
            {'src': '47.jpg'},
            {'src': '48.jpg'},
            {'src': '49.jpg'},
            {'src': '50.jpg'},
            {'src': '51.jpg'},
            {'src': '52.jpg'},
            {'src': '53.jpg'},
            {'src': '54.jpg'},
            {'src': '55.jpg'},
            {'src': '56.jpg'},
            {'src': '57.jpg'},
            {'src': '58.jpg'},
            {'src': '59.jpg'},
            {'src': '60.jpg'},
            {'src': '61.jpg'},
            {'src': '62.jpg'},
            {'src': '63.jpg'},
            {'src': '64.jpg'},
            {'src': '65.jpg'},
            {'src': '66.jpg'},
            {'src': '67.jpg'},
            {'src': '68.jpg'},
            {'src': '69.jpg'},
            {'src': '70.jpg'},
            {'src': '71.jpg'},
            {'src': '72.jpg'},
            {'src': '73.jpg'},
            {'src': '74.jpg'},
            {'src': '75.jpg'},
            {'src': '76.jpg'},
            {'src': '77.jpg'},
            {'src': '78.jpg'},
            {'src': '79.jpg'},
            {'src': '80.jpg'},
            {'src': '81.jpg'},
            {'src': '82.jpg'},
            {'src': '83.jpg'},
            {'src': '84.jpg'},
            {'src': '15.jpg'},
            {'src': '16.jpg'},
            {'src': '17.jpg'},
            {'src': '18.jpg'},
            {'src': '19.jpg'},
            {'src': '20.jpg'},
            {'src': '21.jpg'},
            {'src': '22.jpg'},
            {'src': '23.jpg'},
            {'src': '24.jpg'},
            {'src': '25.jpg'},
            {'src': '26.jpg'},
            {'src': '27.jpg'},
            {'src': '28.jpg'}
        ]
    };
    window.onscroll = function () {
        if (checkScrollSlide()) {//具备加载条件
            var oParent = document.getElementById('main');
            //将数据块渲染到页面的尾部
            for (var i = 0; i < dataInt.data.length; i++) {
                var oBox = document.createElement('div');
                oBox.className = 'box';
                //添加在 父亲元素 的最后面
                oParent.appendChild(oBox);

                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);

                var oImg = document.createElement('img');
                oImg.src = 'images/' + dataInt.data[i].src
                oPic.appendChild(oImg);
            }
            waterfall('main', 'box')
        }
    }
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
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minh + 'px';
            // oBoxs[i].style.left= oBoxW * index + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //我们数组放每一列的高 而不是前六列的高
            hArr[index] = hArr[index] + oBoxs[i].offsetHeight;
        }
    }

}

/**
 * 根据 class下的 获取元素
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
//检测是否具备了加载了的条件
function checkScrollSlide() {
    var oParent = document.getElementById('main');
    //找main 下所有的box盒子
    var oBoxs = getByclass(oParent, 'box');
    // o(box.offsetTop+自身高度一半)时，加载
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop +
        Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);

    //  标准模式 || 混杂模式: (滚走的距离)
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 获取浏览器可视高度  标准模式 || 混杂模式
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    if (lastBoxH < (scrollTop + height)) {
        return true
    } else {
        return false;
    }
    // return (lastBoxH < (scrollTop + height)) ? true : false;
}