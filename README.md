# lazy-load-img
“懒加载”图片

### 1.解决当src为空时
`location.href`获取的值为当前页面的域名

### 2.解决重复赋值的问题
当src的已经有值的时候不再降`data-lazysrc `的值赋值给src，阻止重复计算
