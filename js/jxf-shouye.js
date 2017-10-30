/*
* @Author: xuefeng
* @Date:   2017-10-24 15:44:16
* @Last Modified by:   xuefeng
* @Last Modified time: 2017-10-24 17:25:55
*/
$(function(){
	var hot=$('.hotsell');
	var tj=$('.tj');
    var op=$('.title>div');
    var hotbox=$('.hotbox');
    var tjbox=$('.tjbox');
    var cbox=$('.cbox');
    hot.on('click',function(){
    	op.removeClass('active');
        hot.addClass('active');
        cbox.hide()
        hotbox.show();
    });
    tj.on('click',function(){
    	op.removeClass('active');
    	tj.addClass('active');
    	cbox.hide();
    	tjbox.show();
    })
});