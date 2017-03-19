$(document).ready(function() {
	$.ajax({
        type: "post",
        dataType: "json",
        contentType : "application/json",
        url: "/getListMyInfo",
        success: function(data) {
        	$(".container").append("<li>年龄："+data.age+"</li>");
        	$(".container").append("<li>姓名："+data.name+"</li>");
        }
    });
});