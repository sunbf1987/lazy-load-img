/**
 * Created by zhiqiang on 2015/10/14.
 * zhiqiang21@staff.sina.com.cn
 * 图片的懒加载
 **/
module.exports = function(node) {
    var that = {
    }
    ;
    var lazyNode = $('[node-type=imglazy]', node), mobileHeight, lazyOffSetHeight, tempHeight, currentNodeTop, imgObject, imgDataSrc, localUrl;
    localUrl=location.href;
    mobileHeight = document.body.clientHeight;

    lazyNode.each(function(i) {
        currentNodeTop = $(this).offset().top;
        if (currentNodeTop < mobileHeight) {
            replaceImgSrc($(this));
        }
    }
    );

    $(window).on('scroll', function() {
        lazyNode.each(function(i) {
            tempHeight = mobileHeight + $('body').scrollTop();
            currentNodeTop = $(this).offset().top;

            if (tempHeight > currentNodeTop - 100) {
                replaceImgSrc($(this));
            }
        }
        );
    }
    )

    /**
     * [replaceImgSrc 动态替换节点中的src]
     * @param  {[type]} tempObject [description]
     * @return {[type]}            [description]
     */
    function replaceImgSrc(tempObject) {
        var srcValue;

        $.each(tempObject, function(i, tempObject) {
            imgObject = $(tempObject).find('img[data-lazysrc]');

            imgObject.each(function(i) {
                imgDataSrc = $(this).attr('data-lazysrc');
                srcValue=$(this).attr('src');

                if (srcValue=='#') {
                    if (imgDataSrc) {
                        $(this).attr('src', imgDataSrc);
                        $(this).removeAttr('data-lazysrc');
                    }
                }
            }
            )
        }
        );
    }
    return that;
}