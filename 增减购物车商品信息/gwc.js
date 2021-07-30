//操作删除
function del(dom) {
    $(dom).parent().parent().remove();
}


//全选和全不选
function allBtn(dom) {
    var istrue = $(dom).prop('checked',false);
    if(istrue){
    $.each($("table tr td input"), function (index, value) {
        $(this).prop('checked', true);
    })
}else{
    $(this).prop('checked', false);
}

}
//批量删除
function delBatch() {
    $(".tr_0 input:checked").parent().parent().remove();
}
//雨伞的数量增加
function add(dom) {
    var txt = $(dom).prev();
    txt.val(parseInt(txt.val()) + 1);
    var sum =parseFloat(txt.val()*(32.9)).toLocaleString() ;
    $(dom).parent().parent().children().eq(2).html("￥"+sum+"元");
}
//雨伞的数量减少
function sub(dom) {
    var txt = $(dom).next().val();
    if (txt == 1) {
        return;
    }   
    $(dom).next().val(--txt);
    var sum =parseFloat(txt*(32.9)).toLocaleString();
     $(dom).parent().parent().children().eq(2).html("￥"+sum+"元");   
}

//手机的数量增加
function add1(dom) {
    var txt = $(dom).prev();
    txt.val(parseInt(txt.val()) + 1);
    var sum =parseFloat(txt.val()*(3339)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥"+sum+"元");
}
//手机的数量减少
function sub1(dom) {
    var txt = $(dom).next().val();
    if (txt == 1) {
        return;
    }   
    $(dom).next().val(--txt);
    var sum =parseFloat(txt*(3339)).toLocaleString();
     $(dom).parent().parent().children().eq(2).html("￥"+sum+"元");   
}
//添加
