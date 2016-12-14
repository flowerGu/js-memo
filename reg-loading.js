<script>

var tools = {
    _loading: null,
    validate: {
        tel: function (val) {//验证手机号
            return /\d{3}-\d{8}|\d{4}-\{7,8}$/.test(val);
        },
        bankCard: function (val) {//银行卡
            return /^\d{16,19}$/.test(val);
        },
        mobile: function (val) {//带分机的手机号
            return /^(0|86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(val);
        },
        IDCard: function (val) {//身份证
            return  /(^\d{18}$|^\d{17}(\d|X|x))$/.test(val) ;
        },
        email: function (val) {//电子邮箱
            return /^[a-z0-9][a-z0-9._-]*@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(val);
        },
        money: function (val) {//金钱
            return /^\d*(\.\d{0,2})$/.test(val);
        },
        name: function (val) {//中文名
            return /^[\u4e00-\u9fa5]{2,16}$|(^[\u4e00-\u9fa5]{2,16}·[\u4e00-\u9fa5]{2,16})$/.test(val);  
        }
    },
    trimAll: function (val) {//移除全部空格
        return val.replace(/\s+/g, "");
    },
    formatStr: function (str, separate, separateChar) {
        separate = separate ? separate : 4;
        separateChar = separateChar !== undefined ? separateChar : ' ';
        var reg = new RegExp('(\\d)(?=(\\d{' + separate + '})+(?!\\d))', 'g');
        return str.replace(/s+/g,'').replace(reg, '$1' + separateChar);
    },
    loading: function (action) {//loading动画
        tools._loading = $('.loading');
        switch (action) {
            case 'open':
            case 1:
                tools._loading.stop().fadeIn();
                break;
            case 'close':
            case 0:
                tools._loading.stop().removeClass('show').fadeOut();
                break;
        }
    }
};
$(function () {
    if ($('.loading').length === 0) {
        $(document.body).append($('<div class="loading"/>'));
    }
}); 
$(document).ajaxSend(function () {
    tools.startTime = +new Date();
    tools.loading(1);
})
$(document).ajaxComplete(function () {
    var now = +new Date();
    if (now - tools.startTime < 500) {
        setTimeout(function () {
            tools.loading(0);
        }, 500)
    }
    else {
        tools.loading(0);
    }
}) 
</script>
## /^([0-4]?[0-9]|50)$/.test(66)     --->false    0-50
##new Date(parseInt(20000000000) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
##var arr='123456778'
##arr.match(/2/g).length    =>统计字符2的个数