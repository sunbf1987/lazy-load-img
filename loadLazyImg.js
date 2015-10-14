/**
 * Created by zhiqiang on 2015/10/14.
 * zhiqiang21@staff.sina.com.cn
 * 图片的懒加载
 **/

module.exports = function(node) {
    var that = {};

    var lazyNode = $('[node-type=imglazy]', node),
        mobileHeight,
        lazyOffSetHeight,
        tempHeight,
        currentNodeTop,
        imgObject,
        imgDataSrc;

    mobileHeight = document.body.clientHeight;

    lazyNode.each(function(i) {
        currentNodeTop = $(this).offset().top;
        if (currentNodeTop < mobileHeight) {
            replaceImgSrc($(this));
        }
    });

    $(window).on('scroll', function() {
        lazyNode.each(function(i) {
            tempHeight = mobileHeight + $('body').scrollTop();
            currentNodeTop = $(this).offset().top
            if (tempHeight > currentNodeTop - 100) {
                replaceImgSrc($(this));
            }
        });
    })

    return that;
}

function replaceImgSrc(tempObject) {
    $.each(tempObject, function(i, tempObject) {
        imgObject = $(tempObject).find('img[data-lazysrc]');
        imgObject.each(function(i) {
            imgDataSrc = $(this).attr('data-lazysrc');
            // if (!$(this).attr('src')) {
            if (imgDataSrc) {
                $(this).attr('src', imgDataSrc);
            }
            // }
        })
    });
}